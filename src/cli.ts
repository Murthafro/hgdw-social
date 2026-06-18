#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import { Command } from "commander";
import { produce } from "./orchestrator.js";
import { parseScript } from "./script/parse.js";
import { Workspace } from "./workspace.js";
import { formatTimestamp } from "./alignment.js";
import type { RendererOptions, RendererMode } from "./slides/renderer.js";
import { log } from "./util/log.js";

function rendererOpts(o: { renderer?: string; cdpUrl?: string }): RendererOptions {
  return { mode: o.renderer as RendererMode | undefined, cdpUrl: o.cdpUrl };
}

const program = new Command();
program
  .name("hgdw-social")
  .description("HGDW Social — turn a markdown script into a branded vertical video")
  .version("0.1.0");

program
  .command("produce")
  .description("Run the full production pipeline for a social post")
  .argument("<postId>", "post id, e.g. REEL-001")
  .option("--renderer <mode>", "slide renderer: launch | cdp")
  .option("--cdp-url <url>", "CDP endpoint when --renderer=cdp")
  .action(async (postId, o) => {
    const res = await produce(postId, { renderer: rendererOpts(o) });
    process.stdout.write(JSON.stringify(res, null, 2) + "\n");
  });

program
  .command("slides")
  .description("Render + verify slides only")
  .argument("<postId>")
  .option("--renderer <mode>")
  .option("--cdp-url <url>")
  .option("--only <ids>", "comma-separated segment ids")
  .action(async (postId, o) => {
    const { runSlidesAgent } = await import("./agents/slides-agent.js");
    const ws = Workspace.for(postId);
    const manifest = await ws.readManifest();
    const res = await runSlidesAgent(ws, manifest, {
      only: o.only ? String(o.only).split(",") : undefined,
      renderer: rendererOpts(o),
    });
    process.stdout.write(JSON.stringify(res, null, 2) + "\n");
  });

program
  .command("voice")
  .description("Generate voiceover + timeline.json only")
  .argument("<postId>")
  .option("--only <ids>", "comma-separated segment ids")
  .action(async (postId, o) => {
    const { runVoiceAgent } = await import("./agents/voice-agent.js");
    const ws = Workspace.for(postId);
    const manifest = await ws.readManifest();
    const t = await runVoiceAgent(ws, manifest, { only: o.only ? String(o.only).split(",") : undefined });
    process.stdout.write(JSON.stringify(t, null, 2) + "\n");
  });

program
  .command("status")
  .description("Show the production timeline (segments, timings)")
  .argument("<postId>")
  .action(async (postId) => {
    const ws = Workspace.for(postId);
    const manifest = await ws.readManifest();
    const alignment = (await ws.exists(ws.alignmentPath)) ? await ws.readAlignment() : undefined;
    for (const seg of manifest.segments) {
      const a = alignment?.segments[seg.id];
      const stamp = a ? `${formatTimestamp(a.start)}–${formatTimestamp(a.end)}` : "—";
      const kinds = [seg.say ? "SAY" : "", seg.slide ? "SLIDE" : ""].filter(Boolean).join("+");
      process.stdout.write(`${seg.id.padEnd(4)} ${stamp.padEnd(13)} ${kinds.padEnd(12)} ${seg.label ?? ""}\n`);
    }
    if (alignment) process.stdout.write(`\ntotal: ${formatTimestamp(alignment.totalDuration)}\n`);
  });

program
  .command("init")
  .description("Create a production folder seeded with the example script")
  .argument("<postId>")
  .action(async (postId) => {
    const ws = Workspace.for(postId);
    await ws.ensure();
    if (await ws.exists(ws.scriptPath)) {
      log.warn("cli", `script.md already exists at ${ws.scriptPath}`);
      return;
    }
    const example = path.resolve(new URL("../examples/REEL-001/script.md", import.meta.url).pathname);
    const md = await fs.readFile(example, "utf8").catch(() => "");
    if (md) {
      await fs.writeFile(ws.scriptPath, md, "utf8");
      log.ok("cli", `seeded ${ws.scriptPath} from example — edit it, then \`hgdw-social produce ${postId}\``);
    } else {
      log.warn("cli", "example script not found; create script.md manually");
    }
  });

program
  .command("doctor")
  .description("Preflight: check Node, ffmpeg, Chromium")
  .action(async () => {
    const checks: Array<{ name: string; ok: boolean; detail: string; fix?: string }> = [];

    // Node
    const nodeVer = process.version;
    const nodeMajor = parseInt(nodeVer.slice(1), 10);
    checks.push({
      name: "node",
      ok: nodeMajor >= 20,
      detail: nodeVer,
      fix: nodeMajor < 20 ? "install Node.js 20+" : undefined,
    });

    // ffmpeg
    try {
      const { run } = await import("./util/exec.js");
      const out = await run("ffmpeg", ["-version"]);
      const ver = out.split("\n")[0] ?? "unknown";
      checks.push({ name: "ffmpeg", ok: true, detail: ver.slice(0, 60) });
    } catch {
      checks.push({ name: "ffmpeg", ok: false, detail: "not found", fix: "brew install ffmpeg (or apt install ffmpeg)" });
    }

    // Playwright Chromium
    try {
      const { chromium } = await import("playwright");
      const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
      await browser.close();
      checks.push({ name: "chromium", ok: true, detail: "playwright launch ok" });
    } catch {
      checks.push({ name: "chromium", ok: false, detail: "cannot launch", fix: "npx playwright install chromium" });
    }

    // ElevenLabs key
    const key = process.env.ELEVENLABS_API_KEY;
    checks.push({
      name: "elevenlabs-key",
      ok: !!key && key.length > 5,
      detail: key ? `set (${key.slice(0, 6)}…)` : "not set",
      fix: !key ? "export ELEVENLABS_API_KEY=sk_..." : undefined,
    });

    const ok = checks.every((c) => c.ok);
    for (const c of checks) {
      const mark = c.ok ? "ok  " : "FAIL";
      process.stdout.write(`[${mark}] ${c.name.padEnd(22)} ${c.detail}\n`);
      if (!c.ok && c.fix) process.stdout.write(`        -> ${c.fix}\n`);
    }
    process.stdout.write(ok ? "\nAll checks passed.\n" : "\nSome checks failed — see fixes above.\n");
    process.exitCode = ok ? 0 : 1;
  });

program.parseAsync(process.argv).catch((err) => {
  log.error("cli", err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
});
