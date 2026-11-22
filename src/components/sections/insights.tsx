import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

export function formatDate(d: string, month: "short" | "long" = "short") {
  return new Date(d).toLocaleDateString("en-US", {
    month,
    day: "numeric",
    year: "numeric",
  });
}

type PostMeta = ReturnType<typeof getAllPosts>[number];

export function InsightCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col border-t border-line-strong pt-6">
      <div className="eyebrow text-accent-ink">{post.category}</div>
      <h3 className="display mt-4 text-[1.375rem] leading-[1.25] text-ink group-hover:text-accent-ink transition-colors">
        {post.title}
      </h3>
      {post.description && (
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft line-clamp-3">
          {post.description}
        </p>
      )}
      <div className="mt-6 text-sm text-ink-mute">
        {formatDate(post.date)} · {post.readingTime}
      </div>
    </Link>
  );
}

const BUSINESS_CATEGORIES = ["Strategy", "Leadership"];

/** Homepage — latest business-facing thinking (not engineering how-tos). */
export function Insights({ count = 3 }: { count?: number }) {
  const all = getAllPosts();
  const posts = BUSINESS_CATEGORIES.flatMap((c) => all.filter((p) => p.category === c))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, count);
  if (posts.length === 0) return null;
  return (
    <section className="bg-paper-deep border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="Insights"
          title="Insights for technology leaders."
          intro="Perspectives on architecture, modernization and delivery from our engineering team."
          action={{ href: "/blog", label: "View all insights" }}
        />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((p) => (
            <li key={p.slug}>
              <InsightCard post={p} />
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
