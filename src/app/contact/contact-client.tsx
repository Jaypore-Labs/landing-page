"use client";

import { useState } from "react";
import { ArrowUpRight, Calendar, ChevronDown, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "@/components/layout/page-hero";
import { siteConfig, faq } from "@/data/site";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink mx-auto mb-6">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="display text-3xl text-paper mb-2">Message in flight.</h3>
        <p className="text-paper-dim max-w-sm mx-auto mb-6">
          We&apos;ll reply within 24 hours, IST friendly. In the meantime, scroll
          around.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mono text-[11px] uppercase tracking-[0.22em] text-paper hover:text-accent transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {[
        { id: "name", label: "Your name", type: "text", required: true, placeholder: "Jane Founder" },
        { id: "email", label: "Email", type: "email", required: true, placeholder: "jane@company.com" },
        { id: "company", label: "Company", type: "text", required: false, placeholder: "Optional" },
      ].map((f) => (
        <div
          key={f.id}
          className="border-b border-line-strong py-3 flex items-center gap-4"
        >
          <label
            htmlFor={f.id}
            className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-28 md:w-36 shrink-0"
          >
            {f.label}
            {f.required && <span className="text-accent">*</span>}
          </label>
          <input
            id={f.id}
            type={f.type}
            required={f.required}
            value={formData[f.id as keyof typeof formData]}
            onChange={(e) =>
              setFormData({ ...formData, [f.id]: e.target.value })
            }
            className="flex-1 bg-transparent text-paper placeholder:text-paper/30 focus:outline-none py-2"
            placeholder={f.placeholder}
          />
        </div>
      ))}

      <div className="border-b border-line-strong py-3 flex items-center gap-4">
        <label
          htmlFor="budget"
          className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-28 md:w-36 shrink-0"
        >
          Budget
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="flex-1 bg-transparent text-paper focus:outline-none py-2"
        >
          <option className="bg-ink" value="">—</option>
          <option className="bg-ink" value="5-15">$5K — $15K</option>
          <option className="bg-ink" value="15-50">$15K — $50K</option>
          <option className="bg-ink" value="50-100">$50K — $100K</option>
          <option className="bg-ink" value="100+">$100K+</option>
        </select>
      </div>

      <div className="border-b border-line-strong py-3 flex items-start gap-4">
        <label
          htmlFor="message"
          className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-28 md:w-36 shrink-0 pt-3"
        >
          Project<span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="flex-1 bg-transparent text-paper placeholder:text-paper/30 focus:outline-none py-2 resize-none"
          placeholder="What are you building? What are you stuck on? Timeline?"
        />
      </div>

      <div className="pt-8">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-ink text-sm font-medium hover:bg-accent-deep transition-colors disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Send message"}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </form>
  );
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-t border-line">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-4 md:gap-6 flex-1 min-w-0">
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-lg md:text-2xl text-paper group-hover:text-accent transition-colors">
                  {item.question}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:border-accent shrink-0"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pl-12 md:pl-[4.5rem] pr-6 text-paper-dim leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

export function ContactPageClient() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Tell us about
            <br />
            <span className="italic font-medium text-accent">the idea.</span>
          </>
        }
        description="We read every email. Reply within 24 hours. If it's a fit, we'll send a short brief and a call link. If it's not, we'll tell you who is."
      />

      <section className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40 grid grid-cols-12 gap-10">
          <aside className="col-span-12 md:col-span-4 space-y-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group block rounded-2xl border border-line hover:border-accent bg-muted/40 p-6 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mb-1">
                    Email
                  </div>
                  <div className="text-paper font-medium group-hover:text-accent transition-colors truncate">
                    {siteConfig.email}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-paper-dim group-hover:text-accent transition-colors" />
              </div>
            </a>

            <div className="rounded-2xl border border-line bg-muted/40 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mb-1">
                    Based
                  </div>
                  <div className="text-paper font-medium">
                    {siteConfig.location} · Remote-worldwide
                  </div>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.founder.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-line hover:border-accent bg-muted/40 p-6 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mb-1">
                    Long-form
                  </div>
                  <div className="text-paper font-medium group-hover:text-accent transition-colors">
                    Message on Upwork
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-paper-dim group-hover:text-accent transition-colors" />
              </div>
            </a>

            <div
              id="schedule"
              className="rounded-2xl border border-line bg-muted/40 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Calendar className="w-4 h-4" />
                </span>
                <div>
                  <div className="mono text-[10px] uppercase tracking-[0.22em] text-paper-dim mb-1">
                    Talk live
                  </div>
                  <div className="text-paper font-medium">30-min intro call</div>
                  <div className="mono text-[11px] text-paper-dim mt-1">
                    We&apos;ll send a link after your email
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-8">
            <div className="rounded-2xl border border-line bg-muted/30 p-6 md:p-10">
              <div className="mb-8">
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim mb-3">
                  The form
                </div>
                <h2 className="display-tight text-paper text-[clamp(1.75rem,3.5vw,2.75rem)]">
                  Send us a brief.
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative bg-ink border-b border-line">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10 py-24 md:py-40">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-paper-dim">
                  The questions
                </span>
              </div>
              <h2 className="display-tight text-paper text-[clamp(2.25rem,6vw,5rem)]">
                Asked,
                <br />
                <span className="italic font-medium text-accent">answered.</span>
              </h2>
            </div>
          </div>
          <FAQList />
        </div>
      </section>
    </>
  );
}
