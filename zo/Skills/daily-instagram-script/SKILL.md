---
name: daily-instagram-script
description: Generate Courtney's daily Instagram script for the 50-day "Riding Joy Waves Into The Golden Age" series. Produces two scripts (followers post + trial reel) in Courtney's voice every morning. Cross-references the story arch, posted stories, and live Instagram to keep the narrative on track. Use when asked for today's script, to generate tomorrow's content, or to review the 50-day arc.
compatibility: Created for Zo Computer
metadata:
  author: CDM
  category: Content
  display-name: Daily Instagram Script
  emoji: "🎬"
  version: "1.0"
allowed-tools: read_file create_or_rewrite_file read_webpage search_the_web send_sms
---

# Daily Instagram Script — 50-Day Series

Generate Courtney's daily Instagram script for the "Riding Joy Waves Into The Golden Age" 50-day series.

## Before You Write

### Step 1: Determine what day we're on

1. Read `references/posted-stories.md` to see the last posted day
2. Calculate: next day = last posted day + 1
3. Read `references/content-calendar.md` to get today's assignment (theme, title, type, hook, lesson)
4. Read `references/story-arch-master.md` to get the full script for today's day number

### Step 2: Review Instagram

1. Use `tool read_webpage` on `https://www.instagram.com/murthafro/` to see what's actually been posted
2. Confirm the posted-stories doc matches reality — if it doesn't, update it
3. Note any engagement patterns, comments, or momentum from recent posts

### Step 3: Check the story arch

1. Read `references/story-arch-master.md` to understand where we are in the arc
2. Verify the content pattern is being followed:
   - **Story + quick lesson** → **Lesson expansion** → **Next story + quick lesson** → **Lesson expansion** → repeat
   - Odd days tend to be personal stories; even days tend to be Joy Wave philosophy/lessons
3. If the arc is drifting (wrong theme, skipped a story, lessons out of order), flag it and course-correct

## Script Output Format

Generate TWO scripts in this exact format:

```
SCRIPT:
HOOK: [Opening line — must stop the scroll in 1.5 seconds]
STORY: [The 60-90 second voice-over script in Courtney's voice]
CTA: [Closing line / call to action]
TEXT: [emoji], [emoji] [TITLE IN ALL CAPS] [emoji], [emoji]
DAY[X] [Lesson title or theme]
"[Celebrity/notable quote]" — [Attribution]

TRIAL REELS SCRIPT:
HOOK: [Opening line — must stop cold audience scroll]
STORY: [30-45 second condensed version for cold audience — no series context needed]
CTA: [Follow CTA — give them a reason]
TEXT: [emoji], [emoji] [TITLE IN ALL CAPS] [emoji], [emoji]
DAY[X] [Lesson title or theme]
"[Celebrity/notable quote]" — [Attribution]
```

## Writing Rules — Courtney's Voice

Read `references/brand-voice.md` and `references/personality-overview.md` before drafting.

### DO:
- Open with curiosity, wonder, or a provocative personal detail
- Mix cosmic with casual — "the universe" to "chatty gapattie" in one breath
- Use short punchy declarations, sometimes ALL CAPS for emphasis
- Be first-person, honest, specific (real names, real numbers, real places)
- Close with warmth — the landing should feel like a hug, not a hard sell
- Validate before inviting — "I see you. I was there."
- Reframe instead of hype — possibility, not FOMO

### DON'T:
- End scripts with "Come through" or any sign-off — let the last meaningful line land
- Use hustle/grind language, jargon, political language, or fear-based CTAs
- Sound corporate, preachy, or over anyone's head
- Repeat the video content in the caption — the caption EXTENDS the story
- Use "What I didn't say in the reel" or reference the video meta

### Caption Format (non-negotiable):
1. **Title line:** emoji TITLE IN ALL CAPS emoji (brackets symmetrical)
2. **Short paragraph:** Day X. 1-3 casual sentences extending the story. Conversational, unpolished on purpose.
3. **Celebrity quote:** "Quote text." — Name

### Trial Reel Rules:
- 30-45 seconds MAX
- Must work for someone who has NEVER seen the series
- No series context — standalone story that hooks cold viewers
- The hook must stop the scroll — use the strongest, most surprising detail
- CTA gives a reason to follow (what they'll GET)

## After Writing

### Step 4: Update posted-stories.md

After the script is approved and posted, append the new entry to `references/posted-stories.md`:

```
DAY [X] · [DATE]
[emoji] [TITLE] [emoji]
♪ [Music choice]

CAPTION AS POSTED:
[The full caption]

View on Instagram →
```

### Step 5: Re-evaluate the story arch

1. Read the full content calendar and story arch
2. Confirm the next 3-5 days still make sense given what's been posted
3. If the arc needs adjustment (story landed differently than expected, engagement suggests a pivot, timing shifted), note it and propose changes
4. Write a brief arch status to the end of posted-stories.md:

```
ARCH STATUS — [DATE]
Days posted: X/50
Current phase: [Phase name]
Current theme: [Theme]
Pattern check: [story+lesson > expansion > story+lesson > expansion — on track / drifting]
Next 3 days: [Brief preview]
Notes: [Any drift or adjustment needed]
```

## Reference Files

All reference files live in `references/` within this skill folder:

| File | What It Contains |
|------|-----------------|
| `brand-voice.md` | How Courtney sounds — tone, phrases, sentence patterns, platform notes |
| `personality-overview.md` | Who Courtney is — history, values, inner life, energy |
| `story-arch-master.md` | Full 50-day story arch with all pre-written scripts |
| `content-calendar.md` | Day-by-day schedule with themes, types, hooks, music notes |
| `posted-stories.md` | Running log of every posted day (captions, music, links) |
| `hook-framework.md` | Buyer hook templates and scoring rubric |
| `brand-memory.md` | Persistent memory notes — non-negotiable format rules, workflow |
