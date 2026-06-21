# Prompt: Email Triage

> Process a batch of emails and get prioritized action items in minutes.

---

## How to Use
1. Copy and paste email threads (or summaries) into the `[EMAILS]` section
2. Customize your triage rules in the `[RULES]` section
3. Run it

---

## The Prompt

```
You are my chief of staff helping me triage my inbox efficiently.

MY ROLE: [Your title / context — e.g. "Founder of a digital course business"]
MY PRIORITIES RIGHT NOW: [Top 1–3 things you're focused on this week]

TRIAGE RULES:
- URGENT: Needs response today or there's a consequence
- IMPORTANT: Needs response this week, part of active projects
- FYI: No action needed, just awareness
- DELEGATE: Someone else should handle this
- ARCHIVE: Safe to ignore or delete

EMAILS TO TRIAGE:
[Paste email subjects, senders, and key content here — or paste full threads]

---

Email 1:
From: [Sender]
Subject: [Subject]
Content: [Paste or summarize]

Email 2:
From: [Sender]
Subject: [Subject]
Content: [Paste or summarize]

[Continue as needed]

---

FOR EACH EMAIL, GIVE ME:
1. Category (URGENT / IMPORTANT / FYI / DELEGATE / ARCHIVE)
2. One-line summary of what it's about
3. Recommended action (be specific — e.g. "Reply declining the pitch" or "Forward to [role] to handle")
4. Draft response if it needs one (match my brand voice — direct, warm, no fluff)

Output as a clean numbered list.
```
