import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-paper-deep border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="Industries"
          title="Industry solutions."
          intro="Every sector has its own core systems, regulators and operating constraints. We design around them from the start."
          action={{ href: "/industries", label: "Explore industries" }}
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {industries.map((ind) => (
            <li key={ind.slug}>
              <Link href={`/industries/${ind.slug}`} className="group block border-t border-line-strong py-7">
                <h3 className="display flex items-center justify-between gap-3 text-[1.375rem] text-ink group-hover:text-accent-ink transition-colors">
                  {ind.name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{ind.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
