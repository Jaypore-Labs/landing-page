import { Eyebrow, Wrap } from "@/components/ui/primitives";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional right-hand column (key facts, actions). */
  aside?: React.ReactNode;
  /** Kept for API compatibility; heroes are always left-aligned. */
  align?: "left" | "center";
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="border-b border-line">
      <Wrap className="pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow className="mb-6 rise">{eyebrow}</Eyebrow>
            <h1 className="display-tight text-ink text-[clamp(2.5rem,5.2vw,4.75rem)] rise rise-1">
              {title}
            </h1>
            {description && (
              <p className="lede mt-7 text-ink-soft max-w-2xl rise rise-2">{description}</p>
            )}
          </div>
          {aside && (
            <div className="col-span-12 lg:col-span-4 rise rise-3">{aside}</div>
          )}
        </div>
      </Wrap>
    </section>
  );
}
