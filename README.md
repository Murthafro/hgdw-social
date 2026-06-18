# hgdw-social — Vertical Video Engine for Social Media

**Turn a markdown script into a branded 9:16 vertical video — ready for Instagram Reels,
TikTok, and YouTube Shorts.** Write (or have AI write) a simple markdown file describing
what each beat of the video should say and show. The engine renders branded slides,
generates voiceover via ElevenLabs, and assembles a finished MP4.

Same architecture as [vibedevview](https://github.com/vibedevlabs/vibedevview), adapted
for short-form vertical social content.

---

## The pipeline

```
  ┌──────────────┐     ┌───────────────────────────────┐     ┌──────────────────────┐
  │  1. SCRIPT   │     │  2. PRODUCE (this tool)        │     │  3. VERTICAL MP4     │
  │              │     │                                │     │                      │
  │  one .md     │ ──▶ │  • renders branded slides      │ ──▶ │  1080×1920 (9:16)    │
  │  file you    │     │  • generates voiceover          │     │  30 fps, H.264       │
  │  write       │     │  • assembles via ffmpeg         │     │  ready to upload      │
  └──────────────┘     └───────────────────────────────┘     └──────────────────────┘
```

## Quick start

```bash
# 1. Clone and build
git clone https://github.com/Murthafro/hgdw-social.git
cd hgdw-social
npm install && npm run build
npx playwright install chromium

# 2. Set your ElevenLabs key (for voiceover)
export ELEVENLABS_API_KEY=sk_...

# 3. Check everything works
npx hgdw-social doctor

# 4. Produce from the example script
cp -r examples/REEL-001 ~/hgdw-social/REEL-001
npx hgdw-social produce REEL-001
```

The output lands at `~/hgdw-social/REEL-001/videos/REEL-001-preview.mp4`.

## Write a script

A post is one markdown file called `script.md` with a header and a list of segments.
Each segment has what to **SAY** (narration) and what to **SLIDE** (the on-screen card).

```markdown
---
post: REEL-001
title: AI Writes Code Now
voice: Ja'dan
platform: instagram
---

## 01 · Hook
duration: 3

SAY:
They told you AI was complicated. They lied.

SLIDE:
\`\`\`yaml
frame: H1-hook
title: They lied to you about AI.
\`\`\`

## 02 · The shift
duration: 5

SAY:
AI writes code now. That means any woman with a vision can build.

SLIDE:
\`\`\`yaml
frame: S1-statement
title: AI writes code. You have a vision. Do the math.
\`\`\`
```

## The 13 frame types

| Frame | Style | Purpose |
|-------|-------|---------|
| `T1-title` | gradient | Cover card |
| `H1-hook` | gradient | Big bold hook text |
| `H2-question` | dark | Provocative question |
| `S1-statement` | dark | Bold statement (gradient text) |
| `S2-bullets` | dark | Bullet list |
| `S3-stat` | gradient | Big number |
| `S4-quote` | dark | Quote card |
| `S5-steps` | dark | Numbered steps |
| `S6-compare` | dark | Two options stacked |
| `S7-tip` | dark | Tip / callout |
| `S8-code` | dark | Code snippet |
| `C1-cta` | dark | Call to action |
| `C2-outro` | gradient | Follow / outro |

## Commands

| Command | What it does |
|---------|-------------|
| `hgdw-social produce <id>` | Full pipeline: slides + voice + assemble |
| `hgdw-social slides <id>` | Render slides only |
| `hgdw-social voice <id>` | Generate voiceover only |
| `hgdw-social status <id>` | Show timeline with timestamps |
| `hgdw-social init <id>` | Create folder from example |
| `hgdw-social doctor` | Check Node, ffmpeg, Chromium, API key |

## Configuration

| Env var | What | Default |
|---------|------|---------|
| `ELEVENLABS_API_KEY` | ElevenLabs API key | (required for voice) |
| `HGDW_SOCIAL_DIR` | Productions directory | `~/hgdw-social` |
| `HGDW_RENDERER` | `launch` or `cdp` | `launch` |
| `HGDW_CDP_URL` | Chrome CDP endpoint | `http://localhost:29229` |

## Platform targets

Set `platform:` in the script frontmatter:
- **instagram** — Reels (up to 90s)
- **tiktok** — TikTok (up to 3 min)
- **youtube** — Shorts (up to 60s)

## Brand

HGDW warm gradient palette (yellow → coral → sunset), Inter + JetBrains Mono fonts,
3px gradient border on every card, `#0a0808` dark background.
See [DESIGN.md](DESIGN.md) for the full spec.

## Development

```bash
npm run dev -- produce REEL-001    # run from source via tsx
npm run typecheck                  # type-check without emitting
npm test                           # run tests
```
