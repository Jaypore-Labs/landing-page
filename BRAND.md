# Jaypore Labs — Handbook

Everything you need to keep the site, the socials, and the pitch pointed in the same direction. Read this once; come back when you're writing a post or onboarding someone.

---

## 1. What we are

**A friendly product studio that ships AI-enabled software.**

We don't sell AI models, we don't sell "AI" as a category. We build real software — web apps, SaaS, desktop apps, internal tools — with AI embedded where it earns its keep. And we help existing businesses introduce AI into their operations without ripping up what already works.

### The one-liners

| Use it for | Line |
| --- | --- |
| Tagline | **AI-enabled software. The friendly way.** |
| Pitch | **We build AI-enabled software and help businesses put AI to work.** |
| Hero headline | **Your business, AI-ready.** |
| Manifesto beat | **We bring AI into real software.** |

### What to say (and what to avoid)

| ✅ Say | 🚫 Don't say |
| --- | --- |
| "AI-enabled software" | "AI products" |
| "Put AI to work" | "Ship AI" |
| "Industry-first, then AI-first" | "AI-first studio" |
| "Software with AI inside" | "We do AI" |
| "Bring AI to your business" | "We sell AI" |

We use AI vocabulary **subtly**. Not every service needs an "AI-" prefix. Let craft lead; AI is the enabler, not the noun.

---

## 2. Voice

- **Friendly, confident, specific.** The studio talks like a senior engineer over coffee, not a deck.
- **No buzzword bingo.** If a sentence could land on any agency homepage, delete it.
- **Plain English > jargon.** "Ship weekly" beats "agile delivery cadence".
- **Dry humor welcome.** "No architects peacocking." "Half the time AI is the wrong answer." That's us.
- **Short sentences. Hard breaks. Let the type carry the weight.**

A couple of lines that capture it:

> "We'll tell you when AI is the wrong answer. Half the time it is. We'd rather ship real software than sound smart in a pitch."

> "Every Friday you see something working. We iterate in public and measure in real users, not dry-runs."

---

## 3. Visual system

### Colors (exact tokens live in `src/app/globals.css`)

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#0B0B0B` | Main canvas, background |
| `ink-deep` | `#050505` | Footer, deep contrast |
| `paper` | `#F5F0E8` | Primary foreground, body text on ink |
| `paper-dim` | `#D9D1C3` | Secondary text, eyebrows |
| `accent` | `#FF4D1F` | Brand burnt orange — single signature color |
| `accent-deep` | `#E33A0E` | Accent hover / active |
| `line` | `rgba(245,240,232,0.12)` | Subtle dividers |
| `line-strong` | `rgba(245,240,232,0.24)` | Strong dividers |

Playful secondary accents for variety (per-project in the portfolio): `#FFD166` amber, `#8BE9FD` cyan, `#B5E48C` lime, `#C77DFF` violet. Never replace orange as the primary.

### Type

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display | **Space Grotesk** | 500 / 700 | Used at `clamp(3rem, 10vw, 10.5rem)` with `letter-spacing: -0.045em`, `line-height: 0.94`. Italic reserved for accent phrases. |
| Body | **Geist** | 400 / 500 | Reading text, UI labels. |
| Mono / eyebrow | **JetBrains Mono** | 500 | All caps, `tracking-[0.22em]`, used for labels, time, kickers, corner marks. |

Utility classes in `globals.css`: `.display-tight`, `.display`, `.mono`, `.eyebrow`.

### Motion

- Line-mask reveals for headlines (masked-up from below).
- Scroll-linked parallax on media/frames (`useScroll` + `useTransform`).
- Marquee tickers between sections for rhythm.
- Custom cursor dot + ring that scales on interactive elements.
- Always honor `prefers-reduced-motion`.

### Layout rules

- 12-column grid at 1600px max width.
- Oversized display type is the star. White space is the co-star.
- **No photographs or product screenshots.** Typographic color-blocks instead. Only `/public/logo/*` images are permitted (see `feedback_no_images` memory).
- Corner marks in mono (`01/04`, `Specimen`, `Field note`) add editorial rhythm.
- Grain overlay on body + `img-grain` on media tiles.

---

## 4. Site map (what's on the landing page)

Homepage top-to-bottom:

| Section | Component | What it does |
| --- | --- | --- |
| Hero | `sections/hero.tsx` | Headline "Your business, AI-ready." + crossfading specimen card with 3D tilt |
| Clients | `sections/clients.tsx` | Trusted-by logo strip |
| Marquee | `sections/marquee.tsx` | Scrolling ticker, "AI-enabled software · Industry-first · …" |
| Manifesto | `sections/big-statement.tsx` | Orange color-block with 6 principles |
| Capabilities | `sections/capabilities.tsx` | 18-item deliverables matrix across 3 groups |
| Services | `sections/services-list.tsx` | Six shapes of work as stacked accordion |
| Industries | `sections/industries.tsx` | Where we've brought AI to work |
| Testimonial | `sections/testimonial-quote.tsx` | Single cross-fading pull quote |
| Marquee | (ticker) | Closing ticker with booking status |
| Footer | `layout/footer.tsx` | Giant "Let's make your software AI-ready." + oversized wordmark |

Inner pages: `/about`, `/services`, `/portfolio`, `/contact`, `/blog` (+ `[slug]`).

---

## 5. Tech stack

| Layer | Tool |
| --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack) |
| Styling | **Tailwind CSS v4** — tokens in `globals.css`, utilities via `@theme inline` |
| Type | `next/font` (Geist, Space Grotesk, JetBrains Mono) |
| Motion | Framer Motion 12 |
| Content | MDX via `next-mdx-remote` for `/blog` |
| Icons | Lucide React |
| Data | `src/data/site.ts` — single source of truth for copy |
| Inquiries | Supabase (service-role), via a Next.js Server Action |
| Hosting | Vercel (GitHub integration deploys on push to `main`) |
| SEO | Per-page metadata, dynamic OG + Twitter images, full JSON-LD |

---

## 6. What's already shipped

- Editorial redesign of every page, with full copy pivot to "AI-enabled software, not AI".
- Custom cursor + grain overlay + 3D tilt specimen panel with 5 rotating projects.
- Six-principle manifesto, capabilities matrix (18 items), industries, services accordion, cross-fading testimonial.
- Supabase inquiry pipeline (`src/app/contact/actions.ts` → `public.inquiries`) with graceful fallback when env is missing.
- SEO: canonical URLs, keywords, dynamic `/opengraph-image` + `/twitter-image`, JSON-LD for `Organization`, `WebSite`, `ProfessionalService`, `Service` × 6, `FAQPage`, `BreadcrumbList`, `Article`.
- Sitemap, robots, manifest.
- Social-post image generator at `scripts/gen-post.mjs` with 5 templates × 4 sizes.
- This handbook.

---

## 7. What's left (do this in order)

### Right now (15 min)

1. **Turn off Deployment Protection.** Vercel → project Settings → Deployment Protection → set Vercel Authentication to "Only Preview Deployments" (or Disabled). The production URL goes public the moment you toggle.
2. **Attach your domain.** Vercel → Settings → Domains → add `jayporelabs.com`. Update DNS per Vercel's instructions.

### This week

3. **Wire Supabase.** Open `supabase/README.md`. Three steps: create project → paste the SQL from `supabase/migrations/0001_inquiries.sql` → add `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` to Vercel env (Production + Preview). Contact form starts persisting immediately.
4. **Register with search engines.** Google Search Console + Bing Webmaster → verify via env vars `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` → submit `/sitemap.xml`.
5. **Clutch.co + GoodFirms listings.** Write up 2–3 case studies using the portfolio data. These directories are where enterprise buyers look.

### This month

6. **Vercel Partner + Supabase Partner + OpenAI / Anthropic Partner** programs. All give us distribution to their audiences at zero cost.
7. **First three blog posts.** See marketing section below for topic list.
8. **Socials cadence.** Post two brand images a week per channel (IG, LinkedIn, X). Use this handbook's templates.

---

## 8. Marketing reach (the short version)

Detailed strategy is in the Supabase + Vercel dashboards where nobody reads it. Here's the ordered punch list:

1. **Directories**: Google Business Profile, Bing Places, Clutch.co, GoodFirms, DesignRush, Sortlist, Upwork Agency, Awwwards, SiteInspire.
2. **Platform partners** (highest leverage): Vercel Partner, Supabase Partner, OpenAI Partner, Anthropic Partner, AWS/Azure if applicable.
3. **Content** (monthly): Three pillars — **industry adoption playbooks** (ranks for long-tail), **engineering essays** (HN + r/LocalLLaMA surface), **case-study deep-dives** (converts). One post/week, cross-post LinkedIn + Twitter + the relevant subreddit.
4. **Outbound**: Yash posts weekly on LinkedIn as himself — short build-logs, not brand platitudes. 20 target-persona connects/week. Warm intros from Logitech / Luxembourg / university network.
5. **Paid** (only after the above): Google Ads for high-intent ("AI scribe development", "add AI to SaaS"), LinkedIn Sponsored for CTOs at 50–500-person healthcare / legal / productivity companies.
6. **Community + credibility**: Open-source a small thing (MCP server, AI-evals template, Next.js + Supabase starter). Speak at AI Engineering Summit, Latent Space, Healthcare AI meetups.
7. **Regional plays**: ME / GCC (LinkedIn + GITEX), Europe (GDPR + compliance story), NA (inbound via content), APAC (Upwork + AngelList Talent).

---

## 9. How to post on Instagram / LinkedIn / X

Everything is rendered locally by `scripts/gen-post.mjs` so every post matches the site.

### Quick start

```bash
npm run gen:post -- \
  --template quote \
  --size square \
  --title "Your business,\nAI-ready." \
  --subtitle "We build AI-enabled software and help businesses put AI to work." \
  --kicker "Manifesto" \
  --out social/out/hero-square.png
```

Outputs a 1080×1080 PNG at `social/out/hero-square.png`, ready to upload.

### Templates (and when to use each)

| Template | Best for |
| --- | --- |
| `quote` | Manifesto lines, positioning statements, tagline drops |
| `stat` | Outcomes, social proof, metric callouts (e.g., "3 hrs saved per doctor, daily") |
| `announcement` | Availability, launches, hiring, office hours |
| `list` | Playbooks, tips, principles, carousel slides |
| `case-study` | Client-work highlights with a headline outcome |

### Sizes

| Flag | Pixels | Where |
| --- | --- | --- |
| `square` | 1080×1080 | Instagram feed |
| `portrait` | 1080×1350 | Instagram 4:5 portrait |
| `story` | 1080×1920 | Instagram / FB Stories, Reels cover |
| `landscape` | 1600×900 | LinkedIn, X, Facebook share |

### Tips for good posts

- **Keep titles short.** ≤ 40 characters per line on square, ≤ 60 on portrait/landscape.
- **Use `\n` for manual line breaks** in `--title`: `"Booking\nQ2 2026."`
- **Subtitle is context, not a second headline.** One sentence, under 140 chars.
- **Kicker is an eyebrow.** "Manifesto", "Field note", "Playbook", "Case study", "Booking", "Release".
- **Vary the accent** occasionally: pass `--accent "#FFD166"` for amber, `#8BE9FD` for cyan, `#B5E48C` for lime, `#C77DFF` for violet. Orange (`#FF4D1F`) is the default and should stay dominant across the feed.
- **Render multiple sizes at once** if a post is going to more than one channel.

### Claude Code skill

If you're in Claude Code, just invoke the skill and describe the post:

```
/post-image
```

Or say "make me a Jaypore post that says X", and Claude will pick the right template, size, and kicker, then run the script. Full skill reference is in `.claude/skills/post-image.md`.

### Sample output

Five ready-to-post samples are already in `social/out/`:

- `hero-square.png` — positioning quote
- `stat-square.png` — "3 hrs saved per doctor, daily"
- `booking-portrait.png` — "Booking Q2 2026"
- `playbook-portrait.png` — "Three ways to introduce AI to a clinic"
- `case-lucy-landscape.png` — Luxembourg case-study
- `linkedin-landscape.png` — brand positioning for LinkedIn header

Use them as reference for what "on-brand" looks like.

---

## 10. Content calendar (opinionated starter)

Four weeks. Two posts a week per channel. Every post uses a template above.

| Week | IG | LinkedIn | X |
| --- | --- | --- | --- |
| 1 | `hero-square` (positioning) + `stat-square` (Nudge AI outcome) | `linkedin-landscape` positioning | Thread: "what we build, plainly" |
| 2 | `playbook-portrait` (healthcare) + `booking-portrait` | Long post: "Adopting AI in a clinic without rewriting the EHR" | Thread: same playbook, compressed |
| 3 | `case-lucy-landscape` + `stat-square` (SmartHabits) | Case study deep-dive post | Thread: "what shipped this quarter" |
| 4 | `quote` (principle 06 — no buzzword bingo) + `announcement` | Engineering essay teaser + link | Thread: the essay |

Adjust as the real pipeline forms.

---

## 11. Reference

- **Positioning + voice**: this doc, sections 1–2
- **Visual tokens**: `src/app/globals.css`, section 3
- **Copy source of truth**: `src/data/site.ts`
- **Supabase setup**: `supabase/README.md`, `.env.example`
- **Image generator**: `scripts/gen-post.mjs`, `.claude/skills/post-image.md`
- **SEO components**: `src/components/seo/json-ld.tsx`, `src/app/opengraph-image.tsx`

---

**Last updated:** 2026-04-19
**Stewarded by:** Yash Shah (founder)
**Website:** https://jayporelabs.com
