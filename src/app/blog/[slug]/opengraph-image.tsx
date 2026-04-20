import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
export const alt = "Jaypore Labs blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? siteConfig.name;
  const category = post?.category ?? "Journal";
  const date = post?.date ?? new Date().toISOString().slice(0, 10);

  // Shrink type for very long titles so it still fits on the card
  const len = title.length;
  const titlePx = len > 80 ? 56 : len > 60 ? 64 : len > 40 ? 76 : 92;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0B0B0B",
          color: "#F5F0E8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "620px",
            height: "620px",
            borderRadius: "50%",
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255, 77, 31, 0.42), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-260px",
            left: "-160px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255, 77, 31, 0.24), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#D9D1C3",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: "#FF4D1F",
                display: "flex",
              }}
            />
            <span style={{ color: "#F5F0E8" }}>Jaypore Labs</span>
          </div>
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <span>Journal</span>
            <span style={{ color: "rgba(245,240,232,0.3)" }}>/</span>
            <span>{date}</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#FF4D1F",
              marginBottom: "24px",
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: `${titlePx}px`,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              color: "#F5F0E8",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "20px",
            color: "#D9D1C3",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            jayporelabs.com/blog/{slug}
          </span>
          <span
            style={{
              padding: "14px 24px",
              borderRadius: "999px",
              background: "#FF4D1F",
              color: "#0B0B0B",
              fontSize: "14px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Read
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
