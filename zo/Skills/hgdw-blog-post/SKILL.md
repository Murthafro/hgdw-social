---
name: hgdw-blog-post
description: >-
  Write a HOT GIRLS DONT WORK blog post. Translates AI developments into plain
  language for women entrepreneurs. Pulls from research, trend data, and expert
  copywriting frameworks. Use when asked to "write the blog post", "draft this
  week's AI blog", or "write a post about [topic]".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Blog Post
  emoji: "✍️"
  version: "2.0"
allowed-tools: read_file create_file list_files run_command search_the_web read_webpage
---

# HGDW Blog Post Generator

## Read First
1. Read `/home/workspace/hgdw-social/context/hgdw-brand.md`
2. Read `/home/workspace/hgdw-social/context/hgdw-copywriting-playbook.md`
3. Read `/home/workspace/hgdw-social/context/hgdw-hook-library.md`
4. Read `/home/workspace/HGDW/Intelligence/trend-index.md`

---

## Step 1: Choose the Angle
Read weekly tracker + daily research + latest trend synthesis.

Prioritize:
1. Topics with RISING or SPIKE trajectory in the trend index
2. Topics the calibration log says performed well before
3. Topics with strong synthesis connections (multi-source coverage)

A good angle:
- Rooted in something real from this week
- Immediately relevant to Alex
- Answerable with practical takeaways
- Something she'd text a friend about

BAD: "AI is transforming the business landscape"
GOOD: "This new AI tool does your weekly reporting in 4 minutes"
GOOD: "Allie Miller said something this week that changed how I think about building"

---

## Step 2: Write the Blog Post

### Title (write 3 options)
Use Hook Library formulas. Sound like something she'd click.

### Body (~600-900 words)
Follow the "Translation" framework from the Copywriting Playbook:

[HOOK — 1-3 sentences. Stop the scroll.]
[WHAT HAPPENED — translated. 2-3 paragraphs. No jargon.]
[WHY IT MATTERS TO HER — not "businesses." HER.]
[WHAT SHE CAN DO — dares, not instructions. "Try this. Takes 20 min. You'll never go back."]
[BIGGER PICTURE — optional. Abundance, not threat.]
[CLOSE — warm, memorable, capable]

---

## Step 3: Quality Check
Run all 5 sweeps from the Copywriting Playbook.
Pay special attention to:
- Hook quality (would YOU stop scrolling?)
- Specificity (real numbers, real tools, real names)
- Voice (text from a friend, not a press release)

---

## Step 4: Add Metadata
```json
{
  "title": "[chosen title]",
  "slug": "[url-slug]",
  "category": "AI Industry",
  "tags": ["AI", "Women in Business", "Automation", "Building"],
  "excerpt": "[2 sentences]",
  "status": "draft"
}
```

## Step 5: Post to CMS
Read `/home/workspace/HGDW/config/blog-api.md`
Post as draft. Never publish without confirmation.

## Step 6: Save Local Copy
Save to `/home/workspace/HGDW/Content/blog/[YYYY-MM-DD]-[slug].md`

## Step 7: Confirm
- Title options (ranked)
- First paragraph
- Confirm draft posted/saved
- Ask: "Good to publish, or want edits?"
```

---
