# Prompt: SOP Automator

> Describe any recurring task and get a ready-to-document SOP — or improve one you already have.

---

## How to Use

**Option A — Build a new SOP:**
Describe a recurring task you do and Claude will structure it into a clean SOP.

**Option B — Improve an existing SOP:**
Paste your current SOP and Claude will tighten, optimize, and identify what's missing.

---

## Option A Prompt — Build From Scratch

```
I need to turn a recurring task into a documented SOP.

TASK NAME: [What do you call this process?]

WHAT IT IS: [Describe what this task involves in plain language]

HOW OFTEN IT HAPPENS: [Daily / weekly / monthly / triggered by X]

WHO DOES IT: [You / a team member / a VA / AI]

ROUGH STEPS (as messy as you want):
[List the steps as you currently do them — unpolished is fine]

WHAT GOOD LOOKS LIKE:
[What does a successful output of this process look like?]

WHAT BAD LOOKS LIKE:
[What goes wrong when this process breaks down?]

---

Please produce a clean, complete SOP using this format:

## SOP: [Name]
**Purpose:** [One sentence]
**Frequency:** [How often]
**Owner:** [Who]
**Inputs Required:** [List]

**Steps:**
1. [Step with enough detail that someone new could follow it]
2. ...

**Output / Deliverable:** [What is produced]
**Quality Check:** [How to verify it was done correctly]
**Edge Cases:** [Known variations or exceptions]
**Tools Used:** [List any software, templates, or resources]
```

---

## Option B Prompt — Improve an Existing SOP

```
Please review and improve this SOP.

CURRENT SOP:
[Paste your existing SOP here]

CONTEXT:
- Who uses this SOP: [You / team member / VA / AI agent]
- Pain points with the current version: [What's unclear, slow, or breaking?]
- Goal of the improvement: [E.g. "Make it AI-executable" or "Simplify for a new hire"]

Please:
1. Identify gaps, ambiguities, or missing steps
2. Rewrite it as a tighter, more actionable version
3. Flag any steps that could be automated or delegated
4. Suggest any tools that would make this faster
```
