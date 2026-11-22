import { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Principles } from "@/components/sections/principles";
import {
  ArrowLink,
  CtaBand,
  Eyebrow,
  SectionHeader,
  StatsRow,
  Wrap,
  companyStats,
} from "@/components/ui/primitives";
import { BreadcrumbJsonLd, PersonJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Jaypore Labs is an enterprise software architecture and engineering firm, delivering platforms for global brands, healthcare and research since 2017.";

export const metadata: Metadata = {
  title: "About",
  description: desc,
  keywords: [
    "software engineering firm India",
    "software architecture consultancy",
    "remote senior engineering team",
    "custom software development company",
    "healthcare software team",
  ],
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: { ...ogDefaults,
    title: `About · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/about`,
  },
  twitter: { ...twitterDefaults,
    title: `About · ${siteConfig.name}`,
    description: desc,
  },
};

const facts = [
  { k: "Founded", v: "2017" },
  { k: "Headquarters", v: `${siteConfig.location}` },
  { k: "Delivery", v: "Remote, worldwide" },
  { k: "Clients in", v: siteConfig.regions.join(", ") },
  { k: "Engagements", v: "Phased programs and dedicated teams" },
  { k: "Focus", v: "Enterprise architecture, modernization, integration" },
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
      <PersonJsonLd />
      <PageHero
        eyebrow="About us"
        title="A senior engineering partner for enterprise systems."
        description="Jaypore Labs helps organizations design, modernize and integrate their core software, with senior architects and engineers accountable from strategy to operations."
      />

      {/* Story + facts */}
      <section className="border-b border-line">
        <Wrap className="py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-14">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow className="mb-5">Our story</Eyebrow>
              <h2 className="display text-[clamp(2rem,3.6vw,3.25rem)] text-ink">
                Since 2017, one standard: software that works in production.
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-ink-soft max-w-2xl">
                <p>
                  {siteConfig.founder.name} founded Jaypore Labs in 2017 after
                  years leading engineering for healthcare and consumer
                  technology, including work for global hardware and automotive
                  brands, and leading the team that delivered a clinic platform
                  now used by more than 100 doctors.
                </p>
                <p>
                  Today we work with enterprises and growing organizations on
                  architecture, modernization, systems integration and
                  business-critical applications. Applied AI is part of that
                  toolkit, used where it delivers measurable value.
                </p>
                <p>
                  Clients work directly with senior architects and engineers,
                  see production-ready software every sprint, and retain full
                  ownership of code, infrastructure and IP.
                </p>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
              <div className="bg-paper-light border border-line p-8">
                <div className="eyebrow text-ink-mute mb-6">At a glance</div>
                <dl className="divide-y divide-line">
                  {facts.map((f) => (
                    <div key={f.k} className="py-4 first:pt-0 grid grid-cols-5 gap-4">
                      <dt className="col-span-2 text-sm text-ink-mute">{f.k}</dt>
                      <dd className="col-span-3 text-[15px] text-ink">{f.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Wrap>
      </section>

      <Principles />

      {/* Leadership */}
      <section className="bg-paper-deep border-b border-line">
        <Wrap className="py-20 md:py-28">
          <SectionHeader eyebrow="Leadership" title="Led by engineers." />
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-8 border-t border-line-strong pt-10">
            <div className="col-span-12 md:col-span-4">
              <h3 className="display text-[2rem] text-ink">{siteConfig.founder.name}</h3>
              <p className="mt-2 text-[15px] text-ink-mute">{siteConfig.founder.role}</p>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="text-base md:text-[17px] leading-relaxed text-ink-soft">
                {siteConfig.founder.experience} leading engineering for
                healthcare, consumer and enterprise software. Yash is on every
                project, from the first call to launch. Most of that time goes
                into system architecture, desktop and web platforms, and
                clinical software.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <ArrowLink href={siteConfig.founder.linkedin} external>LinkedIn</ArrowLink>
                <ArrowLink href={siteConfig.founder.github} external>GitHub</ArrowLink>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="border-b border-line">
        <Wrap className="py-16 md:py-20">
          <StatsRow stats={companyStats} />
        </Wrap>
      </section>

      <CtaBand />
    </>
  );
}
