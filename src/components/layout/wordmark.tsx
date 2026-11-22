/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

/** The brand mark: the exact JL icon served at /icon (same asset as the favicon). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/icon"
      alt=""
      aria-hidden
      width={32}
      height={32}
      className={cn("h-8 w-8 shrink-0", className)}
    />
  );
}

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark />
      <span
        className={cn(
          "font-serif text-[21px] font-semibold tracking-[-0.01em] leading-none",
          tone === "dark" ? "text-paper" : "text-ink"
        )}
      >
        Jaypore Labs
      </span>
    </span>
  );
}
