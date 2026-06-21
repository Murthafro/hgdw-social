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

## Step 2: Influencer Sweep
Search the following, prioritizing posts from the last 24 hours.

Run these searches in parallel:

**Tier 1 — Women AI Leaders:**
- `Allie Miller AI site:linkedin.com`
- `Allie Miller AI site:x.com`
- `Sabrina Ramonov AI tools`
- `Harper Carroll AI site:x.com`
- `Chip Huyen AI site:x.com`
- `Hannah Fry AI`
- `Aishwarya Srinivasan AI data`

**Tier 2 — Women AI Creators (Instagram-first):**
- `site:instagram.com sabrina_ramonov`
- `site:instagram.com girlsguideai`
- `site:instagram.com shelearnsai`
- `site:instagram.com thataiputzinggirl`
- `site:instagram.com ai.with.whit`
- `site:instagram.com zauey.talks`
- `site:instagram.com harpercarrollai`

**Industry & Male Voices:**
- `Greg Isenberg AI entrepreneur`
- `Ethan Mollick AI practical use`
- `OpenAI announcement today`
- `Anthropic Claude news today`
- `AI tools women entrepreneurs`
- `AI business automation news today`
- `AI education content creators women`

For each result worth keeping, note:
- Source (who said it / where)
- The core idea in 1–2 sentences
- Why it matters to our audience (women 28–48, building businesses or careers)
- Tier (1 = lead story, 2 = supporting detail, 3 = background signal)

Discard anything purely technical with no business or lifestyle relevance.

---

## Step 3: Industry News Sweep
Search for:
- `AI news today entrepreneurship`
- `new AI tools launched today`
- `AI for small business this week`
- `women AI founders news`
- `AI automation update`
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

## 📡 Influencer Watch
[For each notable post/piece:]
**[Influencer Name]** — [Platform]
[1–2 sentence summary]
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
