import path from "node:path";
import { promises as fs } from "node:fs";
import { VIDEO } from "../brand.js";
import { run } from "../util/exec.js";
import { log } from "../util/log.js";
import type { Workspace } from "../workspace.js";

export interface AssemblePlan {
  postId: string;
  clips: ClipEntry[];
  totalDuration: number;
}

export interface ClipEntry {
  segId: string;
  frameId: string;
  slidePng?: string;
  audioPath?: string;
  start: number;
  duration: number;
}

export interface AssembleResult {
  clipCount: number;
  output: string;
  totalDuration: number;
}

/**
 * Assemble a vertical social video via ffmpeg. Combines slide PNGs + audio
 * segments into a single 1080×1920 MP4 at 30fps.
 */
export async function assembleWithFfmpeg(plan: AssemblePlan, ws: Workspace): Promise<AssembleResult> {
  const output = path.join(ws.videosDir, `${ws.postId}-preview.mp4`);
  log.step("ffmpeg", `assembling ${plan.clips.length} clips → ${output}`);

  // Build a concat file with each segment as a still image + optional audio
  const concatDir = path.join(ws.root, ".ffmpeg-tmp");
  await fs.mkdir(concatDir, { recursive: true });

  const segmentFiles: string[] = [];

  for (let i = 0; i < plan.clips.length; i++) {
    const clip = plan.clips[i]!;
    const segFile = path.join(concatDir, `seg-${i.toString().padStart(3, "0")}.mp4`);

    if (clip.slidePng && clip.audioPath) {
      // Slide + audio
      await run("ffmpeg", [
        "-y",
        "-loop", "1", "-i", clip.slidePng,
        "-i", clip.audioPath,
        "-c:v", "libx264", "-tune", "stillimage",
        "-c:a", "aac", "-b:a", "192k",
        "-vf", `scale=${VIDEO.width}:${VIDEO.height}:force_original_aspect_ratio=decrease,pad=${VIDEO.width}:${VIDEO.height}:(ow-iw)/2:(oh-ih)/2:color=0a0808`,
        "-r", String(VIDEO.fps),
        "-pix_fmt", "yuv420p",
        "-shortest",
        segFile,
      ]);
    } else if (clip.slidePng) {
      // Slide only (silent segment) — all inputs before output options
      await run("ffmpeg", [
        "-y",
        "-loop", "1", "-i", clip.slidePng,
        "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
        "-t", String(clip.duration),
        "-c:v", "libx264", "-tune", "stillimage",
        "-vf", `scale=${VIDEO.width}:${VIDEO.height}:force_original_aspect_ratio=decrease,pad=${VIDEO.width}:${VIDEO.height}:(ow-iw)/2:(oh-ih)/2:color=0a0808`,
        "-r", String(VIDEO.fps),
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-shortest",
        segFile,
      ]);
    } else if (clip.audioPath) {
      // Audio only (black screen — fallback)
      await run("ffmpeg", [
        "-y",
        "-f", "lavfi", "-i", `color=c=0a0808:s=${VIDEO.width}x${VIDEO.height}:r=${VIDEO.fps}`,
        "-i", clip.audioPath,
        "-c:v", "libx264",
        "-c:a", "aac", "-b:a", "192k",
        "-pix_fmt", "yuv420p",
        "-shortest",
        segFile,
      ]);
    } else {
      // Silent hold (no slide, no audio)
      await run("ffmpeg", [
        "-y",
        "-f", "lavfi", "-i", `color=c=0a0808:s=${VIDEO.width}x${VIDEO.height}:r=${VIDEO.fps}`,
        "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
        "-t", String(clip.duration),
        "-c:v", "libx264",
        "-c:a", "aac",
        "-pix_fmt", "yuv420p",
        "-shortest",
        segFile,
      ]);
    }

    segmentFiles.push(segFile);
    log.info("ffmpeg", `seg ${clip.segId} → ${segFile}`);
  }

  // Concat all segments
  const concatList = path.join(concatDir, "concat.txt");
  const listContent = segmentFiles.map((f) => `file '${f}'`).join("\n");
  await fs.writeFile(concatList, listContent, "utf8");

  await run("ffmpeg", [
    "-y",
    "-f", "concat", "-safe", "0",
    "-i", concatList,
    "-c:v", "libx264", "-crf", "23",
    "-c:a", "aac", "-b:a", "192k",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    output,
  ]);

  // Clean up temp files
  await fs.rm(concatDir, { recursive: true, force: true }).catch(() => {});

  log.ok("ffmpeg", `assembled → ${output}`);
  return { clipCount: plan.clips.length, output, totalDuration: plan.totalDuration };
}
