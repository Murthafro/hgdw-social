import { promises as fs } from "node:fs";
import https from "node:https";
import http from "node:http";
import { VIDEO } from "../brand.js";
import type { Manifest, Timeline, TimelineEntry } from "../types.js";
import type { Workspace } from "../workspace.js";
import { log } from "../util/log.js";
import { hasSay } from "../types.js";

export interface VoiceAgentOptions {
  only?: string[];
}

/**
 * Voice Agent — generates voiceover audio for each SAY segment via ElevenLabs TTS.
 * Writes individual MP3 files and produces timeline.json with actual durations.
 */
export async function runVoiceAgent(
  ws: Workspace,
  manifest: Manifest,
  opts: VoiceAgentOptions = {},
): Promise<Timeline> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const segs = opts.only
    ? manifest.segments.filter((s) => opts.only!.includes(s.id))
    : manifest.segments;

  const existing = await loadExistingTimeline(ws);
  const segments: Record<string, TimelineEntry> = existing ? { ...existing.segments } : {};

  for (const seg of segs) {
    if (!hasSay(seg)) {
      segments[seg.id] = {
        duration: seg.durationEstimate,
        source: seg.silent ? "silent" : "estimate",
      };
      continue;
    }

    if (!apiKey) {
      log.warn("voice", `no ELEVENLABS_API_KEY — using estimate for seg ${seg.id}`);
      segments[seg.id] = { duration: seg.durationEstimate, source: "estimate" };
      continue;
    }

    const voiceName = seg.voice ?? manifest.voiceDefault;
    try {
      const voiceId = await resolveVoiceId(apiKey, voiceName);
      const audioPath = ws.audioPath(seg.id);
      const duration = await generateTts(apiKey, voiceId, seg.say!, audioPath);
      segments[seg.id] = { audioPath, duration, source: "tts" };
      log.info("voice", `seg ${seg.id}: ${duration.toFixed(1)}s → ${audioPath}`);
    } catch (err) {
      log.warn("voice", `seg ${seg.id} TTS failed: ${err instanceof Error ? err.message : String(err)}`);
      segments[seg.id] = { duration: seg.durationEstimate, source: "estimate" };
    }
  }

  // Fill in any segments not processed (when using --only)
  for (const seg of manifest.segments) {
    if (!segments[seg.id]) {
      segments[seg.id] = { duration: seg.durationEstimate, source: "estimate" };
    }
  }

  const timeline: Timeline = { postId: manifest.postId, fps: VIDEO.fps, segments };
  await ws.writeTimeline(timeline);
  log.ok("voice", `timeline written → ${ws.timelinePath}`);
  return timeline;
}

async function loadExistingTimeline(ws: Workspace): Promise<Timeline | undefined> {
  try {
    return await ws.readTimeline();
  } catch {
    return undefined;
  }
}

// ── ElevenLabs helpers ──────────────────────────────────────────────────────

const voiceCache = new Map<string, string>();

async function resolveVoiceId(apiKey: string, nameOrId: string): Promise<string> {
  if (/^[a-zA-Z0-9]{20,}$/.test(nameOrId)) return nameOrId;
  const cached = voiceCache.get(nameOrId.toLowerCase());
  if (cached) return cached;

  const data = await fetchJson("https://api.elevenlabs.io/v1/voices", apiKey);
  const voices = (data as { voices: Array<{ voice_id: string; name: string }> }).voices;
  const match = voices.find((v) => v.name.toLowerCase() === nameOrId.toLowerCase());
  if (!match) throw new Error(`voice "${nameOrId}" not found in ElevenLabs account`);
  voiceCache.set(nameOrId.toLowerCase(), match.voice_id);
  return match.voice_id;
}

async function generateTts(apiKey: string, voiceId: string, text: string, outPath: string): Promise<number> {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
  const body = JSON.stringify({
    text,
    model_id: "eleven_multilingual_v2",
    voice_settings: { stability: 0.5, similarity_boost: 0.75 },
  });

  const buf = await fetchBinary(url, apiKey, body);
  await fs.writeFile(outPath, buf);

  // Estimate duration from MP3 file size (128kbps ≈ 16KB/s)
  const estimatedDuration = buf.length / 16000;
  return Math.max(1, estimatedDuration);
}

function fetchJson(url: string, apiKey: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { "xi-api-key": apiKey } }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.push(c));
      res.on("end", () => {
        try {
          resolve(JSON.parse(Buffer.concat(chunks).toString()));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error("timeout")); });
  });
}

function fetchBinary(url: string, apiKey: string, body: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const opts: https.RequestOptions = {
      hostname: parsed.hostname,
      path: parsed.pathname,
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
    };
    const transport = parsed.protocol === "https:" ? https : http;
    const req = transport.request(opts, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        const chunks: Buffer[] = [];
        res.on("data", (c: Buffer) => chunks.push(c));
        res.on("end", () => reject(new Error(`ElevenLabs ${res.statusCode}: ${Buffer.concat(chunks).toString()}`)));
        return;
      }
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.on("error", reject);
    req.setTimeout(60000, () => { req.destroy(); reject(new Error("timeout")); });
    req.write(body);
    req.end();
  });
}
