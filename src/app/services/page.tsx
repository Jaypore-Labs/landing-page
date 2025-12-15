import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Monitor, Brain, Rocket, Heart, Lightbulb, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/cta";
import { services, technologies } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack development, AI integration, SaaS development, and more. Explore our comprehensive software development services.",
  openGraph: {
    title: "Services | Jaypore Labs",
    description: "Full-stack development, AI integration, SaaS development, and more. Explore our comprehensive software development services.",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Monitor,
  Brain,
  Rocket,
  Heart,
  Lightbulb,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              End-to-End Development Solutions
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              From concept to deployment and beyond. We offer comprehensive software development services tailored to your business needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Code;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="group">
                        Discuss Your Project
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full">
                    <div className="aspect-[4/3] bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-24 h-24 text-violet-300 dark:text-violet-700" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section id="tech-stack" className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We use modern, battle-tested technologies to build scalable and maintainable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
              >
                {tech.name}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your requirements, goals, and constraints to understand the full picture.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed technical planning, architecture design, and timeline estimation.",
              },
              {
                step: "03",
                title: "Development",
                description: "Agile development with regular updates, code reviews, and continuous integration.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Smooth deployment, monitoring, and ongoing support to ensure success.",
              },
            ].map((phase) => (
              <Card key={phase.step} className="relative">
                <CardHeader>
                  <span className="text-5xl font-bold text-violet-100 dark:text-violet-900/30 absolute top-4 right-4">
                    {phase.step}
                  </span>
                  <CardTitle className="relative z-10">{phase.title}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
