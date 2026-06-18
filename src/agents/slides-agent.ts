import { buildDeck, type DeckSlide } from "../slides/deck-template.js";
import { SlideRenderer, type RendererOptions } from "../slides/renderer.js";
import { verifySlide } from "../slides/verify.js";
import type { Manifest } from "../types.js";
import type { Workspace } from "../workspace.js";
import { log } from "../util/log.js";

export interface SlideResult {
  frameId: string;
  pngPath: string;
  verified: boolean;
}

export interface SlidesAgentOptions {
  renderer?: RendererOptions;
  only?: string[];
}

/**
 * Slides Agent — renders every slide spec into a branded 1080×1920 PNG.
 * Each slide is individually verified after rendering.
 */
export async function runSlidesAgent(
  ws: Workspace,
  manifest: Manifest,
  opts: SlidesAgentOptions = {},
): Promise<SlideResult[]> {
  const segs = opts.only
    ? manifest.segments.filter((s) => opts.only!.includes(s.id))
    : manifest.segments;

  const deckSlides: DeckSlide[] = segs
    .filter((s) => s.slide)
    .map((s) => ({ frameId: s.frameId, spec: s.slide! }));

  if (deckSlides.length === 0) {
    log.warn("slides", "no slides to render");
    return [];
  }

  log.step("slides", `rendering ${deckSlides.length} slide(s)`);
  const deckHtml = buildDeck(deckSlides);
  const renderer = new SlideRenderer(opts.renderer);
  await renderer.open();

  const results: SlideResult[] = [];
  try {
    await renderer.renderDeck(
      deckHtml,
      ws.deckPath,
      deckSlides,
      (frameId) => ws.slidePath(frameId),
      (frameId, pngPath) => {
        log.info("slides", `rendered ${frameId} → ${pngPath}`);
      },
    );

    for (const slide of deckSlides) {
      const pngPath = ws.slidePath(slide.frameId);
      const verified = await verifySlide(pngPath, slide.spec.frame);
      results.push({ frameId: slide.frameId, pngPath, verified });
      if (!verified) log.warn("slides", `${slide.frameId} failed verification`);
    }
  } finally {
    await renderer.close();
  }

  const passed = results.filter((r) => r.verified).length;
  log.ok("slides", `${passed}/${results.length} slides verified`);
  return results;
}
