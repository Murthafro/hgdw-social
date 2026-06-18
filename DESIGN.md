# HGDW Social Design System

The single source of truth for the visual system lives in code at
[`src/brand.ts`](src/brand.ts) (colors, fonts, video dimensions) and
[`src/types.ts`](src/types.ts) (the 13 frame types). This doc explains them.

## Wordmark

> **HOT GIRLS DONT WORK** — intentionally no apostrophe.

## Color palette

| Token | Hex | Use |
| --- | --- | --- |
| Yellow | `#FFD56B` | Gradient start, highlights |
| Coral | `#FF7E5F` | Gradient midpoint |
| Sunset | `#FF5263` | Gradient end, accents |
| Dark BG | `#0a0808` | Dark frame backgrounds |
| Text | `#f6efe6` | Primary text |
| Soft Text | `#cbb7a2` | Secondary / muted text |

**Brand gradient:** `linear-gradient(135deg, #FFD56B 0%, #FF7E5F 50%, #FF5263 100%)`
A **3px** gradient border frames every card.

## Typography

- **Sans:** Inter (weights 300-900)
- **Mono:** JetBrains Mono (400, 700)

## Video / render spec

| Property | Value |
| --- | --- |
| Output | 1080x1920, H.264 + AAC, MP4 |
| Frame rate | 30 fps |
| Deck render | 540x960 CSS @ 2x device scale -> 1080x1920 |
| Orientation | 9:16 vertical (Reels / TikTok / Shorts) |

## The 13 frame types

`T*` title/cover, `H*` hook, `S*` substance, `C*` closer.
Each frame is rendered by the Slides Agent and individually verified.

| Frame | Background | Purpose | Common fields |
| --- | --- | --- | --- |
| `T1-title` | gradient | Cover card / series branding | `title`, `subtitle`, `eyebrow` |
| `H1-hook` | gradient | Big bold hook (stops the scroll) | `title`, `subtitle` |
| `H2-question` | dark | Provocative question | `title`, `subtitle` |
| `S1-statement` | dark | Single bold statement (gradient text) | `title`, `subtitle` |
| `S2-bullets` | dark | Bullet list (2-4 items) | `title`, `body[]`, `eyebrow` |
| `S3-stat` | gradient | Big stat / number | `stat`, `statLabel` |
| `S4-quote` | dark | Quote card | `title`, `subtitle` |
| `S5-steps` | dark | Numbered steps | `title`, `body[]` |
| `S6-compare` | dark | Two options (stacked vertical) | `title`, `columns[]` |
| `S7-tip` | dark | Tip / callout card | `title`, `body[]` |
| `S8-code` | dark | Code snippet | `title`, `code`, `lang` |
| `C1-cta` | dark | Call to action | `title`, `subtitle`, `eyebrow` |
| `C2-outro` | gradient | Follow / subscribe outro | `title`, `subtitle` |
