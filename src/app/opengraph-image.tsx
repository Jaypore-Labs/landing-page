import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
        {/* Accent wash */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255, 77, 31, 0.45), transparent 70%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            letterSpacing: "0.2em",
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
          <div>AI-enablement · Est. 2017</div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "128px",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              color: "#F5F0E8",
              display: "flex",
            }}
          >
            Your business,
          </div>
          <div
            style={{
              fontSize: "128px",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#FF4D1F",
              display: "flex",
            }}
          >
            AI-ready.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "20px",
            color: "#D9D1C3",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              maxWidth: "640px",
            }}
          >
            <span style={{ color: "#F5F0E8", fontSize: "22px" }}>
              {siteConfig.pitch}
            </span>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#D9D1C3",
              }}
            >
              jayporelabs.com
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#D9D1C3",
              }}
            >
              Scribes · Copilots
            </span>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#D9D1C3",
              }}
            >
              Voice AI · RAG · SaaS
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
