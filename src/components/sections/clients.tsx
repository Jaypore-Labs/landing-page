"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Logitech", logo: "/logo/logitech.png", height: 32, width: 128 },
  { name: "Nudge AI", logo: "/logo/nudge.svg", height: 28, width: 112 },
  { name: "CuraStream", logo: "/logo/curastream.png", height: 40, width: 40 },
  { name: "Lucy", logo: "/logo/lucy.svg", height: 36, width: 148 },
  { name: "Sonnet", logo: "/logo/sonnet.svg", height: 28, width: 112 },
  { name: "FastLap", logo: "/logo/fastlap.webp", height: 36, width: 148 },
  { name: "SmartHabits", logo: "/logo/smarthabits.svg", height: 32, width: 132 },
];

export function Clients() {
  return (
    <section className="relative border-b border-line bg-ink">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 md:py-20">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                Trusted by teams at
              </span>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-10 gap-y-8 md:gap-x-14"
            >
              {clients.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  whileHover={{ opacity: 1, scale: 1.04 }}
                  className="relative brightness-0 invert transition-opacity"
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    className="object-contain"
                    style={{ height: c.height, width: "auto" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
