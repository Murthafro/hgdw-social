---
name: hgdw-daily-ai-research
description: >-
  Run the daily HGDW AI research sweep. Monitors AI influencers, news sources,
  and industry drops relevant to women entrepreneurs and builders. Outputs a
  structured daily research file that powers the weekly email, blog post, and
  social content. Use when asked to "run the daily research", "do the AI sweep",
  "pull today's AI news", or "what happened in AI today".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Daily AI Research
  emoji: "🔍"
  version: "1.0"
allowed-tools: search_the_web research_the_web read_webpage search_x create_file read_file
---

# HGDW Daily AI Research Sweep

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`

---

## Step 1: Set the Date
Note today's date. The output file will be saved as:
`/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md`

Create the directory if it doesn't exist:
`/home/workspace/HGDW/Research/daily/`

---

## Step 2: Lab & Frontier Sweep (Run First — This Is the Source Material)
Search the following, prioritizing the last 24 hours. These are the bleeding-edge
sources we TRANSLATE for our audience.

Run these searches in parallel:

**Major Lab Announcements:**
- `OpenAI announcement today`
- `Anthropic Claude news today`
- `Google DeepMind Gemini news today`
- `Meta AI Llama news today`
- `Mistral AI news today`
- `AI model release today`

**Major Publications:**
- `site:techcrunch.com AI` — last 24h
- `site:theverge.com artificial intelligence` — last 24h
- `site:technologyreview.com AI` — last 24h
- `site:wired.com artificial intelligence` — last 24h
- `site:arstechnica.com AI` — last 24h

**Bleeding-Edge Technical Voices:**
- `site:x.com Andrej Karpathy` — last 24h
- `site:x.com Jim Fan NVIDIA` — last 24h
- `site:x.com Francois Chollet` — last 24h
- `site:x.com Pieter Levels AI` — last 24h
- `site:x.com Yann LeCun` — last 24h
- `site:x.com Sam Altman` — last 24h
- `site:x.com Ethan Mollick AI` — last 24h
- `Greg Isenberg AI entrepreneur` — last 24h

For each result worth keeping, note:
- Source (who said it / where)
- The core idea in 1-2 sentences
- The HGDW translation: what does this mean for a woman building her business?
- Tier (1 = lead story, 2 = supporting detail, 3 = background signal)

---

## Step 3: Women AI Voices & Industry Sweep
Search for validation and audience-relevant angles:

**Women AI Leaders (check what they're saying about the same news):**
- `Allie Miller AI site:linkedin.com`
- `Allie Miller AI site:x.com`
- `Sabrina Ramonov AI tools`
- `Harper Carroll AI site:x.com`
- `Chip Huyen AI site:x.com`
- `site:instagram.com sabrina_ramonov`
- `site:instagram.com girlsguideai`
- `site:instagram.com shelearnsai`
- `site:instagram.com ai.with.whit`

**General Industry:**
- `new AI tools launched today`
- `AI tools women entrepreneurs`
- `AI for small business this week`
- `AI business automation news today`
- `Product Hunt AI today`

Apply the Framing Filter from the watchlist:
- Can a non-technical woman use this or care about this?
- Does this open a door or close one?
- Can we frame it as "here's what this means for your time / income / freedom"?

Keep items that pass. Discard items that don't.

---

## Step 4: Identify Today's Top Story
From everything gathered, identify ONE lead story — the single most relevant,
most exciting, most share-worthy thing that happened in AI today for our audience.

The lead story should be something that answers: "Why does this matter to a woman
who wants to own her time and build something real?"

---

## Step 5: Write the Daily Research File

Save to `/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md` with this structure:

```markdown
# HGDW Daily AI Research — [DATE]

## 🔥 Lead Story
**[Headline]**
[2–3 sentences: what happened + why it matters to our audience]
Source: [name + link]

## 🧪 Frontier Signal (Labs & Technical Voices)
[For each lab announcement or technical voice post:]
**[Source Name]** — [Platform]
[1-2 sentence summary of what happened]
HGDW Translation: [How to explain this to our audience in plain language]
Source: [link]

## 📡 Women AI Voices
[For each notable post/piece from women AI leaders:]
**[Name]** — [Platform]
[1-2 sentence summary]
HGDW Angle: [How to frame this for our audience]
Source: [link]

## 🛠 New Tools & Drops
[For each relevant tool/product launch:]
**[Tool Name]**
[What it does in plain language]
HGDW Angle: [What kind of work does this eliminate? What time does it buy back?]
Source: [link]

## 📰 Industry News
[3–5 supporting news items]
**[Headline]**
[1–2 sentence summary]
Source: [link]

## 🗑 Skipped (Why)
[Brief log of what was filtered out and why — helps calibrate over time]

## Weekly Content Pool
[Tag each item for downstream use:]
- LEAD: [item] → email hero story
- BLOG: [item] → potential blog angle
- SOCIAL: [item] → Instagram / TikTok / LinkedIn / X
- BOTH: [item] → blog + social
```

---

## Step 6: Append to Weekly Tracker
Read `/home/workspace/HGDW/Research/weekly-tracker.md`.
If it doesn't exist, create it.

Append today's lead story and top 3 items with their content tags.
This file is what the weekly email skill reads on Thursday.

Format:
```
## [DATE]
- LEAD: [headline] — [1 sentence] — [link]
- [tag]: [headline] — [1 sentence] — [link]
- [tag]: [headline] — [1 sentence] — [link]
```

---

## Step 7: Confirm
Reply with a brief summary:
- Today's lead story (1 sentence)
- Number of items found
- Number of items filtered out
- Confirm file saved at correct path
- Confirm weekly tracker updated

Keep it short. This is an internal ops update, not a content piece.
