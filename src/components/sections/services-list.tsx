import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/site";
import { ArrowLink, SectionHeader, Wrap } from "@/components/ui/primitives";

/** Homepage overview — six services as a hairline grid. */
export function ServicesGrid() {
  return (
    <section id="services" className="border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="Practices"
          title="Six practices. One accountable team."
          intro="One accountable team across strategy, architecture, delivery and support, so nothing is lost between the people who design your systems and the people who build them."
          action={{ href: "/services", label: "Explore our services" }}
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {services.map((s, i) => (
            <li key={s.id}>
              <Link
                href={`/services#${s.id}`}
                className="group relative flex h-full flex-col border-t border-line-strong pt-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="text-sm text-ink-mute tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-[1.625rem] text-ink group-hover:text-accent-ink transition-colors">{s.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {s.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                  Learn more
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

/** Services page — each service as a full-width row with scope detail. */
export function ServicesDetail() {
  return (
    <section className="border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="Our services"
          title="Our services."
          intro="Each engagement combines architecture and delivery in one senior team, aligned to your standards and governance."
        />
        <ol className="border-t border-line">
          {services.map((s, i) => (
            <li
              key={s.id}
              id={s.id}
              className="scroll-mt-28 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-6 border-b border-line py-12 md:py-14"
            >
              <div className="col-span-12 lg:col-span-4">
                <span className="text-sm text-ink-mute tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-[clamp(1.75rem,2.6vw,2.25rem)] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-mute">{s.shortDescription}</p>
              </div>
              <div className="col-span-12 md:col-span-7 lg:col-span-4">
                <p className="text-base md:text-[17px] leading-relaxed text-ink-soft">
                  {s.description}
                </p>
                <ArrowLink href="/contact" className="mt-6">
                  Discuss this service
                </ArrowLink>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-3 lg:col-start-10">
                <div className="eyebrow text-ink-mute mb-4">Typical scope</div>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] leading-snug text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}
