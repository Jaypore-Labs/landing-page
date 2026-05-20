import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Not found",
  description:
    "The page you were looking for isn't here. Try the journal, services, or portfolio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const recent = getAllPosts().slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow="404 · Not found"
        title={
          <>
            This page,
            <br />
            <span className="italic font-medium text-accent">missing.</span>
          </>
        }
        description="The URL doesn't match anything we publish. The links below should get you back on track."
      />

      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-6">
                Start here
              </div>
              <ul className="space-y-5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/blog", label: "Journal" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="display text-2xl md:text-3xl text-paper hover:text-accent transition-colors inline-flex items-center gap-3"
                    >
                      {l.label}
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-6">
                Recent articles
              </div>
              <ul className="space-y-5">
                {recent.map((post) => (
                  <li key={post.slug} className="border-b border-line pb-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="display text-lg md:text-xl text-paper hover:text-accent transition-colors block"
                    >
                      {post.title}
                    </Link>
                    <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mt-2">
                      {post.category} ·{" "}
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
