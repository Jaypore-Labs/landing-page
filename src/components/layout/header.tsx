"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./wordmark";

const navigation = [
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case studies", href: "/portfolio" },
  { name: "Insights", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (href.includes("#")) return false;
    return pathname === base || pathname.startsWith(base + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Jaypore Labs home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-[15px] transition-colors py-6",
                isActive(item.href) ? "text-ink" : "text-ink-soft hover:text-ink"
              )}
            >
              {item.name}
              {isActive(item.href) && (
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-[14px] font-medium text-paper hover:bg-ink-soft transition-colors"
          >
            Contact us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden -mr-2 p-2 text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-paper border-t border-line overflow-y-auto"
        >
          <nav aria-label="Mobile" className="px-5 sm:px-8 py-6">
            <ul className="divide-y divide-line border-b border-line">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 font-serif text-2xl text-ink"
                  >
                    {item.name}
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-between bg-ink px-5 py-4 text-paper font-medium"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
