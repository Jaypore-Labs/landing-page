import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

/** Page-width wrapper used by every section. */
export function Wrap({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

/** Small uppercase label with an orange rule. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "dark" ? "text-paper-dim" : "text-ink-mute",
        className
      )}
    >
      <span aria-hidden className="h-[2px] w-6 bg-accent" />
      {children}
    </div>
  );
}

/** Standard section header: eyebrow, serif title, optional intro and action. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  action?: { href: string; label: string };
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 mb-12 md:mb-16", className)}>
      <div className="col-span-12 lg:col-span-7">
        <Eyebrow tone={tone} className="mb-5">
          {eyebrow}
        </Eyebrow>
        <h2
          className={cn(
            "display text-[clamp(2rem,3.6vw,3.25rem)]",
            dark ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>
      {(intro || action) && (
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-5">
          {intro && (
            <p className={cn("text-base md:text-[17px] leading-relaxed", dark ? "text-paper-dim" : "text-ink-soft")}>
              {intro}
            </p>
          )}
          {action && <ArrowLink href={action.href} tone={tone}>{action.label}</ArrowLink>}
        </div>
      )}
    </div>
  );
}

/** Rectangular button rendered as a link. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline" | "outline-inv";
  className?: string;
}) {
  const variants = {
    primary: "bg-ink text-paper hover:bg-ink-soft",
    accent: "bg-accent text-ink hover:bg-accent-deep",
    outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
    "outline-inv": "border border-line-inv-strong text-paper hover:bg-paper hover:text-ink",
  } as const;
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 px-6 py-3.5 text-[15px] font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/** "Learn more →" style text link. */
export function ArrowLink({
  href,
  children,
  tone = "light",
  external,
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
}) {
  const cls = cn(
    "group inline-flex items-center gap-2 text-[15px] font-medium",
    tone === "dark" ? "text-paper" : "text-ink",
    className
  );
  const inner = (
    <>
      <span className="link-underline">{children}</span>
      <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Closing call-to-action band used at the bottom of pages. */
export function CtaBand({
  title = "Planning a modernization or a new platform?",
  body = "Speak with a senior architect about your systems, constraints and objectives. We respond to every inquiry within one business day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="palette-classic bg-accent text-ink">
      <Wrap className="py-16 md:py-20">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4 md:gap-x-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="display text-[clamp(2rem,3.6vw,3.25rem)] text-ink max-w-3xl">
              {title}
            </h2>
            <p className="mt-5 text-ink/80 text-base md:text-lg leading-relaxed max-w-2xl">
              {body}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <ButtonLink href="/contact" variant="primary">
              Schedule a briefing
            </ButtonLink>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/** Row of headline figures under a single rule. */
export function StatsRow({
  stats,
  tone = "light",
}: {
  stats: { v: string; k: string }[];
  tone?: Tone;
}) {
  const dark = tone === "dark";
  return (
    <dl
      className={cn(
        "grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t py-10",
        dark ? "border-line-inv" : "border-line"
      )}
    >
      {stats.map((s) => (
        <div key={s.k}>
          <dt className="sr-only">{s.k}</dt>
          <dd>
            <div className={cn("display text-[clamp(2.5rem,4vw,3.5rem)] leading-none", dark ? "text-paper" : "text-ink")}>
              {s.v}
            </div>
            <div className={cn("mt-3 text-sm", dark ? "text-paper-dim" : "text-ink-mute")}>{s.k}</div>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export const companyStats = [
  { v: "2017", k: "Delivering software since" },
  { v: "50+", k: "Platforms and products delivered" },
  { v: "30+", k: "Organizations served" },
  { v: "10+", k: "Countries with active clients" },
];
