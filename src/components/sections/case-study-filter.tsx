"use client";

import { useState } from "react";
import type { CaseStudy } from "@/data/case-studies";
import { CaseStudyCard } from "./case-study-card";
import { cn } from "@/lib/utils";

export function CaseStudyFilter({ studies }: { studies: CaseStudy[] }) {
  const sectors = ["All", ...Array.from(new Set(studies.map((s) => s.sector)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? studies : studies.filter((s) => s.sector === active);

  return (
    <>
      <div role="tablist" aria-label="Filter by sector" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
        {sectors.map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={active === s}
            onClick={() => setActive(s)}
            className={cn(
              "relative -mb-px py-4 text-[15px] transition-colors",
              active === s ? "text-ink font-medium" : "text-ink-soft hover:text-ink"
            )}
          >
            {s}
            {active === s && <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-accent" />}
          </button>
        ))}
      </div>
      <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {shown.map((cs) => (
          <li key={cs.slug}>
            <CaseStudyCard cs={cs} />
          </li>
        ))}
      </ul>
    </>
  );
}
