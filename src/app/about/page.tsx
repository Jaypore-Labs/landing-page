import { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight, CheckCircle, Award, Users, Globe, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { siteConfig, technologies } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Jaypore Labs, an AI-first development agency with 8+ years of experience building software for global brands like Logitech and Mercedes Benz.",
  openGraph: {
    title: "About | Jaypore Labs",
    description: "Learn about Jaypore Labs, an AI-first development agency with 8+ years of experience building software for global brands like Logitech and Mercedes Benz.",
  },
};

const values = [
  {
    icon: Zap,
    title: "AI-First Approach",
    description: "We leverage cutting-edge AI technologies to build smarter, more efficient solutions.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Every line of code is written with care, following best practices and industry standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, aligned with your goals and vision.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Experience working with clients across 10+ countries gives us diverse insights.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Building the Future of Software
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We&apos;re an AI-first development agency helping SaaS founders and businesses build exceptional products that scale.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Jaypore Labs was founded with a simple mission: to help businesses build software that truly makes a difference. With {siteConfig.stats.yearsExperience} years of experience in full-stack development, we&apos;ve had the privilege of working with some of the world&apos;s most recognized brands.
                </p>
                <p>
                  From developing healthcare solutions deployed in Luxembourg serving 100+ doctors, to building productivity tools for Logitech, our journey has been defined by solving complex problems and delivering exceptional results.
                </p>
                <p>
                  Today, we focus on AI-first development, helping SaaS founders and businesses leverage modern technologies to build products that scale. Our expertise spans full-stack web development, desktop applications, AI integration, and more.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={siteConfig.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="group">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
                <a
                  href={siteConfig.founder.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="group">
                    Upwork Profile
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Founder Card */}
            <div>
              <Card className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-white">
                      {siteConfig.founder.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-4">
                    {siteConfig.founder.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {siteConfig.stats.yearsExperience} years of experience building full-stack applications for global clients including Logitech and Mercedes Benz.
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={siteConfig.founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </a>
                    <a
                      href={siteConfig.founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our core values guide everything we do, from how we write code to how we interact with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Tech Stack
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We work with modern, battle-tested technologies to deliver robust and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <span className="font-medium text-slate-900 dark:text-white">{tech.name}</span>
                <Badge variant="outline" className="text-xs">{tech.category}</Badge>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-indigo-600">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: siteConfig.stats.yearsExperience, label: "Years Experience" },
              { value: siteConfig.stats.projectsDelivered, label: "Projects Delivered" },
              { value: siteConfig.stats.clientsServed, label: "Happy Clients" },
              { value: siteConfig.stats.countries, label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-violet-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Why Work With Us?
              </h2>
              <div className="space-y-4">
                {[
                  "Proven track record with Fortune 500 companies",
                  "AI-first approach for smarter solutions",
                  "Full transparency throughout the project",
                  "Direct communication with senior developers",
                  "Flexible engagement models",
                  "Post-launch support and maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block mt-8">
                <Button size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Logitech", desc: "SmartHabits wellness app" },
                { title: "Mercedes Benz", desc: "Enterprise solutions" },
                { title: "Healthcare", desc: "100+ doctors served" },
                { title: "Universities", desc: "Research tools" },
              ].map((client) => (
                <Card key={client.title} className="text-center p-6">
                  <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {client.title}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {client.desc}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
