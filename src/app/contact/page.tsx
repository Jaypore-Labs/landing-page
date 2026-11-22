import { Metadata } from "next";
import { ContactPageClient } from "./contact-client";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "Speak with a senior architect about enterprise architecture, modernization, systems integration or a new platform. We respond within one business day.";

export const metadata: Metadata = {
  title: "Contact",
  description: desc,
  keywords: [
    "hire software development company",
    "software architecture consultation",
    "software development India",
    "remote senior engineers",
  ],
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: { ...ogDefaults,
    title: `Contact · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/contact`,
  },
  twitter: { ...twitterDefaults,
    title: `Contact · ${siteConfig.name}`,
    description: desc,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <FAQJsonLd />
      <ContactPageClient />
    </>
  );
}
