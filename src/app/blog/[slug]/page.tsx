import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Linkedin, Twitter } from "lucide-react";
import { InsightCard, formatDate } from "@/components/sections/insights";
import { ArrowLink, CtaBand, SectionHeader, Wrap } from "@/components/ui/primitives";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getPostBySlug, getAllPostSlugs, getAllPosts, slugify } from "@/lib/blog";
import { siteConfig } from "@/data/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post not found" };

  const canonical = `${siteConfig.url}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="display text-[2rem] text-ink mt-14 mb-5" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="display text-[1.75rem] text-ink mt-12 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="display text-[1.375rem] text-ink mt-10 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-ink-soft text-[17px] mb-6 leading-[1.75]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-5 text-ink-soft text-[17px] mb-6 space-y-2 marker:text-accent" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-5 text-ink-soft text-[17px] mb-6 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-[1.7] pl-1" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent-ink underline underline-offset-4 decoration-1 hover:decoration-2" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="mono bg-paper-deep px-1.5 py-0.5 text-[0.875em] text-ink" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="palette-classic mono bg-muted text-paper p-6 overflow-x-auto mb-8 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:text-paper [&_code]:p-0" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-[3px] border-accent pl-6 my-8 font-serif text-[1.375rem] leading-snug text-ink [&_p]:text-ink [&_p]:text-[1.375rem] [&_p]:leading-snug" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 -mx-5 sm:mx-0 overflow-x-auto border-y border-line-strong">
      <table className="w-full text-[15px] text-ink-soft border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="text-ink" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-line" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />,
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left text-sm font-semibold text-ink px-4 py-3 border-b border-line-strong" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 align-top leading-relaxed" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-12 border-line" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-ink font-semibold" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const shareUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ]}
      />
      <ArticleJsonLd
        article={{
          title: post.title,
          description: post.description,
          author: post.author,
          date: post.date,
          slug,
          tags: post.tags,
        }}
      />
      {/* Header */}
      <section className="border-b border-line">
        <Wrap className="pt-12 md:pt-16 pb-14 md:pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-ink-mute hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Insights
          </Link>
          <div className="max-w-4xl">
            <Link
              href={`/category/${slugify(post.category)}`}
              className="eyebrow mt-10 inline-block text-accent-ink hover:text-ink"
            >
              {post.category}
            </Link>
            <h1 className="display-tight mt-5 text-ink text-[clamp(2.25rem,4.6vw,4rem)]">
              {post.title}
            </h1>
            {post.description && (
              <p className="lede mt-6 text-ink-soft max-w-3xl">{post.description}</p>
            )}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-mute">
              <span className="text-ink font-medium">{post.author}</span>
              <span>{formatDate(post.date, "long")}</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </Wrap>
      </section>

      {/* Content */}
      <section className="border-b border-line">
        <Wrap className="py-14 md:py-20">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-10">
            <article className="col-span-12 lg:col-span-8 max-w-[720px]">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />

              {post.tags.length > 0 && (
                <div className="mt-14 border-t border-line pt-8">
                  <div className="eyebrow text-ink-mute mb-4">Topics</div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-line-strong px-3 py-1.5 text-sm text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <aside className="hidden lg:block col-span-3 col-start-10">
              <div className="sticky top-28 space-y-10">
                <div>
                  <div className="eyebrow text-ink-mute mb-4">Share</div>
                  <div className="flex flex-col gap-3 text-[15px]">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink hover:text-accent-ink"
                    >
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink hover:text-accent-ink"
                    >
                      <Twitter className="h-4 w-4" /> X / Twitter
                    </a>
                  </div>
                </div>
                <div className="border-t-[3px] border-accent bg-paper-light p-6">
                  <div className="display text-[1.25rem] text-ink">
                    Exploring AI for your organization?
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    Speak with the engineers who wrote this.
                  </p>
                  <ArrowLink href="/contact" className="mt-5">
                    Contact us
                  </ArrowLink>
                </div>
              </div>
            </aside>
          </div>
        </Wrap>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-paper-deep border-b border-line">
          <Wrap className="py-20 md:py-24">
            <SectionHeader eyebrow="Related insights" title={`More on ${post.category}`} />
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <InsightCard post={p} />
                </li>
              ))}
            </ul>
          </Wrap>
        </section>
      )}

      <CtaBand />
    </>
  );
}
