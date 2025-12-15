import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { portfolio } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of successful projects including healthcare AI, enterprise software, and SaaS applications built for global clients.",
  openGraph: {
    title: "Portfolio | Jaypore Labs",
    description: "Explore our portfolio of successful projects including healthcare AI, enterprise software, and SaaS applications built for global clients.",
  },
};

const categories = ["All", ...new Set(portfolio.map((p) => p.category))];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Projects That Make an Impact
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              From healthcare AI to enterprise productivity tools, explore the solutions we&apos;ve built for clients worldwide.
            </p>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {portfolio
                .filter((p) => p.featured)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden group">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl font-bold text-violet-500/20 dark:text-violet-400/20">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5 text-violet-600" />
                        </a>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge variant="primary">{project.category}</Badge>
                        {project.client && (
                          <Badge variant="outline">{project.client}</Badge>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-medium mt-6 hover:gap-3 transition-all"
                        >
                          Visit Project
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              More Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio
                .filter((p) => !p.featured)
                .map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <div className="aspect-[3/2] bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-violet-500/20 dark:text-violet-400/20">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="primary" className="text-xs">{project.category}</Badge>
                        {project.client && (
                          <Badge variant="outline" className="text-xs">{project.client}</Badge>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Countries Served" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
