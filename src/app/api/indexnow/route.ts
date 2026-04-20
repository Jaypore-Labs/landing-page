import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/data/site";
import { getAllPostSlugs } from "@/lib/blog";

// Public IndexNow key — also served as the static file `public/<key>.txt`
// for protocol-mandated key verification. Regenerate both if it ever leaks.
const INDEXNOW_KEY = "9468003636e594056f2a15e029ad39cc";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

function hostFrom(url: string) {
  return new URL(url).host;
}

/**
 * GET → pings IndexNow with every indexable URL on the site.
 * POST body `{ urls: string[] }` → pings only those URLs.
 *
 * Call from a GitHub Action after a push to main, or from a cron, or by
 * hand (`curl https://jayporelabs.com/api/indexnow`) to re-notify.
 */
async function submit(urls: string[]) {
  if (!urls.length) return { ok: false, reason: "no-urls" };
  const payload = {
    host: hostFrom(siteConfig.url),
    key: INDEXNOW_KEY,
    keyLocation: `${siteConfig.url}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const text = await res.text().catch(() => "");
  return { ok: res.ok, status: res.status, body: text };
}

function allUrls(): string[] {
  const base = siteConfig.url.replace(/\/+$/, "");
  const statics = ["", "/services", "/portfolio", "/about", "/contact", "/blog"];
  const blogs = getAllPostSlugs().map((s) => `/blog/${s}`);
  return [...statics, ...blogs].map((p) => `${base}${p || "/"}`);
}

export async function GET() {
  const result = await submit(allUrls());
  return NextResponse.json({ submitted: allUrls().length, result });
}

export async function POST(req: NextRequest) {
  let body: { urls?: string[] } = {};
  try {
    body = (await req.json()) as { urls?: string[] };
  } catch {
    /* tolerate empty */
  }
  const urls = body.urls?.filter(Boolean) ?? allUrls();
  const result = await submit(urls);
  return NextResponse.json({ submitted: urls.length, result });
}
