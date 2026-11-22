export const siteConfig = {
  name: "Jaypore Labs",
  description:
    "Enterprise software architecture and engineering. Jaypore Labs helps organizations design, modernize and integrate the systems they run on. Since 2017.",
  tagline: "The systems your enterprise runs on, engineered to last.",
  // Short, magnetic line used in hero + OG cards
  pitch: "We help enterprises design, modernize and integrate their core platforms.",
  url: "https://jayporelabs.com",
  email: "hello@jayporelabs.com",
  phone: "+91 XXXXXXXXXX",
  location: "India",
  regions: ["North America", "Europe", "Middle East", "APAC"],
  founder: {
    name: "Yash Shah",
    role: "Founder & Lead Developer",
    experience: "8+ years",
    github: "https://github.com/theguidingstar",
    upwork: "https://www.upwork.com/freelancers/theguidingstar",
    linkedin: "https://linkedin.com/in/yashshah",
  },
  social: {
    github: "https://github.com/theguidingstar",
    linkedin: "https://linkedin.com/company/jaypore-labs",
    twitter: "https://twitter.com/jayporelabs",
  },
  stats: {
    yearsExperience: "8+",
    projectsDelivered: "50+",
    clientsServed: "30+",
    countries: "10+",
  },
};

// Keyword corpus — used in root metadata and per-page.
export const seoKeywords = [
  "software architecture consulting",
  "custom software development",
  "solution architecture services",
  "legacy system modernization",
  "system integration services",
  "enterprise software development",
  "SaaS product development",
  "desktop application development",
  "Electron app development",
  "Next.js development agency",
  "API and data integration",
  "cloud architecture",
  "healthcare software development",
  "software development company India",
  "remote senior engineering team",
  "AI integration services",
];

export const services = [
  {
    id: "architecture",
    title: "Enterprise Architecture",
    shortDescription: "A target architecture and roadmap for your core platforms.",
    description:
      "Current-state assessment, target architecture and a sequenced roadmap across applications, data and infrastructure. Build-versus-buy decisions and trade-offs are documented for your technology and business stakeholders.",
    icon: "Lightbulb",
    features: [
      "Current-state and risk assessment",
      "Target architecture and roadmap",
      "Cloud and infrastructure strategy",
      "Security and compliance review",
    ],
  },
  {
    id: "custom-software",
    title: "Enterprise Applications",
    shortDescription: "Business-critical applications, built to your standards.",
    description:
      "Customer, partner and employee platforms, portals and operational applications, engineered for scale, security and long-term maintainability, and integrated with your core systems.",
    icon: "Code",
    features: [
      "Customer and partner portals",
      "Workflow and operations platforms",
      "SSO, role-based access and audit trails",
      "APIs and event-driven services",
    ],
  },
  {
    id: "modernization",
    title: "Modernization & Integration",
    shortDescription: "Modernize core systems without disrupting operations.",
    description:
      "Incremental modernization of legacy platforms, and integration across ERP, CRM and line-of-business systems, using proven patterns that keep the business running throughout.",
    icon: "Rocket",
    features: [
      "Incremental, phased migration",
      "ERP, CRM and line-of-business integration",
      "Data migration and pipelines",
      "Performance, resilience and scalability",
    ],
  },
  {
    id: "saas-development",
    title: "Digital Platform Engineering",
    shortDescription: "Multi-tenant platforms and digital products at scale.",
    description:
      "Multi-tenant platforms, customer-facing digital products and internal platforms, with billing, analytics, observability and security designed in from the first release.",
    icon: "Rocket",
    features: [
      "Multi-tenant architecture",
      "Platform and API strategy",
      "Observability and reliability engineering",
      "First production release in 8–16 weeks",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop & Field Applications",
    shortDescription: "Managed software for desktops and field operations.",
    description:
      "Cross-platform applications for macOS, Windows and Linux that operate offline, integrate with devices and local data, and fit enterprise deployment and update processes. Delivered for a global hardware brand and for healthcare providers in Europe.",
    icon: "Monitor",
    features: [
      "Offline-first architecture",
      "Managed deployment and auto-update",
      "Code signing and security hardening",
      "Device and hardware integration",
    ],
  },
  {
    id: "ai-integration",
    title: "Applied AI & Automation",
    shortDescription: "Applied where it delivers measurable value, with governance.",
    description:
      "Document processing, enterprise search, decision support and workflow automation, built into existing systems with evaluation, monitoring, human review and the same governance as any production system.",
    icon: "Brain",
    features: [
      "Document and data extraction",
      "Enterprise search over internal content",
      "Workflow automation and decision support",
      "Governance, evaluation and human review",
    ],
  },
];

export const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Node.js", category: "Services & APIs" },
  { name: "REST and event-driven APIs", category: "Services & APIs" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Docker", category: "Delivery" },
  { name: "CI/CD pipelines", category: "Delivery" },
  { name: "Electron", category: "Desktop" },
  { name: "React Native", category: "Mobile" },
  { name: "OpenAI", category: "Applied AI" },
  { name: "Anthropic", category: "Applied AI" },
];

export const faq = [
  {
    question: "What does Jaypore Labs do?",
    answer:
      "We help organizations design, modernize and integrate their core software: enterprise architecture, enterprise applications, legacy modernization and systems integration, with applied AI where it delivers measurable value.",
  },
  {
    question: "Do you work alongside our internal IT and engineering teams?",
    answer:
      "Yes. Most engagements are delivered jointly with internal teams. We align to your architecture standards, security policies and delivery processes, and transfer knowledge throughout.",
  },
  {
    question: "How do you approach legacy modernization?",
    answer:
      "Incrementally. We replace or wrap legacy components in stages so operations continue throughout. A full rewrite is rarely the lowest-risk option, and we recommend one only when the case is clear.",
  },
  {
    question: "How are engagements structured?",
    answer:
      "As phased programs with defined scope and milestones, dedicated multi-quarter teams, or capacity extension with senior architects and engineers. We recommend a model after an initial assessment, based on scope, risk and governance requirements.",
  },
  {
    question: "What are typical timelines?",
    answer:
      "An initial architecture assessment typically takes 1–2 weeks. A first production release on a new program typically follows in 8–12 weeks. Larger platforms are delivered in phases over 16–24 weeks or longer.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Security and compliance are designed in from the first release: access control, audit trails, encryption and data residency aligned to your policies. We have delivered clinical software used by more than 100 doctors under European data-protection requirements, and design to HIPAA and GDPR requirements where they apply.",
  },
  {
    question: "Do you support systems after go-live?",
    answer:
      "Yes. We provide ongoing support and continuous improvement under an agreed service model, or a structured handover to your teams with documentation and runbooks.",
  },
  {
    question: "How do you compare with a large systems integrator?",
    answer:
      "You work directly with senior architects and engineers rather than a leveraged delivery pyramid. Senior teams mean faster decisions, clear accountability and lower overhead, with the same standards of governance and documentation.",
  },
];

// What you actually get — deliverables matrix
export const capabilities = [
  {
    group: "Architecture & systems",
    items: [
      { title: "System architecture", detail: "Service boundaries, data models, and the decisions written down" },
      { title: "Cloud infrastructure", detail: "AWS and Vercel, containerized, monitored, and costed" },
      { title: "Integrations & APIs", detail: "Connecting ERP, CRM, EHR and line-of-business systems" },
      { title: "Legacy modernization", detail: "Phased migration off business-critical legacy platforms" },
      { title: "Data pipelines", detail: "Reliable movement and reporting of data across systems" },
      { title: "Security & compliance", detail: "Access control, audit trails, HIPAA- and GDPR-aware design" },
    ],
  },
  {
    group: "Product surfaces",
    items: [
      { title: "Web platforms", detail: "React and Next.js platforms with server-side rendering" },
      { title: "Desktop apps", detail: "Cross-platform desktop apps with offline support and auto-update" },
      { title: "Mobile apps", detail: "React Native and Expo, iOS and Android from one codebase" },
      { title: "Portals", detail: "Customer, partner and patient portals with proper permissions" },
      { title: "Internal tools", detail: "Admin dashboards, back-office tools, workflow automation" },
      { title: "APIs + backends", detail: "Type-safe APIs, webhooks, background jobs, queues" },
    ],
  },
  {
    group: "Delivery & operations",
    items: [
      { title: "Monitoring", detail: "Logging, alerting and incident playbooks from the first release" },
      { title: "CI/CD", detail: "Automated tests, deploy pipelines, code signing" },
      { title: "Data & reporting", detail: "Dashboards, analytics and operational reporting" },
      { title: "Design systems", detail: "Component libraries, tokens and documentation" },
      { title: "AI features", detail: "Extraction, search and assistants, with evals and human review" },
      { title: "Team extension", detail: "Senior engineers embedded within your team" },
    ],
  },
];

// How we work — differentiators
export const principles = [
  {
    k: "01",
    h: "Architecture before code.",
    b: "Every program starts with a clear view of your systems, data and constraints, and a target architecture your teams can build against.",
  },
  {
    k: "02",
    h: "Senior teams, single accountability.",
    b: "Architects and senior engineers lead delivery directly. One team is accountable from design through operations.",
  },
  {
    k: "03",
    h: "Incremental, low-risk delivery.",
    b: "We modernize in stages, with production-ready releases every sprint, so the business keeps running throughout.",
  },
  {
    k: "04",
    h: "Security and compliance by design.",
    b: "Access control, audit trails, data protection and resilience are built in from the first release and aligned to your policies.",
  },
  {
    k: "05",
    h: "Decisions documented.",
    b: "Architecture decision records, runbooks and documentation that your internal teams can own, audit and extend.",
  },
  {
    k: "06",
    h: "Built for handover.",
    b: "You own the code, infrastructure and IP. We transition to your teams, or operate the system under an agreed service model.",
  },
];

export const approach = [
  {
    n: "01",
    h: "Assess",
    duration: "1–2 weeks",
    b: "Current-state assessment of systems, data, integrations and risk, with your technology and business stakeholders. Output: a target architecture and a prioritized roadmap.",
  },
  {
    n: "02",
    h: "Architect",
    duration: "1–2 weeks",
    b: "Solution design, integration patterns, security model and delivery plan, reviewed with your architecture and security teams. A fixed scope for the first release.",
  },
  {
    n: "03",
    h: "Deliver",
    duration: "Phased",
    b: "Releases in two-week increments with automated testing, CI/CD and observability from the outset, and regular reviews with your stakeholders.",
  },
  {
    n: "04",
    h: "Operate",
    duration: "Ongoing",
    b: "Managed support and continuous improvement under an agreed service model, or a structured handover to your internal teams.",
  },
];

export const engagementModels = [
  {
    name: "Program delivery",
    price: "Fixed scope or phased",
    summary:
      "A defined program with agreed scope, milestones and governance. Suited to new platforms, modernization phases and major integrations.",
    fits: ["New platforms and applications", "Modernization phases", "Defined milestones and budget"],
  },
  {
    name: "Dedicated team",
    price: "Monthly",
    summary:
      "A stable, cross-functional team working on your roadmap over multiple quarters, with predictable cost and continuity of people.",
    fits: ["Multi-quarter roadmaps", "Evolving requirements", "Predictable monthly cost"],
  },
  {
    name: "Capacity extension",
    price: "Per engineer",
    summary:
      "Senior architects and engineers embedded within your teams to add specialist depth or accelerate delivery.",
    fits: ["Specialist architecture skills", "Knowledge transfer", "Accelerated delivery"],
  },
];
