# LinkedIn rebrand kit — Jaypore Labs

Drop-in assets + copy for refreshing the Jaypore Labs LinkedIn Company Page (and Yash's personal profile, if you want a matching look).

Every image was rendered by `scripts/gen-post.mjs` and matches the site's visual system exactly — same burnt-orange accent, Space Grotesk display, JetBrains Mono eyebrows. Regenerate any of them anytime by tweaking the commands in [`.claude/skills/post-image.md`](../../.claude/skills/post-image.md) or the recipes at the end of this file.

---

## 1. Assets in this folder

All assets are rendered at 2× or 3× their logical size so they stay razor-sharp on retina displays after LinkedIn scales them. Upload as-is.

| File | Logical size | Rendered PNG | Where it goes |
| --- | --- | --- | --- |
| `avatar-dark.png` | 1080×1080 | **2160×2160** | Company Page logo (primary). LinkedIn crops to circle. |
| `avatar-accent.png` | 1080×1080 | **2160×2160** | Alternate profile avatar — use as a variant, or in sticker / badge contexts. |
| `cover-banner.png` | 1584×396 | **3168×792** | Company Page cover (primary). Works for both company and personal profile. |
| `cover-banner-company.png` | 1128×191 | **3384×573** | Optional — LinkedIn's exact company banner spec, rendered at 3× for sharpness. |
| `featured-1-positioning.png` | 1600×900 | **3200×1800** | Featured section slot 1 — positioning statement. |
| `featured-2-engagement.png` | 1600×900 | **3200×1800** | Featured section slot 2 — three engagement models. |
| `featured-3-scribe.png` | 1600×900 | **3200×1800** | Featured section slot 3 — AI scribe outcome. |

---

## 2. Upload order (15 minutes)

1. **Admin view the Company Page** — LinkedIn → Your company → Edit page.
2. **Logo** — Edit page → Details → **Logo** → upload `avatar-dark.png`. Confirm it reads clearly as a circle in the preview.
3. **Cover** — Details → **Cover image** → upload `cover-banner.png`. Confirm the headline isn't colliding with the avatar circle overlay; LinkedIn shows a live preview.
4. **Tagline** — Details → **Tagline** → paste the tagline from §3 below (keep under 120 chars).
5. **About** — Details → **About us** → paste the long-form description from §3.
6. **Specialties** — Details → **Specialties** → paste the comma list from §3.
7. **Featured section** — Back on the public page → **Add featured** → add three posts, uploading `featured-1/2/3.png` as images. Use the copy suggestions in §4 for each post's text body.
8. **Save**.

If you want your personal profile to match:

1. Personal profile → **Edit background photo** → upload `cover-banner.png`.
2. (Optional) **Edit profile photo** — if you want the brand stamp instead of a personal photo, upload `avatar-accent.png`.
3. **Headline** — see §3.

---

## 3. Copy — paste-ready

### Tagline (120 chars max)

> **AI-enabled software, built for real businesses. A friendly product studio. Shipping since 2017.**

### About / Description (LinkedIn Company Page)

```
Jaypore Labs is a friendly product studio that builds AI-enabled software
and helps businesses put AI to work.

We don't sell AI as a category. We build the software around it — real
products, with AI embedded where it earns its keep. Scribes. Copilots.
Voice interfaces. Full-stack SaaS. Desktop apps. Internal tools.

Since 2017 we've shipped for founders, global consumer brands, clinics
in Europe, and academic research teams across three continents.

How we work:
· Industry-first, then AI-first. We learn your business before we touch
  the stack.
· Small by design. Four engineers. No middle layers. You talk to the
  people writing the code.
· Ship weekly. Every Friday you see something working in production.
· No buzzword bingo. We'll tell you when AI is the wrong answer. Half
  the time it is.

Three ways to work with us:
· Project — fixed-scope delivery (new AI-enabled product, prototype to
  production).
· Retainer — a monthly slice of the studio for teams putting AI to work
  across multiple surfaces.
· Augment — we plug in beside your engineers as senior AI specialists.

Based in India. Remote-worldwide. Async-first with IST-friendly live
hours for working sessions.

→ jayporelabs.com
→ hello@jayporelabs.com
```

### Specialties (comma-separated, up to 20)

```
AI-enabled software, AI integration, AI scribes, AI copilots, AI agents,
RAG systems, voice AI, MCP servers, healthcare software, SaaS development,
desktop applications, Electron, Next.js, React, TypeScript, Node.js,
OpenAI, Anthropic, product strategy, technical consulting
```

### Personal headline (Yash's profile)

> **Founder, Jaypore Labs · We build AI-enabled software and help businesses put AI to work · 8+ yrs shipping**

### Personal About (Yash's profile, long form)

```
I run Jaypore Labs — a friendly product studio that builds AI-enabled
software for real businesses.

Eight years leading engineering for healthcare, consumer, and enterprise
tech. Led a team of five to ship a production clinic operating system
used daily by doctors across Europe. Today, four engineers deep,
industry-first, AI-first, friendly about it.

If you want a polished deck and a 12-month roadmap, I'm the wrong
engineer. If you want working AI in front of real users by next
quarter — hi.

Reach me: hello@jayporelabs.com
Studio: jayporelabs.com
```

---

## 4. Featured posts — body text suggestions

Pair each image with a ~150-word post. Rough drafts you can edit:

### Post 1 — with `featured-1-positioning.png`

> A short note on positioning.
>
> We don't ship AI. We ship AI-enabled software.
>
> It's a small distinction with big consequences. AI is the material, not the product. The product is a scribe that saves a psychiatrist three hours a day. A voice assistant a doctor can use hands-free in the OR. A clinic OS running in Luxembourg. A wellness app backed by Logitech.
>
> If you're thinking about adding AI to what you already run — or building something new with AI inside — we can help. Industry-first, then AI-first. Shipping weekly since 2017.
>
> #AIDevelopment #AIProducts #ProductStudio

### Post 2 — with `featured-2-engagement.png`

> Three shapes of work.
>
> 1. Project — fixed-scope delivery. Best for MVPs, discrete AI features, or retrofitting an existing product. You know what you want; we scope it and ship it.
>
> 2. Retainer — a monthly slice of the studio. Best for teams putting AI to work across several surfaces over a quarter or two. Continuous delivery, no context-reset overhead.
>
> 3. Augment — we plug in beside your engineers as senior AI specialists. Best when you already have a team but lack AI depth. We ramp fast, transfer knowledge, leave you stronger.
>
> We'll recommend one honestly. Sometimes that means a different studio. Email is the fastest path: hello@jayporelabs.com.
>
> #AIEngineering #AIEnablement #Engagement

### Post 3 — with `featured-3-scribe.png`

> Three hours saved per doctor, every day.
>
> That's a typical outcome for a well-built AI scribe — listening, structuring the note, mapping to codes, handing it back before the clinician leaves the room.
>
> The hard part is never the LLM. It's the plumbing — privacy, EHR integration, specialty-specific templates, the eval harness that catches drift month-over-month. That's where we spend our time: AI where it earns its keep, boring software everywhere else.
>
> If you're building a scribe (or thinking about one), our DMs are open.
>
> #AIScribe #ClinicalAI #MedicalAI

---

## 5. Weekly cadence

| Day | Post type | Template | Sample |
| --- | --- | --- | --- |
| Mon | Build log (text) | — | "Shipped this week: …" |
| Wed | Field note / stat | `stat` / `quote` | `featured-3-nudge.png` style |
| Fri | Playbook / carousel | `list` (multiple slides) | `playbook-portrait.png` style |

Repost on IG/X with the same image, trimmed body, relevant hashtags.

---

## 6. Regenerate any asset

Fonts + tokens live in the repo, so regeneration is deterministic.

```bash
# avatar (dark, default)
npm run gen:post -- --template logo --size avatar \
  --title "JL" --subtitle "Jaypore Labs" \
  --out social/linkedin/avatar-dark.png

# avatar (accent stamp)
npm run gen:post -- --template logo --size avatar \
  --title "JL" --subtitle "Jaypore Labs" --bg accent \
  --out social/linkedin/avatar-accent.png

# cover banner (1584×396 — use this one for LinkedIn)
npm run gen:post -- --template banner --size banner \
  --title "AI-enabled software\nfor real businesses." \
  --subtitle "Friendly product studio. We help teams put AI to work." \
  --kicker "Est. 2017 · Remote-worldwide" \
  --out social/linkedin/cover-banner.png

# cover banner (1128×191 exact — requires --scale 3 for sharpness)
npm run gen:post -- --template banner --size banner-company \
  --title "AI-enabled software for real businesses." \
  --kicker "Est. 2017" --scale 3 \
  --out social/linkedin/cover-banner-company.png

# featured — positioning
npm run gen:post -- --template quote --size landscape \
  --title "We don't ship AI.\nWe ship AI-enabled software." \
  --subtitle "And we help businesses put it to work. Since 2017." \
  --kicker "Positioning" \
  --out social/linkedin/featured-1-positioning.png

# featured — engagement models
npm run gen:post -- --template list --size landscape \
  --title "Three shapes\nof engagement." \
  --items "Project · fixed-scope delivery|Retainer · monthly slice of the studio|Augment · plug in beside your team" \
  --kicker "How to work with us" \
  --out social/linkedin/featured-2-engagement.png

# featured — field note
npm run gen:post -- --template stat --size landscape \
  --stat "3 hrs" --label "saved per doctor, daily." \
  --subtitle "A typical outcome for a well-built scribe. The plumbing matters more than the model." \
  --kicker "Field note" \
  --out social/linkedin/featured-3-scribe.png
```

Want a new angle? See [`.claude/skills/post-image.md`](../../.claude/skills/post-image.md) for every template/size.
