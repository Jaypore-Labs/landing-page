"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/site";

export function TestimonialQuote() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((n) => (n + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative bg-ink border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
              On record
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-10">
          <div className="relative min-h-[14rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.7, ease: [0.2, 0.85, 0.2, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -top-8 -left-4 md:-left-8 text-accent/25 text-[clamp(6rem,15vw,14rem)] leading-none font-serif select-none pointer-events-none"
                >
                  &ldquo;
                </span>
                <p className="display text-[clamp(1.75rem,4.5vw,3.75rem)] text-paper leading-[1.08] max-w-5xl">
                  {t.content}
                </p>

                <footer className="mt-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink display text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-paper text-sm font-medium">
                      {t.name}
                    </div>
                    <div className="mono text-[11px] uppercase tracking-[0.18em] text-paper-dim mt-1">
                      {t.role}
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="mt-12 flex items-center gap-5">
            {testimonials.map((tt, n) => (
              <button
                key={tt.id}
                onClick={() => setI(n)}
                aria-label={`Show testimonial ${n + 1}`}
                className="group flex items-center gap-3"
              >
                <span
                  className={`mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    n === i ? "text-paper" : "text-paper-dim"
                  }`}
                >
                  0{n + 1}
                </span>
                <span className="relative h-px w-12 bg-line overflow-hidden">
                  <span
                    className={`absolute inset-y-0 left-0 bg-accent transition-all ${
                      n === i ? "w-full duration-[6000ms]" : "w-0 duration-300"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
