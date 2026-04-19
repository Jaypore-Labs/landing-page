import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Clients } from "@/components/sections/clients";
import { BigStatement } from "@/components/sections/big-statement";
import { Capabilities } from "@/components/sections/capabilities";
import { ServicesList } from "@/components/sections/services-list";
import { Industries } from "@/components/sections/industries";
import { TestimonialQuote } from "@/components/sections/testimonial-quote";

const marqueeLine = [
  "Ship AI",
  "Ship fast",
  "Ship friendly",
  "Built to last",
  "AI-first",
  "Independent",
  "Deep craft",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Marquee words={marqueeLine} size="xl" speed="normal" />
      <BigStatement />
      <Capabilities />
      <ServicesList />
      <Industries />
      <TestimonialQuote />
      <Marquee
        words={[
          "Booking AI projects — Q2 2026",
          "Ship AI the friendly way",
          "Hello from India",
        ]}
        size="lg"
        reverse
        speed="slow"
      />
    </>
  );
}
