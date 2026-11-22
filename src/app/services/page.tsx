import { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ServicesDetail } from "@/components/sections/services-list";
import { Capabilities } from "@/components/sections/capabilities";
import { Industries } from "@/components/sections/industries";
import { Approach } from "@/components/sections/approach";
import { ButtonLink, CtaBand, SectionHeader, Wrap } from "@/components/ui/primitives";
import {
  BreadcrumbJsonLd,
  ServicesJsonLd,
} from "@/components/seo/json-ld";
import { engagementModels, siteConfig, technologies } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Enterprise architecture, enterprise applications, modernization and integration, digital platforms and applied AI, delivered by one senior team.";

export const metadata: Metadata = {
  title: "Services",
  description: desc,
  keywords: [
    "solution architecture services",
    "custom software development",
    "legacy modernization services",
    "system integration services",
    "SaaS product development",
    "desktop application development",
    "cloud architecture consulting",
    "AI integration services",
  ],
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: { ...ogDefaults,
    title: `Services · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/services`,
  },
  twitter: { ...twitterDefaults,
    title: `Services · ${siteConfig.name}`,
    description: desc,
  },
};

export default function ServicesPage() {
  const techGroups = Array.from(new Set(technologies.map((t) => t.category))).map((cat) => ({
    cat,
    items: technologies.filter((t) => t.category === cat).map((t) => t.name),
  }));

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
        eyebrow="Services"
        title="Enterprise solutions, from architecture to operations."
        description="We help organizations decide what to build, modernize or integrate, then deliver and operate it, with the same senior team throughout."
        aside={
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/contact" variant="accent">Schedule a briefing</ButtonLink>
          </div>
        }
      />

      <ServicesDetail />
      <Capabilities />

      {/* Engagement models */}
      <section className="bg-paper-deep border-b border-line">
        <Wrap className="py-20 md:py-28">
          <SectionHeader
            eyebrow="Engagement models"
            title="Engagement models."
            intro="Structured around your scope, risk profile and governance requirements."
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-line-strong">
            {engagementModels.map((m) => (
              <li key={m.name} className="flex flex-col border-r border-b border-line-strong bg-paper p-8 md:p-10">
                <div className="eyebrow text-accent-ink">{m.price}</div>
                <h3 className="display mt-4 text-[1.75rem] text-ink">{m.name}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">{m.summary}</p>
                <div className="mt-8 border-t border-line pt-6">
                  <div className="eyebrow text-ink-mute mb-3">Best suited to</div>
                  <ul className="space-y-2">
                    {m.fits.map((f) => (
                      <li key={f} className="text-[15px] text-ink">{f}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <Approach />
      <Industries />

      {/* Technology */}
      <section className="border-b border-line">
        <Wrap className="py-20 md:py-28">
          <SectionHeader
            eyebrow="Technology"
            title="Proven, vendor-neutral technology."
            intro="Selected for longevity, security and fit with your existing technology estate."
          />
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-line pt-10">
            {techGroups.map((g) => (
              <div key={g.cat}>
                <dt className="eyebrow text-ink-mute">{g.cat}</dt>
                <dd className="mt-3 text-[16px] leading-relaxed text-ink">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Wrap>
      </section>

      <CtaBand />
    </>
  );
}
