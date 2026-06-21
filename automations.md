# HGDW Zo Automations
> Paste each agent config into Zo's Automations tab, or ask Zo to create them
> by reading this file: "Read ~/repos/hgdw-zo/install/automations.md and create all automations."

---

## Automation 1: Daily AI Research Sweep

**Name:** HGDW Daily AI Research
**RRULE:** `FREQ=WEEKDAY;BYHOUR=7;BYMINUTE=0`
*(Runs Mon–Fri at 7am — research is ready by 8am when you check email)*
**Delivery:** email
**Model:** default

**Instruction:**
```
Run the hgdw-daily-ai-research skill.

Today's date is [today]. Save all output to /home/workspace/HGDW/Research/daily/[today].md
and update the weekly tracker at /home/workspace/HGDW/Research/weekly-tracker.md.

When done, send me a brief email summary with:
- Subject: "☕ HGDW Research — [today's date]"
- Today's lead AI story (2–3 sentences)
- 3 other notable items (one line each)
- Total items found vs filtered

Keep the email short. I'll dig into the full file if I want more.
```

---

## Automation 2: Weekly Email Draft

**Name:** HGDW Weekly Email Draft
**RRULE:** `FREQ=WEEKLY;BYDAY=WE;BYHOUR=6;BYMINUTE=0`
*(Runs Wednesday at 6am — email draft ready for Thursday send)*
**Delivery:** email
**Model:** default

**Instruction:**
```
Run the hgdw-weekly-email skill.

Read all daily research files from this week in /home/workspace/HGDW/Research/daily/
and the weekly tracker at /home/workspace/HGDW/Research/weekly-tracker.md.

Write Thursday's HOT GIRLS DONT WORK weekly email.
Save the draft to /home/workspace/HGDW/Content/emails/[this Thursday's date]-weekly.md

When done, email me:
- Subject: "💌 Weekly Email Draft Ready — [Thursday's date]"
- The 3 subject line options
- Preview of the lead story section (first paragraph)
- Where the draft is saved

Do NOT send the email to the list. This is a draft for my review only.
```

---

## Automation 3: Weekly Blog Post Draft

**Name:** HGDW Weekly Blog Draft
**RRULE:** `FREQ=WEEKLY;BYDAY=TU;BYHOUR=6;BYMINUTE=0`
*(Runs Tuesday at 6am — blog ready to review mid-week)*
**Delivery:** email
**Model:** default

**Instruction:**
```
Run the hgdw-blog-post skill.

Read this week's daily research files from /home/workspace/HGDW/Research/daily/
Choose the strongest angle for this week's industry blog post.

Write the full blog post in HOT GIRLS DONT WORK voice.
Post as a DRAFT (not published) via the blog API configured in
/home/workspace/HGDW/config/blog-api.md

Save a local copy to /home/workspace/HGDW/Content/blog/

When done, email me:
- Subject: "✍️ Blog Draft Ready — [today's date]"
- All 3 title options
- First paragraph of the post
- Confirm where it's saved / posted as draft

Do NOT publish. Draft only until I review.
```

---

## Automation 4: Weekly Social Posts

**Name:** HGDW Weekly Social Posts
**RRULE:** `FREQ=WEEKLY;BYDAY=TU;BYHOUR=8;BYMINUTE=0`
*(Runs Tuesday at 8am — alongside blog draft, gives you posts to schedule for the week)*
**Delivery:** email
**Model:** default

**Instruction:**
```
Run the hgdw-social-posts skill.

Read this week's daily research files from /home/workspace/HGDW/Research/daily/
tagged as SOCIAL or BOTH in the weekly tracker.

Write a full set of social posts (Instagram, TikTok, LinkedIn, X/Twitter) for
3–5 items. These are AI industry education posts — NOT promotion for the course.

Save to /home/workspace/HGDW/Content/social/[this week's Monday date]-social-posts.md

When done, email me:
- Subject: "📱 Social Posts Ready — Week of [Monday's date]"
- Number of post sets created
- The single strongest Instagram hook from the batch
- Where the file is saved

Include the full social posts file as an attachment or in the email body.
```

---

## Automation 5: Weekly Content Review (Optional — Add Later)

**Name:** HGDW Weekly Content Review
**RRULE:** `FREQ=WEEKLY;BYDAY=MO;BYHOUR=9;BYMINUTE=0`
*(Runs Monday morning — reviews last week's content, sets up this week)*
**Delivery:** email
**Model:** default

**Instruction:**
```
Review last week's HGDW content output.

1. Read last week's social posts from /home/workspace/HGDW/Content/social/
2. Read last week's blog post from /home/workspace/HGDW/Content/blog/
3. Read last week's email from /home/workspace/HGDW/Content/emails/

Write a brief Monday morning note:
- What were the strongest content pieces last week?
- What topics got covered?
- What should we NOT repeat this week (avoid overlap)?
- What topics from last week's research didn't make it into content?
  (These are candidates for this week)

Save to /home/workspace/HGDW/Research/weekly-review-[this Monday's date].md

Email me a 5-bullet summary.
Subject: "📋 HGDW Content Review — Week of [this Monday's date]"
```
