import type { Alignment, AlignmentEntry, Manifest, Timeline } from "./types.js";

/**
 * Compute cumulative start/end timestamps from the timeline's per-segment
 * durations. The timeline (from the Voice Agent) is the timing authority.
 */
export function computeAlignment(manifest: Manifest, timeline: Timeline): Alignment {
  const segments: Record<string, AlignmentEntry> = {};
  let cursor = 0;

  for (const seg of manifest.segments) {
    const entry = timeline.segments[seg.id];
    const duration = entry?.duration ?? seg.durationEstimate;
    segments[seg.id] = { start: cursor, end: cursor + duration, duration };
    cursor += duration;
  }

  return { postId: manifest.postId, totalDuration: cursor, segments };
}

export function segmentAt(alignment: Alignment, seconds: number): string | undefined {
  for (const [id, entry] of Object.entries(alignment.segments)) {
    if (seconds >= entry.start && seconds < entry.end) return id;
  }
  return undefined;
}

export function formatTimestamp(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds - m * 60;
  return `${m}:${s.toFixed(1).padStart(4, "0")}`;
}
