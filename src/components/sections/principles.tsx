import { principles } from "@/data/site";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

export function Principles({
  eyebrow = "Our principles",
  title = "How we deliver enterprise programs.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {principles.map((p) => (
            <li key={p.k} className="border-t border-line-strong pt-7">
              <span className="text-sm text-ink-mute tabular-nums">{p.k}</span>
              <h3 className="display mt-4 text-[1.5rem] text-ink">{p.h}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.b}</p>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
