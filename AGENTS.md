# AGENTS.md — HGDW Content Chief on Zo Computer

This is the HGDW Content Chief's working directory. She operates from here on Zo Computer.

## Quick Install

In Zo chat:
```
clone https://github.com/Murthafro/hgdw-social.git into ~/repos and then run the bootstrap-hgdw skill
```

Or manually: copy `zo/Skills/*` to `/home/workspace/Skills/`, then run the bootstrap skill.

## Architecture

All configuration lives in `zo/`:

| File | Purpose |
|------|---------|
| `zo/install/persona.md` | Content Chief personality, voice, operating style → installed as Zo Persona |
| `zo/install/bio.md` | Courtney's context, business details → installed as Zo Bio |
| `zo/install/rules.md` | Behavioral constraints → installed as Zo Rules |
| `zo/install/agents.md` | Scheduled automations (7 total) → installed as Zo Automations |
| `zo/forbidden.md` | Actions requiring explicit approval |
| `zo/Skills/` | All skills (SKILL.md + scripts) → copied to `/home/workspace/Skills/` |

## Skills (22 included)

### Content Engine (8 HGDW-specific)

| Skill | What It Does | Credentials Needed? |
|-------|-------------|-------------------|
| **bootstrap-hgdw** | Idempotent installer for the whole system | None |
| **hgdw-daily-research** | Morning AI research sweep (labs, voices, publications, tools) | None |
| **hgdw-trend-synthesizer** | Cross-day trend detection and content opportunity scoring | None |
| **hgdw-weekly-email** | Weekly newsletter draft with A/B subject lines | None |
| **hgdw-blog-post** | Blog post from research + trend data | None |
| **hgdw-social-posts** | Multi-platform posts (Instagram, TikTok, LinkedIn, X) | None |
| **hgdw-content-repurposer** | One piece → 7+ formats across platforms | None |
| **hgdw-copy-editor** | 5-sweep quality gate (structure, voice, specificity, proof, platform) | None |
| **hgdw-weekly-calibration** | Sunday learning loop — adjusts sources, priorities, strategy | None |

### Ported from Barbie (14 operational skills)

| Skill | What It Does | Credentials Needed? |
|-------|-------------|-------------------|
| **content-machine** | Full content production pipeline (Instagram, TikTok, X) with virality scoring | None |
| **content-dashboard** | Live tracker for the 50-day Instagram series | None |
| **daily-instagram-script** | Daily Instagram script for the Golden Age series | None |
| **revenue-metrics** | Stripe revenue tracking across accounts | Stripe API key |
| **daily-review** | Nightly revenue review + next-day planning | Stripe API key |
| **site-health** | Production site availability monitoring | None |
| **research** | Web + X/Twitter search | None (uses Zo built-in) |
| **x-posting** | X/Twitter posting and engagement | X integration or API key |
| **coding-agent-loops** | Persistent coding agent sessions | Claude Code or Codex |
| **elevenlabs-calls** | AI phone calls via ElevenLabs + Twilio | ElevenLabs + Twilio keys |
| **talking-head** | AI avatar video generation | ElevenLabs + Fal API keys |
| **blog-image-generator** | Hero images via Gemini | Gemini API key or Zo built-in |
| **instagram-slides** | Branded Instagram carousel creator | Fal API key |
| **email-fortress** | Email security and triage rules | None |

## Intelligence Layer

The content engine learns and adapts through three files:

| File | Purpose | Updated By |
|------|---------|------------|
| `/home/workspace/HGDW/Intelligence/trend-index.md` | Tracks topics across days with trajectory (rising/fading/spike) | Daily research + trend synthesizer |
| `/home/workspace/HGDW/Intelligence/calibration-log.md` | Records what worked/didn't, source adjustments | Weekly calibration |
| `/home/workspace/HGDW/Intelligence/content-performance.md` | Logs opens/clicks/saves/shares after publishing | Manual (Courtney) |

## Content Pipeline

```
TIER 1 (Technical Voices) + TIER 4 (Labs) + TIER 5 (Publications)
    = RAW SIGNAL
         |
    HGDW TRANSLATION LAYER
    "What does this mean for YOUR time / income / freedom?"
         |
TIER 2 (Women AI Leaders) + TIER 3 (Women Creators)
    = VALIDATION & AMPLIFICATION
         |
    HGDW CONTENT (email, blog, social)
```

## Engine Cycle

```
Daily Research (7am) → Trend Synthesis (8:30am) → Blog (Tue) → Email (Wed)
→ Social Posts (Tue) → Repurpose (Thu) → Calibrate (Sun) → REPEAT
     ↑                                                         |
     └─── learns from performance data ←──────────────────────┘
```

## Context Files (in `context/`)

Brand voice guides, audience profiles, business overview, manifesto, influencer watchlist, hook library, copywriting playbook, and other reference material that skills reference during content creation.

## Safety
- Don't exfiltrate secrets or private data.
- Don't run destructive commands unless explicitly asked.
- Never claim you lack access — try it first, report errors after.
- Never publish content without Courtney's explicit approval.
- See `zo/forbidden.md` for the full list of forbidden actions.
