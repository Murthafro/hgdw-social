---
name: hgdw-bootstrap
description: >-
  Install the full HGDW AI Research & Content Machine into Zo Computer. Idempotent — safe
  to re-run on updates. Sets up all skills, directory structure, and automations.
  Use when asked to "install HGDW", "set up the content machine", or "run the bootstrap".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Bootstrap Installer
  emoji: "⚡"
  version: "1.0"
allowed-tools: run_command create_file read_file list_files create_automation list_automations edit_automation
---

# HGDW Bootstrap — Install the Content Machine

## What This Does
Installs the HOT GIRLS DONT WORK AI Research & Content Machine into this Zo instance.
Sets up skills, directory structure, automations, and reference files.
Safe to re-run — checks before creating, updates instead of duplicating.

---

## Step 1: Create Directory Structure

Run:
```bash
mkdir -p /home/workspace/HGDW/Research/daily
mkdir -p /home/workspace/HGDW/Content/emails
mkdir -p /home/workspace/HGDW/Content/blog
mkdir -p /home/workspace/HGDW/Content/social
mkdir -p /home/workspace/HGDW/config
mkdir -p /home/workspace/Skills/references
```

---

## Step 2: Copy Reference Files
Copy from the repo to the live Skills directory:

```bash
cp ~/repos/hgdw-zo/Skills/references/hgdw-brand.md /home/workspace/Skills/references/
cp ~/repos/hgdw-zo/Skills/references/hgdw-influencer-watchlist.md /home/workspace/Skills/references/
```

---

## Step 3: Copy Skills
```bash
cp -r ~/repos/hgdw-zo/Skills/hgdw-daily-ai-research /home/workspace/Skills/
cp -r ~/repos/hgdw-zo/Skills/hgdw-weekly-email /home/workspace/Skills/
cp -r ~/repos/hgdw-zo/Skills/hgdw-blog-post /home/workspace/Skills/
cp -r ~/repos/hgdw-zo/Skills/hgdw-social-posts /home/workspace/Skills/
```

---

## Step 4: Create Weekly Tracker (if not exists)

Check if `/home/workspace/HGDW/Research/weekly-tracker.md` exists.
If not, create it with this content:

```markdown
# HGDW Weekly Research Tracker
> Updated daily by the research sweep. Read by the weekly email, blog, and social skills.

---
```

---

## Step 5: Create Blog API Config Placeholder (if not exists)

Check if `/home/workspace/HGDW/config/blog-api.md` exists.
If not, create it:

```markdown
# HGDW Blog API Config

## Endpoint
POST [YOUR_CMS_API_ENDPOINT_HERE]

## Auth
Bearer token: [YOUR_API_TOKEN_HERE]

## Notes
- Status "draft" = saved but not live
- Status "published" = goes live immediately
- Always post as draft unless explicitly asked to publish
```

Then tell me: "⚠️ Blog API config needs to be filled in. Open /home/workspace/HGDW/config/blog-api.md and add your CMS endpoint and API token."

---

## Step 6: Install Automations

Read `/home/workspace/Skills/hgdw-bootstrap/../../../repos/hgdw-zo/install/automations.md`
(or read from `~/repos/hgdw-zo/install/automations.md`)

For each automation defined in that file:
1. Call `list_automations` to check if it already exists by name
2. If it exists → call `edit_automation` to update with latest instruction
3. If it doesn't exist → call `create_automation` with the full config

Create all 4 core automations (skip #5 optional unless asked):
- HGDW Daily AI Research
- HGDW Weekly Email Draft
- HGDW Weekly Blog Draft
- HGDW Weekly Social Posts

---

## Step 7: Verify

Report:
```
✅ Directory structure created
✅ Reference files installed
✅ Skills installed: [list each]
✅ Automations installed: [list each with schedule]
⚠️ Action needed: [anything that requires manual input]

The HGDW Content Machine is live.

Next steps:
1. Fill in /home/workspace/HGDW/config/blog-api.md with your CMS credentials
2. The daily research will run tomorrow at 7am
3. Your first email draft will be ready Wednesday morning
4. To run the research manually right now: "run the hgdw-daily-ai-research skill"
```
