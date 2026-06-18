import { promises as fs } from "node:fs";
import { computeAlignment } from "./alignment.js";
import { parseScript } from "./script/parse.js";
import { runSlidesAgent, type SlideResult } from "./agents/slides-agent.js";
import { runVoiceAgent } from "./agents/voice-agent.js";
import { assembleWithFfmpeg, type AssemblePlan, type AssembleResult, type ClipEntry } from "./timeline/ffmpeg-backend.js";
import type { RendererOptions } from "./slides/renderer.js";
import { log } from "./util/log.js";
import { Workspace } from "./workspace.js";
import type { Alignment, Manifest, Timeline } from "./types.js";

export interface ProduceOptions {
  renderer?: RendererOptions;
}

export interface ProductionResult {
  postId: string;
  status: "assembled";
  segments: number;
  totalDuration: number;
  slides?: SlideResult[];
  assemble?: AssembleResult;
  message: string;
}

/**
 * Build the assembly plan from the manifest, alignment, and timeline.
 */
function buildPlan(manifest: Manifest, alignment: Alignment, timeline: Timeline, ws: Workspace): AssemblePlan {
  const clips: ClipEntry[] = [];

  for (const seg of manifest.segments) {
    const a = alignment.segments[seg.id];
    const t = timeline.segments[seg.id];
    if (!a) continue;

    const clip: ClipEntry = {
      segId: seg.id,
      frameId: seg.frameId,
      start: a.start,
      duration: a.duration,
    };

    if (seg.slide) {
      clip.slidePng = ws.slidePath(seg.frameId);
    }
    if (t?.audioPath) {
      clip.audioPath = t.audioPath;
    }

    clips.push(clip);
  }

  return { postId: manifest.postId, clips, totalDuration: alignment.totalDuration };
}

/**
 * The orchestrator. Runs the full pipeline:
 *   1. Parse script → manifest
 *   2. Slides + Voice in parallel
 *   3. Compute alignment
 *   4. Assemble via ffmpeg → preview MP4
 */
export async function produce(postId: string, opts: ProduceOptions = {}): Promise<ProductionResult> {
  const ws = Workspace.for(postId);
  await ws.ensure();
  log.step("orchestrator", `producing "${postId}" → ${ws.root}`);

  // 1. Parse script → manifest
  const scriptMd = await fs.readFile(ws.scriptPath, "utf8");
  const manifest = parseScript(scriptMd);
  await ws.writeManifest(manifest);
  log.info("orchestrator", `${manifest.segments.length} segments, platform: ${manifest.platform}`);

  // 2. Slides + Voice in parallel
  const [slides, timeline] = await Promise.all([
    runSlidesAgent(ws, manifest, { renderer: opts.renderer }),
    runVoiceAgent(ws, manifest),
  ]);

  // 3. Alignment
  const alignment = computeAlignment(manifest, timeline);
  await ws.writeAlignment(alignment);

  // 4. Assemble
  const plan = buildPlan(manifest, alignment, timeline, ws);
  const assemble = await assembleWithFfmpeg(plan, ws);

  const message =
    `Social video assembled for "${postId}" (${manifest.segments.length} segments, ` +
    `${alignment.totalDuration.toFixed(1)}s) → ${assemble.output}`;
  log.ok("orchestrator", message);

  return {
    postId,
    status: "assembled",
    segments: manifest.segments.length,
    totalDuration: alignment.totalDuration,
    slides,
    assemble,
    message,
  };
}
