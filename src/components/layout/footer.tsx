"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const primaryNav = [
  { name: "Work", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const metaLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export function Footer() {
  const [time, setTime] = useState("");
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

  return (
    <footer className="relative bg-ink-deep text-paper overflow-hidden border-t border-line">
      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full accent-glow pointer-events-none"
      />

      {/* Closing CTA */}
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pt-24 md:pt-40 pb-16 md:pb-24">
        <div className="flex items-start justify-between gap-6 mb-10 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
              Say hello
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Online · {siteConfig.location}
            </span>
            <span className="text-paper/30">/</span>
            <span className="text-paper">{time}</span>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.9 }}
          className="display-tight text-paper text-[clamp(3rem,11vw,12rem)]"
        >
          Let&apos;s make
          <br />
          your software
          <br />
          <span className="italic font-medium text-accent">AI-ready.</span>
        </motion.h2>

        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <a
              href={`mailto:${siteConfig.email}`}
              data-cursor-label="EMAIL"
              className="group inline-flex items-center gap-4 rounded-full bg-paper text-ink px-6 py-4 hover:bg-accent transition-colors"
            >
              <span className="display text-xl md:text-2xl pr-2">
                {siteConfig.email}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            <p className="mt-6 text-paper-dim max-w-md text-sm leading-relaxed">
              Got an idea that needs engineering? Tell us in one email. We
              reply within 24 hours, IST friendly.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-5">
              Elsewhere
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swipe-link inline-flex items-center gap-2 text-paper hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swipe-link inline-flex items-center gap-2 text-paper hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swipe-link inline-flex items-center gap-2 text-paper hover:text-accent transition-colors"
                >
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.founder.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swipe-link inline-flex items-center gap-2 text-paper hover:text-accent transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" /> Upwork
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-5">
              Sitemap
            </div>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="swipe-link text-paper hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 pb-10 md:pb-14">
        <div className="border-t border-line pt-10 md:pt-14 flex items-end justify-between gap-6 flex-wrap">
          <div className="flex-1">
            <div
              aria-hidden
              className="display-tight leading-[0.82] text-[clamp(4rem,18vw,18rem)]"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(245,240,232,0.18)",
              }}
            >
              JAYPORE<span className="text-accent" style={{ WebkitTextStroke: "0" }}>✺</span>LABS
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 flex-wrap mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
          <span>© {new Date().getFullYear()} {siteConfig.name}. Hand-built.</span>
          <div className="flex items-center gap-6">
            {metaLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="hover:text-paper transition-colors"
              >
                {l.name}
              </Link>
            ))}
            <span className="text-paper/40">v.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
