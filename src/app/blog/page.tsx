import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and thoughts on software development, AI, and building successful SaaS products.",
  openGraph: {
    title: "Blog | Jaypore Labs",
    description: "Insights, tutorials, and thoughts on software development, AI, and building successful SaaS products.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Blog</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Thoughts on software development, AI integration, and building successful products. Learn from our experiences working with global clients.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📝</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
                We&apos;re working on some great content. Check back soon for articles on software development, AI, and more.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors">
                  Get Notified
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Categories */}
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                  <Badge variant="primary">All</Badge>
                  {categories.map((category) => (
                    <Badge key={category} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="h-full overflow-hidden group cursor-pointer">
                      {/* Image Placeholder */}
                      <div className="aspect-[16/9] bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-bold text-violet-500/20">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="primary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>

                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Get the latest articles, tutorials, and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
