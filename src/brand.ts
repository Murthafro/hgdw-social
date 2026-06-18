/**
 * HGDW Social brand constants. Adapted from vibedevview for vertical (9:16)
 * social media video. Same color palette, fonts, and gradient — new dimensions.
 *
 * Wordmark is intentionally "HOT GIRLS DONT WORK" — no apostrophe.
 */

export const BRAND = {
  wordmark: "HOT GIRLS DONT WORK",
  colors: {
    yellow: "#FFD56B",
    coral: "#FF7E5F",
    sunset: "#FF5263",
    darkBg: "#0a0808",
    text: "#f6efe6",
    softText: "#cbb7a2",
  },
  gradient: "linear-gradient(135deg, #FFD56B 0%, #FF7E5F 50%, #FF5263 100%)",
  fonts: {
    sans: "Inter",
    mono: "JetBrains Mono",
  },
  border: "3px",
} as const;

/** Warm brand tones used by the verifier when bg === "gradient". */
export const WARM_TONES: ReadonlyArray<readonly [number, number, number]> = [
  [255, 213, 107], // yellow
  [255, 126, 95], // coral
  [255, 82, 99], // sunset
];

/** Dark tones used by the verifier when bg === "dark". */
export const DARK_TONES: ReadonlyArray<readonly [number, number, number]> = [
  [10, 8, 8], // darkBg
];

/**
 * Video spec — 9:16 vertical for Reels / TikTok / Shorts.
 * The deck renders at half size with a 2x device scale factor → 1080×1920.
 */
export const VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
  cssWidth: 540,
  cssHeight: 960,
  deviceScaleFactor: 2,
} as const;

/** Platform presets for minor per-platform tweaks. */
export const PLATFORMS = {
  instagram: { maxDuration: 90, label: "Reel" },
  tiktok: { maxDuration: 180, label: "TikTok" },
  youtube: { maxDuration: 60, label: "Short" },
} as const;

export type Platform = keyof typeof PLATFORMS;
