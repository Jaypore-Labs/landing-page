"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { heroSpecimens } from "@/data/site";

const rotatingWords = [
  "SaaS platforms",
  "AI scribes",
  "copilots inside apps",
  "RAG pipelines",
  "voice interfaces",
  "MCP servers",
  "desktop apps",
  "internal tools",
];

const SPEC_ACCENTS = ["#FF4D1F", "#FFD166", "#8BE9FD", "#B5E48C", "#C77DFF"];
const AUTO_MS = 3800;

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  useEffect(() => {
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % rotatingWords.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink pt-28 md:pt-32"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full accent-glow" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full accent-glow opacity-60" />
      </div>

      {/* Top meta rail */}
      <div className="relative z-10 mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10 pb-6">
        <div className="flex items-center gap-3 text-paper-dim mono text-[11px] uppercase tracking-[0.22em]">
          <span className="inline-flex items-center gap-1.5 text-paper">
            <Sparkles className="w-3 h-3 text-accent" />
            AI-enablement
          </span>
          <span className="text-paper/30">/</span>
          <span>Friendly</span>
          <span className="text-paper/30">/</span>
          <span>Est. 2017</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            Booking Q2 — 2026
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 gap-y-10 px-4 sm:px-6 lg:px-10 pb-24">
        {/* Headline */}
        <motion.div
          style={{ y: headlineY }}
          className="col-span-12 lg:col-span-8 flex flex-col justify-end"
        >
          <HeadlineReveal />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-paper-dim leading-relaxed"
          >
            Friendly product studio. We build AI-enabled software and help
            businesses put AI to work — for founders, for{" "}
            <span className="text-paper">Logitech</span>, for clinics in
            Luxembourg serving <span className="text-paper">100+ doctors</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              data-cursor-label="BOOK"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-ink text-sm font-medium hover:bg-accent-deep transition-colors"
            >
              Bring AI to your business
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              data-cursor-label="WORK"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm text-paper hover:text-accent transition-colors"
            >
              <span className="swipe-link">See what we&apos;ve shipped</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Rotating word */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim"
          >
            <span className="h-px w-10 bg-line-strong" />
            <span>We ship</span>
            <span className="relative inline-block h-4 min-w-[9rem] text-paper">
              {rotatingWords.map((w, i) => (
                <span
                  key={w}
                  className={`absolute inset-0 transition-all duration-500 ${
                    i === wordIdx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1.5"
                  }`}
                >
                  {w}
                </span>
              ))}
            </span>
          </motion.div>
        </motion.div>

        {/* Specimen panel */}
        <motion.div
          style={{ y: panelY }}
          className="col-span-12 lg:col-span-4 flex flex-col justify-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.85, 0.2, 1] }}
          >
            <SpecimenPanel />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom rail — stats + scroll */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pb-10 flex items-end justify-between gap-10 flex-wrap">
        <div className="grid grid-cols-3 gap-x-10 gap-y-4 sm:flex sm:items-end sm:gap-12">
          {[
            { v: "50+", k: "Products shipped" },
            { v: "8+", k: "Years in the trenches" },
            { v: "10+", k: "Countries served" },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.08 }}
            >
              <div className="display text-4xl sm:text-5xl text-paper leading-none">
                {s.v}
              </div>
              <div className="mt-2 mono text-[10px] uppercase tracking-[0.2em] text-paper-dim">
                {s.k}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="hidden sm:flex items-center gap-3 mono text-[10px] uppercase tracking-[0.22em] text-paper-dim"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block h-5 w-px bg-paper-dim"
          />
        </motion.div>
      </div>
    </section>
  );
}

function HeadlineReveal() {
  return (
    <h1 className="display-tight text-paper text-[clamp(3.5rem,11vw,10.5rem)]">
      <LineReveal delay={0.15}>Your business,</LineReveal>
      <LineReveal delay={0.35} className="text-accent italic font-medium">
        AI-ready.
      </LineReveal>
    </h1>
  );
}

function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: [0.2, 0.85, 0.2, 1], delay }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

function SpecimenPanel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % heroSpecimens.length),
      AUTO_MS
    );
    return () => clearInterval(id);
  }, [paused]);

  // 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 160,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 160,
    damping: 18,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setPaused(false);
  };
  const onMouseEnter = () => setPaused(true);

  const spec = heroSpecimens[active];
  const accent = SPEC_ACCENTS[active % SPEC_ACCENTS.length];

  return (
    <div className="relative" style={{ perspective: 1200 }}>
      {/* Stack peek — 2 cards behind for depth */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl border border-line/60 bg-muted/30"
        style={{ transform: "translate3d(14px, 14px, 0) rotate(3deg)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl border border-line bg-muted/50"
        style={{ transform: "translate3d(7px, 7px, 0) rotate(1.5deg)" }}
      />

      {/* Active card with 3D tilt */}
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line-strong bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
        data-cursor
      >
        {/* Color wash crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`wash-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            aria-hidden
            className="absolute inset-0"
            style={{ background: accent }}
          />
        </AnimatePresence>

        {/* Grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(245,240,232,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,232,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent glow */}
        <div
          aria-hidden
          className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(60% 60% at 50% 50%, ${accent}60, transparent 70%)`,
            transform: "translateZ(30px)",
          }}
        />

        {/* Giant stroked watermark numeral */}
        <AnimatePresence mode="sync">
          <motion.span
            key={`wm-${active}`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.2, 0.85, 0.2, 1] }}
            aria-hidden
            className="absolute -right-6 -bottom-10 display-tight leading-[0.82] pointer-events-none select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: `1.2px ${accent}`,
              opacity: 0.65,
              fontSize: "clamp(12rem, 26vw, 22rem)",
              transform: "translateZ(20px)",
            }}
          >
            {String(active + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>

        {/* Corner marks */}
        <div
          className="absolute top-4 left-4 mono text-[10px] uppercase tracking-[0.2em] text-paper/80 flex items-center gap-2"
          style={{ transform: "translateZ(40px)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: accent }}
            />
            <span
              className="relative inline-flex rounded-full h-1.5 w-1.5"
              style={{ background: accent }}
            />
          </span>
          Now live
        </div>
        <div
          className="absolute top-4 right-4 mono text-[10px] uppercase tracking-[0.2em] text-paper/80"
          style={{ transform: "translateZ(40px)" }}
        >
          {String(active + 1).padStart(2, "0")} / {String(heroSpecimens.length).padStart(2, "0")}
        </div>

        {/* Content */}
        <div
          className="absolute inset-0 p-5 md:p-7 flex flex-col justify-between"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="pt-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={`kicker-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4 }}
                className="inline-block mono text-[10px] uppercase tracking-[0.22em] px-3 py-1 rounded-full border"
                style={{
                  borderColor: `${accent}60`,
                  color: accent,
                  background: `${accent}10`,
                }}
              >
                {spec.kicker}
              </motion.span>
            </AnimatePresence>

            <div className="mt-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${active}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.6, ease: [0.2, 0.85, 0.2, 1] }}
                  className="display-tight text-paper text-[clamp(2rem,4vw,3.25rem)] leading-[0.95]"
                >
                  {spec.title}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${active}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.2, 0.85, 0.2, 1] }}
              >
                <div
                  className="display-tight text-[clamp(3rem,6vw,4.5rem)] leading-none"
                  style={{ color: accent }}
                >
                  {spec.stat}
                </div>
                <div className="mt-2 text-paper text-sm leading-snug max-w-[22ch]">
                  {spec.statLabel}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 pt-4 border-t border-line">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`note-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim leading-relaxed"
                >
                  {spec.note}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-[2px] bg-paper/10 overflow-hidden"
          style={{ transform: "translateZ(45px)" }}
        >
          <motion.div
            key={`prog-${active}-${paused ? "p" : "r"}`}
            initial={{ width: "0%" }}
            animate={{ width: paused ? "0%" : "100%" }}
            transition={{ duration: paused ? 0 : AUTO_MS / 1000, ease: "linear" }}
            className="h-full"
            style={{ background: accent }}
          />
        </div>
      </motion.div>

      {/* Channel selector — clickable chip list */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {heroSpecimens.map((s, i) => {
          const chAccent = SPEC_ACCENTS[i % SPEC_ACCENTS.length];
          const isActive = i === active;
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              data-cursor-label="PICK"
              className={`group relative flex items-center gap-2 rounded-full border px-3 py-1.5 mono text-[10px] uppercase tracking-[0.2em] transition-all ${
                isActive
                  ? "text-ink"
                  : "text-paper-dim hover:text-paper border-line"
              }`}
              style={
                isActive
                  ? { background: chAccent, borderColor: chAccent }
                  : undefined
              }
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: isActive ? "#0b0b0b" : chAccent }}
              />
              <span className="whitespace-nowrap">{s.title}</span>
              <span
                className={`${
                  isActive ? "text-ink/60" : "text-paper-dim"
                } tabular-nums`}
              >
                0{i + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
