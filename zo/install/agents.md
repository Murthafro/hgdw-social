# HGDW Content Chief agents

## agent: daily-research
**rrule:** FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=7;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-daily-research skill.
Today's date is [today]. Save output to /home/workspace/HGDW/Research/daily/[today].md
and update /home/workspace/HGDW/Research/weekly-tracker.md.
Email me a brief summary:
- Subject: "HGDW Research — [today]"
- Lead story (2-3 sentences)
- 3 notable items (one line each)
- Any trend alerts from the trend index
```

## agent: trend-synthesis
**rrule:** FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=8;BYMINUTE=30
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-trend-synthesizer skill.
Read today's research from /home/workspace/HGDW/Research/daily/
Cross-reference with /home/workspace/HGDW/Intelligence/trend-index.md
Update the trend index. If a topic has appeared 3+ times this week, flag it as a trend alert.
Only email me if there's a trend alert:
- Subject: "TREND ALERT: [topic]"
- What the trend is, how many times it appeared, trajectory
- Suggested content angle
```

## agent: weekly-blog-draft
**rrule:** FREQ=WEEKLY;BYDAY=TU;BYHOUR=6;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-blog-post skill.
Read this week's research + trend index. Choose the strongest angle.
After writing, run the hgdw-copy-editor skill on the draft.
Save to /home/workspace/HGDW/Content/blog/
Email me:
- Subject: "Blog Draft Ready — [today]"
- 3 title options, first paragraph, where it's saved
Do NOT publish.
```

## agent: weekly-email-draft
**rrule:** FREQ=WEEKLY;BYDAY=WE;BYHOUR=6;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-weekly-email skill.
Read all daily research + weekly tracker + trend index.
After writing, run the hgdw-copy-editor skill on the draft.
Save to /home/workspace/HGDW/Content/emails/[Thursday's date]-weekly.md
Email me:
- Subject: "Weekly Email Draft — [Thursday's date]"
- 3 subject line options, lead story preview, where it's saved
Do NOT send to list.
```

## agent: weekly-social-posts
**rrule:** FREQ=WEEKLY;BYDAY=TU;BYHOUR=8;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-social-posts skill.
Read this week's research tagged SOCIAL or BOTH.
After writing, run the hgdw-copy-editor skill on the hooks and captions.
Save to /home/workspace/HGDW/Content/social/
Email me:
- Subject: "Social Posts Ready — Week of [Monday]"
- Post count, strongest Instagram hook, where saved
```

## agent: content-repurposer
**rrule:** FREQ=WEEKLY;BYDAY=TH;BYHOUR=9;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-content-repurposer skill.
Read this week's blog post and email from /home/workspace/HGDW/Content/
Transform them into additional formats (X threads, LinkedIn carousels, TikTok scripts, Instagram stories).
Save to /home/workspace/HGDW/Content/social/[date]-repurposed.md
Email me:
- Subject: "Repurposed Content Ready — [today]"
- What was repurposed into what, where saved
```

## agent: daily-review-dashboard
**rrule:** FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;BYHOUR=12;BYMINUTE=0
**delivery:** sms
**model:** default

**instruction:**
```
Run the hgdw-review-dashboard skill.
Build the daily review dashboard at /home/workspace/HGDW/dashboard.md
Scan all content directories for drafts awaiting approval.
Pull recent research highlights and trend data.
Check content performance tracker for published results.

After building the dashboard, send me a text (SMS) with:
- How many drafts are waiting for my approval
- The strongest trend right now
- One-line on what needs my attention most

Keep the text under 160 characters if possible. Just the essentials.
```

## agent: story-continuity-check
**rrule:** FREQ=WEEKLY;BYDAY=FR;BYHOUR=14;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-story-tracker skill.
Log any posts published this week that aren't in the story log yet.
Run all 7 continuity checks.
Generate the story continuity report.
Save to /home/workspace/HGDW/Intelligence/story-continuity-[today].md
Email me:
- Subject: "HGDW Story Check — Week of [Monday]"
- Thread health (any starving?)
- Any continuity flags
- Top recommendation for next week's content to keep the story cohesive
```

## agent: sunday-calibration
**rrule:** FREQ=WEEKLY;BYDAY=SU;BYHOUR=18;BYMINUTE=0
**delivery:** email
**model:** default

**instruction:**
```
Run the hgdw-weekly-calibration skill.
Review this week's content output, performance data, and trend index.
Update calibration log. Propose adjustments to research priorities.
Email me:
- Subject: "HGDW Weekly Calibration — Week of [Monday]"
- What worked, what didn't, what to prioritize next week
- Any sources to promote/demote
- Trend trajectory report
```
