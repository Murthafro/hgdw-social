---
name: hgdw-blog-post
description: >-
  Write a HOT GIRLS DONT WORK blog post about AI industry news, updates, or trends.
  Translates AI developments into plain language for women entrepreneurs and builders.
  Pulls from the week's research, writes in full HGDW voice, and posts to the site via API.
  Use when asked to "write the blog post", "draft this week's AI blog", "publish the industry post",
  or "write a post about [AI topic]".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Blog Post
  emoji: "✍️"
  version: "1.0"
allowed-tools: read_file create_file list_files run_command search_the_web read_webpage
---

# HGDW Blog Post Generator

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`

---

## Step 1: Choose the Angle
Read `/home/workspace/HGDW/Research/weekly-tracker.md`
Read relevant daily research files from `/home/workspace/HGDW/Research/daily/`

Identify the single best angle for this week's blog post.

A good HGDW blog angle is:
- Rooted in something real that happened in AI this week
- Immediately relevant to a woman who owns a business or wants to
- Answerable with practical takeaways, not just commentary
- Something she'd actually search for, text a friend about, or share

Bad angle: "AI is transforming the business landscape"
Good angle: "This new AI tool does your weekly reporting in 4 minutes"
Good angle: "Why the thing everyone's scared about AI is actually the opportunity"
Good angle: "Allie Miller said something this week that changed how I think about building"

If the user specified a topic, use that instead.

---

## Step 2: Write the Blog Post

### Voice Check
This is not a tech blog. This is not a productivity blog.
This is HOT GIRLS DONT WORK. We translate. We empower. We make her feel capable
and excited, not overwhelmed and behind.

Write like you're writing to Alex — 35, runs her own thing, sharp, busy, doesn't have
time for fluff but loves a good read that makes her feel ahead of the curve.

---

### Blog Post Structure

**Title (write 3 options):**
Format: direct, curious, specific. Sounds like something she'd actually click.
Examples:
- "The AI Tool I'd Tell Every Woman Building Something To Try First"
- "What This Week In AI Actually Means For Your Business (Translated)"
- "She Automated Her Entire Content Calendar. Here's Exactly How."
NOT: "Top 10 AI Trends for Female Entrepreneurs in [Year]"

---

**Body (~600–900 words):**

```
## [HOOK — 1–3 sentences]
Open with the thing that made you stop scrolling. The stat. The quote.
The moment. Make her want the rest.

## [WHAT HAPPENED]
The news, translated. 2–3 short paragraphs max.
No jargon. No acronyms without plain-language definitions.
Write it like you're explaining it to your smartest non-tech girlfriend.

## [WHY IT MATTERS TO HER SPECIFICALLY]
Not "businesses" or "the industry." HER. The woman running her own thing.
What does this change about her day, her workflow, her income potential?
Be specific. Concrete. Real.

## [WHAT SHE CAN DO WITH THIS]
One to three actual, specific things she can try this week.
Written as dares, not instructions.
"Try this: [thing]. Takes 20 minutes. You'll never go back."

## [THE BIGGER PICTURE — optional, 1 paragraph]
Zoom out. What does this tell us about where AI is going?
Frame it as abundance, not threat. She's early. She's positioned. She's building.

## [CLOSE]
1–3 sentences. Warm. Real. Leave her feeling capable and ahead.
Never end with "The future of AI is bright." End with something she'll remember.

[CTA if relevant — keep it soft: "Come build with us." or "Join us in the course."]
```

---

## Step 3: Add Metadata
Prepare the following for the API post:
```json
{
  "title": "[chosen title]",
  "slug": "[url-friendly-slug]",
  "category": "AI Industry",
  "tags": ["AI", "Women in Business", "Automation", "Building"],
  "excerpt": "[2 sentence summary for preview]",
  "body": "[full post content in markdown]",
  "published_at": "[today's date]",
  "status": "draft"
}
```

---

## Step 4: Post to Site via API
Read the API endpoint from `/home/workspace/HGDW/config/blog-api.md`
(This file should contain the endpoint URL and auth token for the HGDW site CMS.)

Post the draft via the stored API credentials.
Status should be `draft` unless the user explicitly says "publish."

---

## Step 5: Save Local Copy
Save to: `/home/workspace/HGDW/Content/blog/[YYYY-MM-DD]-[slug].md`

---

## Step 6: Confirm
Reply with:
- Title options (all 3, ranked)
- First paragraph of the post
- Confirm draft posted to site (or saved locally if API not configured)
- Ask: "Good to publish, or want edits first?"
