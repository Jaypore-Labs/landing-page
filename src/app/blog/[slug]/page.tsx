import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Linkedin, Twitter, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/blog";
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
    <h1 className="display text-3xl md:text-4xl text-paper mt-12 mb-5" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="display text-2xl md:text-3xl text-paper mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="display text-xl md:text-2xl text-paper mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-paper-dim mb-5 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-5 text-paper-dim mb-5 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-5 text-paper-dim mb-5 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-paper-dim" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent hover:underline underline-offset-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="mono bg-muted px-2 py-0.5 rounded text-sm text-paper" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mono bg-muted border border-line text-paper p-5 rounded-xl overflow-x-auto mb-6 text-sm" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-accent pl-5 italic text-paper my-6 text-lg" {...props} />
  ),
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
          { name: "Journal", href: "/blog" },
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
      <section className="relative bg-ink border-b border-line pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 right-1/2 translate-x-1/2 h-[420px] w-[720px] rounded-full accent-glow pointer-events-none"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to journal
          </Link>

          <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-6">
            {post.category}
          </div>

          <h1 className="display-tight text-paper text-[clamp(2.25rem,6vw,5.5rem)] mb-8">
            {post.title}
          </h1>

          <p className="text-lg text-paper-dim leading-relaxed max-w-2xl mb-10">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
            <span className="flex items-center gap-2">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-ink border-b border-line py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {post.tags.length > 0 && (
            <div className="mt-14 pt-8 border-t border-line">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-4">
                Tagged
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-line text-paper-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-line flex items-center justify-between gap-6 flex-wrap">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
              Share
            </div>
            <div className="flex gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper-dim hover:bg-accent hover:text-ink hover:border-accent transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper-dim hover:bg-accent hover:text-ink hover:border-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="relative bg-ink border-b border-line">
          <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-20 md:py-28">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                Keep reading
              </span>
            </div>

            <ul className="border-t border-line">
              {relatedPosts.map((p, i) => (
                <li key={p.slug} className="border-b border-line group">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="flex items-center justify-between gap-6 py-6"
                  >
                    <div className="flex items-baseline gap-6 flex-1 min-w-0">
                      <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-1">
                          {p.category}
                        </div>
                        <h3 className="display text-xl md:text-2xl text-paper group-hover:text-accent transition-colors">
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
