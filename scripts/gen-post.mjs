#!/usr/bin/env node
/**
 * gen-post.mjs — on-brand social post image generator for Jaypore Labs.
 *
 * Renders PNGs that match the website's visual system (same tokens, Space
 * Grotesk display type, JetBrains Mono for labels, burnt-orange accent, grain
 * and glow) at common Instagram / LinkedIn / X sizes.
 *
 * Usage:
 *   node scripts/gen-post.mjs \
 *     --template quote \
 *     --size square \
 *     --title "Your business, AI-ready." \
 *     --subtitle "We build AI-enabled software and help businesses put AI to work." \
 *     --kicker "Manifesto" \
 *     --out social/out/hero-square.png
 *
 * See .claude/skills/post-image.md for full template + flag reference.
 */

import { parseArgs } from "node:util";
import { writeFile, mkdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Design tokens — must match src/app/globals.css
// ---------------------------------------------------------------------------
const T = {
  ink: "#0B0B0B",
  inkDeep: "#050505",
  paper: "#F5F0E8",
  paperDim: "#D9D1C3",
  accent: "#FF4D1F",
  accentDeep: "#E33A0E",
  line: "rgba(245,240,232,0.14)",
  lineStrong: "rgba(245,240,232,0.26)",
};

// Platform-ready canvas sizes
const SIZES = {
  square: { width: 1080, height: 1080, label: "Instagram post" },
  portrait: { width: 1080, height: 1350, label: "Instagram portrait" },
  story: { width: 1080, height: 1920, label: "Story / Reels" },
  landscape: { width: 1600, height: 900, label: "LinkedIn / X feed" },
  avatar: { width: 1080, height: 1080, label: "Profile avatar" },
  banner: { width: 1584, height: 396, label: "LinkedIn cover banner" },
  "banner-company": { width: 1128, height: 191, label: "LinkedIn company banner (exact)" },
  "x-header": { width: 1500, height: 500, label: "X / Twitter header" },
};

// ---------------------------------------------------------------------------
// Fonts — read from @fontsource packages installed as dev deps. WOFF is
// supported by Satori (WOFF2 is not), so we use the *.woff files directly.
// ---------------------------------------------------------------------------
const FONTS = [
  {
    name: "Space Grotesk",
    weight: 500,
    style: "normal",
    file: "@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff",
  },
  {
    name: "Space Grotesk",
    weight: 700,
    style: "normal",
    file: "@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff",
  },
  {
    name: "JetBrains Mono",
    weight: 500,
    style: "normal",
    file: "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff",
  },
];

async function loadFonts() {
  return Promise.all(
    FONTS.map(async (f) => {
      const p = path.join(ROOT, "node_modules", f.file);
      const data = await readFile(p);
      return { name: f.name, data, weight: f.weight, style: f.style };
    })
  );
}

// ---------------------------------------------------------------------------
// Tiny hyperscript so we can build Satori element trees without JSX runtime
// ---------------------------------------------------------------------------
const h = (type, props = {}, ...children) => ({
  type,
  props: {
    ...props,
    children: children.flat().filter((c) => c !== null && c !== undefined && c !== false),
  },
});

// Render multi-line text by splitting on \n into stacked rows
const multiline = (text, rowStyle = {}) => {
  const lines = String(text ?? "").split(/\\n|\n/);
  return lines.map((line, i) =>
    h("div", { key: `l${i}`, style: { display: "flex", ...rowStyle } }, line)
  );
};

// ---------------------------------------------------------------------------
// Shared chrome: wordmark, eyebrow kicker, CTA pill, grain-ish glows
// ---------------------------------------------------------------------------
function wordmark({ scale = 1, color = T.paper }) {
  return h(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: `${12 * scale}px`,
        fontFamily: "JetBrains Mono",
        fontSize: `${18 * scale}px`,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color,
      },
    },
    h("div", {
      style: {
        width: `${12 * scale}px`,
        height: `${12 * scale}px`,
        borderRadius: "50%",
        background: T.accent,
        display: "flex",
      },
    }),
    h("span", { style: { display: "flex" } }, "Jaypore Labs")
  );
}

function eyebrow(text, { scale = 1, color = T.paperDim } = {}) {
  return h(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: `${12 * scale}px`,
        fontFamily: "JetBrains Mono",
        fontSize: `${16 * scale}px`,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color,
      },
    },
    h("div", {
      style: {
        width: `${36 * scale}px`,
        height: "1px",
        background: color,
        display: "flex",
      },
    }),
    h("span", { style: { display: "flex" } }, text)
  );
}

function ctaPill({ text = "Let's talk", scale = 1, accent = T.accent }) {
  const arrow = h("img", {
    width: Math.round(16 * scale),
    height: Math.round(16 * scale),
    src: `data:image/svg+xml;utf8,${encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M4 12L12 4M12 4H6M12 4V10' stroke='${T.ink}' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round' fill='none'/></svg>`
    )}`,
    style: { display: "flex", marginLeft: `${12 * scale}px` },
  });
  return h(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        padding: `${14 * scale}px ${22 * scale}px`,
        borderRadius: "999px",
        background: accent,
        color: T.ink,
        fontFamily: "JetBrains Mono",
        fontSize: `${14 * scale}px`,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
      },
    },
    text,
    arrow
  );
}

function glows({ accent = T.accent, w, h: hh }) {
  // Two soft radial washes to break up the flat ink canvas.
  return [
    h("div", {
      style: {
        position: "absolute",
        top: `-${Math.round(hh * 0.3)}px`,
        right: `-${Math.round(w * 0.2)}px`,
        width: `${Math.round(w * 0.65)}px`,
        height: `${Math.round(w * 0.65)}px`,
        borderRadius: "50%",
        background: `radial-gradient(50% 50% at 50% 50%, ${accent}70, transparent 70%)`,
        display: "flex",
      },
    }),
    h("div", {
      style: {
        position: "absolute",
        bottom: `-${Math.round(hh * 0.3)}px`,
        left: `-${Math.round(w * 0.2)}px`,
        width: `${Math.round(w * 0.55)}px`,
        height: `${Math.round(w * 0.55)}px`,
        borderRadius: "50%",
        background: `radial-gradient(50% 50% at 50% 50%, ${accent}40, transparent 70%)`,
        display: "flex",
      },
    }),
  ];
}

// A thin guide-grid overlay that matches the site's background texture
function gridOverlay({ w, h: hh }) {
  const cols = 12;
  const cell = w / cols;
  const verticals = Array.from({ length: cols + 1 }).map((_, i) =>
    h("div", {
      key: `v${i}`,
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: `${i * cell}px`,
        width: "1px",
        background: T.line,
        display: "flex",
      },
    })
  );
  const rowCount = Math.ceil(hh / cell);
  const horizontals = Array.from({ length: rowCount + 1 }).map((_, i) =>
    h("div", {
      key: `h${i}`,
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: `${i * cell}px`,
        height: "1px",
        background: T.line,
        display: "flex",
      },
    })
  );
  return [...verticals, ...horizontals];
}

function frame({ children, size, accent = T.accent, padding = 88 }) {
  const { width, height } = size;
  const scale = width / 1080;
  return h(
    "div",
    {
      style: {
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        flexDirection: "column",
        background: T.ink,
        color: T.paper,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Space Grotesk",
      },
    },
    // grid texture (very subtle)
    ...gridOverlay({ w: width, h: height }),
    // accent glows
    ...glows({ accent, w: width, h: height }),
    // content
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: `${padding * scale}px ${padding * scale}px`,
          position: "relative",
          zIndex: 1,
        },
      },
      ...children({ scale })
    )
  );
}

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

function tQuote({ title, subtitle = "", kicker = "Note", accent, size }) {
  // Pick a title font size by canvas width + title length so long lines breathe
  const titleLen = title.replace(/\\n|\n/g, "").length;
  const base = size.width === 1600 ? 108 : size.width === 1080 ? 124 : 132;
  const titlePx = Math.round(Math.min(base, Math.max(72, 1700 / titleLen)));

  return frame({
    size,
    accent,
    children: ({ scale }) => [
      // Top row
      h(
        "div",
        {
          style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
        },
        wordmark({ scale }),
        eyebrow(kicker, { scale })
      ),
      // Headline block
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingTop: `${40 * scale}px`,
            paddingBottom: `${40 * scale}px`,
          },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: `${titlePx}px`,
              lineHeight: 0.94,
              letterSpacing: "-0.045em",
              color: T.paper,
            },
          },
          ...multiline(title)
        ),
        subtitle
          ? h(
              "div",
              {
                style: {
                  display: "flex",
                  marginTop: `${36 * scale}px`,
                  fontFamily: "Space Grotesk",
                  fontWeight: 500,
                  fontSize: `${Math.round(30 * scale)}px`,
                  lineHeight: 1.35,
                  color: T.paperDim,
                  maxWidth: "90%",
                },
              },
              subtitle
            )
          : null
      ),
      // Bottom row
      h(
        "div",
        {
          style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: `${16 * scale}px`,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.paperDim,
            },
          },
          "jayporelabs.com"
        ),
        ctaPill({ scale, accent })
      ),
    ],
  });
}

function tStat({ stat, label, subtitle = "", kicker = "Field note", accent, size }) {
  return frame({
    size,
    accent,
    children: ({ scale }) => [
      h(
        "div",
        {
          style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
        },
        wordmark({ scale }),
        eyebrow(kicker, { scale })
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingTop: `${32 * scale}px`,
            paddingBottom: `${32 * scale}px`,
          },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: `${Math.round(
                (size.width === 1600 ? 240 : 300) * scale
              )}px`,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              color: accent,
            },
          },
          String(stat)
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: `${24 * scale}px`,
              fontFamily: "Space Grotesk",
              fontWeight: 500,
              fontSize: `${Math.round(44 * scale)}px`,
              lineHeight: 1.15,
              color: T.paper,
              maxWidth: "90%",
            },
          },
          label
        ),
        subtitle
          ? h(
              "div",
              {
                style: {
                  display: "flex",
                  marginTop: `${20 * scale}px`,
                  paddingTop: `${20 * scale}px`,
                  borderTop: `1px solid ${T.line}`,
                  fontFamily: "JetBrains Mono",
                  fontSize: `${Math.round(18 * scale)}px`,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: T.paperDim,
                  maxWidth: "85%",
                  lineHeight: 1.5,
                },
              },
              subtitle
            )
          : null
      ),
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: `${16 * scale}px`,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.paperDim,
            },
          },
          "jayporelabs.com"
        ),
        ctaPill({ scale, accent, text: "See the work" })
      ),
    ],
  });
}

function tAnnouncement({
  title,
  subtitle = "",
  kicker = "Booking",
  accent,
  size,
}) {
  const base = size.width === 1600 ? 120 : 140;
  return frame({
    size,
    accent,
    children: ({ scale }) => [
      h(
        "div",
        {
          style: { display: "flex", justifyContent: "space-between", alignItems: "center" },
        },
        wordmark({ scale }),
        // pulsing-dot style status chip (static here)
        h(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: `${10 * scale}px`,
              padding: `${10 * scale}px ${16 * scale}px`,
              borderRadius: "999px",
              border: `1px solid ${accent}80`,
              background: `${accent}18`,
              fontFamily: "JetBrains Mono",
              fontSize: `${14 * scale}px`,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: accent,
            },
          },
          h("div", {
            style: {
              width: `${10 * scale}px`,
              height: `${10 * scale}px`,
              borderRadius: "50%",
              background: accent,
              display: "flex",
            },
          }),
          kicker
        )
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: `${Math.round(base * scale)}px`,
              lineHeight: 0.94,
              letterSpacing: "-0.045em",
              color: T.paper,
            },
          },
          ...multiline(title)
        ),
        subtitle
          ? h(
              "div",
              {
                style: {
                  display: "flex",
                  marginTop: `${32 * scale}px`,
                  fontFamily: "Space Grotesk",
                  fontWeight: 500,
                  fontSize: `${Math.round(30 * scale)}px`,
                  lineHeight: 1.35,
                  color: T.paperDim,
                  maxWidth: "90%",
                },
              },
              subtitle
            )
          : null
      ),
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
        eyebrow("jayporelabs.com", { scale }),
        ctaPill({ scale, accent, text: "Get in touch" })
      ),
    ],
  });
}

function tList({ title, items = [], kicker = "Playbook", accent, size }) {
  return frame({
    size,
    accent,
    padding: 88,
    children: ({ scale }) => [
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
        wordmark({ scale }),
        eyebrow(kicker, { scale })
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingTop: `${24 * scale}px`,
            paddingBottom: `${24 * scale}px`,
          },
        },
        // Title
        h(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: `${Math.round(76 * scale)}px`,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              color: T.paper,
              marginBottom: `${40 * scale}px`,
            },
          },
          ...multiline(title)
        ),
        // Items
        ...items.map((it, i) => {
          const itemStyle = {
            display: "flex",
            alignItems: "flex-start",
            gap: `${24 * scale}px`,
            paddingTop: `${22 * scale}px`,
            paddingBottom: `${22 * scale}px`,
            borderBottom: `1px solid ${T.line}`,
          };
          if (i === 0) itemStyle.borderTop = `1px solid ${T.line}`;
          return h(
            "div",
            { key: `it${i}`, style: itemStyle },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  fontSize: `${Math.round(34 * scale)}px`,
                  letterSpacing: "-0.02em",
                  color: accent,
                  minWidth: `${64 * scale}px`,
                },
              },
              String(i + 1).padStart(2, "0")
            ),
            h(
              "div",
              {
                style: {
                  display: "flex",
                  fontFamily: "Space Grotesk",
                  fontWeight: 500,
                  fontSize: `${Math.round(34 * scale)}px`,
                  lineHeight: 1.3,
                  color: T.paper,
                },
              },
              it
            )
          );
        })
      ),
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
        eyebrow("jayporelabs.com", { scale }),
        ctaPill({ scale, accent, text: "Read more" })
      ),
    ],
  });
}

function tCaseStudy({
  client,
  stat,
  label,
  subtitle = "",
  kicker = "Case study",
  accent,
  size,
}) {
  return frame({
    size,
    accent,
    children: ({ scale }) => [
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
        wordmark({ scale }),
        eyebrow(kicker, { scale })
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            paddingTop: `${32 * scale}px`,
          },
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontFamily: "JetBrains Mono",
              fontSize: `${Math.round(18 * scale)}px`,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.paperDim,
              marginBottom: `${18 * scale}px`,
            },
          },
          `Client · ${client}`
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              fontFamily: "Space Grotesk",
              fontWeight: 700,
              fontSize: `${Math.round(
                (size.width === 1600 ? 220 : 260) * scale
              )}px`,
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              color: accent,
            },
          },
          String(stat)
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: `${28 * scale}px`,
              fontFamily: "Space Grotesk",
              fontWeight: 500,
              fontSize: `${Math.round(42 * scale)}px`,
              lineHeight: 1.2,
              color: T.paper,
              maxWidth: "90%",
            },
          },
          label
        ),
        subtitle
          ? h(
              "div",
              {
                style: {
                  display: "flex",
                  marginTop: `${20 * scale}px`,
                  fontFamily: "Space Grotesk",
                  fontWeight: 500,
                  fontSize: `${Math.round(24 * scale)}px`,
                  lineHeight: 1.4,
                  color: T.paperDim,
                  maxWidth: "85%",
                },
              },
              subtitle
            )
          : null
      ),
      h(
        "div",
        { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" } },
        eyebrow("jayporelabs.com", { scale }),
        ctaPill({ scale, accent, text: "See the work" })
      ),
    ],
  });
}

// ---------------------------------------------------------------------------
// Logo template — profile avatar / brand mark
// Flags: --title (monogram, default "JL"), --subtitle (wordmark under, default
// "Jaypore Labs"), --bg ("ink" default or "accent" for a stamp variant)
// ---------------------------------------------------------------------------
function tLogo({
  title = "JL",
  subtitle = "Jaypore Labs",
  bg = "ink",
  accent,
  size,
}) {
  const isAccentBg = bg === "accent";
  const bgColor = isAccentBg ? accent : T.ink;
  const titleColor = isAccentBg ? T.ink : T.paper;
  const markColor = isAccentBg ? T.ink : accent;
  const subtitleColor = isAccentBg ? "#0B0B0BCC" : T.paperDim;
  const { width, height } = size;
  const scale = width / 1080;
  const monoFit = title.length <= 2;

  return h(
    "div",
    {
      style: {
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: bgColor,
        color: titleColor,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Space Grotesk",
      },
    },
    // gentle glow on ink variant
    !isAccentBg
      ? h("div", {
          style: {
            position: "absolute",
            top: `-${Math.round(height * 0.15)}px`,
            right: `-${Math.round(width * 0.1)}px`,
            width: `${Math.round(width * 0.55)}px`,
            height: `${Math.round(width * 0.55)}px`,
            borderRadius: "50%",
            background: `radial-gradient(50% 50% at 50% 50%, ${accent}55, transparent 70%)`,
            display: "flex",
          },
        })
      : null,
    // monogram / title
    h(
      "div",
      {
        style: {
          display: "flex",
          fontFamily: "Space Grotesk",
          fontWeight: 700,
          fontSize: `${Math.round(
            (monoFit ? 600 : Math.min(260, 2800 / title.length)) * scale
          )}px`,
          lineHeight: 0.9,
          letterSpacing: "-0.055em",
          color: titleColor,
        },
      },
      title
    ),
    // accent bar under monogram
    h("div", {
      style: {
        width: `${Math.round(160 * scale)}px`,
        height: `${Math.round(8 * scale)}px`,
        borderRadius: `${Math.round(4 * scale)}px`,
        background: markColor,
        display: "flex",
        marginTop: `${Math.round(44 * scale)}px`,
      },
    }),
    // subtitle wordmark
    subtitle
      ? h(
          "div",
          {
            style: {
              display: "flex",
              marginTop: `${Math.round(36 * scale)}px`,
              fontFamily: "JetBrains Mono",
              fontSize: `${Math.round(30 * scale)}px`,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: subtitleColor,
            },
          },
          subtitle
        )
      : null
  );
}

// ---------------------------------------------------------------------------
// Banner template — wide cover art for LinkedIn / X / FB.
// Keeps the bottom-left quadrant mostly clear so LinkedIn's avatar overlay
// doesn't collide with text. Tagline is the hero, centered vertically.
// Flags: --title (required, supports \n), --subtitle, --kicker
// Sizes: use `banner` (1584×396) or `banner-company` (1128×191 exact).
// ---------------------------------------------------------------------------
function tBanner({ title, subtitle = "", kicker = "", accent, size }) {
  const { width, height } = size;
  const scale = width / 1584;
  const compact = height < 240;

  // Layout math
  const vPad = compact ? 28 : 40;
  const hPad = compact ? 44 : 64;
  // Avatar safe column: LinkedIn overlays an ~80px-radius circle around
  // bottom-left at ~20px inset. Push headline right of this.
  const titleLeft = compact ? 280 : 360;

  const cleanLen = String(title).replace(/\\n|\n/g, "").length;
  const titlePx = compact
    ? Math.round(Math.min(44, 1800 / Math.max(cleanLen, 20)))
    : Math.round(Math.min(120, 1900 / Math.max(cleanLen, 20)));

  return h(
    "div",
    {
      style: {
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        background: T.ink,
        color: T.paper,
        position: "relative",
        overflow: "hidden",
        fontFamily: "Space Grotesk",
      },
    },
    // grid texture
    ...gridOverlay({ w: width, h: height }),
    // warm wash top-right
    h("div", {
      style: {
        position: "absolute",
        top: `-${Math.round(height * 0.6)}px`,
        right: `-${Math.round(height * 0.4)}px`,
        width: `${Math.round(height * 3)}px`,
        height: `${Math.round(height * 3)}px`,
        borderRadius: "50%",
        background: `radial-gradient(50% 50% at 50% 50%, ${accent}60, transparent 70%)`,
        display: "flex",
      },
    }),
    // secondary wash bottom-center for depth
    h("div", {
      style: {
        position: "absolute",
        bottom: `-${Math.round(height * 0.6)}px`,
        left: `${Math.round(width * 0.45)}px`,
        width: `${Math.round(height * 1.8)}px`,
        height: `${Math.round(height * 1.8)}px`,
        borderRadius: "50%",
        background: `radial-gradient(50% 50% at 50% 50%, ${accent}35, transparent 70%)`,
        display: "flex",
      },
    }),
    // Hero headline — absolutely positioned, vertically centered, clears avatar
    h(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: `${titleLeft}px`,
          right: `${hPad}px`,
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Space Grotesk",
          fontWeight: 700,
          fontSize: `${titlePx}px`,
          lineHeight: compact ? 1.05 : 0.98,
          letterSpacing: "-0.04em",
          color: T.paper,
        },
      },
      ...multiline(title)
    ),
    // Top rail — wordmark + kicker
    h(
      "div",
      {
        style: {
          position: "absolute",
          top: `${vPad}px`,
          left: `${hPad}px`,
          right: `${hPad}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
      wordmark({ scale: compact ? 0.7 : 0.95 }),
      kicker
        ? eyebrow(kicker, { scale: compact ? 0.7 : 0.95 })
        : h(
            "div",
            {
              style: {
                display: "flex",
                fontFamily: "JetBrains Mono",
                fontSize: `${Math.round((compact ? 11 : 14) * 1)}px`,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: T.paperDim,
              },
            },
            "jayporelabs.com"
          )
    ),
    // Bottom-right — subtitle / URL
    h(
      "div",
      {
        style: {
          position: "absolute",
          bottom: `${vPad}px`,
          right: `${hPad}px`,
          display: "flex",
          alignItems: "center",
          gap: `${compact ? 16 : 24}px`,
        },
      },
      !compact && subtitle
        ? h(
            "div",
            {
              style: {
                display: "flex",
                fontFamily: "Space Grotesk",
                fontWeight: 500,
                fontSize: "22px",
                lineHeight: 1.3,
                color: T.paperDim,
                maxWidth: "520px",
                textAlign: "right",
                justifyContent: "flex-end",
              },
            },
            subtitle
          )
        : null,
      ctaPill({
        scale: compact ? 0.7 : 0.95,
        accent,
        text: "Let's talk",
      })
    )
  );
}

const TEMPLATES = {
  quote: tQuote,
  stat: tStat,
  announcement: tAnnouncement,
  list: tList,
  "case-study": tCaseStudy,
  logo: tLogo,
  banner: tBanner,
};

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseItems(raw) {
  return String(raw || "")
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);
}

function usage() {
  return `Usage:
  node scripts/gen-post.mjs --template <t> --size <s> --out <path> [fields]

Templates:
  quote          --title (required), --subtitle, --kicker
  stat           --stat (required), --label, --subtitle, --kicker
  announcement   --title (required), --subtitle, --kicker
  list           --title (required), --items "a|b|c", --kicker
  case-study     --client (required), --stat, --label, --subtitle, --kicker

Sizes: ${Object.keys(SIZES).join(", ")}
Optional: --accent "#RRGGBB"

Newlines in title/subtitle: use \\n (literal backslash-n).
`;
}

async function render({ template, size, fields, out, scale }) {
  const build = TEMPLATES[template];
  if (!build) throw new Error(`Unknown template: ${template}`);
  const s = SIZES[size];
  if (!s) throw new Error(`Unknown size: ${size}`);
  const accent = fields.accent || T.accent;

  const tree = build({ ...fields, accent, size: s });
  const fonts = await loadFonts();
  const svg = await satori(tree, { width: s.width, height: s.height, fonts });
  // Rasterize at N× the logical canvas. SVG is vector, so the composition
  // is identical — just every pixel sharper. LinkedIn, Instagram, etc. all
  // downscale cleanly and get retina displays crisp.
  const outWidth = Math.round(s.width * scale);
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: outWidth },
    font: { loadSystemFonts: false },
  })
    .render()
    .asPng();
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, png);
  return { bytes: png.length, outWidth, outHeight: Math.round(s.height * scale) };
}

async function main() {
  const { values } = parseArgs({
    options: {
      template: { type: "string", default: "quote" },
      size: { type: "string", default: "square" },
      title: { type: "string" },
      subtitle: { type: "string" },
      kicker: { type: "string" },
      stat: { type: "string" },
      label: { type: "string" },
      client: { type: "string" },
      items: { type: "string" },
      accent: { type: "string" },
      bg: { type: "string" },
      scale: { type: "string" },
      out: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
  });

  if (values.help || !values.out) {
    process.stdout.write(usage());
    if (!values.out) process.exit(1);
    return;
  }

  const fields = {
    title: values.title,
    // Leave undefined through so template defaults fire. Users can still
    // explicitly hide the wordmark with --subtitle "" (empty string).
    subtitle: values.subtitle,
    kicker: values.kicker,
    stat: values.stat,
    label: values.label,
    client: values.client,
    items: parseItems(values.items),
    accent: values.accent,
    bg: values.bg,
  };

  const scale = Math.max(1, Math.min(4, Number(values.scale) || 2));
  const { bytes, outWidth, outHeight } = await render({
    template: values.template,
    size: values.size,
    fields,
    out: values.out,
    scale,
  });
  const kb = (bytes / 1024).toFixed(1);
  const s = SIZES[values.size];
  process.stdout.write(
    `✓ ${values.template}/${values.size} @${scale}x (logical ${s.width}×${s.height}, render ${outWidth}×${outHeight}, ${kb} KB) → ${values.out}\n`
  );
}

main().catch((e) => {
  process.stderr.write(`${e?.stack || e}\n`);
  process.exit(1);
});
