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

### Tier 1 — Daily (Women Leading AI Education & Content)
- **Allie K. Miller** (@alliekmiller) — Instagram, LinkedIn, X — most trusted female AI voice for business builders
- **Sabrina Ramonov** (@sabrina_ramonov) — Instagram, YouTube, X — AI tools tutorials and demos with massive reach
- **Harper Carroll** (@harpercarrollai) — Instagram, LinkedIn — Stanford + Meta AI Engineer turned Educator
- **Chip Huyen** (@huyenchip19) — Instagram, X, LinkedIn — AI/ML engineer, author
- **Hannah Fry** (@fryrsquared) — Instagram, YouTube — mathematician and AI communicator
- **Aishwarya Srinivasan** (@the.datascience.gal) — Instagram, LinkedIn — Data & AI LinkedIn Top Voice

### Tier 2 — Daily (Women AI Creators & Educators)
- **The Girl's Guide to AI** (@girlsguideai) — AI education for women
- **She Learns AI** (@shelearnsai) — AI learning content for women
- **AI with Whit** (@ai.with.whit) — AI education content
- **Tracy** (@thataiputzinggirl) — AI tools exploration and education
- **Lanie** (@lanie.lately) — AI Avatar Content Coach
- **Claire Zau** (@zauey.talks) — AI education talks
- **Shana** (@reinesana.ai) — practical AI for women building things
- **Brand Nat** (@brand.nat) — AI/Tech for Business
- **Tiffany Janzen** (@tiffintech) — Tech/AI content for women
- **Simon Says AI** (@simon.saysai) — AI education tutorials
- **Magan** (@genzbestie) — Building in Public with AI
- **CatGPT** (@askcatgpt) — AI content with personality
- **Paula Wehmeyer** (@pallipauu) — AI/Tech content
- **Nandini Mullaji** (@dini_inabottle) — AI and tech education
- **Maitri Mangal** (@maitrimangal) — AI content creator
- **Khris Sheer** (@khris.sheer) — AI/Tech content

### Tier 3 — Weekly (Communities & Organizations)
- **Women Who Code** (@womenwhocode) — women in tech community
- **Women In Tech Podcast** (@womenintechshow) — women in tech stories
- **ELVTR** (@elvtrcom) — education platform with AI courses
- **Jacklyn / The Next Big Thing** (@nbtjacklyn) — tech/AI trends

### Tier 4 — Male Voices Worth Tracking
- **Greg Isenberg** (@gregisenberg) — entrepreneurship + AI, strong audience crossover
- **Sam Altman** — OpenAI announcements
- **Ethan Mollick** — no-hype AI translation, very shareable

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
