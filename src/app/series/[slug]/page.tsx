import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { findSeriesBySlug, series } from "@/data/series";
import { getPostsBySeries } from "@/lib/blog";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = findSeriesBySlug(slug);
  if (!s) return { title: "Series not found" };
  return {
    title: `${s.title} · Series`,
    description: s.description,
    alternates: { canonical: `${siteConfig.url}/series/${slug}` },
    openGraph: {
      title: `${s.title} · Series — ${siteConfig.name}`,
      description: s.description,
      url: `${siteConfig.url}/series/${slug}`,
    },
    twitter: {
      title: `${s.title} · Series — ${siteConfig.name}`,
      description: s.description,
    },
  };
}

export default async function SeriesDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = findSeriesBySlug(slug);
  if (!s) notFound();
  const posts = getPostsBySeries(s.title);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Series", href: "/series" },
          { name: s.title, href: `/series/${s.slug}` },
        ]}
      />
      <PageHero
        eyebrow={`${s.eyebrow} · Series`}
        title={
          <>
            {s.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic font-medium text-accent">
              {s.title.split(" ").slice(-1)}.
            </span>
          </>
        }
        description={s.description}
      />

      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-4">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-2">
                Hook
              </div>
              <p className="display text-xl md:text-2xl text-paper leading-snug">
                {s.hook}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-2">
                Who it&apos;s for
              </div>
              <p className="text-paper-dim leading-relaxed text-sm md:text-base">
                {s.audience}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-2">
                Progress
              </div>
              <div className="display text-3xl md:text-4xl text-paper">
                {posts.length}
                <span className="text-paper-dim">/{s.postCount}</span>
              </div>
              <p className="text-paper-dim text-xs mt-2 mono">
                ARTICLES SHIPPED
              </p>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="border-t border-b border-line py-20 text-center">
              <p className="display text-2xl md:text-3xl text-paper">
                Nothing shipped here{" "}
                <span className="italic text-accent">yet</span>.
              </p>
              <p className="mt-3 text-paper-dim">
                The first article in this series is in the queue. Subscribe via{" "}
                <Link href="/feed.xml" className="underline decoration-accent decoration-2 underline-offset-4">
                  RSS
                </Link>{" "}
                to catch it.
              </p>
            </div>
          ) : (
            <ul className="border-t border-line">
              {posts.map((post, i) => (
                <li key={post.slug} className="border-b border-line group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between gap-6 py-8"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10 flex-1 min-w-0">
                      <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-10 shrink-0">
                        {String(post.seriesOrder ?? i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-2">
                          {post.category}
                        </div>
                        <h2 className="display text-2xl md:text-4xl text-paper group-hover:text-accent transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-paper-dim text-sm max-w-2xl">
                          {post.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-6 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim shrink-0">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Link
            href="/series"
            className="mt-12 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim hover:text-accent transition-colors"
          >
            ← All series
          </Link>
        </div>
      </section>
    </>
  );
}
