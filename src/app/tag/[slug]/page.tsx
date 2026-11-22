import { Metadata } from "next";
import Link from "next/link";
import { InsightCard } from "@/components/sections/insights";
import { Wrap } from "@/components/ui/primitives";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getAllPosts, getAllTags, getPostsByTag, slugify } from "@/lib/blog";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

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

// Thin tag pages (< this many posts) get robots:noindex,follow so Google
// doesn't waste crawl budget on near-duplicate hub pages and so they
// stop showing up as "Crawled — currently not indexed" in GSC. The page
// stays accessible to humans clicking a tag chip from an article.
const MIN_POSTS_FOR_INDEX = 5;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = findTagLabel(slug);
  if (!tag) return { title: "Tag not found" };
  const postCount = getPostsByTag(tag).length;
  const desc = `Field notes from Jaypore Labs Insights tagged "${tag}".`;
  return {
    title: `${tag} · Insights`,
    description: desc,
    alternates: { canonical: `${siteConfig.url}/tag/${slug}` },
    openGraph: { ...ogDefaults,
      title: `${tag} · Insights — ${siteConfig.name}`,
      description: desc,
      url: `${siteConfig.url}/tag/${slug}`,
    },
    robots:
      postCount < MIN_POSTS_FOR_INDEX
        ? { index: false, follow: true }
        : { index: true, follow: true },
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
          { name: "Insights", href: "/blog" },
          { name: tag, href: `/tag/${slug}` },
        ]}
      />
      <PageHero
        eyebrow="Tagged"
        title={tag}
        description={`${posts.length} article${posts.length > 1 ? "s" : ""} from Jaypore Labs Insights.`}
      />

      <section className="border-b border-line">
        <Wrap className="py-16 md:py-24">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts.map((post) => (
              <li key={post.slug}>
                <InsightCard post={post} />
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="mt-16 inline-flex items-center gap-2 text-[15px] font-medium text-ink link-underline"
          >
            <ArrowLeft className="h-4 w-4 text-accent" />
            All insights
          </Link>
        </Wrap>
      </section>
    </>
  );
}
