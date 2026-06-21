# HGDW Content Chief — Marketing & Content Intelligence Agent for Zo Computer

The HGDW Content Chief is a dedicated marketing AI agent that runs on [Zo Computer](https://zo.computer). She runs the entire HOT GIRLS DONT WORK content engine — from daily AI research to weekly newsletter production, with a learning loop that gets smarter every week.

> Separate from your main Chief of Staff. This Zo instance ONLY thinks about content, audience, and growth.

## Install on Zo Computer

### One-Line Install

In Zo chat, say:

```
clone https://github.com/Murthafro/hgdw-social.git into ~/repos and then run the bootstrap-hgdw skill
```

This will:
1. Clone the repo to your Zo server
2. Install the Content Chief persona (marketing-focused voice, operating style)
3. Install behavioral rules (brand guidelines, source-then-translate, quality gates)
4. Set your bio (business context, preferences)
5. Create 7 scheduled automations (research, trends, blog, email, social, repurpose, calibration)
6. Copy all 22 skills to your Skills directory
7. Scaffold the intelligence layer (trend index, calibration log, performance tracker)
8. Copy context files (brand voice, audience profile, manifesto, watchlist, hook library, copywriting playbook)

### Manual Install

1. Clone: `git clone https://github.com/Murthafro/hgdw-social.git ~/repos/hgdw-social`
2. Copy skills: `cp -r ~/repos/hgdw-social/zo/Skills/* /home/workspace/Skills/`
3. In Zo chat: "Run the bootstrap-hgdw skill"

## What's Included

### Install Files (in `zo/install/`)
| File | Zo Primitive | What It Configures |
|------|-------------|-------------------|
| `persona.md` | Persona | Content Chief personality, marketing focus, reporting style |
| `bio.md` | Bio | Courtney's context, business details, content engine context |
| `rules.md` | Rules | Brand guidelines, source-then-translate, quality gates, security |
| `agents.md` | Automations | 7 scheduled automations for the content engine cycle |

### Content Engine Skills (8)
| Skill | What It Does |
|-------|-------------|
| **bootstrap-hgdw** | Idempotent system installer |
| **hgdw-daily-research** | Morning AI sweep (labs, voices, publications, tools) |
| **hgdw-trend-synthesizer** | Cross-day trend detection + content opportunity scoring |
| **hgdw-weekly-email** | Weekly newsletter with A/B subject lines |
| **hgdw-blog-post** | Blog post from research + trends |
| **hgdw-social-posts** | Multi-platform posts with hook formulas |
| **hgdw-content-repurposer** | One piece → 7+ formats |
| **hgdw-copy-editor** | 5-sweep quality gate |
| **hgdw-weekly-calibration** | Sunday learning loop |

### Operational Skills (ported from Barbie — 14)
| Skill | What It Does | Credentials Needed? |
|-------|-------------|-------------------|
| **content-machine** | Full content pipeline with virality scoring | None |
| **content-dashboard** | Live 50-day series tracker | None |
| **daily-instagram-script** | Daily Instagram script generator | None |
| **revenue-metrics** | Stripe revenue tracking | Stripe API key |
| **daily-review** | Nightly review + planning | Stripe API key |
| **site-health** | Production site monitoring | None |
| **research** | Web + X/Twitter search | None (Zo built-in) |
| **x-posting** | X/Twitter posting | X integration or API key |
| **coding-agent-loops** | Persistent coding agents | Claude Code or Codex |
| **elevenlabs-calls** | AI phone calls | ElevenLabs + Twilio keys |
| **talking-head** | AI avatar videos | ElevenLabs + Fal keys |
| **blog-image-generator** | Blog hero images | Gemini API key or Zo built-in |
| **instagram-slides** | Branded carousels | Fal API key |
| **email-fortress** | Email security policy | None |

### Context Files (in `context/`)
Brand voice guide, audience profile, business overview, hot girl manifesto, influencer watchlist (6 tiers), hook library (12 formulas), copywriting playbook (5-sweep checklist + frameworks).

## How the Content Chief Works

**Engine cycle:**
- **7am weekdays:** AI research sweep — labs, frontier voices, publications, women AI leaders, tools
- **8:30am weekdays:** Trend synthesis — cross-reference signals, spot patterns, score opportunities
- **Tuesday:** Draft blog post + social posts for the week
- **Wednesday:** Draft weekly email newsletter
- **Thursday:** Repurpose week's content across platforms
- **Sunday 6pm:** Calibration — review performance, adjust source rankings, update strategy

**Intelligence layer:**
- **Trend Index** — topics tracked across days with trajectory (rising/fading/spike/new)
- **Calibration Log** — weekly record of what worked, source adjustments, content pivots
- **Performance Tracker** — opens, clicks, saves, shares feed the learning loop

**Content pipeline:**
```
Tier 1 (tech voices) + Tier 4 (labs) + Tier 5 (publications) = RAW SIGNAL
→ HGDW Translation ("what does this mean for YOUR time/income/freedom?")
→ Tier 2-3 (women AI leaders/creators) = VALIDATION
→ HGDW Content (email, blog, social)
```

## After Installation

1. **Connect Stripe** — Settings > Integrations > Stripe (required for revenue tracking)
2. **Connect Gmail** — Settings > Integrations > Gmail (optional, for email triage)
3. **Fill in blog API config** — `/home/workspace/HGDW/config/blog-api.md`
4. **Start talking to the Content Chief** — she'll verify setup and run the first research sweep

## Recommended Model

| Model | Best For | Cost |
|-------|----------|------|
| Claude Sonnet | Daily operations (recommended default) | $$ |
| Claude Opus | Complex reasoning, strategy | $$$ |
| Claude Haiku | Quick extractions, sub-tasks | $ |

Built for [Zo Computer](https://zo.computer) by HOT GIRLS DONT WORK.
