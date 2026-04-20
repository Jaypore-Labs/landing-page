import { siteConfig, services, faq } from "@/data/site";

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
    logo: `${siteConfig.url}/opengraph-image`,
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
      "AI-enabled software",
      "AI integration",
      "AI adoption consulting",
      "Healthcare AI",
      "Legal AI",
      "Voice AI",
      "AI agents",
      "RAG systems",
      "AI scribes",
      "MCP servers",
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
      "Founder of Jaypore Labs. 8+ years building AI-enabled software for global brands, clinics in Europe, and ambitious founders.",
    url: `${siteConfig.url}/about`,
    worksFor: { "@id": `${siteConfig.url}#organization` },
    sameAs: [siteConfig.founder.github, siteConfig.founder.linkedin],
    knowsAbout: [
      "AI-enabled software",
      "AI integration",
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

export function FAQJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
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
