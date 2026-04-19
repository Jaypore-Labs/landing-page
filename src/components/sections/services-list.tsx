"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/site";

export function ServicesList() {
  const [openId, setOpenId] = useState<string | null>(services[0]?.id ?? null);

  return (
    <section
      id="services"
      className="relative bg-ink border-b border-line"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pt-24 md:pt-40 pb-16 md:pb-28">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                Capabilities
              </span>
            </div>
            <h2 className="display-tight text-paper text-[clamp(2.5rem,7vw,6rem)]">
              What we
              <br />
              <span className="italic font-medium text-accent">build.</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-paper-dim text-base md:text-lg leading-relaxed max-w-md">
              Six ways to bring AI into your business. Whether you&apos;re
              starting fresh or retrofitting an existing product, we pick the
              shape that fits — not the one that pads the invoice.
            </p>
          </div>
        </div>

        <ul className="border-t border-line">
          {services.map((s, i) => {
            const isOpen = openId === s.id;
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={s.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 md:py-8 text-left"
                  data-cursor-label={isOpen ? "CLOSE" : "OPEN"}
                >
                  <div className="flex flex-1 items-baseline gap-6 md:gap-10 min-w-0">
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim shrink-0 w-10">
                      {num}
                    </span>
                    <span className="display-tight text-paper group-hover:text-accent transition-colors text-[clamp(1.75rem,5vw,4rem)] truncate">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-5 shrink-0">
                    <span className="hidden md:block mono text-[11px] uppercase tracking-[0.22em] text-paper-dim max-w-[22ch] text-right">
                      {s.shortDescription}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line group-hover:border-accent group-hover:bg-accent group-hover:text-ink transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pb-14 grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-5 md:col-start-2">
                          <p className="text-paper-dim text-base md:text-lg leading-relaxed">
                            {s.description}
                          </p>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:col-start-8">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {s.features.map((f) => (
                              <li
                                key={f}
                                className="flex items-center gap-2 text-paper text-sm py-1"
                              >
                                <span className="h-1 w-1 rounded-full bg-accent" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-paper hover:text-accent transition-colors"
                          >
                            <span className="swipe-link">Talk about this</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
