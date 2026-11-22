import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/components/sections/insights";
import { Wrap } from "@/components/ui/primitives";
import { PageHero } from "@/components/layout/page-hero";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Not found",
  description:
    "The page you were looking for isn't here. Try our insights, services, or client work.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const recent = getAllPosts().slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow="Error 404"
        title="We couldn’t find that page."
        description="The page may have moved or no longer exists. The links below will help you find what you were looking for."
      />

      <section className="border-b border-line">
        <Wrap className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
            <div>
              <div className="eyebrow text-ink-mute mb-4">Explore</div>
              <ul className="border-t border-line">
                {[
                  { href: "/", label: "Home" },
                  { href: "/solutions", label: "Solutions" },
                  { href: "/services", label: "Services" },
                  { href: "/industries", label: "Industries" },
                  { href: "/portfolio", label: "Case studies" },
                  { href: "/blog", label: "Insights" },
                  { href: "/about", label: "About us" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href} className="border-b border-line">
                    <Link
                      href={l.href}
                      className="group flex items-center justify-between py-4 display text-[1.375rem] text-ink"
                    >
                      {l.label}
                      <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow text-ink-mute mb-4">Recent insights</div>
              <ul className="border-t border-line">
                {recent.map((post) => (
                  <li key={post.slug} className="border-b border-line py-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="display text-[1.25rem] leading-snug text-ink hover:text-accent-ink transition-colors"
                    >
                      {post.title}
                    </Link>
                    <div className="mt-2 text-sm text-ink-mute">
                      {post.category} · {formatDate(post.date)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
