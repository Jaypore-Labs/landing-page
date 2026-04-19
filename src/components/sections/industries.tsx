"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/site";

export function Industries() {
  return (
    <section id="industries" className="relative bg-ink border-b border-line">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                Who we serve
              </span>
            </div>
            <h2 className="display-tight text-paper text-[clamp(2.25rem,6vw,5rem)]">
              Where we&apos;ve brought
              <br />
              <span className="italic font-medium text-accent">AI to work.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-paper-dim text-base md:text-lg leading-relaxed max-w-md">
              Regulated, consumer, enterprise — the shape of the product
              differs, the discipline doesn&apos;t. Depth beats breadth, and
              we&apos;ve been inside each of these long enough to be useful.
            </p>
          </div>
        </div>

        <ul className="border-t border-line">
          {industries.map((ind, i) => (
            <motion.li
              key={ind.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group border-b border-line"
            >
              <div className="grid grid-cols-12 gap-6 items-center py-5 md:py-7 group-hover:bg-muted/30 transition-colors px-1 md:px-0">
                <div className="col-span-2 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <span className="display-tight text-paper group-hover:text-accent transition-colors text-[clamp(1.75rem,4vw,3rem)]">
                    {ind.name}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <p className="text-paper-dim text-sm md:text-base leading-relaxed">
                    {ind.detail}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
