"use client";

type MarqueeProps = {
  words: string[];
  accentEvery?: number;
  size?: "md" | "lg" | "xl";
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
};

export function Marquee({
  words,
  accentEvery = 2,
  size = "xl",
  reverse = false,
  speed = "normal",
  className = "",
}: MarqueeProps) {
  const copies = [...words, ...words, ...words, ...words];

  const sizeClass =
    size === "xl"
      ? "text-[clamp(3rem,10vw,9rem)]"
      : size === "lg"
      ? "text-[clamp(2rem,6vw,5rem)]"
      : "text-[clamp(1.25rem,3vw,2.5rem)]";

  const speedClass =
    speed === "slow" ? "slow" : speed === "fast" ? "fast" : "";
  const track = reverse ? "marquee-reverse" : "marquee-track";

  return (
    <section
      className={`relative overflow-hidden border-y border-line bg-ink py-8 md:py-12 ${className}`}
    >
      <div className={`flex whitespace-nowrap ${track} ${speedClass}`}>
        {copies.map((w, i) => (
          <span
            key={i}
            className={`display-tight px-8 ${sizeClass} ${
              i % accentEvery === 0 ? "text-paper" : "text-paper/20"
            }`}
          >
            {w}
            <span className="mx-8 text-accent align-middle">✺</span>
          </span>
        ))}
      </div>
    </section>
  );
}
