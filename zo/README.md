# HGDW Content Chief on Zo Computer

The HGDW Content Chief is a marketing-focused AI agent for HOT GIRLS DONT WORK (HGDW). She runs on [Zo Computer](https://zo.computer) as a dedicated content and marketing intelligence system — separate from Barbie (main CoS).

## What This System Does

1. **Daily AI research** — morning sweep of labs, frontier voices, publications, women AI leaders, tools
2. **Trend detection** — cross-day pattern recognition, topic trajectories, content opportunity scoring
3. **Content production** — weekly email, blog posts, social posts in HGDW voice
4. **Content multiplication** — one piece → 7+ formats across platforms
5. **Quality control** — 5-sweep copy editor, virality scoring, voice consistency
6. **Learning loop** — Sunday calibration reviews performance, adjusts sources and strategy
7. **Revenue tracking** — Stripe metrics (ported from Barbie)
8. **Content creation** — Instagram carousels, blog images, talking-head videos (ported from Barbie)
9. **Communications** — email triage, X/Twitter posting, AI phone calls (ported from Barbie)
10. **Research** — web + social search (ported from Barbie)

## Architecture

This repo follows the Zo Setup Protocol:

```
zo/
├── install/
│   ├── persona.md       → Content Chief personality, voice, marketing focus
│   ├── bio.md           → Courtney's context, preferences, business details
│   ├── rules.md         → Behavioral constraints (always-on + conditional)
│   └── agents.md        → 7 scheduled automations (content engine cycle)
├── Skills/
│   ├── bootstrap-hgdw/         → Idempotent installer (run this first)
│   ├── hgdw-daily-research/    → Morning AI research sweep
│   ├── hgdw-trend-synthesizer/ → Cross-day trend detection
│   ├── hgdw-weekly-email/      → Newsletter draft
│   ├── hgdw-blog-post/         → Blog post draft
│   ├── hgdw-social-posts/      → Multi-platform social posts
│   ├── hgdw-content-repurposer/→ Content multiplication
│   ├── hgdw-copy-editor/       → 5-sweep quality gate
│   ├── hgdw-weekly-calibration/→ Sunday learning loop
│   ├── content-machine/        → (Barbie) Content production pipeline
│   ├── content-dashboard/      → (Barbie) 50-day series tracker
│   ├── daily-instagram-script/ → (Barbie) Daily Instagram scripts
│   ├── revenue-metrics/        → (Barbie) Stripe revenue tracking
│   ├── daily-review/           → (Barbie) Nightly deep dive
│   ├── site-health/            → (Barbie) Production monitoring
│   ├── research/               → (Barbie) Web + X search
│   ├── x-posting/              → (Barbie) X/Twitter posting
│   ├── coding-agent-loops/     → (Barbie) Persistent coding sessions
│   ├── elevenlabs-calls/       → (Barbie) AI phone calls
│   ├── talking-head/           → (Barbie) AI avatar video
│   ├── blog-image-generator/   → (Barbie) Hero images
│   ├── instagram-slides/       → (Barbie) Branded carousels
│   └── email-fortress/         → (Barbie) Email security
├── forbidden.md              → Actions requiring explicit approval
context/                      ← Brand & business reference files + HGDW content engine references
prompts/                      ← Reusable prompt templates
memory/                       ← Historical daily notes
```

## Intelligence Layer (on Zo filesystem)

After installation, the content engine maintains state at `/home/workspace/HGDW/`:

```
/home/workspace/HGDW/
├── Research/
│   ├── daily/          ← Daily research files (YYYY-MM-DD.md)
│   ├── trends/         ← Trend synthesis reports
│   └── weekly-tracker.md
├── Content/
│   ├── emails/         ← Newsletter drafts
│   ├── blog/           ← Blog post drafts
│   └── social/         ← Social media drafts
├── Intelligence/
│   ├── trend-index.md  ← Topic tracking with trajectories
│   ├── calibration-log.md ← Weekly learning log
│   └── content-performance.md ← Performance data (user-maintained)
└── config/
    └── blog-api.md     ← CMS credentials
```
