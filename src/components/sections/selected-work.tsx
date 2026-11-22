import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import { SectionHeader, Wrap } from "@/components/ui/primitives";
import { CaseStudyFilter } from "./case-study-filter";
import { CaseStudyCard, caseHref } from "./case-study-card";

export { CaseStudyCard };

/** Large horizontal feature used for the lead case study. */
export function LeadCaseStudy({ cs }: { cs: CaseStudy }) {
  return (
    <Link href={caseHref(cs)} className="group grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-8 items-center">
      <div className="col-span-12 lg:col-span-6">
        <div className="relative flex aspect-[16/10] flex-col justify-between palette-classic bg-muted border border-line-inv p-8 md:p-10 text-paper">
          <span className="eyebrow text-paper-dim">{cs.client}</span>
          {cs.metric ? (
            <div>
              <div className="display text-accent text-[clamp(3.5rem,7vw,6rem)] leading-none">{cs.metric.value}</div>
              <div className="mt-3 text-paper text-[15px]">{cs.metric.label}</div>
            </div>
          ) : (
            <span className="display text-[clamp(2.5rem,4vw,3.5rem)] leading-none">{cs.client}</span>
          )}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 lg:col-start-8">
        <div className="eyebrow text-accent-ink">Featured case study</div>
        <h3 className="display mt-4 text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.15] text-ink group-hover:text-accent-ink transition-colors">
          {cs.headline}
        </h3>
        <p className="mt-5 text-base md:text-[17px] leading-relaxed text-ink-soft">{cs.summary}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
          Read the case study
          <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

/** Homepage — one lead story, three supporting, and a client quote. */
export function CaseStudyCards() {
  const lead = caseStudies.find((c) => c.slug === "clinic-management-platform")!;
  const rest = ["workplace-wellbeing-desktop-app", "clinical-documentation-platform", "research-data-analysis-tool"]
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is CaseStudy => Boolean(c));

  return (
    <section id="work" className="border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="Case studies"
          title="Platforms in production."
          intro="Selected engagements. Client names are withheld; each study covers the business problem, the solution architecture and the outcome."
          action={{ href: "/portfolio", label: `View all ${caseStudies.length} case studies` }}
        />

        <LeadCaseStudy cs={lead} />

        <ul className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14 border-t border-line pt-12">
          {rest.map((cs) => (
            <li key={cs.slug}>
              <CaseStudyCard cs={cs} />
            </li>
          ))}
        </ul>

      </Wrap>
    </section>
  );
}

/** Portfolio index — every case study, filterable by sector. */
export function CaseStudyIndex() {
  return (
    <section className="border-b border-line">
      <Wrap className="py-16 md:py-24">
        <LeadCaseStudy cs={caseStudies[0]} />
        <div className="mt-20">
          <CaseStudyFilter studies={caseStudies.slice(1)} />
        </div>
      </Wrap>
    </section>
  );
}
