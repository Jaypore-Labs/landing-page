import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, CaseStudyJsonLd } from "@/components/seo/json-ld";
import { clip, ogDefaults, twitterDefaults } from "@/lib/seo";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { ArrowLink, CtaBand, Eyebrow, SectionHeader, Wrap } from "@/components/ui/primitives";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  const url = `${siteConfig.url}/portfolio/${cs.slug}`;
  const title = `${cs.title} Case Study`;
  const description = clip(cs.summary);
  return {
    title,
    description,
    keywords: [cs.sector, ...cs.services, "enterprise software case study"],
    alternates: { canonical: url },
    openGraph: { ...ogDefaults, title: `${title} · ${siteConfig.name}`, description, url, type: "article" },
    twitter: { ...twitterDefaults, title, description },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const related = [
    ...caseStudies.filter((c) => c.slug !== cs.slug && c.sector === cs.sector),
    ...caseStudies.filter((c) => c.slug !== cs.slug && c.sector !== cs.sector),
  ].slice(0, 3);

  const facts = [
    { k: "Client", v: cs.client },
    { k: "Sector", v: cs.sector },
    { k: "Services", v: cs.services.join(", ") },
    { k: "Technology", v: cs.technologies.join(", ") },
  ];

  return (
    <>
      <CaseStudyJsonLd cs={cs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/portfolio" },
          { name: cs.client, href: `/portfolio/${cs.slug}` },
        ]}
      />

      {/* Header */}
      <section className="border-b border-line">
        <Wrap className="pt-12 md:pt-16 pb-14 md:pb-20">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-ink-mute hover:text-ink transition-colors">
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
          <div className="mt-10 grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-12">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow className="mb-6">Case study · {cs.client}</Eyebrow>
              <h1 className="display-tight text-ink text-[clamp(2.25rem,4.6vw,4rem)]">{cs.headline}</h1>
              <p className="lede mt-7 max-w-2xl text-ink-soft">{cs.summary}</p>
            </div>
            <dl className="col-span-12 lg:col-span-3 lg:col-start-10 self-end divide-y divide-line border-t border-line-strong">
              {facts.map((f) => (
                <div key={f.k} className="py-4">
                  <dt className="eyebrow text-ink-mute">{f.k}</dt>
                  <dd className="mt-1.5 text-[15px] text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Wrap>
      </section>

      {cs.metric && (
        <section className="palette-classic bg-muted text-paper border-y border-line-inv">
          <Wrap className="py-14 md:py-16 flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
            <div className="display text-accent text-[clamp(3.5rem,8vw,6.5rem)] leading-none">{cs.metric.value}</div>
            <div className="text-lg text-paper md:pb-3">{cs.metric.label}</div>
          </Wrap>
        </section>
      )}

      {/* Body */}
      <section className="border-b border-line">
        <Wrap className="py-16 md:py-24">
          <div className="space-y-16 md:space-y-20">
            <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-5">
              <h2 className="col-span-12 lg:col-span-3 display text-[1.75rem] text-ink">The challenge</h2>
              <p className="col-span-12 lg:col-span-7 lg:col-start-5 text-[17px] md:text-lg leading-relaxed text-ink-soft">
                {cs.challenge}
              </p>
            </div>

            <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-5">
              <h2 className="col-span-12 lg:col-span-3 display text-[1.75rem] text-ink">Our approach</h2>
              <ol className="col-span-12 lg:col-span-7 lg:col-start-5 border-t border-line">
                {cs.approach.map((a, i) => (
                  <li key={a} className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-5">
                    <span className="text-sm text-ink-mute tabular-nums pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[17px] leading-relaxed text-ink">{a}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-5">
              <h2 className="col-span-12 lg:col-span-3 display text-[1.75rem] text-ink">The outcome</h2>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                <ul className="space-y-4">
                  {cs.outcomes.map((o) => (
                    <li key={o} className="flex gap-4 text-[17px] leading-relaxed text-ink">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="bg-paper-deep border-b border-line">
        <Wrap className="py-20 md:py-24">
          <SectionHeader
            eyebrow="Case studies"
            title="Related engagements"
            action={{ href: "/portfolio", label: "View all case studies" }}
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {related.map((c) => (
              <li key={c.slug}>
                <CaseStudyCard cs={c} />
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <CtaBand
        title="Facing a similar challenge?"
        body="Speak with a senior architect. We respond to every inquiry within one business day."
      />
    </>
  );
}
