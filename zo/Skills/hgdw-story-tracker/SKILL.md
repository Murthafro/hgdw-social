---
name: hgdw-story-tracker
description: >-
  Track every piece of HGDW content in a persistent story log that maintains
  narrative continuity. Logs post theme, mission, pillar, narrative beat, thread,
  audience entry point, and callbacks. Flags thread starvation, beat clustering,
  and tone drift. Use when asked to "log this post", "update the story log",
  "check story continuity", "what threads need attention", or triggered after
  content is published.
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Content
  display-name: HGDW Story Tracker
  version: "1.0"
allowed-tools: read_file create_or_rewrite_file
---

# HGDW Story Tracker

Maintain narrative continuity across all HGDW content. Every post is a chapter — this skill makes sure the book makes sense.

## Reference Files

Read these:
- `/home/workspace/hgdw-social/context/hgdw-story-continuity.md` — the continuity guide (threads, beats, rules)
- `/home/workspace/hgdw-social/context/hgdw-course-story-bible.md` — full narrative framework
- `/home/workspace/hgdw-social/context/hgdw-course-scene-outline.md` — 10-scene architecture
- `/home/workspace/HGDW/Intelligence/story-log.md` — the persistent story log (create if missing)
- `/home/workspace/HGDW/Intelligence/content-performance.md` — what performed

## The Story Log

The story log lives at `/home/workspace/HGDW/Intelligence/story-log.md`.

Initialize it (if it doesn't exist) as:

```markdown
# HGDW Story Log
> Every post is a chapter. This log tracks the narrative so the story stays cohesive.
> Updated after every batch or publication.

---

## Thread Health (last updated: [date])

| Thread | Last touched | Days since | Status |
|---|---|---|---|
| 1. The Transformation | — | — | NEW |
| 2. The Community | — | — | NEW |
| 3. The Tools | — | — | NEW |
| 4. The Rebellion | — | — | NEW |
| 5. The Golden Age | — | — | NEW |

## Beat Distribution (all time)

| Beat | Count | Last used | Notes |
|---|---|---|---|
| 1. The Grind | 0 | — | |
| 2. The Wrong Room | 0 | — | |
| 3. The Door Opens | 0 | — | |
| 4. The First Win | 0 | — | |
| 5. Off the Laptop | 0 | — | |
| 6. The Party Scene | 0 | — | |
| 7. Life on Agents | 0 | — | |
| 8. The Opportunity | 0 | — | |
| 9. The Inversion | 0 | — | |
| 10. The Resolution | 0 | — | |

## Recurring Series Tracker

| Series | Thread | Last episode | Total episodes |
|---|---|---|---|
| "Before AI / After AI" | Transformation | — | 0 |
| "My girlfriend just texted me..." | Community | — | 0 |
| "Watch me build this in X min" | Tools | — | 0 |
| "Things they don't tell you about AI" | Rebellion | — | 0 |
| "Work Less. ___ More." | Golden Age | — | 0 |

---

## Post Log

| # | Date | Platform | Title/Hook | Mission | Pillar | Beat | Thread(s) | Entry Point | Callback? | Performance |
|---|---|---|---|---|---|---|---|---|---|---|
```

## How to Log a Post

### Step 1: Identify the post's narrative position

For each published or drafted post, determine:

1. **Mission:** Attract / Nurture / Position / Convert
2. **Pillar:** Skill / Passion / Story
3. **Beat (1-10):** Which story moment does this advance? (See the 10 beats in the continuity guide)
4. **Thread(s):** Which narrative thread(s) does it advance? (Transformation, Community, Tools, Rebellion, Golden Age)
5. **Theme:** The topic area (AI tools, automation, time freedom, community, mindset, lifestyle, BTS)
6. **Emotional register:** What feeling does it create? (inspiration, recognition, excitement, defiance, warmth, humor, urgency)
7. **Audience entry point:** Cold Alex (never heard of us), Warm Alex (follows, hasn't bought), Hot Alex (customer or about to be)
8. **Callback:** Does it reference a previous post? If so, which one?

### Step 2: Add to the post log table

Append a new row to the Post Log table in story-log.md.

### Step 3: Update thread health

Update the Thread Health table:
- Set "Last touched" to today for any thread the post advances
- Recalculate "Days since" for all threads
- Set status: ACTIVE (< 7 days), WATCH (7-13 days), STARVING (14+ days)

### Step 4: Update beat distribution

Increment the count for the beat used. Update "Last used" date.

### Step 5: Update recurring series (if applicable)

If the post is part of a recurring series, update that row.

## Continuity Checks

After logging, run these checks and flag any issues:

### Check 1: Thread Starvation
Any thread with status STARVING (14+ days untouched)?
→ Flag it: "Thread [X] hasn't been touched in [Y] days. Prioritize in next content plan."

### Check 2: Beat Clustering
More than 40% of recent posts (last 2 weeks) on the same beat?
→ Flag it: "Beat [X] is overrepresented. Mix in Beats [Y, Z] to keep the story moving."

### Check 3: Callbacks
No callbacks in the last 2 weeks?
→ Flag it: "No callbacks to previous content. Add a 'Remember when I showed you...' reference in the next post."

### Check 4: Tone Drift
Read the last 5 posts. Do any feel corporate, heavy, or jargon-y?
→ Flag it with the specific post and the voice issue.

### Check 5: Visual Identity
Any posts from Beat 6-10 showing laptop/desk imagery?
→ Flag it: "Late-arc content should show phone, text bubbles, woman somewhere alive — not a laptop."

### Check 6: Mission Balance
Check last 2 weeks of missions:
- All Position + Convert? → "Selling to a tired audience. Add Attract + Nurture."
- No Convert? → "Building audience but not monetizing. Add a Convert post."
- No Attract? → "Audience growth has stalled. Add Attract content."

### Check 7: Entry Point Coverage
Check last 2 weeks for audience entry points:
- No Cold Alex content? → "Not reaching new people. Add Beat 1-3 content."
- No Hot Alex content? → "Not converting existing audience. Add Beat 7-10 content."

## Story Continuity Report

After running all checks, generate a report:

```markdown
# Story Continuity Report — [DATE]

## Thread Health
[thread health table]

## Flags
- [any issues from the 7 checks above]

## Narrative Momentum
The story is currently strongest on Thread [X] (last [N] posts).
Thread [Y] needs attention — suggest [specific content idea] to advance it.

## Next Content Recommendations (for story cohesion)
1. [Post idea that advances a starving thread]
2. [Post idea that hits an underused beat]
3. [Post idea with a callback to [previous post]]

## Recurring Series Status
[series tracker table]
- Next "Work Less. ___ More." verb to try: [suggestion]
- Next "Before AI / After AI" angle: [suggestion]
```

Save to `/home/workspace/HGDW/Intelligence/story-continuity-[date].md`

## Step 6: Confirm

Tell Courtney:
- Posts logged (count)
- Thread health (any starving?)
- Flags (any continuity issues?)
- The single most important thing to fix for story cohesion
