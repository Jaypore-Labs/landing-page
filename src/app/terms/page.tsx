import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";

const desc =
  "The terms that cover use of jayporelabs.com — content licensing, accuracy, links, and what you can and can't do with what you find here.";

export const metadata: Metadata = {
  title: "Terms",
  description: desc,
  alternates: { canonical: `${siteConfig.url}/terms` },
  openGraph: {
    title: `Terms · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/terms`,
  },
  twitter: {
    title: `Terms · ${siteConfig.name}`,
    description: desc,
  },
};

const sections = [
  {
    h: "What this page covers",
    p: (
      <>
        These are the terms for the public site at <strong>jayporelabs.com</strong>.
        Engagement work — when we&apos;re actually building something for you —
        is governed by a separate MSA + SOW we sign together. This page does
        not replace that.
      </>
    ),
  },
  {
    h: "The site is for reading",
    p: (
      <>
        You can read everything on this site, share links, quote articles
        with attribution, and link to us. You can&apos;t republish whole
        articles as your own, scrape the site to train a commercial model,
        or remove our attribution from images. If you want to syndicate
        something properly, email us — we usually say yes.
      </>
    ),
  },
  {
    h: "Quoting and citing",
    p: (
      <>
        Quotes of up to ~200 words with attribution back to the source URL
        are welcome under fair use. Carousel images can be shared on social
        with credit to <strong>@jayporelabs</strong>. For longer excerpts
        or commercial reproduction, ask first.
      </>
    ),
  },
  {
    h: "Accuracy",
    p: (
      <>
        We try to get things right and we update articles when we learn
        we got something wrong. The blog is opinionated — it&apos;s how we
        think about the work, not a substitute for engineering judgement on
        your specific system. Don&apos;t deploy something to production
        because a blog post said to.
      </>
    ),
  },
  {
    h: "Links to other sites",
    p: (
      <>
        We link to tools, dashboards, and articles we find useful. We
        don&apos;t control them and don&apos;t guarantee they stay good.
        If a link is dead or wrong, tell us.
      </>
    ),
  },
  {
    h: "Trademarks",
    p: (
      <>
        Jaypore Labs, the logo, and the wordmark are ours. Other names
        mentioned (Anthropic, Claude, Vercel, Logitech, Mercedes, etc.)
        belong to their owners — we don&apos;t claim affiliation beyond
        what we describe in case studies.
      </>
    ),
  },
  {
    h: "No warranty",
    p: (
      <>
        The site is provided as-is. We don&apos;t warrant that everything is
        bug-free, always available, or fits your specific use case. If
        something on the site causes you to break something downstream, we
        can&apos;t be liable beyond what the law requires.
      </>
    ),
  },
  {
    h: "Governing law",
    p: (
      <>
        These terms are governed by the laws of India. If a dispute
        arises that we can&apos;t solve over email — which would surprise
        us — courts in Jaipur, Rajasthan have exclusive jurisdiction.
      </>
    ),
  },
  {
    h: "Changes",
    p: (
      <>
        If we change these terms we&apos;ll update the &quot;Last
        updated&quot; line below. Continued use of the site after that
        means you&apos;re fine with the new version.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Terms", href: "/terms" },
        ]}
      />
      <PageHero
        eyebrow="Terms"
        title={
          <>
            Plain-English
            <br />
            <span className="italic font-medium text-accent">terms.</span>
          </>
        }
        description={
          <>
            Short version: read the site, share links, quote articles with
            credit. Don&apos;t scrape, don&apos;t pretend it&apos;s yours.
            Engagement work has its own contract.
          </>
        }
      />

      <section className="relative bg-paper text-ink border-b border-line">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10 py-24 md:py-32">
          <div className="space-y-16">
            {sections.map((s) => (
              <div key={s.h} className="grid grid-cols-12 gap-8 items-start">
                <div className="col-span-12 md:col-span-4">
                  <h2 className="display text-2xl md:text-3xl text-ink">
                    {s.h}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-8 text-ink-soft text-base md:text-lg leading-relaxed">
                  {s.p}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 flex items-center justify-between flex-wrap gap-4 pt-10 border-t border-line">
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              Last updated · 2026-04-28
            </span>
            <Link
              href="/privacy"
              className="mono text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-accent transition-colors"
            >
              Read the privacy policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
