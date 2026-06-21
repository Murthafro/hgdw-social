# HGDW Content Engine v2 — Complete Zo Setup
> **One file. One prompt. Paste this into Zo and say: "Read this file and set up the entire HGDW content engine."**
>
> This is a LIVING system. It learns what works, spots trends across days and weeks,
> synthesizes ideas between sources, and gets sharper every cycle. Not just research —
> intelligence.
>
> **What's inside:** Brand voice, 6-tier influencer watchlist, 8 skills, 7 automations,
> intelligence layer (trend detection + learning loops), expert copywriting frameworks
> sourced from the best open-source repos on the internet.

---

# PART 1: BOOTSTRAP INSTRUCTIONS

## Step 1: Create Directory Structure
```bash
mkdir -p /home/workspace/HGDW/Research/daily
mkdir -p /home/workspace/HGDW/Research/trends
mkdir -p /home/workspace/HGDW/Content/emails
mkdir -p /home/workspace/HGDW/Content/blog
mkdir -p /home/workspace/HGDW/Content/social
mkdir -p /home/workspace/HGDW/Intelligence
mkdir -p /home/workspace/HGDW/config
mkdir -p /home/workspace/Skills/references
mkdir -p /home/workspace/Skills/hgdw-daily-ai-research
mkdir -p /home/workspace/Skills/hgdw-weekly-email
mkdir -p /home/workspace/Skills/hgdw-blog-post
mkdir -p /home/workspace/Skills/hgdw-social-posts
mkdir -p /home/workspace/Skills/hgdw-trend-synthesizer
mkdir -p /home/workspace/Skills/hgdw-content-repurposer
mkdir -p /home/workspace/Skills/hgdw-copy-editor
mkdir -p /home/workspace/Skills/hgdw-weekly-calibration
```

## Step 2: Write All Reference Files
Save PART 2 (Brand Reference) to `/home/workspace/Skills/references/hgdw-brand.md`
Save PART 3 (Influencer Watchlist) to `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`
Save PART 4 (Hook Library) to `/home/workspace/Skills/references/hgdw-hook-library.md`
Save PART 5 (Copywriting Playbook) to `/home/workspace/Skills/references/hgdw-copywriting-playbook.md`

## Step 3: Write All Skill Files
Save PART 6 (Daily Research) to `/home/workspace/Skills/hgdw-daily-ai-research/SKILL.md`
Save PART 7 (Trend Synthesizer) to `/home/workspace/Skills/hgdw-trend-synthesizer/SKILL.md`
Save PART 8 (Weekly Email) to `/home/workspace/Skills/hgdw-weekly-email/SKILL.md`
Save PART 9 (Blog Post) to `/home/workspace/Skills/hgdw-blog-post/SKILL.md`
Save PART 10 (Social Posts) to `/home/workspace/Skills/hgdw-social-posts/SKILL.md`
Save PART 11 (Content Repurposer) to `/home/workspace/Skills/hgdw-content-repurposer/SKILL.md`
Save PART 12 (Copy Editor) to `/home/workspace/Skills/hgdw-copy-editor/SKILL.md`
Save PART 13 (Weekly Calibration) to `/home/workspace/Skills/hgdw-weekly-calibration/SKILL.md`

## Step 4: Initialize Intelligence Files
Save to `/home/workspace/HGDW/Intelligence/trend-index.md`:
```markdown
# HGDW Trend Index
> Auto-updated by the trend synthesizer. Tracks recurring themes across days and weeks.
> Format: topic | first seen | times seen | last seen | trajectory (rising/stable/fading)

---
```

Save to `/home/workspace/HGDW/Intelligence/calibration-log.md`:
```markdown
# HGDW Calibration Log
> Updated every Sunday by the weekly calibration skill.
> Tracks what worked, what didn't, and how the engine should adjust.

---
```

Save to `/home/workspace/HGDW/Intelligence/content-performance.md`:
```markdown
# HGDW Content Performance Tracker
> Log content performance here after publishing. The calibration skill reads this.
> Format: date | type (email/blog/social) | title/hook | platform | result (opens/clicks/saves/shares) | notes

---
```

Save to `/home/workspace/HGDW/Research/weekly-tracker.md`:
```markdown
# HGDW Weekly Research Tracker
> Updated daily by the research sweep. Read by the weekly email, blog, and social skills.

---
```

Save to `/home/workspace/HGDW/config/blog-api.md`:
```markdown
# HGDW Blog API Config
POST [YOUR_CMS_API_ENDPOINT_HERE]
Bearer token: [YOUR_API_TOKEN_HERE]
Always post as draft unless explicitly asked to publish.
```

## Step 5: Create All Automations
Create these 7 automations:

### Automation 1: Daily AI Research Sweep
- **RRULE:** `FREQ=WEEKDAY;BYHOUR=7;BYMINUTE=0` (Mon-Fri at 7am)
- **Delivery:** email
- **Instruction:**
```
Run the hgdw-daily-ai-research skill.
Today's date is [today]. Save output to /home/workspace/HGDW/Research/daily/[today].md
and update /home/workspace/HGDW/Research/weekly-tracker.md.
Email me a brief summary:
- Subject: "HGDW Research — [today]"
- Lead story (2-3 sentences)
- 3 notable items (one line each)
- Any trend alerts from the trend index
```

### Automation 2: Trend Synthesis (runs after daily research)
- **RRULE:** `FREQ=WEEKDAY;BYHOUR=8;BYMINUTE=30` (Mon-Fri at 8:30am)
- **Delivery:** email (only if trend alert triggered)
- **Instruction:**
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

### Automation 3: Weekly Blog Draft
- **RRULE:** `FREQ=WEEKLY;BYDAY=TU;BYHOUR=6;BYMINUTE=0` (Tuesday at 6am)
- **Delivery:** email
- **Instruction:**
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

### Automation 4: Weekly Email Draft
- **RRULE:** `FREQ=WEEKLY;BYDAY=WE;BYHOUR=6;BYMINUTE=0` (Wednesday at 6am)
- **Delivery:** email
- **Instruction:**
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

### Automation 5: Weekly Social Posts
- **RRULE:** `FREQ=WEEKLY;BYDAY=TU;BYHOUR=8;BYMINUTE=0` (Tuesday at 8am)
- **Delivery:** email
- **Instruction:**
```
Run the hgdw-social-posts skill.
Read this week's research tagged SOCIAL or BOTH.
After writing, run the hgdw-copy-editor skill on the hooks and captions.
Save to /home/workspace/HGDW/Content/social/
Email me:
- Subject: "Social Posts Ready — Week of [Monday]"
- Post count, strongest Instagram hook, where saved
```

### Automation 6: Content Repurposer
- **RRULE:** `FREQ=WEEKLY;BYDAY=TH;BYHOUR=9;BYMINUTE=0` (Thursday at 9am)
- **Delivery:** email
- **Instruction:**
```
Run the hgdw-content-repurposer skill.
Read this week's blog post and email from /home/workspace/HGDW/Content/
Transform them into additional formats (X threads, LinkedIn carousels, TikTok scripts, Instagram stories).
Save to /home/workspace/HGDW/Content/social/[date]-repurposed.md
Email me:
- Subject: "Repurposed Content Ready — [today]"
- What was repurposed into what, where saved
```

### Automation 7: Sunday Calibration
- **RRULE:** `FREQ=WEEKLY;BYDAY=SU;BYHOUR=18;BYMINUTE=0` (Sunday at 6pm)
- **Delivery:** email
- **Instruction:**
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

## Step 6: Install External Skills (Optional but Recommended)
These are community skills from the Zo Skills Registry and GitHub that power up the engine.
Install them in Zo by browsing the Skills Hub or asking Zo to install them:

```
Install these skills from the Skills Hub:
- copywriting (by Coreyhaines31) — expert conversion copywriting
- copy-editing (by Coreyhaines31) — seven-sweep copy polish
- email-sequence (by Coreyhaines31) — email drip campaigns and sequences
- social-content (by Coreyhaines31) — platform-specific social strategy
- marketing-ideas (by Coreyhaines31) — 140+ marketing tactics
```

Also bookmark these GitHub repos as reference material:
- `stefan-georgi/dtc-copywriting-skills` — 44 RMBC copywriting skills with quality gates
- `jakeolschewski/viral-hook-formulas` — 20 proven hook formulas with psychology
- `jakeolschewski/email-marketing-templates-creators` — email templates + subject line formulas
- `blacktwist/social-media-skills` — content strategy, calendars, repurposing, hooks
- `snehilmodani/ContentPulse` — trend harvesting + multi-format content pipeline
- `PlayingNumbers/Complete-Newsletter-Guide` — newsletter best practices from 1,315 campaigns

## Step 7: Confirm Setup
Report back:
- Directory structure created (including Intelligence/ and trends/)
- Reference files installed (brand + watchlist + hook library + copywriting playbook)
- Skills installed (list all 8)
- Automations installed (list all 7 with schedules)
- Intelligence files initialized (trend index, calibration log, performance tracker)
- External skills installed (list which ones)
- Action needed: fill in blog API config

---
---
---

# PART 2: BRAND REFERENCE
> Save to: `/home/workspace/Skills/references/hgdw-brand.md`

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

## The Reader (Alex, 28-48)
She is NOT a beginner who needs hand-holding. She is a woman who is ready —
she just needed someone to hand her the tools and say "go."

Woman. Competent, probably overqualified. Organized. Life she wants to live more of.
Wants time back. Afraid she's behind. Has tried other courses that didn't stick.
Hangs out on Instagram, TikTok, LinkedIn. Listens to How I Built This, Goal Digger, Hot Smart Rich.

## North Star Quote
"The future belongs to women who can dream in beauty and execute in systems."

## Quality Gates (Apply to ALL Content)
Before publishing anything, verify:
1. **Specificity** — every claim includes a number, name, or timeframe. No vague "streamline" or "optimize."
2. **Audience journey** — copy references where she IS (what she's tried, what's not working)
3. **Proof** — at least one proof point (quote, stat, case study, tool demo)
4. **Voice check** — read it aloud. Does it sound like a text from her smartest friend? Or a corporate newsletter?
5. **The "so what" test** — every section answers "what does this mean for YOUR time / income / freedom?"

---
---
---

# PART 3: INFLUENCER WATCHLIST
> Save to: `/home/workspace/Skills/references/hgdw-influencer-watchlist.md`
>
> **Strategy:** SOURCE then TRANSLATE. Monitor bleeding-edge technical voices and labs FIRST.
> They break news, ship models, set the frontier. We translate for our audience.
> Women AI educators validate. Publications anchor credibility.

## Tier 1 — Bleeding Edge (Source Material We Translate)

| Name | Handle(s) | Platform(s) | Why They're Source Material |
|---|---|---|---|
| Sam Altman | @sama | X | CEO of OpenAI. Every post moves the industry. |
| Andrej Karpathy | @karpathy | X, YouTube | Best technical explainer alive. His threads become our content. |
| Yann LeCun | @ylecun | X | Meta Chief AI Scientist. Open-source narrative. Controversial = content. |
| Demis Hassabis | @demishassabis | X | Google DeepMind CEO. Product drops and paradigm shifts. |
| Dario Amodei | @DarioAmodei | X | Anthropic CEO. Safety + capability framing. |
| Jim Fan | @DrJimFan | X | NVIDIA Senior Research Scientist. Multimodal and robotics. |
| Emad Mostaque | @EMostaque | X | Provocative takes on open-source AI. |
| Ilya Sutskever | — | X | Co-founder SSI. Rare posts but seismic. |
| Francois Chollet | @fchollet | X | Keras creator. Sharpest AI hype critic. Our "real talk" angle. |
| George Hotz | @realGeorgeHotz | X, YouTube | tinygrad founder. One person can build anything with AI. |
| Alexandr Wang | @alexandr_wang | X | Scale AI CEO. Where the money is flowing. |
| Harrison Chase | @hwchase17 | X | LangChain founder. Agent ecosystem pulse. |
| Guillermo Rauch | @rauchg | X | Vercel CEO. AI + web dev. v0 = our content sweet spot. |
| Pieter Levels | @levelsio | X | One person + AI = million-dollar businesses. Our dream story. |
| Greg Isenberg | @gregisenberg | Instagram, X, Podcast | Entrepreneurship + AI. Strong audience crossover. |
| Ethan Mollick | — | X, Substack | Best at translating AI research into practical use. |
| Mckay Wrigley | @mckaywrigley | X | Builds with AI in public. Real demos. |
| John Hu | @jayhoovy | Instagram | Building a Startup — building in public energy. |
| Lenny Rachitsky | — | Substack, Podcast | Product + AI for builders. |

## Tier 2 — Women AI Leaders & Educators

| Name | Handle(s) | Platform(s) | Why She Matters |
|---|---|---|---|
| Allie K. Miller | @alliekmiller | Instagram, LinkedIn, X | Most trusted female AI voice for business builders. |
| Sabrina Ramonov | @sabrina_ramonov | Instagram, YouTube, X | AI tools tutorials with massive reach. |
| Harper Carroll | @harpercarrollai | Instagram, LinkedIn | Stanford + Meta AI turned Educator. |
| Chip Huyen | @huyenchip19 | Instagram, X, LinkedIn | AI/ML engineer, author. Technical + approachable. |
| Hannah Fry | @fryrsquared | Instagram, YouTube | Mathematician. Makes AI feel human. |
| Aishwarya Srinivasan | @the.datascience.gal | Instagram, LinkedIn | Data & AI LinkedIn Top Voice. |
| Amanda Askell | — | X | Anthropic researcher. AI safety voice. |
| Sara Gu | — | X, LinkedIn | VC + AI builder. Female founder perspective. |

## Tier 3 — Women AI Creators (Instagram-first)

| Name | Handle(s) | Why She Matters |
|---|---|---|
| The Girl's Guide to AI | @girlsguideai | AI education for women. Mission overlap. |
| She Learns AI | @shelearnsai | Beginner-friendly AI learning. |
| AI with Whit | @ai.with.whit | Translates tools for everyday use. |
| Tracy | @thataiputzinggirl | Hands-on AI tools exploration. |
| Lanie | @lanie.lately | AI Avatar Content Coach. |
| Claire Zau | @zauey.talks | Clear, approachable AI talks. |
| Shana | @reinesana.ai | Practical AI for builders. |
| Brand Nat | @brand.nat | AI/Tech for Business. |
| Tiffany Janzen | @tiffintech | Tech/AI for women in business. |
| Simon Says AI | @simon.saysai | Clear, actionable tutorials. |
| Magan | @genzbestie | Building in Public with AI. |
| CatGPT | @askcatgpt | AI with personality. Fun. |
| Paula Wehmeyer | @pallipauu | AI/Tech content. |
| Nandini Mullaji | @dini_inabottle | AI education. |
| Maitri Mangal | @maitrimangal | AI content creator. |
| Khris Sheer | @khris.sheer | AI/Tech content. |

## Tier 4 — Major AI Labs

| Lab | X Handle | Blog URL | Track |
|---|---|---|---|
| OpenAI | @OpenAI | openai.com/blog | Model releases, ChatGPT, Sora |
| Anthropic | @AnthropicAI | anthropic.com/news | Claude updates, safety research |
| Google DeepMind | @GoogleDeepMind | deepmind.google/blog | Gemini, research breakthroughs |
| Meta AI | @MetaAI | ai.meta.com/blog | Llama, open-source AI |
| Mistral AI | @MistralAI | mistral.ai/news | Open-weight models |
| xAI | @xai | x.ai | Grok updates |
| Stability AI | @StabilityAI | stability.ai/news | Image/video/audio gen |
| Cohere | @CohereAI | cohere.com/blog | Enterprise AI |
| Hugging Face | @huggingface | huggingface.co/blog | Open-source AI hub |
| NVIDIA AI | @NVIDIAAI | nvidia.com/en-us/ai | AI infrastructure |
| Perplexity | @perplexity_ai | perplexity.ai/blog | AI search |
| Runway | @runwayml | runwayml.com/blog | AI video generation |
| ElevenLabs | @elevenlabsio | elevenlabs.io/blog | AI voice/audio |
| Midjourney | @midjourney | midjourney.com | AI image generation |
| Cursor | @cursor_ai | cursor.com/blog | AI coding tools |

## Tier 5 — Publications & Newsletters

| Publication | X Handle | What to Track |
|---|---|---|
| MIT Technology Review | @techreview | Gold standard AI reporting |
| Wired | @WIRED | AI + culture + business |
| The Verge | @verge | Consumer AI news |
| Ars Technica | @arstechnica | Technical but accessible |
| TechCrunch | @TechCrunch | AI startups and funding |
| The Information | @TheInformation | Insider AI scoops |
| Bloomberg Technology | @technology | AI business impact |
| VentureBeat | @VentureBeat | Enterprise AI news |
| Joanna Stern (WSJ) | — | Tech for real humans |
| Latent Space | — | Technical depth podcast |
| TLDR AI | — | Daily AI news digest |
| The Rundown AI | — | Consumer AI news |
| Ben's Bites | — | Builder-focused daily |
| The Neuron | — | Non-technical AI news |
| Import AI | — | Weekly research roundup |
| AI Breakfast | — | Curated for builders |

## Tier 6 — Communities

| Name | Handle(s) | Notes |
|---|---|---|
| Women Who Code | @womenwhocode | Women in tech at scale |
| Women In Tech Podcast | @womenintechshow | Interview gems |
| ELVTR | @elvtrcom | AI courses, trends |
| Jacklyn / NBT | @nbtjacklyn | Tech/AI trends |
| Women in AI | — | Community signals |

## Content Pipeline

```
TIER 1 (Technical) + TIER 4 (Labs) + TIER 5 (Publications)
    = RAW SIGNAL
         |
    HGDW TRANSLATION LAYER
    "What does this mean for YOUR time / income / freedom?"
         |
TIER 2 (Women AI Leaders) + TIER 3 (Women Creators)
    = VALIDATION & AMPLIFICATION
         |
    HGDW CONTENT (email, blog, social)
```

## Framing Filter
- Can a non-technical woman use this or care about this?
- Does this open a door or close one?
- Can we translate this into time / income / freedom?
If yes -> include. If purely technical with no lifestyle relevance -> skip.

---
---
---

# PART 4: HOOK LIBRARY
> Save to: `/home/workspace/Skills/references/hgdw-hook-library.md`
> Sources: viral-hook-formulas, social-hook-writer, and HGDW voice adaptation

# HGDW Hook Library
> 12 proven hook formulas adapted for the HGDW voice.
> Use these when writing Instagram captions, email subject lines, TikTok openings, and X posts.
> Every hook should sound like a text from your smartest girlfriend, not a marketer.

## The Formulas

### 1. The Curiosity Gap
**Formula:** `[Unexpected outcome] — and [surprising detail] is why.`
**HGDW Example:** "She automated her entire content calendar in an afternoon — and the tool was free."
**Psychology:** The brain craves closure. Incomplete patterns force engagement.
**Best for:** Email subject lines, Instagram hooks, YouTube titles

### 2. The Bold Claim
**Formula:** `I [specific achievement] in [short timeframe] using [method].`
**HGDW Example:** "I cut my client work from 40 hours to 12 using one AI workflow."
**Psychology:** Specific numbers signal credibility. Round numbers feel fake.
**Best for:** TikTok, Instagram Reels, LinkedIn

### 3. The Pattern Interrupt
**Formula:** `Stop [common action everyone does].`
**HGDW Example:** "Stop writing your own social captions. Seriously."
**Psychology:** A direct command breaks autopilot scrolling.
**Best for:** TikTok, Instagram Reels, X

### 4. The Contrarian Take
**Formula:** `[Common belief] is wrong. Here's what actually works.`
**HGDW Example:** "Posting every day is not a strategy. It's a hamster wheel."
**Psychology:** Challenges existing beliefs. Forces reconsideration.
**Best for:** LinkedIn, X threads, blog posts

### 5. The "If You" Qualifier
**Formula:** `If you [specific situation], this changes everything.`
**HGDW Example:** "If you're still manually scheduling your posts, this tool is about to free up 5 hours a week."
**Psychology:** Self-selection. She reads it and thinks "that's me."
**Best for:** Instagram, email subject lines, TikTok

### 6. The Mistake Hook
**Formula:** `The #1 mistake [audience] make with [topic].`
**HGDW Example:** "The #1 mistake women make when they start using AI: trying to learn everything before doing anything."
**Psychology:** Loss aversion. Fear of making mistakes > desire for gains.
**Best for:** All platforms

### 7. The Secret/Hidden Hook
**Formula:** `The [thing] nobody talks about when it comes to [topic].`
**HGDW Example:** "The AI tool nobody talks about that does 80% of your admin work."
**Psychology:** Exclusivity. Insider knowledge. FOMO.
**Best for:** TikTok, Instagram, newsletters

### 8. The Comparison Hook
**Formula:** `[Old way] vs [new way] — the difference is [specific result].`
**HGDW Example:** "Writing captions manually vs using this AI flow — the difference is 4 hours a week."
**Psychology:** Concrete before/after makes abstract value tangible.
**Best for:** Carousels, Reels, blog posts

### 9. The Confession Hook
**Formula:** `I [embarrassing admission about topic]. Here's what I learned.`
**HGDW Example:** "I wasted 3 months trying to learn AI 'the right way.' Here's the shortcut I wish I'd taken."
**Psychology:** Vulnerability builds trust. She sees herself in the struggle.
**Best for:** LinkedIn, newsletters, long-form

### 10. The Proof Hook
**Formula:** `[Specific result] in [timeframe]. Here's exactly how.`
**HGDW Example:** "27 blog posts in one afternoon. Here's exactly how."
**Psychology:** Proof + process. She believes it because of specificity.
**Best for:** All platforms, especially Instagram and YouTube

### 11. The Future Pacing Hook
**Formula:** `In [timeframe], [prediction]. Here's how to be ready.`
**HGDW Example:** "In 6 months, every small business will use AI agents. Here's how to be the one who's already there."
**Psychology:** Positions her as ahead, not behind.
**Best for:** LinkedIn, blog posts, newsletters

### 12. The Empathy Hook
**Formula:** `I know you're [feeling]. That's exactly why [solution].`
**HGDW Example:** "I know you're overwhelmed by AI. That's exactly why I'm breaking down the ONE thing to try this week."
**Psychology:** Validation before solution. She feels seen.
**Best for:** Email subject lines, Instagram, newsletters

## Hook Testing Rules
- Write 3-5 hooks for every piece of content
- The hook that makes YOU stop scrolling is usually the winner
- Specific numbers beat adjectives every time
- Lead with the result, not the process
- If it sounds like a press release, rewrite it
- Save rate = best signal that a hook worked

---
---
---

# PART 5: COPYWRITING PLAYBOOK
> Save to: `/home/workspace/Skills/references/hgdw-copywriting-playbook.md`
> Sources: Stefan Georgi RMBC method, Coreyhaines31 copywriting skill, email-marketing-templates, HGDW voice

# HGDW Copywriting Playbook
> Expert frameworks for writing copy that converts. Every skill references this.

## Core Principles (Non-Negotiable)

### 1. Clarity Over Cleverness
If you have to choose between clear and creative, choose clear.
Every sentence has one job. Remove words that don't add meaning.

### 2. Benefits Over Features
Feature: "AI-powered content generation"
Benefit: "Write a week of posts in 20 minutes"
Always connect features to outcomes in HER life.

### 3. Specificity Over Vagueness
BAD: "Save time on your workflow"
GOOD: "Cut your weekly reporting from 4 hours to 15 minutes"
Use real numbers. Specific numbers ("$4,237") feel documented. Round numbers ("$5,000") feel made up.

### 4. Customer Language Over Company Language
Use the words Alex uses. Not "leverage AI capabilities" but "use AI to get your time back."
Mirror voice-of-customer from DMs, comments, course feedback.

### 5. One Idea Per Section
Don't try to say everything everywhere. Each section advances one argument.
Build a logical flow down the page.

## The HGDW Copy Checklist (Run on EVERY Draft)

### Sweep 1: Structure
- Does the hook stop the scroll?
- Does every section answer "so what?"
- Is there a clear CTA?
- Can I delete the first paragraph and lose nothing? (If yes, delete it.)

### Sweep 2: Voice
- Read it aloud. Does it sound like Courtney texting a friend?
- Are there any words from the "Words We Avoid" list?
- Is there jargon? Kill it.
- Exclamation points? Remove them.

### Sweep 3: Specificity
- Every claim has a number, name, or timeframe
- No "streamline," "optimize," "innovative," "leverage"
- Active voice, not passive

### Sweep 4: Proof
- At least one proof point per piece (stat, quote, case study, tool demo)
- Testimonials are specific and attributed
- Claims are real, not fabricated

### Sweep 5: Platform Fit
- Character limits respected
- Hashtags appropriate for platform
- CTA matches platform behavior (save, share, click, reply)
- Hook works within the platform's "above the fold"

## Email Subject Line Formulas

### Curiosity (Our Best Performer)
- "okay this one actually matters"
- "the AI thing everyone missed this week"
- "she built it in an afternoon (here's how)"

### Benefit-First
- "5 hours back this week — here's the AI that does it"
- "the free tool that replaced my VA"

### Pattern Interrupt
- "stop learning AI." (then inside: "start using it.")
- "I deleted 3 apps this week." (then inside: "replaced them with one AI workflow.")

### Personal
- "I tried this so you don't have to"
- "the tool I'm actually obsessed with rn"

### Testing Protocol
1. Write 5 subject line options for every email
2. Pick top 2 based on gut + formulas
3. A/B test: send each to 15% of list
4. Wait 2 hours for results
5. Send the winner to the remaining 70%

## Content Structure Frameworks

### Newsletter: The Girlfriend Text
```
[Warm greeting — one line]
[1-2 sentence vibe check — what's the energy this week?]
---
THE BIG ONE: [Lead story in 3-5 sentences. What happened. Why it matters to HER.]
---
WHAT DROPPED: [2-3 tools. Name, one line, HGDW angle, link.]
---
WHO TO WATCH: [1 person, 1 idea, why it matters.]
---
ONE THING TO TRY: [Specific, doable, under 1 hour. A dare, not homework.]
---
[Closing — warm, real. Not a CTA list.]
```

### Blog: The Translation
```
[HOOK — the thing that made you stop scrolling]
[WHAT HAPPENED — the news, translated. No jargon.]
[WHY IT MATTERS TO HER — not "businesses." HER.]
[WHAT SHE CAN DO WITH THIS — dares, not instructions]
[BIGGER PICTURE — abundance, not threat. She's early.]
[CLOSE — warm, memorable]
```

### Social: The Scroll Stopper
```
[HOOK — first line is everything. Use the Hook Library.]
[BODY — 3-4 short paragraphs. Line breaks. Punchy.]
[CTA — question or soft ask (save this, share with a friend)]
[HASHTAGS — platform-appropriate]
```

---
---
---

# PART 6: DAILY AI RESEARCH SKILL
> Save to: `/home/workspace/Skills/hgdw-daily-ai-research/SKILL.md`

```
---
name: hgdw-daily-ai-research
description: >-
  Run the daily HGDW AI research sweep. Monitors bleeding-edge technical voices,
  AI labs, publications, and women AI educators. Outputs structured research that
  powers all downstream content. Use when asked to "run the daily research",
  "do the AI sweep", "pull today's AI news", or "what happened in AI today".
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
3. Read `/home/workspace/HGDW/Intelligence/trend-index.md` (to know what's already trending)

---

## Step 1: Set the Date
Output file: `/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md`
Create directory if needed.

---

## Step 2: Lab & Frontier Sweep (This Is the Source Material)
Search the following, prioritizing last 24 hours. Run in parallel:

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

For each result, note:
- Source (who / where)
- Core idea (1-2 sentences)
- HGDW translation: what does this mean for a woman building her business?
- Tier (1 = lead, 2 = supporting, 3 = background)
- Topic tags (for trend index): e.g., "AI agents", "voice AI", "open-source models"

---

## Step 3: Women AI Voices & Industry Sweep
Search for validation and audience angles:

**Women AI Leaders:**
- `Allie Miller AI site:linkedin.com`
- `Sabrina Ramonov AI tools`
- `Harper Carroll AI site:x.com`
- `Chip Huyen AI site:x.com`
- `site:instagram.com sabrina_ramonov`
- `site:instagram.com girlsguideai`
- `site:instagram.com shelearnsai`

**General Industry:**
- `new AI tools launched today`
- `AI tools women entrepreneurs`
- `AI for small business this week`
- `Product Hunt AI today`

Apply the Framing Filter. Keep what passes, discard what doesn't.

---

## Step 4: Fun Tool Spotlight
Search specifically for tools that would make Alex's life better:
- `Product Hunt AI today`
- `new AI tool for content creators`
- `AI tool for small business owners`
- `free AI tools this week`

For each tool worth highlighting:
- Name and URL
- What it does in ONE sentence (no jargon)
- The HGDW angle: what work does this eliminate? What time does it buy back?
- Difficulty: can Alex use this in under 10 minutes?

---

## Step 5: Cross-Reference with Trend Index
Read `/home/workspace/HGDW/Intelligence/trend-index.md`
For each topic found today:
- Is it already in the trend index? If yes, increment count and update "last seen"
- Is it new? Add it with count=1
- Any topic seen 3+ times this week? Mark it as TRENDING and flag for content

Write updated trend index back to file.

---

## Step 6: Identify Today's Top Story
From everything gathered, pick ONE lead story.
It should answer: "Why does this matter to a woman who wants to own her time and build something real?"

---

## Step 7: Write the Daily Research File

Save to `/home/workspace/HGDW/Research/daily/YYYY-MM-DD.md`:

# HGDW Daily AI Research — [DATE]

## TREND ALERTS (if any)
[Topics seen 3+ times this week. Flag these for content.]

## Lead Story
**[Headline]**
[2-3 sentences + why it matters to our audience]
Source: [link]

## Frontier Signal
[Lab announcements and technical voice posts]
**[Source]** — [Platform]
[Summary]
HGDW Translation: [plain language for our audience]
Source: [link]

## Fun Tools
[Tools that make Alex's life better]
**[Tool Name]** — [what it does in one sentence]
HGDW Angle: [what time does it buy back?]
Link: [url]
Difficulty: [easy/medium]

## Women AI Voices
[What the women leaders are saying about the same news]

## Industry News
[3-5 supporting items]

## Skipped (Why)
[What was filtered out — helps calibrate]

## Topic Tags
[List of all topic tags found today — feeds the trend index]

## Weekly Content Pool
- LEAD: [item] -> email hero
- BLOG: [item] -> blog angle
- SOCIAL: [item] -> social post
- TOOL: [item] -> tool spotlight

---

## Step 8: Update Weekly Tracker
Append to `/home/workspace/HGDW/Research/weekly-tracker.md`:
## [DATE]
- LEAD: [headline] — [1 sentence] — [link]
- [tag]: [headline] — [1 sentence] — [link]
- TREND: [any trend alerts]

---

## Step 9: Confirm
- Lead story (1 sentence)
- Items found / filtered
- Trend alerts (if any)
- New topics added to trend index
- File saved + tracker updated
```

---
---
---

# PART 7: TREND SYNTHESIZER SKILL
> Save to: `/home/workspace/Skills/hgdw-trend-synthesizer/SKILL.md`

```
---
name: hgdw-trend-synthesizer
description: >-
  Analyze research across multiple days to spot emerging trends, synthesize
  connections between ideas, and surface content opportunities. Use when asked
  to "find trends", "what's trending", "synthesize this week", "connect the dots",
  or "what patterns are you seeing".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Trend Synthesizer
  emoji: "🔮"
  version: "1.0"
allowed-tools: read_file create_file list_files search_the_web
---

# HGDW Trend Synthesizer

This skill is the INTELLIGENCE LAYER. It reads across multiple days of research
and finds what a single day cannot see: patterns, rising narratives, dying hype,
and content opportunities that compound.

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/HGDW/Intelligence/trend-index.md`
3. Read `/home/workspace/HGDW/Intelligence/calibration-log.md` (to know current priorities)

---

## Step 1: Load Research History
Read all daily research files from this week:
List files in `/home/workspace/HGDW/Research/daily/`
Read the most recent 5-7 files.

---

## Step 2: Extract Topic Signals
For each day's research, extract:
- Topic tags (from the "Topic Tags" section)
- Which sources mentioned each topic
- How the framing changed day-over-day (is the narrative shifting?)

Build a frequency map:
| Topic | Mon | Tue | Wed | Thu | Fri | Total | Trajectory |
|-------|-----|-----|-----|-----|-----|-------|------------|

Trajectory definitions:
- RISING: appeared more times this week than last
- STABLE: consistent presence
- FADING: appeared less than last week
- NEW: first appearance this week
- SPIKE: sudden appearance from 0 to 3+ in one week

---

## Step 3: Synthesis — Connect the Dots
Look for connections BETWEEN topics. This is where the value is.

Examples of synthesis:
- "OpenAI released a new model AND 3 tools launched using it this week = the model release
  is spawning a tool wave. Content angle: 'The 3 tools that just appeared because of [model].'"
- "Andrej Karpathy and Ethan Mollick both talked about AI agents this week. Chip Huyen
  wrote about it too. = AI agents are the consensus narrative. Content angle: 'What everyone
  in AI is talking about this week — and what it means for you.'"
- "Product Hunt had 5 AI writing tools in 3 days = the AI writing space is getting crowded.
  Content angle: 'The best AI writing tool just changed. Again.'"

Write 2-3 synthesis observations.

---

## Step 4: Content Opportunity Score
For each trending topic, score it:
- **Relevance to Alex** (1-5): Would she care? Can she use this?
- **Timeliness** (1-5): Is this peaking now or fading?
- **HGDW angle strength** (1-5): Can we translate this into time/income/freedom?
- **Competition** (1-5): Is everyone already covering this? (Lower = better for us)

Total score = sum. Anything 15+ = strong content opportunity.

---

## Step 5: Generate Content Angles
For the top 3 scoring topics, write:
- **Headline** (in HGDW voice)
- **The HGDW angle** (1 sentence: why Alex cares)
- **Recommended format** (blog, email lead, social series, or all three)
- **Key sources to cite**

---

## Step 6: Update Trend Index
Write updated trend index to `/home/workspace/HGDW/Intelligence/trend-index.md`:
- Add new topics with count=1
- Increment existing topics
- Update trajectory for all topics
- Archive topics not seen in 2+ weeks (move to "Archived" section)

---

## Step 7: Save Synthesis Report
Save to `/home/workspace/HGDW/Research/trends/YYYY-MM-DD-synthesis.md`

---

## Step 8: Confirm
- Number of topics tracked
- Top 3 content opportunities with scores
- Any trend alerts (SPIKE or 3+ mentions)
- Synthesis observations (the connections)
```

---
---
---

# PART 8: WEEKLY EMAIL SKILL
> Save to: `/home/workspace/Skills/hgdw-weekly-email/SKILL.md`

```
---
name: hgdw-weekly-email
description: >-
  Write the HOT GIRLS DONT WORK weekly AI email newsletter. Pulls from the week's
  research, trend index, and calibration data. Writes in full HGDW voice.
  Use when asked to "write the weekly email", "draft Thursday's newsletter",
  or "write the AI digest email".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Weekly Email
  emoji: "💌"
  version: "2.0"
allowed-tools: read_file create_file list_files send_email
---

# HGDW Weekly Email Generator

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-copywriting-playbook.md`
3. Read `/home/workspace/Skills/references/hgdw-hook-library.md`
4. Read `/home/workspace/HGDW/Intelligence/trend-index.md`
5. Read `/home/workspace/HGDW/Intelligence/calibration-log.md`

---

## Step 1: Pull This Week's Intelligence
Read weekly tracker + all daily research from this week.
Read the latest trend synthesis report from `/home/workspace/HGDW/Research/trends/`

Identify:
- The best LEAD story (use trend synthesis for signal)
- 2-3 tool highlights
- 1 influencer moment worth sharing
- 1 trending topic to build the "ONE THING TO TRY" around
- What the calibration log says worked/didn't work last time

---

## Step 2: Write the Email

### Voice Check
She's getting a text from her most switched-on girlfriend. Not a newsletter.
No jargon. No doom. No "the AI landscape is rapidly evolving."
Say the thing. Say why it matters. Say what she can do with it. Move on.

### Subject Line (write 5 options, rank top 3)
Use formulas from the Hook Library:
- 1 curiosity gap
- 1 bold claim
- 1 pattern interrupt
- 1 benefit-first
- 1 personal/confession

### Body Structure
Follow the "Girlfriend Text" framework from the Copywriting Playbook:

[Greeting — warm, casual, one line]
[1-2 sentence vibe — what's the energy this week?]

---

THE BIG ONE
[Lead story — write it like a text, not a press release]
[3-5 sentences. What happened. Why it matters to HER. What she can do.]
[Source credit: "via [Name] on [Platform]"]

---

WHAT DROPPED THIS WEEK
[2-3 tools from the Fun Tools sections of daily research]
[Tool Name] — [one line]
[HGDW angle: what work does this eliminate?]
[Link]

---

WHO TO WATCH
[1 person, 1 idea, why it matters]
[Follow them at: @handle on Platform]

---

ONE THING TO TRY THIS WEEK
[Based on trending topic. Specific, doable, under 1 hour.]
[Write it like a dare, not homework.]

---

[Closing — 1-2 lines. Warm. Real.]
[Sign-off — Courtney]
[{{unsubscribe_link}}]

---

## Step 3: Quality Check
Run the HGDW Copy Checklist from the Copywriting Playbook:
- Sweep 1: Structure
- Sweep 2: Voice
- Sweep 3: Specificity
- Sweep 4: Proof
- Sweep 5: Platform fit (email-specific)

---

## Step 4: Save
Save to `/home/workspace/HGDW/Content/emails/[YYYY-MM-DD]-weekly.md`

## Step 5: Confirm
- Subject line options (top 3, ranked)
- Lead story preview (first 3 sentences)
- File saved
- Ask: "Ready to send, or want me to adjust anything?"

Do NOT send without explicit confirmation.
```

---
---
---

# PART 9: BLOG POST SKILL
> Save to: `/home/workspace/Skills/hgdw-blog-post/SKILL.md`

```
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
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-copywriting-playbook.md`
3. Read `/home/workspace/Skills/references/hgdw-hook-library.md`
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
---
---

# PART 10: SOCIAL POSTS SKILL
> Save to: `/home/workspace/Skills/hgdw-social-posts/SKILL.md`

```
---
name: hgdw-social-posts
description: >-
  Write HOT GIRLS DONT WORK social media posts about AI. Educational/industry
  posts, not promotion. Multi-platform: Instagram, TikTok, LinkedIn, X.
  Use when asked to "write social posts", "create this week's posts",
  "write Instagram captions", or "make TikTok content about [topic]".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Social Posts
  emoji: "📱"
  version: "2.0"
allowed-tools: read_file create_file list_files
---

# HGDW Social Posts Generator

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-hook-library.md`
3. Read `/home/workspace/Skills/references/hgdw-copywriting-playbook.md`
4. Read `/home/workspace/HGDW/Intelligence/trend-index.md`

---

## Step 1: Pull Source Material
Read weekly tracker + daily research tagged SOCIAL or BOTH.
Check trend index for RISING and SPIKE topics — prioritize these.

Select 3-5 items. Each must pass:
- Would Alex stop scrolling for this?
- Can we translate it in one sentence?
- Does it make her feel ahead and invited — not behind?
- Is it AI industry content (not course promo)?

---

## Step 2: Content Mix
Aim for this mix each week:
- 40% Educational (tips, how-to, tutorials)
- 25% Engaging (questions, polls, opinions, trends)
- 20% Tool Spotlights (new AI tools, demos)
- 15% Personal/BTS (behind the scenes, story, culture)

---

## Step 3: Write the Posts

One complete set per item = all 4 platforms.

### INSTAGRAM
- Caption: 150-300 words
- Hook in line 1 (use Hook Library — label which formula you used)
- 3-5 short paragraphs with line breaks
- End with question or soft CTA
- 5-8 hashtags: always #hotgirls #hotgirlsdontwork #AIforwomen #womenentrepreneurs
- Tone: girlfriend-to-girlfriend

### TIKTOK CAPTION
- 100-150 words max
- Hook: first line is the whole pitch (pattern interrupt or bold claim)
- Short sentences. Fast. Punchy.
- End with question or "follow for more"
- 3-5 hashtags: #hotgirlsdontwork #AItools #womeninbusiness #learnai #fyp

### LINKEDIN
- 150-250 words
- Open with bold declaration or stat (NOT a question)
- 3-4 paragraphs, each with one job
- Close with specific takeaway
- Professional but not stiff. Courtney with her blazer on.
- Put links in comments, not post body (kills reach)
- 3-4 hashtags: #AI #WomenInBusiness #Entrepreneurship

### X / TWITTER
- Primary tweet: under 280 chars. One idea. Maximum punch.
- Optional 2-3 tweet thread if idea needs unpacking
- Never start with "I" (algorithmic best practice)
- Declarative. No hedging.
- 1-2 hashtags max

### Post Template:
```
## POST [N]: [Topic]
Source: [research item + link]
HGDW Angle: [1 sentence]
Hook Formula Used: [from Hook Library]
Content Mix Category: [Educational/Engaging/Tool/BTS]

### INSTAGRAM
[full caption]

### TIKTOK
[full caption]

### LINKEDIN
[full post]

### X
[tweet + optional thread]
```

---

## Step 4: Series Arc
After writing all posts:
- Content theme this week
- How posts work together
- Suggested posting order
- Which hook formula performed best (from calibration data)

---

## Step 5: Save
Save to `/home/workspace/HGDW/Content/social/[YYYY-MM-DD]-social-posts.md`

## Step 6: Confirm
- Post count
- Strongest Instagram hook (label formula used)
- Content mix breakdown
- File saved
- Ask: "Want adjustments or ready to schedule?"
```

---
---
---

# PART 11: CONTENT REPURPOSER SKILL
> Save to: `/home/workspace/Skills/hgdw-content-repurposer/SKILL.md`

```
---
name: hgdw-content-repurposer
description: >-
  Transform existing HGDW content into new formats across platforms. Takes a blog
  post or email and creates X threads, LinkedIn carousels, TikTok scripts, Instagram
  stories, and more. Use when asked to "repurpose this", "turn this into tweets",
  "make a carousel from the blog", or "content repurposing".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Content Repurposer
  emoji: "♻️"
  version: "1.0"
allowed-tools: read_file create_file list_files
---

# HGDW Content Repurposer

One piece of content should generate 5-10 pieces across platforms.
This is how HOT GIRLS DONT WORK stays everywhere without working harder.

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-hook-library.md`

---

## Step 1: Identify Source Content
Read the specified content piece (blog post, email, or social post).
If not specified, read the most recent blog post from `/home/workspace/HGDW/Content/blog/`
and the most recent email from `/home/workspace/HGDW/Content/emails/`

---

## Step 2: Extract the Spine
From the source, extract:
- The ONE core insight (1 sentence)
- The strongest quote or stat
- The practical takeaway (what can she DO)
- The emotional hook (why she CARES)

---

## Step 3: Generate Repurposed Formats

### From a Blog Post, generate:
1. **X Thread (3-5 tweets)** — Hook tweet + breakdown + CTA
2. **LinkedIn Carousel Script (7-10 slides)** — One idea per slide, visual-first
3. **Instagram Carousel (7-10 slides)** — Similar but more visual, lifestyle tone
4. **TikTok Script (30-60 seconds)** — Hook, 3 points, CTA. Native, unpolished energy.
5. **Instagram Story Sequence (4-6 frames)** — Quick hits with polls/questions
6. **Pull Quote Graphics (3)** — Best 3 sentences for quote card graphics
7. **Email Teaser** — 2-3 sentence email snippet linking to the full post

### From a Newsletter, generate:
1. **X Thread** — Lead story as a thread
2. **LinkedIn Post** — Big takeaway as a standalone post
3. **Instagram Carousel** — "This week in AI" summary carousel
4. **TikTok Script** — Lead story as a 30-second explainer
5. **Blog Expansion** — If the lead story is strong enough, expand into full blog post

---

## Step 4: Platform Adaptation
For each format:
- Adapt tone to platform culture (see Social Posts skill for platform specs)
- Respect character/length limits
- Use platform-appropriate hooks from Hook Library
- Add platform-appropriate CTAs and hashtags

---

## Step 5: Save
Save to `/home/workspace/HGDW/Content/social/[YYYY-MM-DD]-repurposed.md`

## Step 6: Confirm
- Source content used
- Formats generated (list all)
- Strongest repurposed piece
- File saved
```

---
---
---

# PART 12: COPY EDITOR SKILL
> Save to: `/home/workspace/Skills/hgdw-copy-editor/SKILL.md`

```
---
name: hgdw-copy-editor
description: >-
  Polish and tighten HGDW content using expert copywriting frameworks.
  Runs the 5-sweep checklist, checks voice consistency, verifies specificity,
  and cuts filler. Use when asked to "edit this", "polish the draft",
  "tighten the copy", "review my writing", or "copy sweep".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Copy Editor
  emoji: "✂️"
  version: "1.0"
allowed-tools: read_file create_file
---

# HGDW Copy Editor

You are the quality gate. Nothing goes out without passing through you.
Your job: make every piece of HGDW content sharper, clearer, and more her.

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/Skills/references/hgdw-copywriting-playbook.md`

---

## Step 1: Read the Draft
Read the specified file or the most recently created content file.

---

## Step 2: Run the Five Sweeps

### Sweep 1: Structure
- [ ] Hook stops the scroll (first line earns the second)
- [ ] Every section answers "so what?"
- [ ] Clear CTA exists
- [ ] Can I delete the first paragraph and lose nothing? If yes, delete it.
- [ ] Logical flow — does each section build on the last?
- [ ] Length is appropriate for format

### Sweep 2: Voice
- [ ] Read aloud test — sounds like Courtney texting a friend
- [ ] No words from "Words We Avoid" list
- [ ] No jargon or corporate-speak
- [ ] No exclamation points
- [ ] No passive voice
- [ ] No hedging words (almost, very, really, kind of, sort of)
- [ ] Fragments are intentional and rhythmic
- [ ] Never implies women are behind or struggling

### Sweep 3: Specificity
- [ ] Every claim has a number, name, or timeframe
- [ ] No "streamline," "optimize," "innovative," "leverage," "utilize"
- [ ] Active voice throughout
- [ ] Specific tool names, not "an AI tool"
- [ ] Real examples, not hypotheticals

### Sweep 4: Proof
- [ ] At least one proof point per piece
- [ ] Claims are real and verifiable
- [ ] Sources are credited
- [ ] Testimonials are specific and attributed

### Sweep 5: Platform Fit
- [ ] Character limits respected
- [ ] Hashtags appropriate and counted
- [ ] CTA matches platform behavior
- [ ] Hook works within platform's "above the fold"
- [ ] Links in correct location (e.g., LinkedIn comments, not post body)

---

## Step 3: Apply Edits
Make all edits directly. Don't just flag — fix.
For each significant change, note what you changed and why.

Target: cut 15-20% of word count while keeping all meaning.

Kill list (find and destroy):
- "In today's world" / "In the age of AI" / "the landscape of"
- "It's important to note that" / "It goes without saying"
- "Streamline" / "Optimize" / "Leverage" / "Utilize" / "Innovative"
- "Transform" / "Revolutionize" / "Game-changing" / "Cutting-edge"
- Any sentence that starts with "As a" or "As an"
- Double spaces, extra line breaks, orphaned formatting

---

## Step 4: Output
Save the edited version with "-edited" suffix:
`[original-filename]-edited.md`

Provide a brief edit summary:
- Words cut (count and %)
- Voice issues fixed
- Specificity improvements made
- Top 3 most impactful edits
```

---
---
---

# PART 13: WEEKLY CALIBRATION SKILL (THE LEARNING LOOP)
> Save to: `/home/workspace/Skills/hgdw-weekly-calibration/SKILL.md`

```
---
name: hgdw-weekly-calibration
description: >-
  The learning loop. Reviews this week's content output, performance data,
  and research patterns. Updates the engine's priorities, source rankings,
  and content strategy. Makes the system smarter every week.
  Use when asked to "calibrate", "review the week", "what worked",
  "update priorities", or "learning loop".
compatibility: Created for Zo Computer — HOT GIRLS DONT WORK
metadata:
  author: hgdw
  category: Community
  display-name: HGDW Weekly Calibration
  emoji: "🔄"
  version: "1.0"
allowed-tools: read_file create_file list_files
---

# HGDW Weekly Calibration

This skill makes the engine SMARTER. It runs every Sunday evening and adjusts
the system based on what actually worked. Without this, the engine is static.
With this, it compounds.

## Read First
1. Read `/home/workspace/Skills/references/hgdw-brand.md`
2. Read `/home/workspace/HGDW/Intelligence/trend-index.md`
3. Read `/home/workspace/HGDW/Intelligence/calibration-log.md`
4. Read `/home/workspace/HGDW/Intelligence/content-performance.md`

---

## Step 1: Review This Week's Content Output
Read all content produced this week:
- Blog posts from `/home/workspace/HGDW/Content/blog/`
- Emails from `/home/workspace/HGDW/Content/emails/`
- Social posts from `/home/workspace/HGDW/Content/social/`
- Daily research files from `/home/workspace/HGDW/Research/daily/`

---

## Step 2: Review Performance Data
Read `/home/workspace/HGDW/Intelligence/content-performance.md`
(The user logs performance data here after publishing — opens, clicks, saves, shares)

If no performance data exists yet, note this and skip to Step 3.
As performance data accumulates, this step becomes the most valuable.

---

## Step 3: Source Quality Assessment
For each source tier, assess this week's signal quality:

### Tier 1 (Technical Voices):
- Which voices produced the most useful content this week?
- Any voices that were noise? (Demote to weekly scan)
- Any voices we're missing? (Suggest additions)

### Tier 4 (Labs):
- Which labs shipped this week?
- Which lab announcements generated the best content angles?

### Tier 5 (Publications):
- Which publications had the best AI coverage?
- Any publications that are consistently low-signal?

---

## Step 4: Content Pattern Analysis
Answer these questions:
- What content TYPE performed best? (blog vs email vs social)
- What TOPICS got the most engagement?
- What HOOK FORMULAS worked best? (if labeled in social posts)
- What TIME of week generated the most engagement?
- What got SKIPPED that should have been covered?
- What got COVERED that wasn't worth it?

---

## Step 5: Trend Index Maintenance
Review the trend index:
- Archive topics not seen in 2+ weeks
- Identify topics that were TRENDING but we never turned into content (missed opportunities)
- Identify topics we covered that are now FADING (time to move on)
- Note which trends were "real" vs "hype" in hindsight

---

## Step 6: Generate Recommendations
Write specific, actionable recommendations:

### Source Adjustments
- PROMOTE: [voice/source] — move from weekly to daily scan
- DEMOTE: [voice/source] — move from daily to weekly scan
- ADD: [new voice/source] — discovered this week, worth tracking
- REMOVE: [voice/source] — consistently low signal

### Content Adjustments
- DO MORE: [content type / topic / format] — this worked
- DO LESS: [content type / topic / format] — this didn't
- TRY: [new idea] — based on patterns observed

### Voice Adjustments
- Any voice drift detected? (getting too corporate, too casual, etc.)
- Hook formulas to use more / less

### Research Adjustments
- Search queries to add / remove / modify
- New tools or platforms to monitor

---

## Step 7: Update Calibration Log
Append to `/home/workspace/HGDW/Intelligence/calibration-log.md`:

```
## Week of [DATE]

### What Worked
- [item]

### What Didn't
- [item]

### Source Adjustments
- PROMOTE: [source]
- DEMOTE: [source]
- ADD: [source]

### Content Adjustments
- DO MORE: [thing]
- DO LESS: [thing]
- TRY: [thing]

### Trend Review
- Real trends: [topics]
- Hype: [topics]
- Missed opportunities: [topics]

### Next Week Focus
- Priority topic: [topic]
- Priority format: [format]
- Experiment to run: [experiment]
```

---

## Step 8: Confirm
Email summary:
- What worked this week (top 3)
- What to change next week (top 3)
- Source adjustments (if any)
- Next week's priority topic and experiment
- Trend trajectory (rising / fading / new)
```

---
---
---

# HOW TO USE THIS FILE

1. Upload `hgdw-zo-setup.md` to your Zo
2. Tell Zo: **"Read hgdw-zo-setup.md and set up the entire HGDW content engine. Follow the bootstrap instructions in Part 1."**
3. Fill in `/home/workspace/HGDW/config/blog-api.md` with your CMS credentials
4. After publishing content, log results in `/home/workspace/HGDW/Intelligence/content-performance.md`
5. The system gets smarter every week.

**Quick commands:**
- "run the daily research" — daily AI sweep
- "find trends" or "synthesize this week" — trend detection
- "write the blog post" — blog with quality check
- "write the weekly email" — newsletter with A/B subject lines
- "write social posts" — multi-platform with hook formulas
- "repurpose the blog" — turn one piece into 7+ formats
- "edit this" / "copy sweep" — expert quality polish
- "calibrate" / "what worked" — weekly learning loop

**The engine cycle:**
```
Daily Research (7am) → Trend Synthesis (8:30am) → Blog (Tue) → Email (Wed)
→ Social Posts (Tue) → Repurpose (Thu) → Calibrate (Sun) → REPEAT
     ↑                                                         |
     └─── learns from performance data ←──────────────────────┘
```

---

*HOT GIRLS DONT WORK. We use AI. Work Less. ___ More.*
