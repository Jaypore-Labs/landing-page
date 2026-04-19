import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Marquee } from "@/components/sections/marquee";
import { Capabilities } from "@/components/sections/capabilities";
import { Industries } from "@/components/sections/industries";
import { BigStatement } from "@/components/sections/big-statement";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig, technologies } from "@/data/site";

const desc =
  "Friendly AI-enablement studio. Four-person team building AI-enabled software for founders, Logitech, Mercedes, and clinics around the world.";

export const metadata: Metadata = {
  title: "About",
  description: desc,
  keywords: [
    "AI product studio India",
    "AI consulting agency",
    "AI enablement studio",
    "remote AI engineering team",
    "healthcare AI team",
  ],
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/about`,
  },
  twitter: {
    title: `About · ${siteConfig.name}`,
    description: desc,
  },
};

const quickFacts = [
  { k: "Studio size", v: "4 engineers" },
  { k: "Founded", v: "2017" },
  { k: "Based", v: "India · Remote-worldwide" },
  { k: "Focus", v: "AI-first products" },
  { k: "Typical engagement", v: "6–16 weeks" },
  { k: "Rate", v: "$80–$140/hr" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <PageHero
        eyebrow="Who we are"
        title={
          <>
            A friendly
            <br />
            <span className="italic font-medium text-accent">AI-enablement</span> studio.
          </>
        }
        description={
          <>
            Jaypore Labs is a small product studio out of India. We build
            AI-enabled software and help businesses put AI to work — scribes,
            copilots, voice AI, full SaaS. Since 2017, shipping for founders,
            Logitech, Mercedes, and clinics around the world.
          </>
        }
      />

      {/* Founder + quick facts */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40 grid grid-cols-12 gap-8 items-start">
          {/* Quick facts panel (replaces founder portrait) */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative rounded-2xl border border-line-strong bg-muted/40 p-8 md:p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-64 w-64 rounded-full accent-glow pointer-events-none"
              />
              <div className="relative flex items-center gap-3 mb-10">
                <span className="h-px w-8 bg-accent" />
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  Studio card
                </span>
              </div>

              <div className="relative mb-10">
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-3">
                  Founder · {siteConfig.founder.experience}
                </div>
                <div className="display-tight text-paper text-[clamp(2.5rem,5vw,4rem)] leading-[0.95]">
                  {siteConfig.founder.name}
                </div>
                <div className="mt-3 text-paper-dim">
                  {siteConfig.founder.role}
                </div>
              </div>

              <dl className="relative grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 mb-8">
                {quickFacts.map((f) => (
                  <div key={f.k}>
                    <dt className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mb-1">
                      {f.k}
                    </dt>
                    <dd className="text-paper text-sm font-medium">{f.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="relative flex gap-2">
                <a
                  href={siteConfig.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper-dim hover:bg-accent hover:text-ink hover:border-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper-dim hover:bg-accent hover:text-ink hover:border-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.founder.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 mono text-[11px] uppercase tracking-[0.22em] text-paper hover:bg-paper hover:text-ink transition-colors"
                >
                  Upwork
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="col-span-12 md:col-span-7 md:pl-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                The story
              </span>
            </div>
            <h2 className="display-tight text-paper text-[clamp(2.25rem,5vw,4.5rem)] mb-8">
              Built around one question:
              <br />
              <span className="italic font-medium text-accent">does it ship?</span>
            </h2>
            <div className="space-y-5 text-paper-dim text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                {siteConfig.founder.name} started this studio after eight years
                leading engineering for healthcare and consumer tech — including
                enterprise work with <span className="text-paper">Logitech</span>{" "}
                and <span className="text-paper">Mercedes Benz</span>, and
                leading a team of five to ship Lucy, a clinic platform now
                serving 100+ doctors across Luxembourg.
              </p>
              <p>
                Today we&apos;re four engineers deep, industry-first, and
                friendly about it. We don&apos;t sell AI models — we build the
                software around them, and we help businesses put AI to work
                without rewriting what already runs.
              </p>
              <p>
                One project at a time, shipped weekly, stuck around for the
                long tail. No juniors in a trench coat, no handoff hell, no
                mystery gantts.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-10 group inline-flex items-center gap-3 rounded-full bg-accent text-ink px-6 py-3.5 text-sm font-medium hover:bg-accent-deep transition-colors"
            >
              Bring AI to your business
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto — principles */}
      <BigStatement />

      {/* Capabilities */}
      <Capabilities />

      {/* Industries */}
      <Industries />

      {/* Stats band */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { v: siteConfig.stats.yearsExperience, k: "Years shipping" },
              { v: siteConfig.stats.projectsDelivered, k: "Products built" },
              { v: siteConfig.stats.clientsServed, k: "Happy clients" },
              { v: siteConfig.stats.countries, k: "Countries served" },
            ].map((s) => (
              <div key={s.k} className="border-t border-line-strong pt-6">
                <div className="display-tight text-paper text-[clamp(3rem,8vw,6rem)] leading-none">
                  {s.v}
                </div>
                <div className="mt-3 mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack marquee */}
      <Marquee
        words={technologies.map((t) => t.name)}
        size="lg"
        speed="slow"
        accentEvery={3}
      />
    </>
  );
}
