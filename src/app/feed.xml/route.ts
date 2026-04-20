import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/data/site";

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const posts = getAllPosts();
  const latest = posts[0]?.date ?? new Date().toISOString().slice(0, 10);
  const items = posts
    .map((p) => {
      const url = `${siteConfig.url}/blog/${p.slug}`;
      return `
    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escape(p.description)}</description>
      <category>${escape(p.category)}</category>
      <author>hello@jayporelabs.com (${escape(p.author)})</author>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(siteConfig.name)} — Journal</title>
    <link>${siteConfig.url}/blog</link>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escape(siteConfig.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(latest).toUTCString()}</lastBuildDate>
    <managingEditor>hello@jayporelabs.com (${escape(siteConfig.founder.name)})</managingEditor>
    <webMaster>hello@jayporelabs.com (${escape(siteConfig.founder.name)})</webMaster>${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
