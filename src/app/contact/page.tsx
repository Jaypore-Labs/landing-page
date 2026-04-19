import { Metadata } from "next";
import { ContactPageClient } from "./contact-client";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";

const desc =
  "Tell us about your AI idea. We reply within 24 hours, IST-friendly. Async-first — works across North America, Europe, Middle East, APAC.";

export const metadata: Metadata = {
  title: "Contact",
  description: desc,
  keywords: [
    "hire AI agency",
    "AI consulting contact",
    "AI software development India",
    "remote AI engineers",
  ],
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: `Contact · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/contact`,
  },
  twitter: {
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
