"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Eyebrow, SectionHeader, Wrap } from "@/components/ui/primitives";
import { siteConfig, faq } from "@/data/site";
import { submitInquiry } from "./actions";

const emptyForm = { name: "", email: "", company: "", budget: "", message: "" };

const fieldClass =
  "mt-2 block w-full border border-line-strong bg-paper-light px-4 py-3 text-[16px] text-ink placeholder:text-ink-mute/70 focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
      {children}
      {required ? <span className="text-accent-ink"> *</span> : <span className="text-ink-mute font-normal"> (optional)</span>}
    </label>
  );
}

export function ContactForm({ industry }: { industry?: string } = {}) {
  const [formData, setFormData] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await submitInquiry(
        industry ? { ...formData, source: `industry-page:${industry}` } : formData
      );
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(res.message);
      }
    } catch {
      setError(`Something went wrong. Please email us directly at ${siteConfig.email}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="border border-line bg-paper-light p-10" role="status">
        <CheckCircle2 className="h-8 w-8 text-accent" />
        <h3 className="display mt-5 text-[1.75rem] text-ink">Thank you. Your inquiry has been received.</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
          A senior architect will respond within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData(emptyForm);
          }}
          className="mt-6 text-[15px] font-medium text-ink link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
      <div>
        <Label htmlFor="name" required>Full name</Label>
        <input id="name" type="text" required autoComplete="name" value={formData.name} onChange={set("name")} className={fieldClass} />
      </div>
      <div>
        <Label htmlFor="email" required>Work email</Label>
        <input id="email" type="email" required autoComplete="email" value={formData.email} onChange={set("email")} className={fieldClass} />
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <input id="company" type="text" autoComplete="organization" value={formData.company} onChange={set("company")} className={fieldClass} />
      </div>
      <div>
        <Label htmlFor="budget">Program budget</Label>
        <select id="budget" value={formData.budget} onChange={set("budget")} className={fieldClass}>
          <option value="">Select a range</option>
          <option value="under-100k">Under $100K</option>
          <option value="100k-250k">$100K – $250K</option>
          <option value="250k-1m">$250K – $1M</option>
          <option value="1m+">$1M+</option>
          <option value="undefined">Not yet defined</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message" required>Objectives and current landscape</Label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={set("message")}
          className={`${fieldClass} resize-y`}
          placeholder="Briefly describe the initiative, the systems involved, and your timeline."
        />
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-[15px] font-medium text-paper hover:bg-ink-soft transition-colors disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Submit inquiry"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="text-sm text-ink-mute">
          We use your details only to respond to this inquiry. See our{" "}
          <a href="/privacy" className="link-underline text-ink">privacy policy</a>.
        </p>
        {error && (
          <p role="alert" className="w-full text-sm text-accent-ink">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

const nextSteps = [
  { h: "Inquiry review", b: "A senior architect reviews your inquiry and responds within one business day." },
  { h: "Discovery call", b: "A 30-minute conversation on objectives, current landscape, constraints and timeline." },
  { h: "Proposal", b: "A written proposal covering approach, architecture, team, timeline and commercial model." },
];

export function ContactPageClient() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Speak with a senior architect."
        description="Share your objectives and current systems landscape. We respond to every inquiry within one business day."
      />

      <section className="border-b border-line">
        <Wrap className="py-16 md:py-24">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-12 gap-y-14">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="display text-[1.75rem] text-ink mb-8">Request a briefing</h2>
              <ContactForm />
            </div>

            <aside className="col-span-12 lg:col-span-4 lg:col-start-9 space-y-10">
              <div>
                <Eyebrow className="mb-5">What happens next</Eyebrow>
                <ol className="space-y-6">
                  {nextSteps.map((s, i) => (
                    <li key={s.h} className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="display text-xl text-accent-ink leading-none pt-0.5">{i + 1}</span>
                      <div>
                        <div className="text-[16px] font-medium text-ink">{s.h}</div>
                        <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-line pt-8">
                <Eyebrow className="mb-5">Direct contact</Eyebrow>
                <dl className="space-y-4 text-[15px]">
                  <div>
                    <dt className="text-ink-mute text-sm">Email</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${siteConfig.email}`} className="text-ink link-underline">
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-mute text-sm">Headquarters</dt>
                    <dd className="mt-1 text-ink">{siteConfig.location} · working with clients worldwide</dd>
                  </div>
                  <div>
                    <dt className="text-ink-mute text-sm">LinkedIn</dt>
                    <dd className="mt-1">
                      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink link-underline">
                        Jaypore Labs
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Wrap>
      </section>

      <section id="faq" className="bg-paper-deep border-b border-line">
        <Wrap className="py-20 md:py-28">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
          <div className="border-t border-line-strong">
            {faq.map((item, i) => (
              <details key={item.question} className="group border-b border-line-strong" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6">
                  <span className="display text-[1.25rem] md:text-[1.5rem] text-ink">{item.question}</span>
                  <Plus className="h-5 w-5 shrink-0 text-ink transition-transform group-open:rotate-45" />
                </summary>
                <p className="pb-8 max-w-3xl text-[16px] leading-relaxed text-ink-soft">{item.answer}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
