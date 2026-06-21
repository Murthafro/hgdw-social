---
name: hgdw-trend-synthesizer
description: >-
  Analyze research across multiple days to spot emerging trends, synthesize
  connections between ideas, and surface content opportunities. Use when asked
  to "find trends", "what's trending", "synthesize this week", "connect the dots",
  or "what patterns are you seeing".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Trend Synthesizer
  emoji: "🔮"
  version: "1.0"
allowed-tools: read_file create_file list_files search_the_web
---

# HGDW Trend Synthesizer

This skill is the INTELLIGENCE LAYER. It reads across multiple days of research
and finds what a single day cannot see: patterns, rising narratives, dying hype,
and content opportunities that compound.

## Read First
1. Read `/home/workspace/hgdw-social/context/hgdw-brand.md`
2. Read `/home/workspace/HGDW/Intelligence/trend-index.md`
3. Read `/home/workspace/HGDW/Intelligence/calibration-log.md` (to know current priorities)

---

## Step 1: Load Research History
Read all daily research files from this week:
List files in `/home/workspace/HGDW/Research/daily/`
Read the most recent 5-7 files.

---

## Step 2: Extract Topic Signals
For each day's research, extract:
- Topic tags (from the "Topic Tags" section)
- Which sources mentioned each topic
- How the framing changed day-over-day (is the narrative shifting?)

Build a frequency map:
| Topic | Mon | Tue | Wed | Thu | Fri | Total | Trajectory |
|-------|-----|-----|-----|-----|-----|-------|------------|

Trajectory definitions:
- RISING: appeared more times this week than last
- STABLE: consistent presence
- FADING: appeared less than last week
- NEW: first appearance this week
- SPIKE: sudden appearance from 0 to 3+ in one week

---

## Step 3: Synthesis — Connect the Dots
Look for connections BETWEEN topics. This is where the value is.

Examples of synthesis:
- "OpenAI released a new model AND 3 tools launched using it this week = the model release
  is spawning a tool wave. Content angle: 'The 3 tools that just appeared because of [model].'"
- "Andrej Karpathy and Ethan Mollick both talked about AI agents this week. Chip Huyen
  wrote about it too. = AI agents are the consensus narrative. Content angle: 'What everyone
  in AI is talking about this week — and what it means for you.'"
- "Product Hunt had 5 AI writing tools in 3 days = the AI writing space is getting crowded.
  Content angle: 'The best AI writing tool just changed. Again.'"

Write 2-3 synthesis observations.

---

## Step 4: Content Opportunity Score
For each trending topic, score it:
- **Relevance to Alex** (1-5): Would she care? Can she use this?
- **Timeliness** (1-5): Is this peaking now or fading?
- **HGDW angle strength** (1-5): Can we translate this into time/income/freedom?
- **Competition** (1-5): Is everyone already covering this? (Lower = better for us)

Total score = sum. Anything 15+ = strong content opportunity.

---

## Step 5: Generate Content Angles
For the top 3 scoring topics, write:
- **Headline** (in HGDW voice)
- **The HGDW angle** (1 sentence: why Alex cares)
- **Recommended format** (blog, email lead, social series, or all three)
- **Key sources to cite**

---

## Step 6: Update Trend Index
Write updated trend index to `/home/workspace/HGDW/Intelligence/trend-index.md`:
- Add new topics with count=1
- Increment existing topics
- Update trajectory for all topics
- Archive topics not seen in 2+ weeks (move to "Archived" section)

---

## Step 7: Save Synthesis Report
Save to `/home/workspace/HGDW/Research/trends/YYYY-MM-DD-synthesis.md`

---

## Step 8: Confirm
- Number of topics tracked
- Top 3 content opportunities with scores
- Any trend alerts (SPIKE or 3+ mentions)
- Synthesis observations (the connections)
```

---
