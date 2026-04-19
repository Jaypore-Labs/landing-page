import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ServicesList } from "@/components/sections/services-list";
import { Capabilities } from "@/components/sections/capabilities";
import { Industries } from "@/components/sections/industries";
import { Marquee } from "@/components/sections/marquee";
import {
  BreadcrumbJsonLd,
  ServicesJsonLd,
} from "@/components/seo/json-ld";
import { siteConfig, technologies } from "@/data/site";

const desc =
  "AI enablement · AI-enabled web apps · desktop apps · SaaS · healthcare AI · AI readiness consulting. Weekly demos, no buzzword bingo.";

export const metadata: Metadata = {
  title: "Services",
  description: desc,
  keywords: [
    "AI enablement services",
    "AI integration services",
    "AI readiness consulting",
    "AI scribes development",
    "AI copilot development",
    "healthcare AI software",
    "AI SaaS development",
    "RAG implementation",
    "voice AI development",
    "Electron AI apps",
  ],
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: `Services · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/services`,
  },
  twitter: {
    title: `Services · ${siteConfig.name}`,
    description: desc,
  },
};

const phases = [
  {
    n: "01",
    h: "Discovery",
    b: "One week inside your business. Interviews with users + operators, workflow mapping, AI opportunity audit. Output: a crisp problem statement and a bet map.",
  },
  {
    n: "02",
    h: "Blueprint",
    b: "Architecture, wireframes, eval criteria, milestones. Fixed scope for the first ship, open-ended after. Written in plain English, not decks.",
  },
  {
    n: "03",
    h: "Build",
    b: "Two-week sprints, Friday demos. Production on day one — no staging-only fantasies. CI, LLM evals, monitoring, the works.",
  },
  {
    n: "04",
    h: "Launch + steady state",
    b: "We ship. We watch the dashboards. We tune the prompts and evals. Then we stick around as long as you need us.",
  },
];

const engagementModels = [
  {
    name: "Project",
    price: "Fixed scope",
    summary: "A clear deliverable with a timeline. Best for MVPs, discrete AI features, or adding AI to an existing product.",
    fits: ["New AI-enabled product", "Prototype to production", "Defined scope"],
  },
  {
    name: "Retainer",
    price: "Monthly",
    summary: "A dedicated slice of the studio every month. Best for companies putting AI to work across multiple surfaces.",
    fits: ["Continuous delivery", "Long-term roadmap", "Evolving AI surface"],
  },
  {
    name: "Augment",
    price: "Per-engineer",
    summary: "We plug in beside your team as senior AI engineers. Best when you have engineers but lack AI depth.",
    fits: ["Team extension", "Senior AI depth", "Fast ramp-up"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <PageHero
        eyebrow="What we do"
        title={
          <>
            AI-enabled
            <br />
            <span className="italic font-medium text-accent">software,</span> for your business.
          </>
        }
        description="Six ways to put AI to work. From scribes and copilots to voice AI and full SaaS — we build, we integrate, and we help you decide if AI is worth the candle in the first place."
      />

      <ServicesList />

      {/* Capabilities */}
      <Capabilities />

      {/* Engagement models */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  Work with us
                </span>
              </div>
              <h2 className="display-tight text-paper text-[clamp(2.25rem,6vw,5rem)]">
                Three ways
                <br />
                <span className="italic font-medium text-accent">to engage.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper-dim max-w-md text-base md:text-lg leading-relaxed">
                Pick the shape that fits. We&apos;ll recommend one honestly —
                sometimes that means a different studio entirely.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border-t border-line">
            {engagementModels.map((m, i) => (
              <li key={m.name} className="bg-ink p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="display-tight text-accent text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim">
                    {m.price}
                  </span>
                </div>
                <h3 className="display text-2xl md:text-3xl text-paper mb-3">
                  {m.name}
                </h3>
                <p className="text-paper-dim text-sm leading-relaxed mb-6">
                  {m.summary}
                </p>
                <ul className="space-y-2 border-t border-line pt-5">
                  {m.fits.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-paper text-sm"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  Engagement cadence
                </span>
              </div>
              <h2 className="display-tight text-paper text-[clamp(2.25rem,6vw,5rem)]">
                From hello to
                <br />
                <span className="italic font-medium text-accent">in production.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper-dim max-w-md text-base md:text-lg leading-relaxed">
                Four phases, designed so you see working AI by week four.
                Not a proposal. Not a deck. Something you can click.
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border-t border-line">
            {phases.map((p) => (
              <li key={p.n} className="bg-ink p-8 md:p-10">
                <div className="display-tight text-accent text-5xl md:text-6xl mb-6">
                  {p.n}
                </div>
                <h3 className="display text-2xl text-paper mb-3">{p.h}</h3>
                <p className="text-paper-dim text-sm leading-relaxed">{p.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <Industries />

      {/* Tech */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  Tools of the trade
                </span>
              </div>
              <h2 className="display-tight text-paper text-[clamp(2rem,5vw,4rem)]">
                Stacks we&apos;re <span className="italic text-accent">fluent</span> in.
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-line pt-8">
            {technologies.map((t) => (
              <span
                key={t.name}
                className="mono text-[11px] uppercase tracking-widest px-4 py-2.5 rounded-full border border-line text-paper-dim hover:border-accent hover:text-accent transition-colors"
              >
                {t.name}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-3 mono text-[11px] uppercase tracking-[0.22em] text-paper hover:text-accent transition-colors"
          >
            <span className="swipe-link">Tell us what you&apos;re building</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      <Marquee
        words={["Booking AI projects — Q2 2026", "Scribes · Copilots · Voice · RAG"]}
        size="lg"
        speed="slow"
      />
    </>
  );
}
