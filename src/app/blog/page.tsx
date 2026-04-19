import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes from the studio — building AI products, shipping fast, and keeping software boring in the right places.",
  openGraph: {
    title: "Journal · Jaypore Labs",
    description:
      "Field notes from the studio — building AI products, shipping fast, and keeping software boring in the right places.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title={
          <>
            The studio,
            <br />
            <span className="italic font-medium text-accent">out loud.</span>
          </>
        }
        description="Lessons from shipping AI products, building with small teams, and the occasional strong opinion about software."
      />

      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-20 md:py-32">
          {posts.length === 0 ? (
            <div className="max-w-xl">
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-6">
                Status
              </div>
              <h2 className="display-tight text-paper text-[clamp(2.25rem,6vw,5rem)] mb-6">
                First issue
                <br />
                <span className="italic font-medium text-accent">coming soon.</span>
              </h2>
              <p className="text-paper-dim leading-relaxed mb-8 max-w-md">
                We&apos;re putting together some long-form essays on healthcare
                AI, Electron ergonomics, and shipping under constraint. Drop us
                a line if you want to be first to know.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-accent text-ink px-6 py-3.5 text-sm font-medium hover:bg-accent-deep transition-colors"
              >
                Get notified
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          ) : (
            <>
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-12">
                  <span className="mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-full bg-accent text-ink">
                    All
                  </span>
                  {categories.map((c) => (
                    <span
                      key={c}
                      className="mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-full border border-line text-paper-dim"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              <ul className="border-t border-line">
                {posts.map((post, i) => (
                  <li
                    key={post.slug}
                    className="border-b border-line group"
                  >
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
            </>
          )}
        </div>
      </section>
    </>
  );
}
