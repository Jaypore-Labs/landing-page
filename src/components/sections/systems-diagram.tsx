/**
 * Hero diagram — an enterprise systems map: core systems connected through a
 * governed integration layer, with live data flowing along each connector.
 * Pure SVG (no image assets); animation is CSS and honours reduced motion.
 */
const C = 260; // centre
const R = 188; // orbit radius

const nodes = [
  { label: "Customer portals", tag: "Experience", angle: -90 },
  { label: "CRM", tag: "Sales & service", angle: -30 },
  { label: "ERP", tag: "Finance & ops", angle: 30 },
  { label: "Data platform", tag: "Analytics", angle: 90 },
  { label: "Legacy core", tag: "System of record", angle: 150 },
  { label: "Cloud & security", tag: "Infrastructure", angle: 210 },
].map((n, i) => {
  const rad = (n.angle * Math.PI) / 180;
  return { ...n, i, x: C + R * Math.cos(rad), y: C + R * Math.sin(rad) };
});

export function SystemsDiagram() {
  return (
    <figure className="relative">
      <svg
        viewBox="0 0 520 520"
        role="img"
        aria-labelledby="sysmap-title sysmap-desc"
        className="w-full h-auto"
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
      >
        <title id="sysmap-title">Enterprise systems connected through an integration layer</title>
        <desc id="sysmap-desc">
          Customer portals, CRM, ERP, data platform, legacy core systems and cloud infrastructure,
          all connected through a governed integration and API layer.
        </desc>
        <defs>
          <pattern id="sysmap-dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(245,240,232,0.09)" />
          </pattern>
          <radialGradient id="sysmap-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4D1F" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FF4D1F" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="520" height="520" fill="url(#sysmap-dots)" />
        <circle cx={C} cy={C} r="150" fill="url(#sysmap-glow)" />

        {/* orbits */}
        <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(245,240,232,0.12)" strokeDasharray="2 6" />
        <circle cx={C} cy={C} r="112" fill="none" stroke="rgba(245,240,232,0.08)" />

        {/* connectors + live flow */}
        {nodes.map((n) => (
          <g key={`l-${n.label}`}>
            <line x1={C} y1={C} x2={n.x} y2={n.y} stroke="rgba(245,240,232,0.18)" strokeWidth="1" />
            <line
              x1={n.i % 2 ? C : n.x}
              y1={n.i % 2 ? C : n.y}
              x2={n.i % 2 ? n.x : C}
              y2={n.i % 2 ? n.y : C}
              stroke="#FF4D1F"
              strokeWidth="2"
              strokeLinecap="round"
              className="sysmap-flow"
              style={{ animationDelay: `${n.i * -0.37}s` }}
            />
          </g>
        ))}

        {/* integration hub */}
        <g>
          <rect x={C - 74} y={C - 50} width="148" height="100" fill="#0B0B0B" stroke="#FF4D1F" strokeWidth="1.5" />
          <rect x={C - 74} y={C - 50} width="148" height="4" fill="#FF4D1F" />
          <text x={C} y={C - 12} textAnchor="middle" fill="#F5F0E8" fontSize="15" fontWeight="600">
            Integration layer
          </text>
          <text x={C} y={C + 10} textAnchor="middle" fill="#B9B1A4" fontSize="10.5" letterSpacing="1.2">
            APIS · EVENTS · DATA
          </text>
          <text x={C} y={C + 30} textAnchor="middle" fill="#FF4D1F" fontSize="10.5" letterSpacing="1.2">
            GOVERNED
          </text>
        </g>

        {/* systems */}
        {nodes.map((n) => (
          <g key={n.label}>
            <rect
              x={n.x - 72}
              y={n.y - 24}
              width="144"
              height="48"
              fill="#141414"
              stroke="rgba(245,240,232,0.28)"
            />
            <circle cx={n.x - 58} cy={n.y} r="3.5" fill="#FF4D1F" className="sysmap-pulse" style={{ animationDelay: `${n.i * 0.4}s` }} />
            <text x={n.x - 48} y={n.y - 3} fill="#F5F0E8" fontSize="13" fontWeight="600">
              {n.label}
            </text>
            <text x={n.x - 48} y={n.y + 13} fill="#8F887D" fontSize="9.5" letterSpacing="0.9">
              {n.tag.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-4 flex items-center justify-between border-t border-line-inv pt-4 text-xs text-paper-dim">
        <span>Fig. 01 — Target architecture</span>
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-[2px] w-4 bg-accent" />
          Live data flow
        </span>
      </figcaption>
    </figure>
  );
}
