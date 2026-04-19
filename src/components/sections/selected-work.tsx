"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolio } from "@/data/site";

export function SelectedWork() {
  const featured = portfolio.filter((p) => p.featured).slice(0, 4);

  return (
    <section
      id="work"
      className="relative bg-ink border-b border-line overflow-hidden"
    >
      {/* Section header */}
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pt-24 md:pt-40 pb-12 md:pb-24">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                Selected work · 2017–2026
              </span>
            </div>
            <h2 className="display-tight text-paper text-[clamp(3rem,9vw,8rem)]">
              AI-enabled software
              <br />
              <span className="italic font-medium text-accent">we&apos;ve put live.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            data-cursor-label="ALL"
            className="group inline-flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim hover:text-paper transition-colors"
          >
            <span>View the archive</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line group-hover:border-accent group-hover:bg-accent group-hover:text-ink transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Rows */}
      <div className="border-t border-line">
        {featured.map((project, i) => (
          <WorkRow
            key={project.id}
            index={i + 1}
            total={featured.length}
            project={project}
            flip={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function WorkRow({
  project,
  index,
  total,
  flip,
}: {
  project: (typeof portfolio)[number];
  index: number;
  total: number;
  flip: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    flip ? [40, -40] : [-40, 40]
  );

  const accent = (project as { accent?: string }).accent ?? "#FF4D1F";

  return (
    <div
      ref={ref}
      className="relative border-b border-line py-16 md:py-32 group"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 grid grid-cols-12 gap-6 items-center">
        {/* Specimen panel (text-only) */}
        <div
          className={`col-span-12 lg:col-span-7 ${
            flip ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <motion.div
            style={{ y: panelY }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl"
          >
            {/* Color block */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: `${accent}16` }}
            />
            <div
              aria-hidden
              className="absolute inset-0 border border-line-strong rounded-2xl"
            />
            {/* Grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(245,240,232,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,232,0.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Accent glow */}
            <div
              aria-hidden
              className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(60% 60% at 50% 50%, ${accent}40, transparent 70%)`,
              }}
            />

            {/* Corner marks */}
            <div className="absolute top-5 left-5 mono text-[10px] uppercase tracking-[0.22em] text-paper/90 flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: accent }}
              />
              {project.category}
            </div>
            <div className="absolute top-5 right-5 mono text-[10px] uppercase tracking-[0.22em] text-paper/90">
              {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>

            {/* Giant typographic title */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <span
                className="display-tight text-center leading-[0.82] select-none"
                style={{
                  color: accent,
                  fontSize: "clamp(3.5rem, 11vw, 10rem)",
                  letterSpacing: "-0.05em",
                }}
              >
                {project.title}
              </span>
            </div>

            {/* Bottom metrics strip */}
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-4 border-t border-line-strong pt-3">
              {project.highlights.slice(0, 3).map((h, hi) => (
                <div key={hi}>
                  <div className="mono text-[9px] uppercase tracking-[0.2em] text-paper-dim mb-1">
                    {String(hi + 1).padStart(2, "0")}
                  </div>
                  <div className="text-paper text-[11px] md:text-xs leading-snug">
                    {h}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Text panel */}
        <div
          className={`col-span-12 lg:col-span-5 ${
            flip ? "lg:order-1 lg:pr-10" : "lg:order-2 lg:pl-10"
          }`}
        >
          <div className="flex items-baseline gap-3 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-5">
            <span
              className="display-tight text-5xl leading-none"
              style={{ color: accent }}
            >
              {String(index).padStart(2, "0")}
            </span>
            {project.client && (
              <span className="text-paper-dim">
                <span className="text-paper/40">·</span>{" "}
                <span className="text-paper">{project.client}</span>
              </span>
            )}
          </div>

          <motion.h3
            style={{ x: titleX }}
            className="display-tight text-paper text-[clamp(2.25rem,5.5vw,5rem)] mb-6"
          >
            {project.title}
          </motion.h3>

          <p className="text-paper-dim leading-relaxed max-w-md mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-line text-paper-dim"
              >
                {t}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="VISIT"
              className="group/link inline-flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-paper"
            >
              <span className="swipe-link">Visit the live product</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong group-hover/link:bg-accent group-hover/link:text-ink group-hover/link:border-accent transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
