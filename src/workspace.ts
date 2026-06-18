import { promises as fs } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { z } from "zod";
import {
  AlignmentSchema,
  ManifestSchema,
  TimelineSchema,
  type Alignment,
  type Manifest,
  type Timeline,
} from "./types.js";

/**
 * A Workspace is the shared working directory for one social post production.
 * Agents coordinate through files here — same pattern as vibedevview.
 */
export class Workspace {
  readonly postId: string;
  readonly root: string;

  constructor(postId: string, root: string) {
    this.postId = postId;
    this.root = root;
  }

  static productionsDir(): string {
    return process.env.HGDW_SOCIAL_DIR ?? path.join(homedir(), "hgdw-social");
  }

  static for(postId: string): Workspace {
    return new Workspace(postId, path.join(Workspace.productionsDir(), postId));
  }

  // ── paths ──────────────────────────────────────────────────────────────
  get scriptPath() {
    return path.join(this.root, "script.md");
  }
  get manifestPath() {
    return path.join(this.root, "segments.json");
  }
  get timelinePath() {
    return path.join(this.root, "timeline.json");
  }
  get alignmentPath() {
    return path.join(this.root, "alignment.json");
  }
  get slidesDir() {
    return path.join(this.root, "slides");
  }
  get deckPath() {
    return path.join(this.slidesDir, "deck.html");
  }
  get audioDir() {
    return path.join(this.root, "audio");
  }
  get videosDir() {
    return path.join(this.root, "videos");
  }
  get exportPath() {
    return path.join(this.videosDir, `${this.postId}.mp4`);
  }
  slidePath(frameId: string) {
    return path.join(this.slidesDir, `${frameId}.png`);
  }
  audioPath(segId: string) {
    return path.join(this.audioDir, `seg-${segId}.mp3`);
  }

  // ── lifecycle ────────────────────────────────────────────────────────────
  async ensure(): Promise<void> {
    await Promise.all(
      [this.root, this.slidesDir, this.audioDir, this.videosDir].map((d) =>
        fs.mkdir(d, { recursive: true }),
      ),
    );
  }

  async exists(p: string): Promise<boolean> {
    try {
      await fs.access(p);
      return true;
    } catch {
      return false;
    }
  }

  // ── typed JSON IO ─────────────────────────────────────────────────────────
  private async readJson<T>(p: string, schema: z.ZodType<T, z.ZodTypeDef, unknown>): Promise<T> {
    const raw = await fs.readFile(p, "utf8");
    return schema.parse(JSON.parse(raw));
  }
  private async writeJson(p: string, data: unknown): Promise<void> {
    await fs.mkdir(path.dirname(p), { recursive: true });
    await fs.writeFile(p, JSON.stringify(data, null, 2) + "\n", "utf8");
  }

  readManifest = () => this.readJson(this.manifestPath, ManifestSchema);
  writeManifest = (m: Manifest) => this.writeJson(this.manifestPath, m);

  readTimeline = () => this.readJson(this.timelinePath, TimelineSchema);
  writeTimeline = (t: Timeline) => this.writeJson(this.timelinePath, t);

  readAlignment = () => this.readJson(this.alignmentPath, AlignmentSchema);
  writeAlignment = (a: Alignment) => this.writeJson(this.alignmentPath, a);
}
