"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { principles } from "@/data/site";

const words = ["We", "bring", "AI", "into", "real", "software."];

export function BigStatement() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.25"],
  });

  return (
    <section
      ref={ref}
      className="relative bg-accent text-ink border-y border-accent-deep overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-28 md:py-48 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-2 flex items-start">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink/70">
              Manifesto
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-10">
          <h2 className="display-tight text-ink text-[clamp(2.5rem,9vw,9rem)]">
            {words.map((w, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  scrollYProgress={scrollYProgress}
                  start={start}
                  end={end}
                >
                  {w}
                </Word>
              );
            })}
          </h2>

          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-6xl">
            {principles.map((item) => (
              <motion.div
                key={item.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-t border-ink/30 pt-5"
              >
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mb-3">
                  {item.k}
                </div>
                <h3 className="display text-2xl md:text-3xl text-ink mb-2">
                  {item.h}
                </h3>
                <p className="text-ink/80 text-sm leading-relaxed">
                  {item.b}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  scrollYProgress,
  start,
  end,
}: {
  children: React.ReactNode;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}
