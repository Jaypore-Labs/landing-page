import { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CaseStudyIndex } from "@/components/sections/selected-work";
import { Industries } from "@/components/sections/industries";
import { CtaBand, StatsRow, Wrap, companyStats } from "@/components/ui/primitives";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { caseStudies } from "@/data/case-studies";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Enterprise case studies across healthcare, consumer technology and research: the business problem, the solution architecture and the outcome in production.";

export const metadata: Metadata = {
  title: "Case studies",
  description: desc,
  keywords: [
    "software development case studies",
    "healthcare software case study",
    "desktop application case study",
    "software architecture examples",
    "custom software portfolio",
  ],
  alternates: { canonical: `${siteConfig.url}/portfolio` },
  openGraph: { ...ogDefaults,
    title: `Case studies · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/portfolio`,
  },
  twitter: { ...twitterDefaults,
    title: `Case studies · ${siteConfig.name}`,
    description: desc,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/portfolio" },
        ]}
      />
      <PageHero
        eyebrow="Case studies"
        title="Selected engagements."
        description={`${caseStudies.length} engagements across healthcare, consumer technology and research. Client names are withheld. Each study covers the business problem, the solution architecture and the outcome in production.`}
      />

      <CaseStudyIndex />

      <section className="border-b border-line">
        <Wrap className="py-16 md:py-20">
          <StatsRow stats={companyStats} />
        </Wrap>
      </section>

      <Industries />

      <CtaBand
        title="Planning something similar?"
        body="Speak with a senior architect about your systems and objectives. We respond to every inquiry within one business day."
      />
    </>
  );
}
