import { siteConfig, services, faq } from "@/data/site";
import { solutions } from "@/data/solutions";
import type { Industry } from "@/data/industries";
import type { CaseStudy } from "@/data/case-studies";

const LOGO = {
  "@type": "ImageObject",
  url: `${siteConfig.url}/logo.png`,
  width: 512,
  height: 512,
};

function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    alternateName: "Jaypore",
    legalName: siteConfig.name,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    logo: LOGO,
    image: `${siteConfig.url}/opengraph-image`,
    email: siteConfig.email,
    foundingDate: "2017",
    founders: [
      {
        "@type": "Person",
        name: siteConfig.founder.name,
        jobTitle: siteConfig.founder.role,
        url: siteConfig.founder.linkedin,
        sameAs: [siteConfig.founder.github, siteConfig.founder.linkedin],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: siteConfig.regions.map((r) => ({ "@type": "Place", name: r })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "sales",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    knowsAbout: [
      "Software architecture",
      "Custom software development",
      "Legacy modernization",
      "System integration",
      "Cloud infrastructure",
      "Healthcare software",
      "Desktop applications",
      "AI integration",
      "Next.js",
      "Electron",
      "SaaS development",
    ],
  };
  return <JsonLd data={data} />;
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about#person`,
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    description:
      "Founder of Jaypore Labs. 8+ years designing and building software for global brands, clinics in Europe, and ambitious founders.",
    url: `${siteConfig.url}/about`,
    worksFor: { "@id": `${siteConfig.url}#organization` },
    sameAs: [siteConfig.founder.github, siteConfig.founder.linkedin],
    knowsAbout: [
      "Software architecture",
      "System integration",
      "Next.js",
      "React",
      "Electron",
      "Healthcare software",
      "SaaS",
      "LLM integration",
    ],
  };
  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}#organization` },
    inLanguage: "en",
  };
  return <JsonLd data={data} />;
}

export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    priceRange: "$$$",
    logo: LOGO,
    image: `${siteConfig.url}/opengraph-image`,
    areaServed: siteConfig.regions,
    serviceType: services.map((s) => s.title),
    parentOrganization: { "@id": `${siteConfig.url}#organization` },
  };
  return <JsonLd data={data} />;
}

export function ServicesJsonLd() {
  const data = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services#${s.id}`,
    name: s.title,
    description: s.description,
    serviceType: s.title,
    provider: { "@id": `${siteConfig.url}#organization` },
    areaServed: siteConfig.regions,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.title} — features`,
      itemListElement: s.features.map((f, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: f },
      })),
    },
  }));
  return <JsonLd data={data} />;
}

export function FAQJsonLd({ items }: { items?: { q: string; a: string }[] } = {}) {
  const list = items ?? faq.map((f) => ({ q: f.question, a: f.answer }));
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return <JsonLd data={data} />;
}

type Crumb = { name: string; href: string };

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
  return <JsonLd data={data} />;
}

type ArticleInput = {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  tags: string[];
};

export function ArticleJsonLd({ article }: { article: ArticleInput }) {
  const url = `${siteConfig.url}/blog/${article.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    keywords: article.tags.join(", "),
    author: {
      "@type": "Person",
      name: article.author,
      url: siteConfig.founder.linkedin,
    },
    publisher: { "@id": `${siteConfig.url}#organization` },
    image: `${siteConfig.url}/opengraph-image`,
  };
  return <JsonLd data={data} />;
}

/** /solutions — the packaged offers as an OfferCatalog of Services. */
export function SolutionsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}/solutions#catalog`,
    name: `${siteConfig.name} enterprise solutions`,
    url: `${siteConfig.url}/solutions`,
    itemListElement: solutions.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        "@id": `${siteConfig.url}/solutions#${s.id}`,
        name: s.name,
        description: `${s.headline} ${s.summary}`,
        provider: { "@id": `${siteConfig.url}#organization` },
        areaServed: siteConfig.regions,
        audience: { "@type": "BusinessAudience", name: s.bestFor },
      },
    })),
  };
  return <JsonLd data={data} />;
}

/** Industry landing page — the sector service plus its FAQ. */
export function IndustryJsonLd({ industry }: { industry: Industry }) {
  const url = `${siteConfig.url}/industries/${industry.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Enterprise software for ${industry.name}`,
    description: industry.lede,
    url,
    serviceType: industry.useCases.map((u) => u.h),
    provider: { "@id": `${siteConfig.url}#organization` },
    areaServed: siteConfig.regions,
    audience: { "@type": "BusinessAudience", audienceType: industry.name },
  };
  return (
    <>
      <JsonLd data={data} />
      <FAQJsonLd items={industry.faq} />
    </>
  );
}

/** Case study detail — an Article about an anonymised engagement. */
export function CaseStudyJsonLd({ cs }: { cs: CaseStudy }) {
  const url = `${siteConfig.url}/portfolio/${cs.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: cs.headline,
    description: cs.summary,
    articleSection: "Case studies",
    about: cs.services.map((name) => ({ "@type": "Thing", name })),
    keywords: [cs.sector, ...cs.services, ...cs.technologies].join(", "),
    author: { "@id": `${siteConfig.url}#organization` },
    publisher: { "@id": `${siteConfig.url}#organization` },
    image: `${siteConfig.url}/opengraph-image`,
  };
  return <JsonLd data={data} />;
}
