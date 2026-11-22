import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/data/solutions";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

/** Outcome-led solution offers. `detailed` adds deliverables (solutions page). */
export function Solutions({ detailed = false }: { detailed?: boolean }) {
  return (
    <section id="solutions" className="scroll-mt-20 border-b border-line">
      <Wrap className="py-20 md:py-28">
        {!detailed && (
          <SectionHeader
            eyebrow="Enterprise solutions"
            title="Solutions for the systems your business depends on."
            intro="Defined entry points with clear scope and timelines. Each one is delivered by a senior team that stays accountable through production."
            action={{ href: "/solutions", label: "Explore all solutions" }}
          />
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {solutions.map((s) => (
            <li key={s.id} id={detailed ? s.id : undefined} className="scroll-mt-28 bg-paper">
              <Link
                href={detailed ? "/contact" : `/solutions#${s.id}`}
                className="group relative flex h-full flex-col p-7 md:p-8 transition-colors hover:bg-paper-light"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="eyebrow text-accent-ink">{s.name}</span>
                <h3 className="display mt-4 text-[1.5rem] leading-[1.25] text-ink">{s.headline}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{s.summary}</p>
                {detailed && (
                  <ul className="mt-6 space-y-2 border-t border-line pt-5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[15px] text-ink">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
                <dl className="mt-auto pt-7 grid grid-cols-1 gap-3 text-sm">
                  <div className="border-t border-line pt-4">
                    <dt className="text-ink-mute">Best for</dt>
                    <dd className="mt-1 text-ink">{s.bestFor}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-mute">Timeline</dt>
                    <dd className="mt-1 text-ink">{s.timeline}</dd>
                  </div>
                </dl>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                  {detailed ? "Discuss this solution" : "Learn more"}
                  <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
