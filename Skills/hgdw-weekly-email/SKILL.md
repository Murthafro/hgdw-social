---
name: hgdw-weekly-email
description: >-
  Write the HOT GIRLS DONT WORK weekly AI email newsletter. Pulls from the week's
  daily research files, writes in full HGDW voice, and saves a draft ready to send
  to the list. Use when asked to "write the weekly email", "draft Thursday's newsletter",
  "write the AI digest email", or "generate this week's email".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Weekly Email
  emoji: "💌"
  version: "1.0"
allowed-tools: read_file create_file list_files send_email
---

# HGDW Weekly Email Generator

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`

---

## Step 1: Pull This Week's Research
Read `/home/workspace/HGDW/Research/weekly-tracker.md`

Also read each daily research file from this week:
List files in `/home/workspace/HGDW/Research/daily/`
Read the most recent 5–7 files (Mon–Wed or Mon–Thu).

Identify:
- The single best LEAD story of the week
- 3–5 supporting items (tools, news, quotes)
- 1 influencer moment worth highlighting
- Anything that sparked a genuine "oh that's useful" reaction

---

## Step 2: Write the Email

### Voice Check Before Writing
She is NOT reading a newsletter. She's getting a text from her most switched-on girlfriend.
That girlfriend happens to know everything happening in AI and is translating it — for free,
with love, in plain language — so Alex doesn't have to scroll TikTok for 45 minutes to find it.

No jargon. No doom. No "the AI landscape is rapidly evolving." 
Say the thing. Say why it matters. Say what she can do with it. Move on.

---

### Email Structure

**Subject Line (write 3 options, ranked):**
Format: punchy, curious, sounds like a text from a girlfriend.
Examples of the right energy:
- "okay this one actually matters"
- "the AI thing everyone missed this week"
- "she built it in an afternoon (here's how)"
NOT: "This Week's AI Digest: Key Updates for Female Entrepreneurs"

---

**Body:**

```
[Greeting — warm, casual, one line. Never "Hi there!" Never "Hello, gorgeous!"]

[1–2 sentence opener — what's the vibe this week? One observation, no more.]

---

🔥 THE BIG ONE

[Lead story headline — write it like a text, not a press release]

[3–5 sentences. What happened. Why it matters to her specifically. What she can
do with it or how it changes things. Always end with an action or a "so what."]

[Source credit — keep it brief: "via [Name] on [Platform]"]

---

🛠 WHAT DROPPED THIS WEEK

[2–3 tool/product highlights, each in this format:]

[Tool Name] — [One line: what it does in plain language]
[1–2 sentences: the HGDW angle. What work does this eliminate? What time does it buy back?]
[Link]

---

📡 WHO TO WATCH

[1 influencer highlight — one person, one idea they shared this week]
[Why it matters. What she said/did. Quote if it's good.]
[Follow them at: @handle on Platform]

---

🗓 ONE THING TO TRY THIS WEEK

[A single, specific, doable action she can take THIS WEEK using AI]
[It should take under an hour. It should feel like a win, not homework.]
[Write it like a dare, not an assignment.]

---

[Closing — 1–2 lines. Warm. Real. Not a CTA list.]
[Sign-off — Courtney / The HGDW Team / however she signs her emails]

[Footer — unsubscribe link placeholder: {{unsubscribe_link}}]
```

---

## Step 3: Save the Draft
Save to: `/home/workspace/HGDW/Content/emails/[YYYY-MM-DD]-weekly.md`

Create the directory if needed: `/home/workspace/HGDW/Content/emails/`

---

## Step 4: Confirm
Reply with:
- Subject line options (all 3, ranked)
- Preview of the lead story section (first 3 sentences)
- Confirm file saved at correct path
- Ask: "Ready to send, or want me to adjust anything?"

Do NOT send the email without explicit confirmation.
