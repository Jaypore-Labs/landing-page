---
name: daily-article
description: Generate a full daily content package for Jaypore Labs — blog article, Instagram carousel, LinkedIn post, and X thread. Pulls the next pending article from the 200-article curriculum at docs/blog-ideas.md, organized across 8 series (AI agents in industry, Claude Code in business, AI for software development, Building agents, Predictable AI output, Testing in the age of AI, Evals & output testing, MCP & AI protocols). Use when the user says "write today's article", "daily post", "new carousel", "draft this week's blog", or asks for a connected content drop across channels.
---

# daily-article

Run this when the user wants to publish a new article across jayporelabs.com + socials.

## The curriculum

Topics are organised into 8 series of 25 articles each, defined in `docs/blog-ideas.md`. Each row has a slug, title, hook, and outline beats. The curriculum is the queue.

Per-article workflow:

1. Pick the next pending row from any series (rows not prefixed with `✅`).
2. Generate the MDX article at `content/blog/<slug>.mdx` with frontmatter:
   - `title`, `description`, `date`, `author`, `category`, `tags`
   - `series:` (the human-readable series title, e.g. `"Building agents"`)
   - `seriesOrder:` (the # column from the curriculum)
3. Generate the carousel + caption + LinkedIn + X thread.
4. After confirming the package, update `docs/blog-ideas.md` to prefix the row with `✅` and the publish date.

## The original philosophy (still applies)

> *A bicycle is not interesting. An elephant is not interesting. An elephant on a bicycle is impressive.*

Every article pairs a familiar technical concept (the bicycle) with an unusual frame (the elephant). The frame is what makes a reader lean in. The craft is making the pairing *earn* itself — not a cheap analogy, but a real illumination.

**Good pairings:**

| Technical concept | Unusual frame | Why it works |
| --- | --- | --- |
| AI scribes | Medieval scriptoria | Monks were first-pass editors, not copiers |
| RAG systems | Public libraries / Dewey Decimal | Retrieval is a solved problem, partly |
| LLM evals | Restaurant health inspections | Periodic, visible, non-negotiable |
| AI copilots | Bartenders (not butlers) | Context-aware minimal intrusion |
| MCP servers | USB-C | Standardisation moment |
| Voice AI | Stenographers (not typists) | Structure matters more than speed |
| Agents | Jazz rhythm sections | Tight defaults, room to improvise |
| Fine-tuning | Knife sharpening | Maintenance, not magic |
| AI in legal | Court stenography | Verbatim ≠ useful |
| AI in healthcare | Night-shift charge nurses | Handoff quality > heroics |

**Weak pairings (avoid):**
- Metaphor that needs 3 paragraphs of setup
- Two technical concepts (that's just a comparison)
- Anything that sounds like a cliché pairing ("AI is electricity", "data is oil")

## What this skill produces

For every article, five files:

| Path | Purpose |
| --- | --- |
| `content/blog/<slug>.mdx` | The article (MDX) with front-matter |
| `social/carousels/<slug>/slide-NN.png` | 5–7 Instagram carousel slides |
| `social/carousels/<slug>/caption.md` | IG caption + hashtag set |
| `social/linkedin-posts/<slug>.md` | 200–300-word LinkedIn post |
| `social/threads/<slug>.md` | 5–10-tweet X thread |

## Step-by-step

### 1. Get the topic

Read the user's request. Two paths:

**A) User specifies a topic.** Match it to a row in `docs/blog-ideas.md` if possible. If no clean match, treat as a free-form topic.

**B) User says "next" or leaves it open.** Open `docs/blog-ideas.md`. Propose **three** pending rows from across the 8 series — pick rows that span different series for variety. Present each as:

> **Series 0X · #YY · `slug`** — *Hook from the curriculum*

Wait for the user to pick or interpret silence as "pick the first".

The curriculum already has the hook + outline beats. Don't re-pitch metaphors — use what's there.

### 2. Decide the slug

Lowercase kebab-case. Keep it 3–6 words. Examples: `rag-is-a-library`, `evals-as-inspections`, `copilots-like-bartenders`.

### 3. Draft the blog post

Write `content/blog/<slug>.mdx`. Match the existing posts' frontmatter exactly:

```mdx
---
title: "<Article title — the unusual pairing, stated plainly>"
description: "<One-sentence hook, ≤160 chars, no marketing fluff>"
date: "<YYYY-MM-DD, absolute, today's date>"
author: "Yash Shah"
category: "<One of: AI, Engineering, Healthcare, SaaS, Playbook, Field notes>"
tags: ["<3–6 tags>"]
---
```

**Structure** (800–1200 words, 4–6 min read):

1. **Hook** (80–150 words) — State the pairing in the first two sentences. Don't bury it. Example: *"Medieval scribes spent their days copying texts. AI scribes spend their days doing something scribes never did — interpreting them. That distinction matters."*
2. **Tension** (150–250 words) — Why the frame seems wrong at first. Make the reader a little skeptical.
3. **Bridge** (250–400 words) — What the two actually share. This is the heart.
4. **Lesson(s)** (200–350 words) — 2–4 concrete takeaways, ideally as a numbered list or clearly-marked sub-sections, so they're carousel-ready.
5. **Close** (50–100 words) — One memorable restating line + soft CTA (*"if you're building X, we'd love to hear about it"*).

**Voice markers that land on-brand:**
- "industry-first, then AI-first"
- "the friendly way"
- "no buzzword bingo"
- "real users, not dry-runs"
- Dry humor, not jokes. Short sentences, hard breaks.

**Do NOT** say "we ship AI" — we ship AI-enabled software. See `memory/project_positioning.md`.

### 4. Generate the carousel (5–7 slides)

Use the `post-image` skill conventions (documented in `.claude/skills/post-image.md`). Size: **`portrait`** (1080×1350 logical → 2160×2700 rendered). Carousels on IG perform best in portrait.

Slide structure:

| # | Template | Content |
| --- | --- | --- |
| 01 | `quote` | **Hook slide** — the pairing as title, 1-line subtitle, kicker = `Journal · <YYYY-MM-DD>` |
| 02 | `quote` | **Tension** — "Sounds wrong, but…" framing |
| 03 | `quote` | **Bridge** — the actual shared truth |
| 04 | `list` | **Lessons** — 3–4 numbered takeaways (≤40 chars each) |
| 05 | `stat` *or* `quote` | **Proof** — specific number, client, or example from our portfolio if relevant |
| 06 | `quote` | **Memorable line** — the essay's close, one sentence |
| 07 | `quote` | **CTA** — `jayporelabs.com/blog/<slug>`, kicker = "Keep reading", small pill |

Run `npm run gen:post` for each. Examples:

```bash
mkdir -p social/carousels/<slug>

# Slide 01 — hook
npm run gen:post -- --template quote --size portrait \
  --title "Medieval scribes\nwere not\ncopiers." \
  --subtitle "And neither is your AI scribe. Here's what they actually share." \
  --kicker "Journal · 2026-04-20" \
  --out social/carousels/<slug>/slide-01.png

# Slide 04 — lessons list
npm run gen:post -- --template list --size portrait \
  --title "Four lessons,\nin medieval ink." \
  --items "Scribes are first-pass editors|Verification loops matter|Tools shape the output|Scribes ≠ scholars" \
  --kicker "Playbook" \
  --out social/carousels/<slug>/slide-04.png

# Slide 07 — CTA
npm run gen:post -- --template quote --size portrait \
  --title "Read the whole\nessay." \
  --subtitle "jayporelabs.com/blog/<slug>" \
  --kicker "Keep reading" \
  --out social/carousels/<slug>/slide-07.png
```

### 5. Draft the Instagram caption

`social/carousels/<slug>/caption.md` — one paragraph (≤300 chars), then a short line break, then a **hook sentence** (≤140 chars), then 5–10 hashtags.

Example:

```
A small distinction with big consequences: medieval scribes weren't copiers. They were first-pass editors. Today's AI scribes share more with them than you'd think. ↓

Swipe for the four lessons we stole from a 13th-century scriptorium.

Full essay: jayporelabs.com/blog/<slug>

#AIEnabledSoftware #AIScribe #HealthcareAI #AIProduct #MedicalAI #ProductStudio #AIEngineering
```

### 6. Draft the LinkedIn post

`social/linkedin-posts/<slug>.md` — 200–300 words. Same voice. Opens with the hook, lands on one lesson, ends with a question to drive comments. Include the blog link.

### 7. Draft the X thread

`social/threads/<slug>.md` — 5–10 tweets, each ≤280 chars. Tweet 1 is the hook. Mid-tweets carry one idea each (not paragraphs). Last tweet has the link. No hashtags inside the thread; one at the end is fine.

### 8. Report back

Return a short summary listing the 5 files with paths, a suggested publish sequence, and one sentence on why this pairing lands.

**Suggested publish order:**
1. Blog post live on jayporelabs.com (Vercel auto-deploys on push).
2. LinkedIn post — ~10am local with link to the blog.
3. X thread — 2 hours after LinkedIn.
4. IG carousel — next morning, so it doesn't compete with the LinkedIn impression.

## Filename conventions

- Slug: lowercase kebab, ~5 words max.
- Blog: `content/blog/<slug>.mdx`
- Carousel: `social/carousels/<slug>/slide-{01..07}.png`
- Caption: `social/carousels/<slug>/caption.md`
- LinkedIn: `social/linkedin-posts/<slug>.md`
- X thread: `social/threads/<slug>.md`

## Quality guardrails

- **One pairing per article.** Don't mix two metaphors.
- **Ground in a real person** wherever possible: *"the psychiatrist we shipped the scribe to in month three said…"*
- **Use absolute dates** (`2026-04-20`, not "yesterday").
- **Don't call us "AI-first studio."** We are industry-first, then AI-first.
- **Every slide's text must read at 50mm**. Long lines break the IG feed's visual snap. Test a slide by imagining it on a phone; if it needs squinting, rewrite.
- **The CTA slide must link to the actual article URL** — use `jayporelabs.com/blog/<slug>`, not a shortener.

## Sample invocation

> User: "Let's do today's article on AI evals."

Propose three pairings with a one-line hook each. User picks or agrees to the first. You:
1. Create the MDX.
2. Render 5–7 carousel slides (portrait, 2160×2700 each).
3. Write the IG caption.
4. Write the LI post.
5. Write the X thread.
6. Summarize and suggest publish order.

Reference the finished sample for shape: `content/blog/medieval-scribes-ai-scribes.mdx` + `social/carousels/medieval-scribes-ai-scribes/`.
