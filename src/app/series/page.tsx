import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { series } from "@/data/series";
import { getPostsBySeries } from "@/lib/blog";
import { siteConfig } from "@/data/site";

const desc =
  "Eight editorial series from Jaypore Labs. Long-running threads on AI agents, Claude Code in business, eval testing, MCP, and predictable AI output.";

export const metadata: Metadata = {
  title: "Series",
  description: desc,
  alternates: { canonical: `${siteConfig.url}/series` },
  openGraph: {
    title: `Series · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/series`,
  },
  twitter: {
    title: `Series · ${siteConfig.name}`,
    description: desc,
  },
};

export default function SeriesIndexPage() {
  const enriched = series.map((s) => ({
    ...s,
    shipped: getPostsBySeries(s.title).length,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Series", href: "/series" },
        ]}
      />
      <PageHero
        eyebrow="Series"
        title={
          <>
            Eight long
            <br />
            <span className="italic font-medium text-accent">threads.</span>
          </>
        }
        description={
          <>
            Each series is a planned arc of articles — not a one-off post.
            New entries land most weekdays. Subscribe via{" "}
            <Link
              href="/feed.xml"
              className="underline decoration-accent decoration-2 underline-offset-4"
            >
              RSS
            </Link>{" "}
            or follow{" "}
            <a
              href={siteConfig.social.twitter}
              className="underline decoration-accent decoration-2 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              @jayporelabs
            </a>
            .
          </>
        }
      />

      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-20 md:py-32">
          <ul className="border-t border-line">
            {enriched.map((s, i) => (
              <li key={s.slug} className="border-b border-line group">
                <Link
                  href={`/series/${s.slug}`}
                  className="grid grid-cols-12 gap-6 py-10 md:py-14 items-start"
                >
                  <div className="col-span-12 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim pt-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-3">
                      {s.eyebrow} · {s.shortTitle}
                    </div>
                    <h2 className="display text-3xl md:text-5xl text-paper group-hover:text-accent transition-colors">
                      {s.title}
                    </h2>
                    <p className="mt-4 text-paper-dim text-sm md:text-base max-w-xl leading-relaxed">
                      {s.hook}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:pt-4">
                    <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-2">
                      Progress
                    </div>
                    <div className="display text-2xl md:text-3xl text-paper">
                      {s.shipped}
                      <span className="text-paper-dim">/{s.postCount}</span>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-1 hidden md:flex justify-end pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim hover:text-accent transition-colors"
          >
            ← Back to journal
          </Link>
        </div>
      </section>
    </>
  );
}
