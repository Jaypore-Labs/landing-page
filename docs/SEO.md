# SEO + indexing guide — Jaypore Labs

Complete, step-by-step playbook for getting jayporelabs.com and every blog post indexed, ranked, and converting to client inquiries.

Start at **§1** today. The rest is designed so you can knock off one section per week and compound.

---

## 0. Status — what's already done (and what's blocking you)

### ✅ Already in place (shipped in the current codebase)

- **Metadata** per page (title, description, keywords, canonical, openGraph, twitter) — `src/app/layout.tsx` + each page.
- **Dynamic OG + Twitter share cards** at `/opengraph-image` and `/twitter-image`.
- **Structured data (JSON-LD)** — `Organization`, `WebSite`, `ProfessionalService`, `Service` × 6, `FAQPage`, `BreadcrumbList` on every page, `Article` on every blog post. See `src/components/seo/json-ld.tsx`.
- **Sitemap** at `/sitemap.xml` — auto-includes every static page + every blog post.
- **robots.txt** at `/robots.txt` — allows all major crawlers + AI crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended).
- **Viewport + theme color + color scheme**.
- **Canonical URLs** per page.
- **Env hooks** for Google + Bing verification meta tags (`GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`).

### 🚨 Blockers (must fix first, in order)

1. **Vercel Deployment Protection is ON.** Every page returns `401` to the public — Google, Bing, and every backlink check fail. Fix in §1.
2. **No custom domain.** Currently live at `landing-page-theguidingstars-projects.vercel.app`. SEO works on the vercel.app URL, but domain authority accrues to `jayporelabs.com`. Fix in §1.
3. **No Google Search Console property.** Google can technically discover and index you without it, but you lose the data that tells you *which* queries land you traffic. Fix in §2.

---

## 1. Unblock crawling (today, 10 minutes)

### 1a. Turn off Deployment Protection

Vercel has a per-project setting that puts every deployment behind SSO. This is on by default for team projects and must be off for a public marketing site.

1. Open https://vercel.com/theguidingstars-projects/landing-page/settings/deployment-protection
2. Find **Vercel Authentication** → change from *All Deployments* to **Only Preview Deployments** (or *Disabled* if you want previews public too).
3. Save.

Effect: the production URL becomes publicly crawlable within seconds. No redeploy needed.

Verify: `curl -I https://landing-page-theguidingstars-projects.vercel.app` should return `200 OK` (before: it returned `401`).

### 1b. Attach the custom domain

This is optional but strongly recommended before you submit to Google — all the inbound links, backlinks, and brand equity compound onto the custom domain over time.

1. Open https://vercel.com/theguidingstars-projects/landing-page/settings/domains
2. Add `jayporelabs.com` (and `www.jayporelabs.com` — Vercel handles the redirect).
3. Vercel shows DNS records to add — typically a single `A` record to `76.76.21.21` or a `CNAME` to `cname.vercel-dns.com`. Configure in your domain registrar (Namecheap/Cloudflare/GoDaddy/etc.).
4. Wait 5–60 minutes for DNS propagation.
5. Vercel auto-issues an SSL certificate.

Once live, update `siteConfig.url` in `src/data/site.ts` if it changes, and redeploy.

---

## 2. Google Search Console (today, 15 minutes)

Search Console is the canonical Google-to-you channel. Tells you which queries found you, which pages are indexed, which are broken, and lets you request indexing.

### 2a. Add the property

1. Go to https://search.google.com/search-console
2. Sign in with the Google account you want to own this forever (not a personal alias).
3. Click **Add property**.
4. Choose **Domain** (preferred) if you have the custom domain + DNS access. Otherwise choose **URL prefix** with the vercel.app URL.

### 2b. Verify ownership

**Domain verification (recommended):**
- GSC shows a TXT record to add to DNS.
- In your registrar (or Cloudflare), add the TXT record at the root.
- Click **Verify**. Takes 5–30 min for DNS to propagate.

**URL prefix verification via meta tag (works without custom domain):**
1. GSC shows a `<meta name="google-site-verification" content="...">` tag.
2. Copy just the `content="..."` value.
3. Add to Vercel: Project → Settings → Environment Variables → New variable:
   - Key: `GOOGLE_SITE_VERIFICATION`
   - Value: the content string (no quotes, no `<meta>` tag wrapper)
   - Environments: Production ✓ Preview ✓
4. Redeploy (or push any commit; auto-deploy picks up env).
5. Back in GSC, click **Verify**.

The site's `layout.tsx` already wires `GOOGLE_SITE_VERIFICATION` into `metadata.verification.google` — it becomes a meta tag on every page.

### 2c. Submit the sitemap

1. Left sidebar → **Sitemaps**.
2. Enter `sitemap.xml` (just the filename; Google prepends your domain).
3. Submit.

Google reads the sitemap within minutes and will start crawling the listed URLs. Full indexing takes 1–14 days depending on authority.

### 2d. Request indexing for priority pages

For each important page, fast-track the first crawl:

1. Top search bar in GSC → paste full URL (e.g., `https://jayporelabs.com/` or `https://jayporelabs.com/blog/ai-assistant-is-a-midwife`).
2. GSC shows *"URL is not on Google"* (expected on day one).
3. Click **Request indexing**.
4. Wait ~1 minute while Google fetches.
5. Repeat for: `/`, `/services`, `/portfolio`, `/about`, `/contact`, `/blog`, and each blog post URL.

Request-indexing has a daily quota (~10 URLs/day). Prioritize the homepage + top-earning blog posts.

### 2e. What to watch in GSC weekly

- **Performance** → impressions, clicks, average position. Sort by **Query** to see what people searched before clicking. Gold.
- **Coverage** (or *Pages*) → how many URLs Google has, how many are excluded and why.
- **Enhancements** → Core Web Vitals, mobile usability, structured data validation.
- **Links** → who's linking to you.

---

## 3. Bing Webmaster Tools (today, 10 minutes)

Bing accounts for ~7% of searches in most Western markets (higher in corporate environments). It also powers DuckDuckGo results. Ignore at your peril.

1. https://www.bing.com/webmasters
2. Sign in.
3. **Add site** → paste your URL.
4. Easiest verification: **Import from Google Search Console** (Bing pulls it automatically once you're signed in with the same Google account that verified GSC).
5. Or, meta-tag verification: add `BING_SITE_VERIFICATION` env var in Vercel (already wired in `layout.tsx`).
6. Once verified, submit your sitemap under **Sitemaps** → `sitemap.xml`.

Bing Webmaster also gives you **keyword research** and **backlink tools** that are better than GSC's in some ways. Use both.

### IndexNow (bonus)

Bing (and Yandex) support IndexNow — a push-based indexing API that tells search engines about new URLs instantly instead of waiting for them to crawl. Vercel doesn't auto-integrate it, but you can add a simple POST to IndexNow from a Next.js route after publishing a new blog. Optional; nice-to-have once you're posting weekly.

---

## 4. Analytics — know what's working (this week, 30 min)

### 4a. Google Analytics 4

1. Go to https://analytics.google.com
2. Create a new GA4 property for `jayporelabs.com`.
3. Grab the Measurement ID (`G-XXXXXXXXXX`).
4. Add to Vercel env: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`.
5. Add the GA4 snippet to `layout.tsx` (ask me — I'll wire it cleanly with `next/script`).

### 4b. Vercel Analytics + Speed Insights

Free with Vercel. Privacy-friendly, doesn't need cookie banners, and tracks Core Web Vitals per route.

1. Vercel Dashboard → Analytics tab → enable for the project.
2. Install `@vercel/analytics` and `@vercel/speed-insights` (I can do this).
3. Add `<Analytics />` and `<SpeedInsights />` to `layout.tsx`.

### 4c. What to look at

- **GSC Performance** — search impressions and CTR (Google-only).
- **GA4 Acquisition** — where traffic comes from (search, direct, social, referral).
- **Vercel Speed Insights** — real-user Core Web Vitals by page. Critical: Google ranks pages partly on LCP, CLS, INP.

---

## 5. The workflow for every new blog post

Every post you publish via the `/daily-article` skill should follow this exact checklist. It takes 3 minutes after the article itself is live.

### 5a. On publish

1. `git push` — Vercel auto-deploys. Post is live within 60s.
2. **Request indexing in GSC** — paste the new URL → *Request indexing*. First index within hours.
3. **Request indexing in Bing Webmaster** — same pattern. Or rely on IndexNow if you've wired it.
4. **Share on LinkedIn** with the canonical URL (inbound signal + traffic).
5. **Share on X** with the URL (doesn't help Google directly, but drives the first wave of traffic which signals engagement).
6. **Internal link** from at least one existing blog post. Edit a previous post's close section to link to the new one. Takes 30s, huge for crawl depth.

### 5b. On-page SEO checklist for every post (already scaffolded in the `/daily-article` skill, but double-check)

- [ ] `<h1>` contains the primary keyword (the title does this; the skill handles).
- [ ] Meta description is 140–160 chars and contains the primary keyword once.
- [ ] Slug is 3–6 words, kebab-case, keyword-led (e.g., `mcp-is-usb-c-for-ai` not `my-thoughts-on-mcp`).
- [ ] At least one external link to an authoritative source per 800 words.
- [ ] At least one internal link per 600 words.
- [ ] Every image has meaningful alt text (we mostly use typography, but OG images should have `alt`).
- [ ] `<article>`-level JSON-LD is emitted (handled by `ArticleJsonLd` component).
- [ ] Canonical URL points to the post's own URL (handled by `generateMetadata`).

---

## 6. Backlinks — the multiplier (ongoing, 2–4 hrs/week)

Google ranks by **content quality + backlinks + technical SEO**. You have 1 and 3. Backlinks are the lever for 2.

### 6a. Strategic directories (one-time, do this month)

Each of these gives a dofollow link + discovery by the right audience:

| Directory | Why it matters | Effort |
| --- | --- | --- |
| **Clutch.co** | The enterprise B2B buyer directory. High domain authority (~90). | 3 hrs to set up profile, 2 hrs per case study |
| **GoodFirms** | Similar to Clutch, less competitive, faster approval | 2 hrs |
| **DesignRush** | Software directory, medium DA, approvable same-week | 1 hr |
| **The Manifest** | Clutch-adjacent, free basic listing | 1 hr |
| **Sortlist** | European enterprise buyer directory | 1 hr |
| **Google Business Profile** | Local pack, map listings | 20 min |
| **Bing Places for Business** | Same for Bing | 15 min |
| **G2 (as a service provider)** | Reviews platform with enterprise buyer traffic | 1 hr |

### 6b. Platform partner programs (high leverage)

These usually give a profile page on a DA 70+ site with a link to yours:

- **Vercel Partner** → https://vercel.com/partners/apply (your site already runs on Vercel, natural fit)
- **Supabase Partner** → https://supabase.com/partners/integrations#get-listed
- **OpenAI + Anthropic partner programs** → applications open periodically
- **AWS Partner Network** → if you do any AWS infra work

### 6c. Content-driven backlinks (ongoing)

- Write a guest post for a DA 40+ blog in your space (e.g., Indie Hackers, The New Stack, InfoQ, Smashing Magazine). Pitch by email — short, specific, one idea per pitch.
- Build something open-source — an MCP server, a LangGraph template, a Next.js + AI starter. Pin it in your repo. Devs link to tools they use.
- Get quoted — sign up for HARO/Qwoted, respond to journalist queries in your niche. One "source" link on a DA 80+ publication is worth 100 directory links.
- Launch on Hacker News / Product Hunt when a product demo is ready. Ranks, drives traffic, earns links from the aggregator ecosystem.

### 6d. Social signals

LinkedIn and X links are *nofollow*, meaning they don't pass direct SEO juice — but they drive traffic that Google sees as engagement signal, and they surface your content to humans who *do* create followed links. Keep posting.

---

## 7. Keyword strategy for actually getting clients

Ranking is necessary but not sufficient. You want to rank for **queries that indicate buying intent**.

### 7a. Three keyword tiers

**Tier 1 — High intent, low volume (target first).** People who search these are ready to contract.

- `AI integration agency india`
- `ai scribe development services`
- `add ai to my saas`
- `healthcare AI software development`
- `custom mcp server development`
- `hire ai engineers india`
- `electron desktop app development company`
- `AI copilot development agency`

Write one blog or landing page per term. 800–1200 words. Case-study-embedded if possible.

**Tier 2 — Medium intent, medium volume (target next).** Educational queries where buyers are researching.

- `how to add ai to existing software`
- `building AI scribes for healthcare`
- `AI agent best practices`
- `RAG system architecture`
- `LLM evaluation framework`
- `mcp server tutorial`

Your existing blog posts already address most of these. Add 3–5 more over the next quarter.

**Tier 3 — Low intent, high volume (content-only).** Drive traffic + brand awareness, don't convert directly.

- `what is an AI agent`
- `prompt engineering explained`
- `what is mcp`

Skip these for now. Come back when you have 30+ posts and want to build topical authority.

### 7b. Topic clusters

Group blog posts by theme and interlink heavily. Two strong clusters for Jaypore Labs:

**Cluster 1 — AI in engineering workflows** (pillar: Services page → AI Enablement)
- `mcp-is-usb-c-for-ai` ✅
- `ai-assistant-is-a-midwife` ✅
- `prompts-are-recipes` ✅
- `ai-agent-kitchen-brigade` ✅
- Add: `llm-evals-restaurant-inspections`, `rag-is-a-public-library`, `tool-calling-dog-training`

**Cluster 2 — AI in healthcare** (pillar: Services page → AI for Healthcare)
- `medieval-scribes-ai-scribes` ✅
- Add: `ai-in-legal-stenography`, `clinic-ai-adoption-playbook`, `voice-ai-in-clinical-workflows`

Each post in a cluster links to every other post in the cluster, and the pillar service page. Google treats this as a signal of topical authority.

### 7c. Location pages (if you want them)

- `/ai-development-india`
- `/ai-consulting-middle-east` (given GCC interest you mentioned earlier)
- `/ai-development-europe`

Each is a landing page tailored to regional language/currency/case-study highlights. Adds 3 rankable pages. Optional.

---

## 8. Structured data — make sure it's picked up

You have rich structured data shipping. Verify it's valid so Google uses it.

1. Go to https://search.google.com/test/rich-results
2. Enter your URL (or paste source HTML).
3. Validate.

Expected findings on Jaypore Labs today:

| Page | Schemas that should validate |
| --- | --- |
| `/` | Organization, WebSite, ProfessionalService, Service × 6 |
| `/services` | Service × 6, BreadcrumbList |
| `/contact` | FAQPage, BreadcrumbList |
| `/blog/*` | Article, BreadcrumbList |

If any schema fails validation, Grep for it in `src/components/seo/json-ld.tsx` and fix the field.

---

## 9. Core Web Vitals — don't let the site be slow

Google uses CWV (LCP, CLS, INP) as a ranking factor. The site should already be fast because it's Next.js + static generation, but verify:

1. https://pagespeed.web.dev — paste your URL.
2. Look for scores on **Performance**, **Accessibility**, **Best Practices**, **SEO**.
3. Target: all four in the green (90+).

If anything is below 90:

- **Performance issues** → check the OG image routes (`/opengraph-image` uses `runtime = "nodejs"` — that's fine). Check if `/yash.png` is still referenced anywhere (it shouldn't be).
- **Accessibility issues** → almost always alt text or contrast. Our grain overlay is very subtle; shouldn't trip it.
- **SEO issues** → if this flags anything, it's usually a meta description length issue. Tighten.

Vercel Speed Insights (when enabled) tracks CWV from real user loads, which is what Google actually uses.

---

## 10. Monthly maintenance — 30 min/month

On the first Monday of each month:

1. **GSC Performance** → export top 20 queries. Look for keywords climbing (target) or dropping (investigate).
2. **GSC Coverage** → fix any "Not indexed" pages that should be indexed.
3. **GSC Core Web Vitals** → anything in "Poor"? Fix.
4. **Backlinks** (GSC or Ahrefs free account) → note new links. Reach out to thank linker (starts relationships).
5. **Google Business Profile** → one new photo + one "offer" post per month.
6. **Clutch / GoodFirms** → add any new case study.
7. **Update old posts** → pick one 3+ month old post, add 200 words of new context, update the `date` in frontmatter to today. Google re-crawls and re-ranks updated content.

---

## 11. What to expect on a timeline

| Week | What happens |
| --- | --- |
| 0 | Unblock Deployment Protection. GSC + Bing verified. Sitemap submitted. |
| 1 | Homepage + 2–3 blogs indexed. First impressions start showing in GSC. Directories submitted. |
| 2–4 | All blog posts indexed. Long-tail keywords start surfacing impressions. First backlinks land from partner programs / directories. |
| 1–3 months | First page-one rankings for Tier 1 low-competition keywords. First organic inbound enquiries via the contact form. |
| 3–6 months | Topical authority building. More Tier 1 keywords rank. Compound growth kicks in. |
| 6–12 months | Steady inbound pipeline. 5–15 qualified inquiries per month from search alone if you've kept a weekly blog cadence. |

Nobody gets clients from SEO in week one. By month three, things are moving. By month six, search is your cheapest channel. The lever is consistency — one good post per week, every week.

---

## 12. Quick-wins worth doing this week

In priority order, highest impact first:

1. **Toggle Deployment Protection off** (blocks everything else)
2. **Add custom domain** `jayporelabs.com`
3. **GSC property + verify + sitemap submit**
4. **Bing Webmaster + sitemap**
5. **Request indexing for all 9 existing pages** (home, services, portfolio, about, contact, blog index, 5 blog posts)
6. **Submit to Clutch + GoodFirms**
7. **Apply to Vercel Partner program**
8. **Publish one new blog post** (pick from `docs/blog-ideas.md`)
9. **Add GA4 + Vercel Analytics + Speed Insights**
10. **Update 1 existing blog post with the date changed to this week** (freshness signal)

Each item is 15–60 minutes. The full list is one solid afternoon.

---

## Environment variables reference

Set in Vercel → Project → Settings → Environment Variables. See `.env.example`.

| Key | Purpose | Where to get |
| --- | --- | --- |
| `GOOGLE_SITE_VERIFICATION` | Meta-tag verification for Google Search Console | GSC → Settings → Ownership verification |
| `BING_SITE_VERIFICATION` | Meta-tag verification for Bing Webmaster | Bing Webmaster → Add site → meta tag |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | GA4 → Admin → Data Streams → GA tracking ID |

All three are safe to commit in the `.env.example` (values are not secrets; they're public site identifiers).

---

## Who owns what

This is a playbook you can hand to someone, but the pieces that need *you* (or Yash) specifically:

- **Yash**: LinkedIn posts, X posts, guest-post pitches, speaking slots. Author brand compounds.
- **Anyone on the team**: GSC monitoring, directory submissions, backlink checks.
- **Claude Code**: blog article drafting (via `/daily-article` skill), carousel rendering, copy updates.

Pair the human accounts with the brand ones. Google weighs author reputation (E-E-A-T) more every update.
