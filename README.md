# HOT GIRLS DONT WORK — Zo Content Machine
*AI Research & Content Automation System*

---

## What This Is

A fully automated AI research and content pipeline built on Zo Computer.
Every weekday, Zo monitors AI news, translates it for our audience (women
28-48 who are building businesses and want their time back), and generates
ready-to-use content across every channel.

You review. You approve. You publish. Zo does the rest.

---

## The System in One View

```
Every weekday 7am
       |
DAILY RESEARCH SWEEP
Monitors influencers, news, tool drops
Saves structured file + updates weekly tracker
Emails you a morning brief at 8am
       |
       | Tuesday 6am           | Tuesday 8am          | Wednesday 6am
BLOG POST DRAFT          SOCIAL POSTS BATCH        WEEKLY EMAIL DRAFT
(Posted as draft         Instagram + TikTok +       Thursday newsletter
 to your CMS)            LinkedIn + X/Twitter       drafted & saved
       |                        |                          |
         YOU REVIEW -> APPROVE -> PUBLISH / SCHEDULE
```

---

## Skills Installed

| Skill | Trigger Phrases | What It Does |
|---|---|---|
| `hgdw-daily-ai-research` | "run the daily research", "what happened in AI today", "pull today's AI news" | Sweeps influencers + news, saves structured research file, updates weekly tracker |
| `hgdw-weekly-email` | "write the weekly email", "draft Thursday's newsletter" | Writes full email in HGDW voice from week's research |
| `hgdw-blog-post` | "write the blog post", "draft the industry post" | Writes 600-900 word blog post, posts as draft to your CMS |
| `hgdw-social-posts` | "write the social posts", "create this week's content" | Writes full sets for Instagram, TikTok, LinkedIn, X |
| `hgdw-bootstrap` | "install HGDW", "run the bootstrap" | Installs this whole system |

---

## Automations Running

| Name | When | Delivers |
|---|---|---|
| HGDW Daily AI Research | Mon-Fri, 7am | Email summary at 8am |
| HGDW Weekly Blog Draft | Tuesday, 6am | Email when draft is ready |
| HGDW Weekly Social Posts | Tuesday, 8am | Email with all posts |
| HGDW Weekly Email Draft | Wednesday, 6am | Email when draft is ready |

---

## Directory Structure (on your Zo)

```
/home/workspace/
|-- HGDW/
|   |-- Research/
|   |   |-- daily/              <- Daily research files (YYYY-MM-DD.md)
|   |   |-- weekly-tracker.md   <- Running log of the week's best items
|   |   +-- weekly-review-*.md  <- Optional Monday reviews
|   |-- Content/
|   |   |-- emails/             <- Weekly email drafts
|   |   |-- blog/               <- Blog post drafts (local copies)
|   |   +-- social/             <- Social post sets
|   +-- config/
|       +-- blog-api.md         <- YOU MUST FILL THIS IN
+-- Skills/
    |-- references/
    |   |-- hgdw-brand.md
    |   +-- hgdw-influencer-watchlist.md
    |-- hgdw-daily-ai-research/
    |-- hgdw-weekly-email/
    |-- hgdw-blog-post/
    |-- hgdw-social-posts/
    +-- hgdw-bootstrap/
```

---

## Install Instructions

1. Upload this repo to your Zo (or clone it)
2. In Zo chat, type:
   ```
   Clone or upload the hgdw-zo repo to ~/repos/hgdw-zo, then run the hgdw-bootstrap skill
   ```
3. Fill in `/home/workspace/HGDW/config/blog-api.md` with your CMS credentials
4. Done. The machine runs itself from here.

---

## Influencer Watch List

> **Strategy:** Monitor bleeding-edge technical voices and labs FIRST. They break
> news and set the frontier. We TRANSLATE their signal for our audience. Women AI
> educators validate and amplify. Publications give us credibility anchors.

### Tier 1 — Bleeding Edge (Source Material We Translate)
- **Sam Altman** (@sama) — OpenAI CEO. Every post moves the industry.
- **Andrej Karpathy** (@karpathy) — best technical explainer alive. His threads = our blog posts.
- **Yann LeCun** (@ylecun) — Meta Chief AI Scientist. Open-source AI narrative.
- **Jim Fan** (@DrJimFan) — NVIDIA research. Multimodal/robotics explainer.
- **Francois Chollet** (@fchollet) — Keras creator. Sharpest AI hype critic.
- **Pieter Levels** (@levelsio) — one person + AI = million-dollar business.
- **Greg Isenberg** (@gregisenberg) — entrepreneurship + AI for builders.
- **Ethan Mollick** — best at translating AI research into practical use.
- + Dario Amodei, Demis Hassabis, George Hotz, Harrison Chase, Guillermo Rauch, and more

### Tier 2 — Women AI Leaders & Educators
- **Allie K. Miller** (@alliekmiller) — most trusted female AI voice for business builders
- **Sabrina Ramonov** (@sabrina_ramonov) — AI tools tutorials with massive reach
- **Harper Carroll** (@harpercarrollai) — Stanford + Meta AI Engineer turned Educator
- **Chip Huyen** (@huyenchip19) — AI/ML engineer, author
- **Hannah Fry** (@fryrsquared) — mathematician and AI communicator
- + Aishwarya Srinivasan, Amanda Askell, Sara Gu

### Tier 3 — Women AI Creators (Instagram-first)
- 16 creators: @girlsguideai, @shelearnsai, @ai.with.whit, @thataiputzinggirl, @lanie.lately, @zauey.talks, @reinesana.ai, @brand.nat, @tiffintech, @simon.saysai, @genzbestie, @askcatgpt, @pallipauu, @dini_inabottle, @maitrimangal, @khris.sheer

### Tier 4 — Major AI Labs
- OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, xAI, Stability AI, Cohere, Hugging Face, NVIDIA AI, Perplexity, Runway, ElevenLabs, Midjourney, Cursor

### Tier 5 — Major Publications & Newsletters
- MIT Technology Review, Wired, The Verge, Ars Technica, TechCrunch, The Information, Bloomberg Technology, VentureBeat, Joanna Stern (WSJ)
- Newsletters: TLDR AI, The Rundown AI, Ben's Bites, The Neuron, Import AI, AI Breakfast

### Tier 6 — Communities
- Women Who Code, Women In Tech Podcast, ELVTR, Women in AI

Full list at: `hgdw-influencer-watchlist.md`

---

## One Thing You Need To Do

Fill in your blog API credentials:
```
/home/workspace/HGDW/config/blog-api.md
```

Everything else runs automatically.

---

*HOT GIRLS DONT WORK. We use AI. Work Less. ___ More.*
