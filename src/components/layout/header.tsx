"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const navigation = [
  { name: "Work", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/blog" },
  { name: "Series", href: "/series" },
];

function useClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    const firstId = requestAnimationFrame(() => setTime(fmt()));
    const id = setInterval(() => setTime(fmt()), 15_000);
    return () => {
      cancelAnimationFrame(firstId);
      clearInterval(id);
    };
  }, []);
  return time;
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const time = useClock();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 transition-all duration-500",
          scrolled ? "pt-3" : "pt-6"
        )}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="mono text-[12px] uppercase tracking-[0.18em] text-paper flex items-center gap-2"
          data-cursor-label="HOME"
        >
          <span className="text-accent">✺</span>
          <span>Jaypore Labs</span>
        </Link>

        {/* Desktop nav pill */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-1 rounded-full border border-line bg-ink/70 backdrop-blur-xl transition-all duration-500",
            scrolled ? "py-1.5 px-2" : "py-2 px-3"
          )}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-[13px] text-paper-dim hover:text-paper transition-colors rounded-full relative"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 px-4 py-1.5 text-[13px] bg-accent text-ink rounded-full hover:bg-accent-deep transition-colors inline-flex items-center gap-1"
          >
            Let&apos;s talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Location + time */}
        <div className="hidden md:flex items-center gap-3 mono text-[11px] uppercase tracking-[0.18em] text-paper-dim">
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            {siteConfig.location} · IST
          </span>
          <span className="text-paper">{time || "—"}</span>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden rounded-full border border-line p-2.5 bg-ink/70 backdrop-blur-xl text-paper"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto md:hidden mx-4 mt-3 rounded-3xl border border-line bg-ink/95 backdrop-blur-xl p-6"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 display text-3xl text-paper hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-between rounded-full bg-accent text-ink px-5 py-3 text-sm font-medium"
            >
              Let&apos;s talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="mt-6 mono text-[11px] uppercase tracking-[0.18em] text-paper-dim flex items-center justify-between">
              <span>{siteConfig.location} · IST</span>
              <span className="text-paper">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
