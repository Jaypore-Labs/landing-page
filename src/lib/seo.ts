/** Trim copy to a search-snippet-friendly length on a word boundary. */
export function clip(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "")}…`;
}

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Jaypore Labs — Enterprise software architecture & engineering",
};

/**
 * Spread into a page's `openGraph` / `twitter` metadata. Next.js replaces
 * (does not merge) these objects per page, so without this every subpage
 * would lose the share image, site name and card type set in the root layout.
 */
export const ogDefaults = {
  type: "website" as const,
  siteName: "Jaypore Labs",
  locale: "en_US",
  images: [OG_IMAGE],
};

export const twitterDefaults = {
  card: "summary_large_image" as const,
  site: "@jayporelabs",
  images: [OG_IMAGE.url],
};
