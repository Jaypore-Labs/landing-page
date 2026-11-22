import { MetadataRoute } from "next";
import {
  getAllPosts,
  getAllCategories,
  getAllTags,
  getPostsByCategory,
  getPostsByTag,
  slugify,
} from "@/lib/blog";
import { siteConfig } from "@/data/site";
import { caseStudies } from "@/data/case-studies";
import { industries } from "@/data/industries";

// Minimum posts required for a tag/category page to be considered worth
// indexing. Thinner pages get flagged "Crawled - currently not indexed"
// by Google because they duplicate the underlying article without adding
// signal. Bumping this threshold cleans up the index.
const MIN_POSTS_FOR_INDEX_HUB = 5;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...industries.map((i) => ({
      url: `${baseUrl}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...caseStudies.map((c) => ({
      url: `${baseUrl}/portfolio/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  // Posts use frontmatter dates for lastModified — gives Google a real
  // freshness signal so crawl budget concentrates on recent content.
  // Recency-weighted priority (decays from 0.8 to 0.4 over time).
  const posts = getAllPosts();
  const newestTs = posts.length ? new Date(posts[0].date).getTime() : now.getTime();
  const oldestTs = posts.length ? new Date(posts[posts.length - 1].date).getTime() : now.getTime();
  const span = Math.max(newestTs - oldestTs, 1);

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => {
    const postDate = new Date(post.date);
    const recencyRatio = (postDate.getTime() - oldestTs) / span;
    // Newest gets ~0.8, oldest gets ~0.4. Rounded to two decimals.
    const priority = Math.round((0.4 + recencyRatio * 0.4) * 100) / 100;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
      changeFrequency: "monthly",
      priority,
    };
  });

  // Only emit tag/category pages that aggregate real content. A page with
  // one article competes with that article and rarely ranks; Google flags
  // it as low value. The blog post itself stays in the sitemap regardless.
  const categoryPages: MetadataRoute.Sitemap = getAllCategories()
    .filter((c) => getPostsByCategory(c).length >= MIN_POSTS_FOR_INDEX_HUB)
    .map((c) => ({
      url: `${baseUrl}/category/${slugify(c)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  const tagPages: MetadataRoute.Sitemap = getAllTags()
    .filter((t) => getPostsByTag(t).length >= MIN_POSTS_FOR_INDEX_HUB)
    .map((t) => ({
      url: `${baseUrl}/tag/${slugify(t)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    }));

  return [...staticPages, ...blogPages, ...categoryPages, ...tagPages];
}
