"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/site";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-ink border-b border-line">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40">
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                What you actually get
              </span>
            </div>
            <h2 className="display-tight text-paper text-[clamp(2.5rem,7vw,6rem)]">
              Capabilities,
              <br />
              <span className="italic font-medium text-accent">not claims.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex md:items-end">
            <p className="text-paper-dim text-base md:text-lg leading-relaxed max-w-md">
              Everything below is something we&apos;ve shipped more than once —
              for doctors, founders, or enterprise teams introducing AI into
              real operations. No vaporware, no &ldquo;we could figure it out.&rdquo;
            </p>
          </div>
        </div>

        <div className="space-y-14">
          {capabilities.map((group, gi) => (
            <div key={group.group} className="border-t border-line pt-10">
              <div className="grid grid-cols-12 gap-6 items-baseline mb-8">
                <div className="col-span-12 md:col-span-3 flex items-baseline gap-4">
                  <span className="display-tight text-accent text-5xl leading-none">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-2xl md:text-3xl text-paper">
                    {group.group}
                  </h3>
                </div>
                <div className="hidden md:block md:col-span-9 h-px bg-line" />
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    className="group relative bg-ink p-6 md:p-8 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="display text-lg md:text-xl text-paper group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="text-paper-dim text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
