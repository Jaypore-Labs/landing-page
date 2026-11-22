import { ImageResponse } from "next/og";

// Square brand logo for structured data (Organization.logo) and
// knowledge panels. Matches the JL favicon and header mark.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FF4D1F",
          color: "#0b0b0b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 300,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        JL
      </div>
    ),
    { width: 512, height: 512 }
  );
}
