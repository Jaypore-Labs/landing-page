import Link from "next/link";
import { siteConfig } from "@/data/site";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import { Wordmark } from "./wordmark";
import { Wrap } from "@/components/ui/primitives";

const columns = [
  {
    title: "Solutions",
    links: solutions.map((s) => ({ name: s.name, href: `/solutions#${s.id}` })),
  },
  {
    title: "Industries",
    links: industries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })),
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case studies", href: "/portfolio" },
      { name: "Insights", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "LinkedIn", href: siteConfig.social.linkedin, external: true },
      { name: "GitHub", href: siteConfig.social.github, external: true },
      { name: "X / Twitter", href: siteConfig.social.twitter, external: true },
      { name: siteConfig.email, href: `mailto:${siteConfig.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="palette-classic bg-ink-deep text-paper border-t border-line-inv">
      <Wrap className="pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 pb-14 border-b border-line-inv">
          <div className="col-span-12 lg:col-span-4">
            <Link href="/" aria-label="Jaypore Labs home">
              <Wordmark tone="dark" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper-dim">
              Enterprise software architecture and engineering. We help
              organizations design, modernize and integrate the systems they
              run on. Since 2017.
            </p>
            <p className="mt-6 text-sm text-paper-dim">
              Headquartered in {siteConfig.location}. Serving clients in{" "}
              {siteConfig.regions.join(", ")}.
            </p>
          </div>

          {columns.map((col) => (
            <div
              key={col.title}
              className="col-span-6 sm:col-span-3 lg:col-span-2"
            >
              <h3 className="eyebrow text-paper-dim mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.name}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] text-paper/90 hover:text-accent transition-colors"
                      >
                        {l.name}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[15px] text-paper/90 hover:text-accent transition-colors break-all sm:break-normal"
                      >
                        {l.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-paper-dim">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-paper transition-colors">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-paper transition-colors">
              Terms of use
            </Link>
          </div>
        </div>
      </Wrap>
    </footer>
  );
}
