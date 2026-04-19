import { Metadata } from "next";
import { ContactPageClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We reply within 24 hours, IST friendly.",
  openGraph: {
    title: "Contact · Jaypore Labs",
    description:
      "Tell us about your project. We reply within 24 hours, IST friendly.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
