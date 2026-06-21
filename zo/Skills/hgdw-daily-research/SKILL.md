---
name: hgdw-daily-ai-research
description: >-
  Run the daily HGDW AI research sweep. Monitors bleeding-edge technical voices,
  AI labs, publications, and women AI educators. Outputs structured research that
  powers all downstream content. Use when asked to "run the daily research",
  "do the AI sweep", "pull today's AI news", or "what happened in AI today".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Daily AI Research
  emoji: "🔍"
  version: "2.0"
allowed-tools: search_the_web research_the_web read_webpage search_x create_file read_file
---

# HGDW Daily AI Research Sweep

## Read First
1. Read `/home/workspace/hgdw-social/context/hgdw-brand.md`
2. Read `/home/workspace/hgdw-social/context/hgdw-influencer-watchlist.md`
3. Read `/home/workspace/HGDW/Intelligence/trend-index.md` (to know what's already trending)

---

## Step 1: Set the Date
Output file: `/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md`
Create directory if needed.

---

## Step 2: Lab & Frontier Sweep (This Is the Source Material)
Search the following, prioritizing last 24 hours. Run in parallel:

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

For each result, note:
- Source (who / where)
- Core idea (1-2 sentences)
- HGDW translation: what does this mean for a woman building her business?
- Tier (1 = lead, 2 = supporting, 3 = background)
- Topic tags (for trend index): e.g., "AI agents", "voice AI", "open-source models"

---

## Step 3: Women AI Voices & Industry Sweep
Search for validation and audience angles:

**Women AI Leaders:**
- `Allie Miller AI site:linkedin.com`
- `Sabrina Ramonov AI tools`
- `Harper Carroll AI site:x.com`
- `Chip Huyen AI site:x.com`
- `site:instagram.com sabrina_ramonov`
- `site:instagram.com girlsguideai`
- `site:instagram.com shelearnsai`

**General Industry:**
- `new AI tools launched today`
- `AI tools women entrepreneurs`
- `AI for small business this week`
- `Product Hunt AI today`

Apply the Framing Filter. Keep what passes, discard what doesn't.

---

## Step 4: Fun Tool Spotlight
Search specifically for tools that would make Alex's life better:
- `Product Hunt AI today`
- `new AI tool for content creators`
- `AI tool for small business owners`
- `free AI tools this week`

For each tool worth highlighting:
- Name and URL
- What it does in ONE sentence (no jargon)
- The HGDW angle: what work does this eliminate? What time does it buy back?
- Difficulty: can Alex use this in under 10 minutes?

---

## Step 5: Cross-Reference with Trend Index
Read `/home/workspace/HGDW/Intelligence/trend-index.md`
For each topic found today:
- Is it already in the trend index? If yes, increment count and update "last seen"
- Is it new? Add it with count=1
- Any topic seen 3+ times this week? Mark it as TRENDING and flag for content

Write updated trend index back to file.

---

## Step 6: Identify Today's Top Story
From everything gathered, pick ONE lead story.
It should answer: "Why does this matter to a woman who wants to own her time and build something real?"

---

## Step 7: Write the Daily Research File

Save to `/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md`:

# HGDW Daily AI Research — [DATE]

## TREND ALERTS (if any)
[Topics seen 3+ times this week. Flag these for content.]

## Lead Story
**[Headline]**
[2-3 sentences + why it matters to our audience]
Source: [link]

## Frontier Signal
[Lab announcements and technical voice posts]
**[Source]** — [Platform]
[Summary]
HGDW Translation: [plain language for our audience]
Source: [link]

## Fun Tools
[Tools that make Alex's life better]
**[Tool Name]** — [what it does in one sentence]
HGDW Angle: [what time does it buy back?]
Link: [url]
Difficulty: [easy/medium]

## Women AI Voices
[What the women leaders are saying about the same news]

## Industry News
[3-5 supporting items]

## Skipped (Why)
[What was filtered out — helps calibrate]

## Topic Tags
[List of all topic tags found today — feeds the trend index]

## Weekly Content Pool
- LEAD: [item] -> email hero
- BLOG: [item] -> blog angle
- SOCIAL: [item] -> social post
- TOOL: [item] -> tool spotlight

---

## Step 8: Update Weekly Tracker
Append to `/home/workspace/HGDW/Research/weekly-tracker.md`:
## [DATE]
- LEAD: [headline] — [1 sentence] — [link]
- [tag]: [headline] — [1 sentence] — [link]
- TREND: [any trend alerts]

---

## Step 9: Confirm
- Lead story (1 sentence)
- Items found / filtered
- Trend alerts (if any)
- New topics added to trend index
- File saved + tracker updated
```

---
