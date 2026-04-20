import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getAllPosts, getAllTags, getPostsByTag, slugify } from "@/lib/blog";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((t) => ({ slug: slugify(t) }));
}

function findTagLabel(slug: string): string | null {
  const tags = getAllTags();
  return tags.find((t) => slugify(t) === slug) ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = findTagLabel(slug);
  if (!tag) return { title: "Tag not found" };
  const desc = `Field notes from the Jaypore Labs journal tagged "${tag}".`;
  return {
    title: `${tag} · Journal`,
    description: desc,
    alternates: { canonical: `${siteConfig.url}/tag/${slug}` },
    openGraph: {
      title: `${tag} · Journal — ${siteConfig.name}`,
      description: desc,
      url: `${siteConfig.url}/tag/${slug}`,
    },
  };
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = findTagLabel(slug);
  if (!tag) notFound();
  const posts = getPostsByTag(tag);
  if (!posts.length) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Journal", href: "/blog" },
          { name: tag, href: `/tag/${slug}` },
        ]}
      />
      <PageHero
        eyebrow={`Tagged · ${tag}`}
        title={
          <>
            Field notes,
            <br />
            <span className="italic font-medium text-accent">{tag}.</span>
          </>
        }
        description={`${posts.length} article${posts.length > 1 ? "s" : ""} in this tag — part of the Jaypore Labs journal.`}
      />

      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-20 md:py-32">
          <ul className="border-t border-line">
            {posts.map((post, i) => (
              <li key={post.slug} className="border-b border-line group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center justify-between gap-6 py-8"
                >
                  <div className="flex items-baseline gap-6 md:gap-10 flex-1 min-w-0">
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-10 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-2">
                        {post.category}
                      </div>
                      <h2 className="display text-2xl md:text-4xl text-paper group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
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

          <Link
            href="/blog"
            className="mt-12 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim hover:text-accent transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </section>
    </>
  );
}
