import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Industries } from "@/components/sections/industries";
import { Marquee } from "@/components/sections/marquee";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { portfolio, siteConfig } from "@/data/site";

const desc =
  "Selected AI-enabled software — healthcare scribes, voice assistants, clinic OS, productivity SaaS — shipped with Logitech, Luxembourg clinics, and ambitious founders.";

export const metadata: Metadata = {
  title: "Work",
  description: desc,
  keywords: [
    "AI software case studies",
    "AI healthcare software",
    "Electron AI apps",
    "AI scribe examples",
    "voice AI case study",
    "Logitech software partner",
  ],
  alternates: { canonical: `${siteConfig.url}/portfolio` },
  openGraph: {
    title: `Work · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/portfolio`,
  },
  twitter: {
    title: `Work · ${siteConfig.name}`,
    description: desc,
  },
};

export default function PortfolioPage() {
  const more = portfolio.filter((p) => !p.featured);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/portfolio" },
        ]}
      />
      <PageHero
        eyebrow="Work archive"
        title={
          <>
            AI-enabled software,
            <br />
            <span className="italic font-medium text-accent">in production.</span>
          </>
        }
        description="Every project below shipped. Many are still in active development — used by doctors, founders, and enterprise teams putting AI to work every day."
      />

      <SelectedWork />

      {/* Archive grid — text-only, no images */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  Also in the vault
                </span>
              </div>
              <h2 className="display-tight text-paper text-[clamp(2rem,5vw,4rem)]">
                More things we&apos;ve
                <br />
                <span className="italic font-medium text-accent">put out there.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border-t border-line">
            {more.map((p, i) => {
              const accent = (p as { accent?: string }).accent ?? "#FF4D1F";
              return (
                <article
                  key={p.id}
                  className="group relative bg-ink p-6 md:p-8 flex flex-col min-h-[360px] overflow-hidden"
                >
                  {/* Accent glow */}
                  <div
                    aria-hidden
                    className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-70"
                    style={{
                      background: `radial-gradient(60% 60% at 50% 50%, ${accent}40, transparent 70%)`,
                    }}
                  />

                  <div className="relative flex items-center justify-between mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mb-8">
                    <span className="flex items-center gap-2">
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: accent }}
                      />
                      {p.category}
                    </span>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <h3
                    className="relative display-tight text-[clamp(2rem,5vw,3.5rem)] leading-[0.9] mb-4"
                    style={{ color: accent }}
                  >
                    {p.title}
                  </h3>

                  {p.client && (
                    <div className="relative mono text-[10px] uppercase tracking-[0.22em] text-paper mb-5">
                      <span className="text-paper-dim">Client ·</span> {p.client}
                    </div>
                  )}

                  <p className="relative text-paper-dim text-sm leading-relaxed mb-6 flex-1">
                    {p.shortDescription}
                  </p>

                  <div className="relative flex flex-wrap gap-1.5 mb-2">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-line text-paper-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-ink/60 text-paper opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:text-ink group-hover:border-accent transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <Industries />

      {/* Stats band */}
      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { v: "50+", k: "Products shipped" },
              { v: "30+", k: "Happy clients" },
              { v: "10+", k: "Countries served" },
              { v: "100%", k: "Still talking to us" },
            ].map((s) => (
              <div key={s.k} className="border-t border-line-strong pt-6">
                <div className="display-tight text-paper text-[clamp(3rem,7vw,5rem)] leading-none">
                  {s.v}
                </div>
                <div className="mt-3 mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        words={["AI-enabled · Industry-first · Friendly", "In production since 2017"]}
        size="lg"
        speed="slow"
      />
    </>
  );
}
