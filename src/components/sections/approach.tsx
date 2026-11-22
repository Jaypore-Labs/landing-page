import { approach } from "@/data/site";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

export function Approach() {
  return (
    <section className="palette-classic bg-muted text-paper border-y border-line-inv">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          tone="dark"
          eyebrow="Delivery model"
          title="A delivery model built for enterprise risk."
          intro="Four phases, one accountable team. Production-ready software every sprint, with governance your stakeholders can follow."
        />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {approach.map((p, i) => (
            <li key={p.n} className={`border-t-[3px] pt-7 ${i === 0 ? "border-accent" : "border-line-inv-strong"}`}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-paper-dim tabular-nums">{p.n}</span>
                <span className="text-sm text-paper-dim">{p.duration}</span>
              </div>
              <h3 className="display mt-5 text-[1.75rem] text-paper">{p.h}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-paper-dim">{p.b}</p>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}
