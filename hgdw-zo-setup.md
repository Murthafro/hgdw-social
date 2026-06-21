# HGDW Content Engine — Complete Zo Setup
> **One file. One prompt. Paste this into Zo and say: "Read this file and set up the entire HGDW content engine."**
> Everything is here: brand voice, influencer watchlist, all 4 skills, all 5 automations, directory structure.

---

# PART 1: BOOTSTRAP INSTRUCTIONS

## Step 1: Create Directory Structure
```bash
mkdir -p /home/workspace/HGDW/Research/daily
mkdir -p /home/workspace/HGDW/Content/emails
mkdir -p /home/workspace/HGDW/Content/blog
mkdir -p /home/workspace/HGDW/Content/social
mkdir -p /home/workspace/HGDW/config
mkdir -p /home/workspace/Skills/references
mkdir -p /home/workspace/Skills/hgdw-daily-ai-research
mkdir -p /home/workspace/Skills/hgdw-weekly-email
mkdir -p /home/workspace/Skills/hgdw-blog-post
mkdir -p /home/workspace/Skills/hgdw-social-posts
```

## Step 2: Write All Reference Files
Save PART 2 (Brand Reference) to `/home/workspace/Skills/references/hgdw-brand.md`
Save PART 3 (Influencer Watchlist) to `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`

## Step 3: Write All Skill Files
Save PART 4 (Daily Research Skill) to `/home/workspace/Skills/hgdw-daily-ai-research/SKILL.md`
Save PART 5 (Weekly Email Skill) to `/home/workspace/Skills/hgdw-weekly-email/SKILL.md`
Save PART 6 (Blog Post Skill) to `/home/workspace/Skills/hgdw-blog-post/SKILL.md`
Save PART 7 (Social Posts Skill) to `/home/workspace/Skills/hgdw-social-posts/SKILL.md`

## Step 4: Create Weekly Tracker (if not exists)
Save to `/home/workspace/HGDW/Research/weekly-tracker.md`:
```markdown
# HGDW Weekly Research Tracker
> Updated daily by the research sweep. Read by the weekly email, blog, and social skills.

---
```

## Step 5: Create Blog API Config Placeholder (if not exists)
Save to `/home/workspace/HGDW/config/blog-api.md`:
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

## Step 6: Create All Automations
Create these 5 automations (check if they exist first — update if so, create if not):

### Automation 1: HGDW Daily AI Research
- **RRULE:** `FREQ=WEEKDAY;BYHOUR=7;BYMINUTE=0` (Mon-Fri at 7am)
- **Delivery:** email
- **Model:** default
- **Instruction:**
```
Run the hgdw-daily-ai-research skill.

Today's date is [today]. Save all output to /home/workspace/HGDW/Research/daily/[today].md
and update the weekly tracker at /home/workspace/HGDW/Research/weekly-tracker.md.

When done, send me a brief email summary with:
- Subject: "HGDW Research — [today's date]"
- Today's lead AI story (2-3 sentences)
- 3 other notable items (one line each)
- Total items found vs filtered

Keep the email short. I'll dig into the full file if I want more.
```

### Automation 2: HGDW Weekly Email Draft
- **RRULE:** `FREQ=WEEKLY;BYDAY=WE;BYHOUR=6;BYMINUTE=0` (Wednesday at 6am)
- **Delivery:** email
- **Model:** default
- **Instruction:**
```
Run the hgdw-weekly-email skill.

Read all daily research files from this week in /home/workspace/HGDW/Research/daily/
and the weekly tracker at /home/workspace/HGDW/Research/weekly-tracker.md.

Write Thursday's HOT GIRLS DONT WORK weekly email.
Save the draft to /home/workspace/HGDW/Content/emails/[this Thursday's date]-weekly.md

When done, email me:
- Subject: "Weekly Email Draft Ready — [Thursday's date]"
- The 3 subject line options
- Preview of the lead story section (first paragraph)
- Where the draft is saved

Do NOT send the email to the list. This is a draft for my review only.
```

### Automation 3: HGDW Weekly Blog Draft
- **RRULE:** `FREQ=WEEKLY;BYDAY=TU;BYHOUR=6;BYMINUTE=0` (Tuesday at 6am)
- **Delivery:** email
- **Model:** default
- **Instruction:**
```
Run the hgdw-blog-post skill.

Read this week's daily research files from /home/workspace/HGDW/Research/daily/
Choose the strongest angle for this week's industry blog post.

Write the full blog post in HOT GIRLS DONT WORK voice.
Post as a DRAFT (not published) via the blog API configured in
/home/workspace/HGDW/config/blog-api.md

Save a local copy to /home/workspace/HGDW/Content/blog/

When done, email me:
- Subject: "Blog Draft Ready — [today's date]"
- All 3 title options
- First paragraph of the post
- Confirm where it's saved / posted as draft

Do NOT publish. Draft only until I review.
```

### Automation 4: HGDW Weekly Social Posts
- **RRULE:** `FREQ=WEEKLY;BYDAY=TU;BYHOUR=8;BYMINUTE=0` (Tuesday at 8am)
- **Delivery:** email
- **Model:** default
- **Instruction:**
```
Run the hgdw-social-posts skill.

Read this week's daily research files from /home/workspace/HGDW/Research/daily/
tagged as SOCIAL or BOTH in the weekly tracker.

Write a full set of social posts (Instagram, TikTok, LinkedIn, X/Twitter) for
3-5 items. These are AI industry education posts — NOT promotion for the course.

Save to /home/workspace/HGDW/Content/social/[this week's Monday date]-social-posts.md

When done, email me:
- Subject: "Social Posts Ready — Week of [Monday's date]"
- Number of post sets created
- The single strongest Instagram hook from the batch
- Where the file is saved

Include the full social posts file as an attachment or in the email body.
```

### Automation 5: HGDW Weekly Content Review (Optional)
- **RRULE:** `FREQ=WEEKLY;BYDAY=MO;BYHOUR=9;BYMINUTE=0` (Monday at 9am)
- **Delivery:** email
- **Model:** default
- **Instruction:**
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
Subject: "HGDW Content Review — Week of [this Monday's date]"
```

## Step 7: Confirm Setup
Report back:
- Directory structure created
- Reference files installed (brand + watchlist)
- Skills installed (list each)
- Automations installed (list each with schedule)
- Action needed: fill in /home/workspace/HGDW/config/blog-api.md with CMS credentials

---
---
---

# PART 2: BRAND REFERENCE
> Save this section to: `/home/workspace/Skills/references/hgdw-brand.md`

## Brand Name (NON-NEGOTIABLE)
Always: HOT GIRLS DONT WORK
Never: HOT GIRLS DON'T WORK (no apostrophe in DONT — ever)

## One-Line Identity
WE USE AI. WORK LESS, EARN MORE, BE HOT.

## Voice
Hilarious, laid back, positive, fun, playful, stoic. The friend who figured it out
and immediately turned around to pull you through. Plain language — no jargon,
no corporate wrapper. Serious ideas feel like a good time.

NEVER: corporate, robotic, preachy, jargon-y, heavy, doom-y, grind-y.
NEVER: imply women are behind, struggling, or late to anything.

## Voice Pillars
1. Ownership Over Everything — confident declarations, not suggestions. "Build it." not "you might consider..."
2. Joy Is the Strategy — fun is infrastructure. AI is a life upgrade, not a chore.
3. Abundance Is the Default — center what's possible. Compound wins, not fears.

## Words We Use
Own / Ownership / Build / Design / Freedom / Automate / Play / Abundance / Real /
Iconic / Empire / Vision / Dream / Systems / Compound / Irreplaceable

## Words We Avoid
Hustle / Grind / Struggle / Toxic / Doom / Victim / Can't / Basic / Fear /
Hard (when used to discourage) / Settle / Behind (implying women are lacking)

## Formatting Style
Short sentences. Punchy. Declarative. Rhythmic. Em dashes for drama.
Fragments are intentional. Every line should stand alone.

## The Reader
She is NOT a beginner who needs hand-holding. She is a woman who is ready —
she just needed someone to hand her the tools and say "go." Speak to her like that.

## North Star Quote
"The future belongs to women who can dream in beauty and execute in systems."

## Audience (Alex, 28-48)
Woman. Competent, probably overqualified. Organized. Life she wants to live more of.
Wants time back. Afraid she's behind. Has tried other courses that didn't stick.
Hangs out on Instagram, TikTok, LinkedIn. Listens to How I Built This, Goal Digger, Hot Smart Rich.

---
---
---

# PART 3: INFLUENCER WATCHLIST
> Save this section to: `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`
>
> **Strategy:** Monitor the bleeding-edge technical voices and major labs FIRST.
> They break news, ship models, and set the frontier. Then we translate their signal
> into plain language for our audience. The women AI educators amplify and validate
> our translations. The publications give us credibility anchors.

## Tier 1 — Bleeding Edge (Technical Voices Who Break News First)

These are the source material. They announce what's next before anyone else talks about it.
We don't share their posts — we TRANSLATE them for our audience.

| Name | Handle(s) | Platform(s) | Why They're Source Material |
|---|---|---|---|
| Sam Altman | @sama | X | CEO of OpenAI. Every post moves the industry. Track announcements, not opinions. |
| Andrej Karpathy | @karpathy | X, YouTube | Ex-Tesla/OpenAI. Best technical explainer alive. His threads become our blog posts. |
| Yann LeCun | @ylecun | X | Meta Chief AI Scientist. Sets the open-source AI narrative. Controversial takes = content. |
| Demis Hassabis | @demishassabis | X | Google DeepMind CEO. When he talks, it's a product drop or a paradigm shift. |
| Dario Amodei | @DarioAmodei | X | Anthropic CEO. Safety + capability framing. His essays = thought leadership source. |
| Jim Fan | @DrJimFan | X | NVIDIA Senior Research Scientist. Explains multimodal and robotics AI clearly. Viral threads. |
| Emad Mostaque | @EMostaque | X | AI builder/founder. Provocative takes on open-source AI and democratization. |
| Ilya Sutskever | — | X | Co-founder SSI, ex-OpenAI Chief Scientist. Rare posts but seismic when he speaks. |
| Francois Chollet | @fchollet | X | Keras creator. Sharpest critic of AI hype. His contrarian takes = our "real talk" angle. |
| George Hotz | @realGeorgeHotz | X, YouTube | tinygrad founder. Raw, unfiltered AI builder. Shows what one person can build with AI. |
| Alexandr Wang | @alexandr_wang | X | Scale AI CEO. Enterprise AI perspective. Tracks where the money is flowing. |
| Harrison Chase | @hwchase17 | X | LangChain founder. Agent/tool ecosystem pulse. What builders are actually using. |
| Guillermo Rauch | @raabordelot | X | Vercel CEO. AI + web dev intersection. v0 and AI-assisted building = our content sweet spot. |
| Pieter Levels | @levelsio | X | Indie hacker + AI builder. Proves one person + AI = million-dollar businesses. Our dream story. |
| Greg Isenberg | @gregisenberg | Instagram, X, Podcast | Entrepreneurship + AI for builders. Strong HGDW audience crossover. |
| Ethan Mollick | — | X, Substack (One Useful Thing) | Best at translating AI research into practical use. No hype. Academic credibility. |
| Mckay Wrigley | @mckaywrigley | X | Builds with AI in public. Shows what's actually possible with real demos. |
| John Hu | @jayhoovy | Instagram | Building a Startup — building in public energy. |
| Lenny Rachitsky | — | Substack, Podcast | Product + AI for builders. Our audience's adjacent read. |

## Tier 2 — Women AI Leaders & Educators

Our audience trusts these voices. They validate what we translate from Tier 1.
Some are original thinkers; some are the best at making AI accessible.

| Name | Handle(s) | Platform(s) | Why She Matters to Us |
|---|---|---|---|
| Allie K. Miller | @alliekmiller | Instagram, LinkedIn, X | Most trusted female AI voice for business builders. Our audience follows her. |
| Sabrina Ramonov | @sabrina_ramonov | Instagram, YouTube, X | AI tools tutorials and demos with massive reach. Shows what's actually possible. |
| Harper Carroll | @harpercarrollai | Instagram, LinkedIn | Stanford + Meta AI Engineer turned Educator. Bridges technical AI and accessibility. |
| Chip Huyen | @huyenchip19 | Instagram, X, LinkedIn | AI/ML engineer, author. Deep technical credibility with approachable delivery. |
| Hannah Fry | @fryrsquared | Instagram, YouTube | Mathematician and AI communicator. Makes complex AI concepts feel human. |
| Aishwarya Srinivasan | @the.datascience.gal | Instagram, LinkedIn | Data & AI LinkedIn Top Voice. Bridges data science and business for women. |
| Amanda Askell | — | X | Anthropic researcher, respected voice in AI safety. |
| Sara Gu | — | X, LinkedIn | VC + AI builder, female founder perspective. |

## Tier 3 — Women AI Creators & Community Voices

Instagram-first creators building AI education content for women.
Good for engagement signals, collab opportunities, and audience pulse.

| Name | Handle(s) | Platform(s) | Why She Matters to Us |
|---|---|---|---|
| The Girl's Guide to AI | @girlsguideai | Instagram | AI education specifically for women. Our exact mission overlap. |
| She Learns AI | @shelearnsai | Instagram | AI learning content for women — beginner-friendly, empowering. |
| AI with Whit | @ai.with.whit | Instagram | AI education content. Translates tools and trends for everyday use. |
| Tracy (That AI Putzing Girl) | @thataiputzinggirl | Instagram | AI tools exploration and education. Hands-on, try-it-yourself energy. |
| Lanie | @lanie.lately | Instagram | AI Avatar Content Coach. Shows creators how to use AI in their content. |
| Claire Zau (ZAUEY) | @zauey.talks | Instagram | AI education talks. Clear, approachable AI content. |
| Shana | @reinesana.ai | Instagram | AI content creator. Practical AI for women building things. |
| Brand Nat | @brand.nat | Instagram | AI/Tech for Business. Speaks directly to our audience's needs. |
| Tiffany Janzen | @tiffintech | Instagram | Tech/AI content for women in business. |
| Simon Says AI | @simon.saysai | Instagram | AI education — clear, actionable tutorials. |
| Magan | @genzbestie | Instagram | Building in Public with AI. Shows the process, not just the polish. |
| CatGPT | @askcatgpt | Instagram | AI content with personality. Makes AI feel fun and approachable. |
| Paula Wehmeyer | @pallipauu | Instagram | AI/Tech content for women. |
| Nandini Mullaji | @dini_inabottle | Instagram | AI and tech education content. |
| Maitri Mangal | @maitrimangal | Instagram | AI content creator. |
| Khris Sheer | @khris.sheer | Instagram | AI/Tech content. |

## Tier 4 — Major AI Labs (Track Announcements & Releases)

These are the source of truth. When a lab ships, that's our content for the week.
Monitor their blogs, X accounts, and press releases.

| Lab | X Handle | Blog/News URL | What to Track |
|---|---|---|---|
| OpenAI | @OpenAI | openai.com/blog | Model releases, API updates, product launches (ChatGPT, GPT, Sora) |
| Anthropic | @AnthropicAI | anthropic.com/news | Claude updates, safety research, enterprise AI moves |
| Google DeepMind | @GoogleDeepMind | deepmind.google/blog | Gemini updates, research breakthroughs, Vertex AI |
| Meta AI (FAIR) | @MetaAI | ai.meta.com/blog | Llama releases, open-source AI, AR/VR + AI convergence |
| Mistral AI | @MistralAI | mistral.ai/news | Open-weight models, European AI, enterprise alternatives |
| xAI | @xabordelot | x.ai | Grok updates, real-time AI, X platform integration |
| Stability AI | @StabilityAI | stability.ai/news | Image/video/audio generation models |
| Cohere | @CohereAI | cohere.com/blog | Enterprise AI, RAG, embeddings — business AI angle |
| Hugging Face | @huggingface | huggingface.co/blog | Open-source AI hub — tracks what builders are actually using |
| NVIDIA AI | @NVIDIAAI | nvidia.com/en-us/ai | Hardware + software stack, AI infrastructure, developer tools |
| Perplexity | @perplexity_ai | perplexity.ai/blog | AI search, answer engines — direct consumer AI impact |
| Runway | @runwayml | runwayml.com/blog | AI video generation — creative tools our audience cares about |
| ElevenLabs | @elevabordelot | elevenlabs.io/blog | AI voice/audio — content creator tools |
| Midjourney | @midjourney | midjourney.com | AI image generation — visual content tools |
| Cursor / Anysphere | @cursor_ai | cursor.com/blog | AI coding tools — "build without coding" narrative |

## Tier 5 — Major Publications & Newsletters

Credibility anchors. When we cite these, our audience trusts the info.
Also good for finding stories we missed from Tier 1.

| Publication | X Handle | URL | What to Track |
|---|---|---|---|
| MIT Technology Review | @techreview | technologyreview.com | Deepest AI reporting. Gold standard for "what's real." |
| Wired | @WIRED | wired.com/tag/artificial-intelligence | AI + culture + business intersection. Our tone neighbor. |
| The Verge | @verge | theverge.com/ai-artificial-intelligence | Consumer AI news. How real people experience AI changes. |
| Ars Technica | @arstechnica | arstechnica.com/ai | Technical but accessible AI coverage. |
| TechCrunch | @TechCrunch | techcrunch.com/category/artificial-intelligence | AI startup funding, product launches, industry moves. |
| The Information | @TheInformation | theinformation.com | Insider scoops on AI companies. Paywalled but worth mining headlines. |
| Bloomberg Technology | @technology | bloomberg.com/technology | AI business and market impact. Enterprise angle. |
| VentureBeat | @VentureBeat | venturebeat.com/category/ai | AI enterprise and developer news. |
| Joanna Stern (WSJ) | — | WSJ, YouTube | Translates tech for real humans — our exact translation mission. |
| Latent Space podcast | — | Podcast, X | Technical depth — mine for "what's real" vs hype. |
| TLDR AI Newsletter | — | Email | Daily AI news digest — good raw source. |
| The Rundown AI | — | Email | Consumer-friendly AI news. |
| AI Breakfast | — | Substack | Curated for builders. |
| Ben's Bites | — | Email | Daily AI newsletter — builder-focused, high signal. |
| The Neuron | — | Email | AI news for non-technical readers. Tone model for us. |
| Import AI | — | Email | Weekly AI research roundup by Jack Clark (Anthropic co-founder). |

## Tier 6 — Organizations & Communities

| Name | Handle(s) | Platform(s) | Notes |
|---|---|---|---|
| Women Who Code | @womenwhocode | Instagram, LinkedIn | Community signals — women in tech at scale |
| Women In Tech Podcast | @womenintechshow | Instagram, Podcast | Stories of women in tech — interview gems to mine |
| ELVTR | @elvtrcom | Instagram | Education platform with AI courses. Track for trends. |
| Jacklyn / The Next Big Thing | @nbtjacklyn | Instagram | Tech/AI content and trends |
| Women in AI (organization) | — | LinkedIn | Community signals, not just influencer content |

## Content Pipeline: How We Use These Tiers

```
TIER 1 (Technical Voices) + TIER 4 (Labs) + TIER 5 (Publications)
    = RAW SIGNAL (what's actually happening at the frontier)
         |
         v
    HGDW TRANSLATION LAYER
    "What does this mean for YOUR time / income / freedom?"
         |
         v
TIER 2 (Women AI Leaders) + TIER 3 (Women AI Creators)
    = VALIDATION & AMPLIFICATION (they're saying it too, in their own way)
         |
         v
    HGDW CONTENT (email, blog, social)
    Written for Alex, 28-48, building her thing, ready to go.
```

## Framing Filter
Before including ANY news item in HGDW content, ask:
- Can a non-technical woman use this or care about this?
- Does this open a door or close one?
- Can we translate this into "here's what this means for YOUR time / income / freedom"?

If yes to any -> include.
If it's purely technical with no lifestyle/business relevance -> skip.

---
---
---

# PART 4: DAILY AI RESEARCH SKILL
> Save this section to: `/home/workspace/Skills/hgdw-daily-ai-research/SKILL.md`

```
---
name: hgdw-daily-ai-research
description: >-
  Run the daily HGDW AI research sweep. Monitors AI influencers, news sources,
  and industry drops relevant to women entrepreneurs and builders. Outputs a
  structured daily research file that powers the weekly email, blog post, and
  social content. Use when asked to "run the daily research", "do the AI sweep",
  "pull today's AI news", or "what happened in AI today".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Daily AI Research
  emoji: "🔍"
  version: "2.0"
allowed-tools: search_the_web research_the_web read_webpage search_x create_file read_file
---

# HGDW Daily AI Research Sweep

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`

---

## Step 1: Set the Date
Note today's date. The output file will be saved as:
`/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md`

Create the directory if it doesn't exist:
`/home/workspace/HGDW/Research/daily/`

---

## Step 2: Lab & Frontier Sweep (Run First — This Is the Source Material)
Search the following, prioritizing the last 24 hours. These are the bleeding-edge
sources we TRANSLATE for our audience.

Run these searches in parallel:

**Major Lab Announcements:**
- `OpenAI announcement today`
- `Anthropic Claude news today`
- `Google DeepMind Gemini news today`
- `Meta AI Llama news today`
- `Mistral AI news today`
- `AI model release today`

**Major Publications:**
- `site:techcrunch.com AI` — last 24h
- `site:theverge.com artificial intelligence` — last 24h
- `site:technologyreview.com AI` — last 24h
- `site:wired.com artificial intelligence` — last 24h
- `site:arstechnica.com AI` — last 24h

**Bleeding-Edge Technical Voices:**
- `site:x.com Andrej Karpathy` — last 24h
- `site:x.com Jim Fan NVIDIA` — last 24h
- `site:x.com Francois Chollet` — last 24h
- `site:x.com Pieter Levels AI` — last 24h
- `site:x.com Yann LeCun` — last 24h
- `site:x.com Sam Altman` — last 24h
- `site:x.com Ethan Mollick AI` — last 24h
- `Greg Isenberg AI entrepreneur` — last 24h

For each result worth keeping, note:
- Source (who said it / where)
- The core idea in 1-2 sentences
- The HGDW translation: what does this mean for a woman building her business?
- Tier (1 = lead story, 2 = supporting detail, 3 = background signal)

---

## Step 3: Women AI Voices & Industry Sweep
Search for validation and audience-relevant angles:

**Women AI Leaders (check what they're saying about the same news):**
- `Allie Miller AI site:linkedin.com`
- `Allie Miller AI site:x.com`
- `Sabrina Ramonov AI tools`
- `Harper Carroll AI site:x.com`
- `Chip Huyen AI site:x.com`
- `site:instagram.com sabrina_ramonov`
- `site:instagram.com girlsguideai`
- `site:instagram.com shelearnsai`
- `site:instagram.com ai.with.whit`

**General Industry:**
- `new AI tools launched today`
- `AI tools women entrepreneurs`
- `AI for small business this week`
- `AI business automation news today`
- `Product Hunt AI today`

Apply the Framing Filter from the watchlist:
- Can a non-technical woman use this or care about this?
- Does this open a door or close one?
- Can we frame it as "here's what this means for your time / income / freedom"?

Keep items that pass. Discard items that don't.

---

## Step 4: Identify Today's Top Story
From everything gathered, identify ONE lead story — the single most relevant,
most exciting, most share-worthy thing that happened in AI today for our audience.

The lead story should be something that answers: "Why does this matter to a woman
who wants to own her time and build something real?"

---

## Step 5: Write the Daily Research File

Save to `/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md` with this structure:

# HGDW Daily AI Research — [DATE]

## Lead Story
**[Headline]**
[2-3 sentences: what happened + why it matters to our audience]
Source: [name + link]

## Frontier Signal (Labs & Technical Voices)
[For each lab announcement or technical voice post:]
**[Source Name]** — [Platform]
[1-2 sentence summary of what happened]
HGDW Translation: [How to explain this to our audience in plain language]
Source: [link]

## Women AI Voices
[For each notable post/piece from women AI leaders:]
**[Name]** — [Platform]
[1-2 sentence summary]
HGDW Angle: [How to frame this for our audience]
Source: [link]

## New Tools & Drops
[For each relevant tool/product launch:]
**[Tool Name]**
[What it does in plain language]
HGDW Angle: [What kind of work does this eliminate? What time does it buy back?]
Source: [link]

## Industry News
[3-5 supporting news items]
**[Headline]**
[1-2 sentence summary]
Source: [link]

## Skipped (Why)
[Brief log of what was filtered out and why — helps calibrate over time]

## Weekly Content Pool
[Tag each item for downstream use:]
- LEAD: [item] -> email hero story
- BLOG: [item] -> potential blog angle
- SOCIAL: [item] -> Instagram / TikTok / LinkedIn / X
- BOTH: [item] -> blog + social

---

## Step 6: Append to Weekly Tracker
Read `/home/workspace/HGDW/Research/weekly-tracker.md`.
If it doesn't exist, create it.

Append today's lead story and top 3 items with their content tags.
This file is what the weekly email skill reads on Thursday.

Format:
## [DATE]
- LEAD: [headline] — [1 sentence] — [link]
- [tag]: [headline] — [1 sentence] — [link]
- [tag]: [headline] — [1 sentence] — [link]

---

## Step 7: Confirm
Reply with a brief summary:
- Today's lead story (1 sentence)
- Number of items found
- Number of items filtered out
- Confirm file saved at correct path
- Confirm weekly tracker updated

Keep it short. This is an internal ops update, not a content piece.
```

---
---
---

# PART 5: WEEKLY EMAIL SKILL
> Save this section to: `/home/workspace/Skills/hgdw-weekly-email/SKILL.md`

```
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
Read the most recent 5-7 files (Mon-Wed or Mon-Thu).

Identify:
- The single best LEAD story of the week
- 3-5 supporting items (tools, news, quotes)
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

[Greeting — warm, casual, one line. Never "Hi there!" Never "Hello, gorgeous!"]

[1-2 sentence opener — what's the vibe this week? One observation, no more.]

---

THE BIG ONE

[Lead story headline — write it like a text, not a press release]

[3-5 sentences. What happened. Why it matters to her specifically. What she can
do with it or how it changes things. Always end with an action or a "so what."]

[Source credit — keep it brief: "via [Name] on [Platform]"]

---

WHAT DROPPED THIS WEEK

[2-3 tool/product highlights, each in this format:]

[Tool Name] — [One line: what it does in plain language]
[1-2 sentences: the HGDW angle. What work does this eliminate? What time does it buy back?]
[Link]

---

WHO TO WATCH

[1 influencer highlight — one person, one idea they shared this week]
[Why it matters. What she said/did. Quote if it's good.]
[Follow them at: @handle on Platform]

---

ONE THING TO TRY THIS WEEK

[A single, specific, doable action she can take THIS WEEK using AI]
[It should take under an hour. It should feel like a win, not homework.]
[Write it like a dare, not an assignment.]

---

[Closing — 1-2 lines. Warm. Real. Not a CTA list.]
[Sign-off — Courtney / The HGDW Team / however she signs her emails]

[Footer — unsubscribe link placeholder: {{unsubscribe_link}}]

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
```

---
---
---

# PART 6: BLOG POST SKILL
> Save this section to: `/home/workspace/Skills/hgdw-blog-post/SKILL.md`

```
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

**Body (~600-900 words):**

## [HOOK — 1-3 sentences]
Open with the thing that made you stop scrolling. The stat. The quote.
The moment. Make her want the rest.

## [WHAT HAPPENED]
The news, translated. 2-3 short paragraphs max.
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
1-3 sentences. Warm. Real. Leave her feeling capable and ahead.
Never end with "The future of AI is bright." End with something she'll remember.

[CTA if relevant — keep it soft: "Come build with us." or "Join us in the course."]

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
```

---
---
---

# PART 7: SOCIAL POSTS SKILL
> Save this section to: `/home/workspace/Skills/hgdw-social-posts/SKILL.md`

```
---
name: hgdw-social-posts
description: >-
  Write a series of HOT GIRLS DONT WORK social media posts about AI industry news,
  updates, and advancements. These are educational/industry posts (separate from
  business promotion posts). Translates AI developments for women in business.
  Formats for Instagram, TikTok, LinkedIn, and X/Twitter.
  Use when asked to "write social posts", "draft the AI content", "create this week's posts",
  "write Instagram captions about AI", "make TikTok content about [AI topic]",
  or "generate social content from the research".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Social Posts
  emoji: "📱"
  version: "1.0"
allowed-tools: read_file create_file list_files
---

# HGDW Social Posts Generator

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`

---

## Step 1: Pull Source Material
Read `/home/workspace/HGDW/Research/weekly-tracker.md`
Read daily research files tagged SOCIAL or BOTH from this week.

Identify 3-5 items that are strong enough for standalone social posts.
Each post must pass the HGDW filter:
- Would Alex stop scrolling for this?
- Can we translate it in one sentence?
- Does it make her feel ahead, capable, and invited — not behind or overwhelmed?
- Is it AI industry content (not a promo for the course)?

---

## Step 2: Write the Posts

Write one complete set per item. A "set" means all 4 platforms.

---

### Platform Specs & Voice Notes

**INSTAGRAM**
- Caption: 150-300 words
- Hook in line 1 (before "more" cutoff) — must stop the scroll
- 3-5 short paragraphs. Line breaks between each.
- End with a question or soft CTA ("save this", "share with a friend who needs this")
- Hashtags: 5-8, at bottom, mix of niche + broad
  Always include: #hotgirls #hotgirlsdontwork #AIforwomen #womenentrepreneurs
- Tone: girlfriend-to-girlfriend. Smart. Warm. Never preachy.

**TIKTOK CAPTION**
- 100-150 words max
- Hook: first line is the whole pitch. Make it a pattern interrupt.
- Short sentences. Fast. Punchy.
- End with a question or "follow for more"
- 3-5 hashtags: #hotgirlsdontwork #AItools #womeninbusiness #learnai #fyp

**LINKEDIN**
- 150-250 words
- Opens with a bold declaration or a stat, not a question
- 3-4 short paragraphs, each doing one job
- Closes with a specific takeaway or observation — something she can use
- Professional but never stiff. Still sounds like Courtney, just with her blazer on.
- No hashtag overload: 3-4 max. #AI #WomenInBusiness #Entrepreneurship

**X / TWITTER**
- Primary tweet: under 280 characters. One idea. Maximum punch.
- Optional thread (2-3 additional tweets) if the idea needs unpacking
- Tone: the most confident version of the brand. Declarative. No hedging.
- Never starts with "I" (algorithmic best practice)
- 1-2 hashtags max, only if they add value

---

### Post Template (repeat for each item)

## POST [N]: [Topic — 3 words]
Source: [research item + link]
HGDW Angle: [one sentence — the "so what" for our audience]

---

### INSTAGRAM

[Hook line]

[Body — 3-4 short paragraphs]

[Closing question or CTA]

#hotgirlsdontwork #hotgirls #AIforwomen #womenentrepreneurs [2-4 more]

---

### TIKTOK CAPTION

[Hook — first line is everything]

[2-3 short paragraphs]

[Closing question or "follow for more"]

#hotgirlsdontwork #AItools #womeninbusiness #learnai #fyp

---

### LINKEDIN

[Opening declaration or stat]

[3-4 paragraphs]

[Specific takeaway]

#AI #WomenInBusiness #Entrepreneurship [1 more if relevant]

---

### X / TWITTER

[Primary tweet — under 280 chars]

[Optional thread tweet 2]
[Optional thread tweet 3]

---

## Step 3: Write a "Series Arc" Note
After writing all posts, add a brief note:
- What's the content theme this week? (e.g., "AI tools for time" / "what just dropped" / "big shift in how AI works")
- How do these posts work together as a series?
- Suggested posting order (which one goes first, which one lands hardest at the end of the week)

---

## Step 4: Save the Posts
Save to: `/home/workspace/HGDW/Content/social/[YYYY-MM-DD]-social-posts.md`

Create directory if needed: `/home/workspace/HGDW/Content/social/`

---

## Step 5: Confirm
Reply with:
- Number of post sets written
- The single strongest Instagram hook from the batch (first line only)
- Confirm file saved
- Ask: "Want me to adjust any of these, or schedule them?"
```

---
---
---

# HOW TO USE THIS FILE

1. Upload `hgdw-zo-setup.md` to your Zo (drag into chat or save to files)
2. Tell Zo: **"Read hgdw-zo-setup.md and set up the entire HGDW content engine. Follow the bootstrap instructions in Part 1."**
3. Fill in `/home/workspace/HGDW/config/blog-api.md` with your CMS credentials
4. Done. The machine runs itself from here.

**To run research manually:** "run the daily research"
**To get a blog post:** "write the blog post"
**To get social posts:** "write the social posts"
**To get the weekly email:** "write the weekly email"

---

*HOT GIRLS DONT WORK. We use AI. Work Less. ___ More.*
