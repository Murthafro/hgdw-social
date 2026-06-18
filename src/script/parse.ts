import { parse as parseYaml } from "yaml";
import { ManifestSchema, SlideSpecSchema, type Manifest, type Segment } from "../types.js";

/**
 * Parse a social script.md into a typed Manifest.
 *
 * Format:
 *   ---
 *   post: REEL-001
 *   title: Why AI Changes Everything
 *   voice: Courtney
 *   platform: instagram
 *   ---
 *
 *   ## 01 · Hook
 *   duration: 3
 *
 *   SAY:
 *   They told you AI was complicated. They lied.
 *
 *   SLIDE:
 *   ```yaml
 *   frame: H1-hook
 *   title: They lied to you about AI.
 *   ```
 */
export function parseScript(md: string): Manifest {
  const { frontmatter, body } = splitFrontmatter(md);
  const meta = parseYaml(frontmatter) as Record<string, unknown>;

  const postId = String(meta.post ?? meta.postId ?? meta.lesson ?? "UNTITLED");
  const title = String(meta.title ?? postId);
  const platform = String(meta.platform ?? "instagram");
  const voiceDefault = String(meta.voice ?? "Ja'dan");

  const segments = parseSegments(body);

  return ManifestSchema.parse({ postId, title, platform, voiceDefault, segments });
}

function splitFrontmatter(md: string): { frontmatter: string; body: string } {
  const match = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: "", body: md };
  return { frontmatter: match[1]!, body: match[2]! };
}

function parseSegments(body: string): Segment[] {
  const segBlocks = body.split(/^## /m).filter((s) => s.trim());
  const segments: Segment[] = [];

  for (const block of segBlocks) {
    const lines = block.split("\n");
    const header = lines[0]!.trim();
    const idMatch = header.match(/^(\d+)/);
    const id = idMatch ? idMatch[1]! : String(segments.length + 1).padStart(2, "0");
    const label = header.replace(/^\d+\s*[·\-]\s*/, "").trim() || undefined;

    let duration = 5;
    let say: string | undefined;
    let slide: Segment["slide"] | undefined;
    let silent = false;
    let voice: string | undefined;

    const rest = lines.slice(1).join("\n");

    // Parse duration
    const durMatch = rest.match(/^duration:\s*(\d+(?:\.\d+)?)/m);
    if (durMatch) duration = Number(durMatch[1]);

    // Parse silent
    if (/^silent:\s*true/m.test(rest)) silent = true;

    // Parse voice override
    const voiceMatch = rest.match(/^voice:\s*(.+)/m);
    if (voiceMatch) voice = voiceMatch[1]!.trim();

    // Parse SAY block
    const sayMatch = rest.match(/SAY:\r?\n([\s\S]*?)(?=\n(?:SLIDE:|$))/);
    if (sayMatch) say = sayMatch[1]!.trim();

    // Parse SLIDE block (YAML inside fenced code block)
    const slideMatch = rest.match(/SLIDE:\r?\n```yaml\r?\n([\s\S]*?)```/);
    if (slideMatch) {
      const raw = parseYaml(slideMatch[1]!) as Record<string, unknown>;
      slide = SlideSpecSchema.parse(raw);
    }

    const frameId = slide?.frame ? `${slide.frame.split("-")[0]}${id}` : `F${id}`;

    segments.push({
      id,
      frameId,
      label,
      say,
      slide,
      voice,
      silent,
      durationEstimate: duration,
    });
  }

  return segments;
}
