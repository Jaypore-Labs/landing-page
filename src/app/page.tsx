import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Clients } from "@/components/sections/clients";
import { BigStatement } from "@/components/sections/big-statement";
import { Capabilities } from "@/components/sections/capabilities";
import { ServicesList } from "@/components/sections/services-list";
import { Industries } from "@/components/sections/industries";
import { TestimonialQuote } from "@/components/sections/testimonial-quote";
import {
  ProfessionalServiceJsonLd,
  ServicesJsonLd,
} from "@/components/seo/json-ld";

const marqueeLine = [
  "AI-enabled software",
  "Industry-first",
  "Ship friendly",
  "Built to last",
  "Weekly demos",
  "Deep craft",
  "Independent",
];

export default function HomePage() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <ServicesJsonLd />
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
          "Bringing AI to your business",
          "Hello from India",
        ]}
        size="lg"
        reverse
        speed="slow"
      />
    </>
  );
}
