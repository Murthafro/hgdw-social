import { BRAND, VIDEO } from "../brand.js";
import type { Background, FrameType, SlideSpec } from "../types.js";

export interface DeckSlide {
  frameId: string;
  spec: SlideSpec;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Default background for a frame type when the spec does not set one. */
export function defaultBg(frame: FrameType): Background {
  switch (frame) {
    case "T1-title":
    case "H1-hook":
    case "S3-stat":
    case "C2-outro":
      return "gradient";
    default:
      return "dark";
  }
}

function eyebrow(spec: SlideSpec): string {
  return spec.eyebrow ? `<div class="eyebrow">${esc(spec.eyebrow)}</div>` : "";
}

function wordmark(spec: SlideSpec): string {
  const text = spec.footer ?? BRAND.wordmark;
  return `<div class="wordmark">${esc(text)}</div>`;
}

function bullets(items: string[]): string {
  return `<ul class="bullets">${items.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;
}

/** Render the inner HTML for a single frame based on its type. */
function renderFrameBody(spec: SlideSpec): string {
  const title = spec.title ? esc(spec.title) : "";
  const subtitle = spec.subtitle ? `<p class="subtitle">${esc(spec.subtitle)}</p>` : "";

  switch (spec.frame) {
    case "T1-title":
      return `<div class="center">${eyebrow(spec)}<h1 class="hero">${title}</h1>${subtitle}</div>`;

    case "H1-hook":
      return `<div class="center"><h1 class="hook">${title}</h1>${subtitle}</div>`;

    case "H2-question":
      return `<div class="center"><h1 class="question">${title}</h1>${subtitle}</div>`;

    case "S1-statement":
      return `<div class="center"><h1 class="statement">${title}</h1>${subtitle}</div>`;

    case "S2-bullets":
      return `<div class="content-block">${eyebrow(spec)}<h2 class="frame-title">${title}</h2>${bullets(spec.body ?? [])}</div>`;

    case "S3-stat":
      return `<div class="center"><div class="stat">${esc(spec.stat ?? title)}</div><div class="stat-label">${esc(
        spec.statLabel ?? spec.subtitle ?? "",
      )}</div></div>`;

    case "S4-quote":
      return `<div class="center"><blockquote class="quote">${title || esc(spec.body?.[0] ?? "")}</blockquote>${
        spec.subtitle ? `<p class="attribution">— ${esc(spec.subtitle)}</p>` : ""
      }</div>`;

    case "S5-steps":
      return `<div class="content-block">${eyebrow(spec)}<h2 class="frame-title">${title}</h2><ol class="steps">${(spec.body ?? [])
        .map((b, i) => `<li><span class="step-n">${i + 1}</span><span>${esc(b)}</span></li>`)
        .join("")}</ol></div>`;

    case "S6-compare":
      return `<div class="content-block">${eyebrow(spec)}<h2 class="frame-title">${title}</h2><div class="compare-stack">${(spec.columns ?? [])
        .map(
          (col) =>
            `<div class="compare-card"><div class="compare-head">${esc(col.heading)}</div>${bullets(col.items)}</div>`,
        )
        .join("")}</div></div>`;

    case "S7-tip":
      return `<div class="content-block">${eyebrow(spec)}<h2 class="frame-title">${title}</h2><div class="callout">${(spec.body ?? [])
        .map((b) => `<p>${esc(b)}</p>`)
        .join("")}</div></div>`;

    case "S8-code":
      return `<div class="content-block">${eyebrow(spec)}<h2 class="frame-title">${title}</h2><pre class="code"><code>${esc(
        spec.code ?? "",
      )}</code></pre></div>`;

    case "C1-cta":
      return `<div class="center">${eyebrow(spec)}<h1 class="cta-title">${title}</h1>${subtitle}</div>`;

    case "C2-outro":
      return `<div class="center">${eyebrow(spec)}<h1 class="hero">${title || BRAND.wordmark}</h1>${subtitle}</div>`;

    default:
      return `<div class="center"><h1>${title}</h1></div>`;
  }
}

function renderSlide(slide: DeckSlide, index: number): string {
  const bg = slide.spec.bg ?? defaultBg(slide.spec.frame);
  return `<section class="frame frame--${bg}" data-index="${index}" data-frame="${slide.spec.frame}" data-frame-id="${esc(
    slide.frameId,
  )}">
    <div class="frame-inner">${renderFrameBody(slide.spec)}</div>
    ${wordmark(slide.spec)}
  </section>`;
}

/** Build a single self-contained HTML deck containing every slide. */
export function buildDeck(slides: DeckSlide[]): string {
  const css = deckCss();
  const body = slides.map((s, i) => renderSlide(s, i)).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=${VIDEO.cssWidth}, height=${VIDEO.cssHeight}" />
<title>HGDW Social Deck</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
<style>${css}</style>
</head>
<body>
<div id="deck">
${body}
</div>
<script>
  (function () {
    var frames = Array.prototype.slice.call(document.querySelectorAll('.frame'));
    function show(i) {
      var idx = Math.max(0, Math.min(frames.length - 1, i | 0));
      frames.forEach(function (f, k) { f.classList.toggle('is-active', k === idx); });
    }
    function fromHash() {
      var n = parseInt((location.hash || '').replace('#', ''), 10);
      return Number.isFinite(n) ? Math.max(0, Math.min(frames.length - 1, n)) : 0;
    }
    window.__show = show;
    window.__frameCount = frames.length;
    window.addEventListener('hashchange', function () { show(fromHash()); });
    show(fromHash());
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () {
      window.__deckReady = true;
    });
  })();
</script>
</body>
</html>`;
}

function deckCss(): string {
  const { colors, gradient, fonts, border } = BRAND;
  return `
  :root {
    --yellow: ${colors.yellow}; --coral: ${colors.coral}; --sunset: ${colors.sunset};
    --dark: ${colors.darkBg}; --text: ${colors.text}; --soft: ${colors.softText};
    --gradient: ${gradient};
    --sans: '${fonts.sans}', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    --mono: '${fonts.mono}', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${VIDEO.cssWidth}px; height: ${VIDEO.cssHeight}px; background: var(--dark); }
  #deck { width: ${VIDEO.cssWidth}px; height: ${VIDEO.cssHeight}px; }

  /* ── Frame shell (vertical 9:16) ────────────────────────────── */
  .frame {
    display: none; position: relative;
    width: ${VIDEO.cssWidth}px; height: ${VIDEO.cssHeight}px;
    overflow: hidden; font-family: var(--sans); color: var(--text);
    padding: 80px 40px 80px;
  }
  .frame.is-active { display: flex; flex-direction: column; }

  /* 3px gradient border */
  .frame::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    border: ${border} solid transparent;
    background: var(--gradient) border-box;
    -webkit-mask: linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
  }

  /* ── Background variants ────────────────────────────────────── */
  .frame--dark {
    background: radial-gradient(800px 600px at 50% 20%, rgba(255,126,95,0.08), transparent 60%), var(--dark);
  }
  .frame--gradient { background: var(--gradient); color: var(--dark); }

  /* ── Layout helpers ─────────────────────────────────────────── */
  .frame-inner {
    flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 0;
  }
  .center { text-align: center; align-items: center; }
  .frame .center { display: flex; flex-direction: column; justify-content: center; }
  .content-block { display: flex; flex-direction: column; justify-content: center; flex: 1; }

  /* ── Typography — scaled up for vertical / mobile ───────────── */
  .eyebrow {
    font-size: 14px; letter-spacing: 0.24em; text-transform: uppercase;
    font-weight: 700; opacity: 0.78; margin-bottom: 20px;
  }
  .frame--gradient .eyebrow { opacity: 0.7; }

  .hero {
    font-size: 52px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.05;
  }
  .hook {
    font-size: 56px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.05;
  }
  .question {
    font-size: 48px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.1;
    font-style: italic;
  }
  .statement {
    font-size: 44px; font-weight: 800; letter-spacing: -0.02em; line-height: 1.12;
    background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .subtitle {
    margin-top: 18px; font-size: 20px; color: var(--soft); font-weight: 400; line-height: 1.4;
  }
  .frame--gradient .subtitle { color: rgba(10,8,8,0.65); }

  .frame-title {
    font-size: 34px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 24px; line-height: 1.1;
  }

  /* ── Bullets ────────────────────────────────────────────────── */
  .bullets { list-style: none; display: flex; flex-direction: column; gap: 18px; }
  .bullets li {
    position: relative; padding-left: 28px; font-size: 22px; line-height: 1.35; color: var(--text);
  }
  .bullets li::before {
    content: ''; position: absolute; left: 0; top: 11px;
    width: 12px; height: 12px; border-radius: 3px; background: var(--gradient);
  }

  /* ── Steps ──────────────────────────────────────────────────── */
  .steps { list-style: none; counter-reset: s; display: flex; flex-direction: column; gap: 20px; }
  .steps li { display: flex; align-items: center; gap: 16px; font-size: 22px; }
  .step-n {
    display: inline-grid; place-items: center;
    width: 44px; height: 44px; border-radius: 12px;
    font-family: var(--mono); font-weight: 700;
    color: var(--dark); background: var(--gradient); flex: none;
  }

  /* ── Compare (stacked for vertical) ─────────────────────────── */
  .compare-stack { display: flex; flex-direction: column; gap: 20px; }
  .compare-card {
    border: 1px solid rgba(246,239,230,0.12); border-radius: 16px;
    padding: 22px; background: rgba(246,239,230,0.04);
  }
  .compare-head {
    font-size: 22px; font-weight: 800; margin-bottom: 14px; color: var(--yellow);
  }

  /* ── Quote ──────────────────────────────────────────────────── */
  .quote {
    font-size: 36px; font-weight: 700; line-height: 1.25; max-width: 460px;
  }
  .attribution { margin-top: 20px; color: var(--soft); font-size: 18px; }

  /* ── Stat ───────────────────────────────────────────────────── */
  .stat { font-size: 120px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
  .frame--gradient .stat { color: var(--dark); }
  .stat-label { margin-top: 16px; font-size: 22px; font-weight: 600; }
  .frame--gradient .stat-label { color: rgba(10,8,8,0.65); }

  /* ── Callout / tip ──────────────────────────────────────────── */
  .callout {
    border-left: 4px solid var(--coral); border-radius: 12px;
    padding: 22px 24px; background: rgba(255,82,99,0.10);
  }
  .callout p { font-size: 22px; line-height: 1.4; }
  .callout p + p { margin-top: 12px; }

  /* ── Code ───────────────────────────────────────────────────── */
  pre.code {
    font-family: var(--mono); font-size: 17px; line-height: 1.5;
    padding: 22px 24px; border-radius: 14px;
    background: #050404; border: 1px solid rgba(246,239,230,0.12);
    color: var(--text); white-space: pre-wrap; overflow: hidden;
  }

  /* ── CTA ────────────────────────────────────────────────────── */
  .cta-title {
    font-size: 44px; font-weight: 900; letter-spacing: -0.02em; line-height: 1.08;
    background: var(--gradient); -webkit-background-clip: text; background-clip: text; color: transparent;
  }

  /* ── Wordmark ──────────────────────────────────────────────── */
  .wordmark {
    position: absolute; left: 0; right: 0; bottom: 36px; text-align: center;
    font-size: 11px; letter-spacing: 0.3em;
    font-weight: 800; text-transform: uppercase; opacity: 0.55;
  }
  .frame--gradient .wordmark { color: var(--dark); opacity: 0.5; }
  `;
}
