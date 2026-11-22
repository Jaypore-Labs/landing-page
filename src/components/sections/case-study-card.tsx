import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";

export const caseHref = (c: CaseStudy) => `/portfolio/${c.slug}`;

/** Typographic tile — client name set large; no imagery. */
function Tile({ cs, tone = "light" }: { cs: CaseStudy; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative flex aspect-[16/10] flex-col justify-between p-6 md:p-7 transition-colors duration-200 ${
        dark ? "bg-ink text-paper" : "border border-line bg-paper-deep text-ink group-hover:border-accent group-hover:bg-paper-light"
      }`}
    >
      <span className={`eyebrow ${dark ? "text-paper-dim" : "text-ink-mute"}`}>{cs.sector}</span>
      <div className="flex items-end justify-between gap-4">
        <span className="display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-none">{cs.client}</span>
        <span aria-hidden className="mb-1 h-2.5 w-2.5 shrink-0 bg-accent" />
      </div>
    </div>
  );
}

export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link href={caseHref(cs)} className="group block">
      <Tile cs={cs} />
      <h3 className="display mt-5 text-[1.3125rem] leading-[1.3] text-ink group-hover:text-accent-ink transition-colors">
        {cs.headline}
      </h3>
      <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
        Read the case study
        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
