import { MetadataRoute } from "next";
import {
  getAllPostSlugs,
  getAllCategories,
  getAllTags,
  slugify,
} from "@/lib/blog";
import { series } from "@/data/series";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/series`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const seriesPages: MetadataRoute.Sitemap = series.map((s) => ({
    url: `${baseUrl}/series/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const categoryPages: MetadataRoute.Sitemap = getAllCategories().map((c) => ({
    url: `${baseUrl}/category/${slugify(c)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const tagPages: MetadataRoute.Sitemap = getAllTags().map((t) => ({
    url: `${baseUrl}/tag/${slugify(t)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.4,
  }));

  return [
    ...staticPages,
    ...seriesPages,
    ...blogPages,
    ...categoryPages,
    ...tagPages,
  ];
}
