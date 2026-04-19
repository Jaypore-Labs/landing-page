"use client";

import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeroProps) {
  const alignText = align === "center" ? "text-center items-center" : "text-left items-start";
  const alignWrap = align === "center" ? "mx-auto" : "";
  return (
    <section className="relative bg-ink border-b border-line pt-36 md:pt-44 pb-16 md:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 right-1/2 translate-x-1/2 h-[420px] w-[720px] rounded-full accent-glow pointer-events-none"
      />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className={`flex flex-col ${alignText} ${alignWrap} max-w-5xl`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-accent" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.85, 0.2, 1] }}
            className="display-tight text-paper text-[clamp(3rem,10vw,9rem)]"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className={`mt-8 text-base md:text-lg text-paper-dim leading-relaxed max-w-2xl ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
