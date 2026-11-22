import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Plus } from "lucide-react";
import { getIndustry, industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, IndustryJsonLd } from "@/components/seo/json-ld";
import { clip, ogDefaults, twitterDefaults } from "@/lib/seo";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Approach } from "@/components/sections/approach";
import { ContactForm } from "@/app/contact/contact-client";
import { ButtonLink, Eyebrow, SectionHeader, Wrap } from "@/components/ui/primitives";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry not found" };
  const url = `${siteConfig.url}/industries/${ind.slug}`;
  const title = `Enterprise Software for ${ind.name}`;
  return {
    title,
    description: clip(ind.lede),
    keywords: ind.keywords,
    alternates: { canonical: url },
    openGraph: { ...ogDefaults, title: `${title} · ${siteConfig.name}`, description: clip(ind.lede), url },
    twitter: { ...twitterDefaults, title, description: clip(ind.lede) },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const related = (ind.caseStudies ?? [])
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <>
      <IndustryJsonLd industry={ind} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: ind.name, href: `/industries/${ind.slug}` },
        ]}
      />

      {/* Hero — matched to the ad */}
      <section className="palette-classic bg-ink text-paper">
        <Wrap className="pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-14 items-end">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow tone="dark" className="mb-8 rise">{ind.name}</Eyebrow>
              <h1 className="display-tight text-paper text-[clamp(2.75rem,5.6vw,5.25rem)] rise rise-1">
                {ind.headline}
              </h1>
              <p className="lede mt-8 max-w-xl text-paper/80 rise rise-2">{ind.lede}</p>
              <div className="mt-10 flex flex-wrap gap-3 rise rise-3">
                <ButtonLink href="#consultation" variant="accent">
                  Schedule a briefing
                </ButtonLink>
                <ButtonLink href="#use-cases" variant="outline-inv">
                  Our solutions
                </ButtonLink>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 rise rise-2">
              <div className="border-t-[3px] border-accent bg-muted p-7 md:p-8">
                <div className="eyebrow text-paper-dim mb-5">Business outcomes</div>
                <ul className="space-y-4">
                  {ind.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-[16px] leading-snug text-paper">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      {/* Challenges */}
      <section className="border-b border-line">
        <Wrap className="py-20 md:py-28">
          <SectionHeader
            eyebrow="The challenge"
            title={`Common challenges in ${ind.name.toLowerCase()}.`}
          />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {ind.challenges.map((c, i) => (
              <li key={c.h} className="border-t border-line-strong pt-7">
                <span className="text-sm text-ink-mute tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-4 text-[1.5rem] text-ink">{c.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{c.b}</p>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="scroll-mt-20 bg-paper-deep border-b border-line">
        <Wrap className="py-20 md:py-28">
          <SectionHeader
            eyebrow="Solutions"
            title="Solutions we deliver."
            intro="We prioritize by business value and risk, take the first release into production, then scale across the organization."
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {ind.useCases.map((u) => (
              <li key={u.h} className="border-t border-line-strong pt-7">
                <h3 className="display text-[1.375rem] text-ink">{u.h}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{u.b}</p>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      {/* Safeguards */}
      <section className="border-b border-line">
        <Wrap className="py-20 md:py-24">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-10 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow className="mb-5">Governance</Eyebrow>
              <h2 className="display text-[clamp(2rem,3.4vw,3rem)] text-ink">
                Security, compliance and resilience by design.
              </h2>
            </div>
            <ul className="col-span-12 lg:col-span-6 lg:col-start-7 border-t border-line">
              {ind.safeguards.map((s) => (
                <li key={s} className="flex gap-4 border-b border-line py-5 text-[17px] text-ink">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      <Approach />

      {related.length > 0 && (
        <section className="border-b border-line">
          <Wrap className="py-20 md:py-28">
            <SectionHeader
              eyebrow="Related work"
              title="Related case studies"
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
      )}

      {/* FAQ */}
      <section className="border-b border-line">
        <Wrap className="py-20 md:py-24">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="border-t border-line-strong">
            {ind.faq.map((f, i) => (
              <details key={f.q} className="group border-b border-line-strong" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
                  <span className="display text-[1.25rem] md:text-[1.5rem] text-ink">{f.q}</span>
                  <Plus className="h-5 w-5 shrink-0 text-ink transition-transform group-open:rotate-45" />
                </summary>
                <p className="pb-8 max-w-3xl text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </section>

      {/* Conversion */}
      <section id="consultation" className="scroll-mt-20 bg-paper-deep">
        <Wrap className="py-20 md:py-28">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow className="mb-5">Executive briefing</Eyebrow>
              <h2 className="display text-[clamp(2rem,3.4vw,3rem)] text-ink">
                Discuss your {ind.name.toLowerCase()} systems with a senior architect.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                Share your objectives and current systems landscape. A senior
                architect will respond within one business day with an initial
                perspective and proposed next steps.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 bg-paper p-7 md:p-10">
              <ContactForm industry={ind.slug} />
            </div>
          </div>
        </Wrap>
      </section>
    </>
  );
}
