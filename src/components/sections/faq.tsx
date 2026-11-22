import { Plus } from "lucide-react";
import { faq } from "@/data/site";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

/** FAQ accordion (native <details>). `limit` trims the list for the homepage. */
export function FaqSection({ limit, className = "" }: { limit?: number; className?: string }) {
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <section id="faq" className={`scroll-mt-20 border-b border-line ${className}`}>
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions."
          intro="What technology and procurement leaders usually ask before an engagement."
          action={limit ? { href: "/contact#faq", label: "All questions" } : undefined}
        />
        <div className="border-t border-line-strong">
          {items.map((item, i) => (
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
  );
}
