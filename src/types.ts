import { z } from "zod";

/**
 * Social-optimized frame types for 9:16 vertical video.
 *
 *   H* — hook (scroll-stopping openers)
 *   S* — substance (the actual content)
 *   C* — closer (CTA / outro)
 *   T* — title / cover
 */
export const FRAME_TYPES = [
  "T1-title", //       cover card / series branding
  "H1-hook", //        big bold hook text (stops the scroll)
  "H2-question", //    provocative question
  "S1-statement", //   single bold statement
  "S2-bullets", //     bullet list (2-4 items, big text)
  "S3-stat", //        big stat / number
  "S4-quote", //       quote card
  "S5-steps", //       numbered steps
  "S6-compare", //     two options (stacked vertical)
  "S7-tip", //         tip / callout card
  "S8-code", //        code snippet
  "C1-cta", //         call to action card
  "C2-outro", //       follow / subscribe outro
] as const;

export const FrameTypeSchema = z.enum(FRAME_TYPES);
export type FrameType = z.infer<typeof FrameTypeSchema>;

export const BackgroundSchema = z.enum(["gradient", "dark"]);
export type Background = z.infer<typeof BackgroundSchema>;

export const PlatformSchema = z.enum(["instagram", "tiktok", "youtube"]);

/** A column for the S6-compare frame. */
export const ColumnSchema = z.object({
  heading: z.string(),
  items: z.array(z.string()).default([]),
});

/** Declarative slide spec parsed from a SLIDE YAML block in script.md. */
export const SlideSpecSchema = z.object({
  frame: FrameTypeSchema,
  bg: BackgroundSchema.optional(),
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  body: z.array(z.string()).optional(),
  code: z.string().optional(),
  lang: z.string().optional(),
  stat: z.string().optional(),
  statLabel: z.string().optional(),
  tags: z.array(z.string()).optional(),
  columns: z.array(ColumnSchema).optional(),
  footer: z.string().optional(),
});
export type SlideSpec = z.infer<typeof SlideSpecSchema>;

/**
 * A segment is the atomic production unit — one beat of the social video.
 * Carries SAY (narration) and/or SLIDE (a rendered frame).
 */
export const SegmentSchema = z.object({
  id: z.string(),
  frameId: z.string(),
  label: z.string().optional(),
  say: z.string().optional(),
  slide: SlideSpecSchema.optional(),
  voice: z.string().optional(),
  silent: z.boolean().default(false),
  durationEstimate: z.number().positive(),
});
export type Segment = z.infer<typeof SegmentSchema>;

/** segments.json — the parsed manifest the orchestrator drives from. */
export const ManifestSchema = z.object({
  postId: z.string(),
  title: z.string(),
  platform: PlatformSchema.default("instagram"),
  voiceDefault: z.string().default("Ja'dan"),
  segments: z.array(SegmentSchema),
});
export type Manifest = z.infer<typeof ManifestSchema>;

/** timeline.json — the timing authority, written by the Voice Agent. */
export const TimelineEntrySchema = z.object({
  audioPath: z.string().optional(),
  duration: z.number().nonnegative(),
  source: z.enum(["tts", "estimate", "silent"]),
});
export const TimelineSchema = z.object({
  postId: z.string(),
  fps: z.number().int().positive().default(30),
  segments: z.record(z.string(), TimelineEntrySchema),
});
export type Timeline = z.infer<typeof TimelineSchema>;
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;

/** alignment.json — cumulative start/end timestamps derived from timeline.json. */
export const AlignmentEntrySchema = z.object({
  start: z.number().nonnegative(),
  end: z.number().nonnegative(),
  duration: z.number().nonnegative(),
});
export const AlignmentSchema = z.object({
  postId: z.string(),
  totalDuration: z.number().nonnegative(),
  segments: z.record(z.string(), AlignmentEntrySchema),
});
export type Alignment = z.infer<typeof AlignmentSchema>;
export type AlignmentEntry = z.infer<typeof AlignmentEntrySchema>;

// ── Derivations ─────────────────────────────────────────────────────────────

export function hasSay(seg: Segment): boolean {
  return !!seg.say && !seg.silent;
}
export function hasSlide(seg: Segment): boolean {
  return !!seg.slide;
}
