import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Eyebrow, Wrap } from "@/components/ui/primitives";
import { SystemsDiagram } from "./systems-diagram";

const proof = [
  {
    v: "50+",
    k: "platforms and products delivered since 2017",
    href: "/portfolio",
  },
  {
    v: "8–12 wks",
    k: "typical time to a first production release on a new program",
    href: "/services",
  },
  {
    v: "30+",
    k: "organizations served across 10+ countries, including global brands",
    href: "/industries",
  },
];

export function Hero() {
  return (
    <section className="palette-classic bg-ink text-paper">
      <Wrap className="pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow tone="dark" className="mb-8 rise">
              Enterprise software architecture &amp; engineering
            </Eyebrow>
            <h1 className="display-tight text-paper text-[clamp(2.75rem,5.4vw,5.5rem)] rise rise-1">
              The systems your enterprise runs on,{" "}
              <span className="text-accent">engineered to last.</span>
            </h1>
            <p className="lede mt-8 max-w-[40rem] text-paper/80 rise rise-2">
              We help enterprises design, modernize and integrate their core
              platforms. Enterprise architecture, legacy modernization, systems
              integration and business-critical applications, delivered by senior
              teams accountable from strategy to operations.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 rise rise-3">
              <ButtonLink href="/contact" variant="accent">
                Schedule a briefing
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="outline-inv">
                View case studies
              </ButtonLink>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 rise rise-2">
            <SystemsDiagram />
          </div>
        </div>

        <ul className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 border-t border-line-inv pt-10 rise rise-3">
          {proof.map((p) => (
            <li key={p.v}>
              <Link href={p.href} className="group block">
                <div className="display text-[clamp(2.75rem,4.4vw,3.75rem)] leading-none text-paper">
                  {p.v}
                </div>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-paper-dim group-hover:text-paper transition-colors">
                  {p.k}
                  <ArrowRight className="ml-1.5 inline h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  );
}
