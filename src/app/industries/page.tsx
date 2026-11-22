import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { CtaBand, Wrap } from "@/components/ui/primitives";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Enterprise software for healthcare, financial services, insurance, legal, manufacturing, logistics, retail and education, built around each sector's systems.";

export const metadata: Metadata = {
  title: "Industries",
  description: desc,
  alternates: { canonical: `${siteConfig.url}/industries` },
  openGraph: { ...ogDefaults, title: `Industries · ${siteConfig.name}`, description: desc, url: `${siteConfig.url}/industries` },
  twitter: { ...twitterDefaults, title: `Industries · ${siteConfig.name}`, description: desc },
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
        ]}
      />
      <PageHero
        eyebrow="Industries"
        title="Industry solutions."
        description="Enterprise solutions designed around each sector's core systems, regulations and operating models."
      />
      <section className="border-b border-line">
        <Wrap className="py-16 md:py-24">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex items-start justify-between gap-8 border-t border-line-strong py-8"
                >
                  <div>
                    <h2 className="display text-[1.75rem] text-ink group-hover:text-accent-ink transition-colors">
                      {ind.name}
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{ind.short}</p>
                  </div>
                  <ArrowRight className="mt-3 h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>
      <CtaBand />
    </>
  );
}
