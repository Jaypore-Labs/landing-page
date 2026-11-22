import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Solutions } from "@/components/sections/solutions";
import { Approach } from "@/components/sections/approach";
import { CtaBand, ButtonLink } from "@/components/ui/primitives";
import { BreadcrumbJsonLd, SolutionsJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Enterprise solutions: architecture assessment, legacy modernization, systems integration, application delivery, applied AI and managed engineering.";

export const metadata: Metadata = {
  title: "Solutions",
  description: desc,
  keywords: [
    "enterprise software solutions",
    "architecture assessment",
    "legacy modernization program",
    "enterprise systems integration",
    "enterprise application development",
    "managed engineering services",
  ],
  alternates: { canonical: `${siteConfig.url}/solutions` },
  openGraph: { ...ogDefaults, title: `Solutions · ${siteConfig.name}`, description: desc, url: `${siteConfig.url}/solutions` },
  twitter: { ...twitterDefaults, title: `Solutions · ${siteConfig.name}`, description: desc },
};

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Solutions", href: "/solutions" },
        ]}
      />
      <SolutionsJsonLd />
      <PageHero
        eyebrow="Solutions"
        title="Enterprise solutions with clear scope, timelines and accountability."
        description="Start with an architecture assessment, or go straight to the program you need. Every solution is delivered by a senior team that stays accountable through production."
        aside={
          <ButtonLink href="/contact" variant="accent">
            Schedule a briefing
          </ButtonLink>
        }
      />
      <Solutions detailed />
      <Approach />
      <CtaBand />
    </>
  );
}
