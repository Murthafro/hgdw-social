---
name: hgdw-review-dashboard
description: >-
  Build a daily review dashboard summarizing everything the HGDW Content Chief
  produced — drafts awaiting approval, research highlights, trend alerts,
  published content performance, and a feedback section. Generates a clean
  markdown file Courtney can scan in under 2 minutes. Use when asked to
  "build the dashboard", "show me what you've done", "review summary",
  or triggered by the daily review-reminder automation.
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Operations
  display-name: HGDW Review Dashboard
  emoji: "📋"
  version: "1.0"
allowed-tools: read_file create_or_rewrite_file run_command send_sms
---

# HGDW Review Dashboard

Generate a daily dashboard that summarizes the Content Chief's work so Courtney can review and give feedback fast.

## Before You Build

### Step 1: Gather state

Read these files to understand what's been produced:

```
/home/workspace/HGDW/Research/daily/              ← today's + recent research files
/home/workspace/HGDW/Research/weekly-tracker.md    ← weekly research summary
/home/workspace/HGDW/Intelligence/trend-index.md   ← active trends + trajectories
/home/workspace/HGDW/Intelligence/calibration-log.md ← last calibration notes
/home/workspace/HGDW/Intelligence/content-performance.md ← published content results
/home/workspace/HGDW/Content/blog/                 ← blog drafts
/home/workspace/HGDW/Content/emails/               ← email drafts
/home/workspace/HGDW/Content/social/               ← social post drafts
```

Also check `/home/workspace/HGDW/Feedback/` for any previous feedback Courtney left.

### Step 2: Scan for pending approvals

List all draft files created in the last 7 days that haven't been marked as approved or published. A file is "pending" if it does NOT contain `STATUS: APPROVED` or `STATUS: PUBLISHED` in its content.

## Dashboard Format

Write the dashboard to `/home/workspace/HGDW/dashboard.md` in this format:

```markdown
# HGDW Content Chief — Daily Review
_Updated [TODAY] · [DAY OF WEEK]_

---

## Awaiting Your Approval

| # | Type | Title / Hook | Created | File |
|---|------|-------------|---------|------|
| 1 | Blog | [title] | [date] | [path] |
| 2 | Email | [subject line] | [date] | [path] |
| 3 | Social | [strongest hook] | [date] | [path] |

> To approve: reply "approve #1" or "approve all"
> To give feedback: reply "feedback #1: [your notes]"
> To kill: reply "kill #1"

---

## Research Highlights (Last 3 Days)

**[Today]:**
- [Lead story — 1 sentence]
- [Notable item 2]
- [Notable item 3]

**[Yesterday]:**
- [Lead story]
- [Notable items]

**[Day before]:**
- [Lead story]
- [Notable items]

---

## Trend Watch

| Topic | Days Seen | Trajectory | Content Opportunity? |
|-------|-----------|-----------|---------------------|
| [topic] | [X] | RISING / STABLE / FADING | [Yes/No — brief angle] |

---

## Published Content Performance

| Date | Type | Title | Opens/Views | Clicks | Saves | Trend |
|------|------|-------|-------------|--------|-------|-------|
| [date] | [type] | [title] | [number] | [number] | [number] | [up/down/flat] |

**Top performer this week:** [title] — [key metric]
**Learning:** [one sentence on what this tells us]

---

## Engine Status

| System | Status | Last Run |
|--------|--------|----------|
| Daily Research | [ran/missed] | [time] |
| Trend Synthesis | [ran/missed] | [time] |
| Blog Draft | [drafted/pending] | [date] |
| Email Draft | [drafted/pending] | [date] |
| Social Posts | [drafted/pending] | [date] |
| Content Repurpose | [ran/pending] | [date] |
| Weekly Calibration | [ran/pending] | [date] |

---

## Your Feedback

Leave feedback below this line. The Content Chief reads this during calibration.

<!-- FEEDBACK START -->

<!-- FEEDBACK END -->

---

_Content Chief online. [X] drafts awaiting review. [Y] trends tracked. Next automation: [name] at [time]._
```

## Step 3: Handle missing data gracefully

If a directory is empty or a file doesn't exist yet:
- Show "No [type] drafts this week" instead of an empty table
- Show "No performance data logged yet — log results after publishing" for empty performance
- Show "Engine not yet started" for automations that haven't run

## Step 4: Create feedback directory

```bash
mkdir -p /home/workspace/HGDW/Feedback
```

## Step 5: Send SMS reminder

After building the dashboard, send Courtney a text:

```
HGDW Review Ready

[X] drafts waiting for approval
[Y] trends tracked ([strongest trend])
Dashboard: /home/workspace/HGDW/dashboard.md

Reply here or open Zo to review.
```

Use `tool send_sms` with this message.

## Processing Feedback

When Courtney replies with feedback (via SMS or chat):

- **"approve #N"** or **"approve all"** → Mark the file(s) with `STATUS: APPROVED` at the top. Move to next step in pipeline.
- **"feedback #N: [notes]"** → Append feedback to the draft file under `## Courtney's Feedback` and save a copy to `/home/workspace/HGDW/Feedback/[date]-[slug].md`. Flag for revision.
- **"kill #N"** → Mark with `STATUS: KILLED`. Archive to `/home/workspace/HGDW/Content/archive/`.
- **"redo #N"** → Mark as needs revision. Re-run the relevant content skill with Courtney's notes as additional context.

After processing any feedback, rebuild the dashboard to reflect the updated state.
