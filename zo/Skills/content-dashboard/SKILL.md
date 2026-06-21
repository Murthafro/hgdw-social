---
name: content-dashboard
description: Build and update the CDM Social Media Launch dashboard — a live tracker for the 50-day Golden Age series. Shows overall progress, phase breakdown, day map, script log with engagement metrics, and arc health. Run this skill to generate or refresh the dashboard after posting new content or on demand.
compatibility: Created for Zo Computer
metadata:
  author: CDM
  category: Content
  display-name: Content Dashboard
  emoji: "📊"
  version: "1.0"
allowed-tools: read_file create_or_rewrite_file read_webpage search_the_web
---

# Content Dashboard — 50-Day Golden Age Series

Generate and maintain a live content tracker for the "Riding Joy Waves Into The Golden Age" 50-day series on @murthafro.

## When To Run

- After any new post goes live
- On demand when Courtney asks for a status update
- As part of the daily-instagram-script workflow (after posting confirmation)

## Step 1: Gather Current State

1. Read the posted stories log at `/home/workspace/Skills/daily-instagram-script/references/posted-stories.md` to get all confirmed posts
2. Read the content calendar at `/home/workspace/Skills/daily-instagram-script/references/content-calendar.md` to get the full 50-day plan
3. Visit `https://www.instagram.com/murthafro/` to pull live engagement metrics (views, likes, comments) for posted content
4. Note any discrepancies between the posted stories log and what's actually live on Instagram

## Step 2: Calculate Progress

```
TOTAL_DAYS = 50
POSTED = count of days with status "Posted" in the log
REMAINING = TOTAL_DAYS - POSTED
PERCENT = round((POSTED / TOTAL_DAYS) * 100)
NEXT_UP = POSTED + 1
```

Determine which phase each day falls in:
- **Phase 1: The Invitation** — Days 1–15
- **Phase 2: Going Deeper** — Days 16–35
- **Phase 3: The Synthesis** — Days 36–50

## Step 3: Generate the Dashboard

Write the dashboard to `/home/workspace/Skills/content-dashboard/dashboard.md` in this exact format:

```markdown
# @MURTHAFRO · FERTILE WORLD
## 🌊 CDM Social Media Launch
### 50-Day Golden Age Series · May 14 – July 2, 2026
_Updated [TODAY'S DATE] · pulled live from Instagram_

---

## Overall Progress

| Posted | Remaining | Complete | Next Up |
|--------|-----------|----------|---------|
| **[X]** | **[Y]** | **[Z]%** | **Day [N]** |

▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ [Z]% — [X] / 50 days posted

---

## Phases

| Phase | Days | Status |
|-------|------|--------|
| Phase 1: The Invitation | 1–15 | [X of 15 posted / IN PROGRESS or COMPLETE] |
| Phase 2: Going Deeper | 16–35 | [X of 20 posted / NOT STARTED or IN PROGRESS or COMPLETE] |
| Phase 3: The Synthesis | 36–50 | [X of 15 posted / NOT STARTED or IN PROGRESS or COMPLETE] |

---

## Day Map

[Show all 50 days in a grid — ✅ for posted, ⬜ for pending]

```
 1  2  3  4  5  6  7  8  9  10
✅ ✅ ✅ ✅ ✅ ✅ ✅ ⬜ ⬜ ⬜
11 12 13 14 15 16 17 18 19 20
⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜ ⬜
...
```

---

## Script Log

| Day | Date | Title · Music | Engagement | Status |
|-----|------|---------------|------------|--------|
| Day 1 | May 14 | 🌸🍄🌊 GOLDEN AGE 🌊🍄🌸 ♪ New Radicals | 2,280 views · 233 likes | ✅ Posted |
| Day 2 | May 17 | TEARS OF JOY | 1,407 views | ✅ Posted |
| ... | ... | ... | ... | ... |
| Day [NEXT] | [DATE] | — up next — | | ⏳ Pending |
| Days [NEXT+1]–50 | [DATES] | Remaining series | | ⬜ Pending |

---

## Engagement Summary

| Metric | Total | Average Per Post |
|--------|-------|------------------|
| Views | [SUM] | [AVG] |
| Likes | [SUM] | [AVG] |
| Posts | [COUNT] | — |

### Top Performers
1. [Title] — [views] views, [likes] likes
2. [Title] — [views] views, [likes] likes
3. [Title] — [views] views, [likes] likes

---

## Arc Health

| Check | Status |
|-------|--------|
| Pattern (story → expansion → story → expansion) | ✅ On track / ⚠️ Drifting |
| Current theme | [THEME NAME] |
| Days since last lesson expansion | [N] |
| Next lesson culmination | Day [X] — [TITLE] |
| Narrative coherence | ✅ Strong / ⚠️ Needs attention |

---

## Key Documents

| Document | Description |
|----------|-------------|
| Story Arch — Master Scripts | All 50 days scripted · source of truth |
| Posted Stories | Actual captions, music & links as posted |
| 50-Day Content Calendar | Scheduling · music · platform notes |
| Brand Voice | How Courtney sounds |
| Personality Overview | Who Courtney is |

---

_CDM Social Media Launch · @murthafro · Last synced [DATE]_
```

## Step 4: Progress Bar

Build the progress bar using block characters:

- Use `▓` for posted days (filled)
- Use `░` for remaining days (empty)
- Total width = 20 characters
- Scale: each character = 2.5 days

Example at 14% (7/50): `▓▓▓░░░░░░░░░░░░░░░░░`

## Step 5: Engagement Data

When reading Instagram, capture for each posted reel:
- **Views** (play count)
- **Likes** (heart count)
- **Comments** (comment count if visible)
- **Date posted**

If metrics aren't accessible from the page, use the last known values from the posted stories log and note "metrics from last sync" in the dashboard.

## Step 6: Arc Health Check

Cross-reference the posted content against the story arch master to verify:

1. **Pattern compliance** — Are we alternating correctly?
   - Story + quick lesson → Lesson expansion → Next story + quick lesson → Lesson expansion
2. **Theme tracking** — Which theme are we currently in? (FERTILE, WALL ST, MENTAL HEALTH, CREATIVE)
3. **Lesson culmination timing** — Are the ★ lesson culmination days on schedule?
4. **Narrative drift** — Has the actual posted content diverged from the planned arc? If yes, flag it.

## Output

After generating the dashboard, confirm with a brief summary:

```
📊 Dashboard updated — [DATE]
[X]/50 posted · [Z]% complete · Day [N] up next
Phase: [Current phase]
Theme: [Current theme]
Arc: [On track / Drifting — details]
Top post: [Title] ([views] views)
```
