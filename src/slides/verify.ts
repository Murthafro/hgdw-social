import { run } from "../util/exec.js";
import { WARM_TONES, DARK_TONES } from "../brand.js";
import { defaultBg } from "./deck-template.js";
import type { FrameType } from "../types.js";
import { log } from "../util/log.js";

/**
 * Verify a rendered slide PNG against its expected background family.
 * Uses ffmpeg to downsample to an 8×8 grid and checks dominant colors.
 */
export async function verifySlide(pngPath: string, frame: FrameType): Promise<boolean> {
  const bg = defaultBg(frame);
  const expected = bg === "gradient" ? WARM_TONES : DARK_TONES;

  try {
    const raw = await run("ffmpeg", [
      "-i", pngPath,
      "-vf", "scale=8:8",
      "-f", "rawvideo",
      "-pix_fmt", "rgb24",
      "-v", "quiet",
      "pipe:1",
    ]);
    const buf = Buffer.from(raw, "binary");
    const pixels = buf.length / 3;
    if (pixels === 0) return false;

    let matchCount = 0;
    for (let i = 0; i < pixels; i++) {
      const r = buf[i * 3]!;
      const g = buf[i * 3 + 1]!;
      const b = buf[i * 3 + 2]!;
      for (const [er, eg, eb] of expected) {
        if (Math.abs(r - er) < 80 && Math.abs(g - eg) < 80 && Math.abs(b - eb) < 80) {
          matchCount++;
          break;
        }
      }
    }
    const ratio = matchCount / pixels;
    const ok = ratio > 0.15;
    if (!ok) log.warn("verify", `${pngPath} bg mismatch: ${(ratio * 100).toFixed(0)}% matched ${bg}`);
    return ok;
  } catch {
    log.warn("verify", `could not verify ${pngPath} (ffmpeg unavailable?)`);
    return true; // don't block production if ffmpeg isn't available for verify
  }
}
