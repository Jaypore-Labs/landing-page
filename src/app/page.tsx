import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { ServicesGrid } from "@/components/sections/services-list";
import { Industries } from "@/components/sections/industries";
import { CaseStudyCards } from "@/components/sections/selected-work";
import { Approach } from "@/components/sections/approach";
import { Insights } from "@/components/sections/insights";
import { Principles } from "@/components/sections/principles";
import { FaqSection } from "@/components/sections/faq";
import { CtaBand } from "@/components/ui/primitives";
import {
  ProfessionalServiceJsonLd,
  ServicesJsonLd,
} from "@/components/seo/json-ld";

export default function HomePage() {
  return (
    <>
      <ProfessionalServiceJsonLd />
      <ServicesJsonLd />
      <Hero />
      <Solutions />
      <ServicesGrid />
      <CaseStudyCards />
      <Approach />
      <Industries />
      <Principles />
      <FaqSection limit={5} />
      <Insights />
      <CtaBand />
    </>
  );
}
