import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { InsightCard, formatDate } from "@/components/sections/insights";
import { CtaBand, Wrap } from "@/components/ui/primitives";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getAllPosts, getAllCategories, slugify } from "@/lib/blog";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Insights for technology leaders on enterprise architecture, modernization, delivery and applied AI, written by the Jaypore Labs engineering team.";

export const metadata: Metadata = {
  title: "Insights",
  description: desc,
  keywords: [
    "AI enablement blog",
    "AI adoption case studies",
    "AI engineering essays",
    "healthcare AI playbook",
  ],
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: { ...ogDefaults,
    title: `Insights · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
  twitter: { ...twitterDefaults,
    title: `Insights · ${siteConfig.name}`,
    description: desc,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  // Only surface hubs that are indexable (5+ posts); thin one-off categories stay out of the nav.
  const categories = getAllCategories().filter(
    (c) => posts.filter((p) => p.category === c).length >= 5
  );
  const [lead, ...rest] = posts;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Insights"
        title="Insights for technology leaders."
        description="Perspectives on enterprise architecture, modernization, delivery and applied AI from our engineering team."
      />

      {categories.length > 0 && (
        <nav aria-label="Topics" className="border-b border-line">
          <Wrap className="flex flex-wrap gap-x-8 gap-y-2">
            <span className="relative py-4 text-[15px] font-medium text-ink">
              All insights
              <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-accent" />
            </span>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/category/${slugify(c)}`}
                className="py-4 text-[15px] text-ink-soft hover:text-ink transition-colors"
              >
                {c}
              </Link>
            ))}
          </Wrap>
        </nav>
      )}

      <section className="border-b border-line">
        <Wrap className="py-16 md:py-24">
          {!lead ? (
            <p className="text-ink-soft">New articles are on their way.</p>
          ) : (
            <>
              <Link
                href={`/blog/${lead.slug}`}
                className="palette-classic group grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-6 bg-muted text-paper p-8 md:p-12 border-t-[3px] border-accent"
              >
                <div className="col-span-12 lg:col-span-8">
                  <div className="eyebrow text-paper-dim">Latest · {lead.category}</div>
                  <h2 className="display mt-5 text-[clamp(1.875rem,3.4vw,3rem)] text-paper">
                    {lead.title}
                  </h2>
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
                  <p className="text-[15px] leading-relaxed text-paper-dim">{lead.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-4 text-sm text-paper-dim">
                    <span>
                      {formatDate(lead.date)} · {lead.readingTime}
                    </span>
                    <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>

              <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {rest.map((post) => (
                  <li key={post.slug}>
                    <InsightCard post={post} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </Wrap>
      </section>

      <CtaBand />
    </>
  );
}
