import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site";
import { ogDefaults, twitterDefaults } from "@/lib/seo";

const desc =
  "How Jaypore Labs collects, stores, and protects information shared via this site, our products, and client engagements.";

export const metadata: Metadata = {
  title: "Privacy",
  description: desc,
  alternates: { canonical: `${siteConfig.url}/privacy` },
  openGraph: { ...ogDefaults,
    title: `Privacy · ${siteConfig.name}`,
    description: desc,
    url: `${siteConfig.url}/privacy`,
  },
  twitter: { ...twitterDefaults,
    title: `Privacy · ${siteConfig.name}`,
    description: desc,
  },
};

const sections = [
  {
    h: "What this page covers",
    p: (
      <>
        This policy covers <strong>jayporelabs.com</strong>, the contact form on
        this site, and the data we receive when you email us or work with us on
        an engagement. If you have a question that isn&apos;t answered here,
        write to <a href={`mailto:${siteConfig.email}`} className="text-ink link-underline">{siteConfig.email}</a>.
      </>
    ),
  },
  {
    h: "What we collect on the site",
    p: (
      <>
        <strong>Contact form.</strong> Name, email, company (optional), and
        whatever you write in the message field. Stored in our Supabase
        database for as long as we&apos;re in conversation, then archived.
        <br />
        <br />
        <strong>Analytics.</strong> Anonymous page views and Core Web Vitals via{" "}
        Vercel Analytics and Google Analytics 4. No fingerprinting. No ad
        retargeting. We use this to know which articles people read, not who
        read them.
        <br />
        <br />
        <strong>Server logs.</strong> Standard request logs (IP, user-agent,
        timestamp) retained by our hosting provider for ≤ 30 days.
      </>
    ),
  },
  {
    h: "What we don't do",
    p: (
      <>
        We don&apos;t sell your data. We don&apos;t share it with advertisers.
        We don&apos;t run third-party trackers beyond the analytics tools above.
        We don&apos;t train AI models on inquiries or engagement data.
      </>
    ),
  },
  {
    h: "Cookies",
    p: (
      <>
        Vercel Analytics uses a single first-party cookie for session
        de-duplication. GA4 uses standard Google cookies if you have
        <code className="mono px-1.5 py-0.5 mx-1 bg-paper-deep text-ink text-sm">_ga</code>
        accepted in your browser. No marketing or advertising cookies are set
        by this site.
      </>
    ),
  },
  {
    h: "Client engagement data",
    p: (
      <>
        When you work with us, we sign an MSA + SOW that covers data handling
        for your project specifically. By default we treat all client data as
        confidential, store it in scoped repos, and delete it from our systems
        within 30 days of project closeout unless retention is contractually
        required for support.
      </>
    ),
  },
  {
    h: "Your rights",
    p: (
      <>
        You can ask us to (a) show you what we have on you, (b) correct
        anything wrong, or (c) delete it entirely. Email{" "}
        <a href={`mailto:${siteConfig.email}`} className="text-ink link-underline">{siteConfig.email}</a>{" "}
        with the subject &quot;data request&quot; and we reply within 7 days.
        For EU residents this is your GDPR right of access, rectification, and
        erasure. For California residents this is your CCPA right to know,
        correct, and delete.
      </>
    ),
  },
  {
    h: "Sub-processors",
    p: (
      <>
        We use <strong>Vercel</strong> (hosting, analytics),{" "}
        <strong>Supabase</strong> (form storage),{" "}
        <strong>Google Analytics</strong> (page views), and{" "}
        <strong>Resend</strong> (transactional email). All of them are bound by
        their own terms; we don&apos;t share data with anyone outside this list.
      </>
    ),
  },
  {
    h: "Changes",
    p: (
      <>
        If we change anything material we&apos;ll update the &quot;Last
        updated&quot; line below and, for active clients, drop you a note.
        That&apos;s it.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy", href: "/privacy" },
        ]}
      />
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        description={
          <>
            Short version: we don&apos;t sell data, we don&apos;t track you
            across the web, and you can ask us to delete anything we have.
            Below is the long version.
          </>
        }
      />

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 py-16 md:py-24">
          <div className="space-y-16">
            {sections.map((s) => (
              <div key={s.h} className="grid grid-cols-12 gap-y-8 gap-x-4 md:gap-x-8 items-start">
                <div className="col-span-12 md:col-span-4">
                  <h2 className="display text-[1.5rem] md:text-[1.75rem] text-ink">
                    {s.h}
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-8 text-ink-soft text-base md:text-[17px] leading-relaxed">
                  {s.p}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 flex items-center justify-between flex-wrap gap-4 pt-10 border-t border-line">
            <span className="text-sm text-ink-mute">
              Last updated · 2026-04-28
            </span>
            <Link
              href="/terms"
              className="text-[15px] font-medium text-ink link-underline"
            >
              Read the terms →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
