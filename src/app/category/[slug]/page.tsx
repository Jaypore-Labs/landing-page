import { Metadata } from "next";
import Link from "next/link";
import { InsightCard } from "@/components/sections/insights";
import { Wrap } from "@/components/ui/primitives";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getAllCategories, getPostsByCategory, slugify } from "@/lib/blog";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ slug: slugify(c) }));
}

function findCategoryLabel(slug: string): string | null {
  return getAllCategories().find((c) => slugify(c) === slug) ?? null;
}

// Thin category pages get robots:noindex,follow — see /tag/[slug]/page.tsx.
const MIN_POSTS_FOR_INDEX = 5;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategoryLabel(slug);
  if (!category) return { title: "Category not found" };
  const postCount = getPostsByCategory(category).length;
  const desc = `${category} — articles from Jaypore Labs Insights.`;
  return {
    title: `${category} · Insights`,
    description: desc,
    alternates: { canonical: `${siteConfig.url}/category/${slug}` },
    openGraph: { ...ogDefaults,
      title: `${category} · Insights — ${siteConfig.name}`,
      description: desc,
      url: `${siteConfig.url}/category/${slug}`,
    },
    robots:
      postCount < MIN_POSTS_FOR_INDEX
        ? { index: false, follow: true }
        : { index: true, follow: true },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = findCategoryLabel(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(category);
  if (!posts.length) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/blog" },
          { name: category, href: `/category/${slug}` },
        ]}
      />
      <PageHero
        eyebrow="Topic"
        title={category}
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
