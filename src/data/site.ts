export const siteConfig = {
  name: "Jaypore Labs",
  description:
    "Friendly product studio. We build AI-enabled software and help businesses introduce AI into their operations — scribes, copilots, voice AI, full SaaS. Hand-built since 2017.",
  tagline: "AI-enabled software. The friendly way.",
  // Short, magnetic line used in hero + OG cards
  pitch: "We build AI-enabled software and help businesses put AI to work.",
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
  "AI-enabled software",
  "AI integration services",
  "AI adoption consulting",
  "AI product studio",
  "AI software development agency",
  "custom AI software",
  "AI scribes",
  "AI copilots",
  "AI agents",
  "RAG systems",
  "voice AI",
  "MCP servers",
  "Next.js AI development",
  "AI for healthcare",
  "healthcare AI software",
  "AI for legal",
  "legal tech AI",
  "enterprise AI integration",
  "AI for SaaS",
  "AI consulting India",
  "AI enablement",
  "add AI to existing software",
  "Electron AI apps",
  "LLM application development",
  "OpenAI Claude integration",
];

export const services = [
  {
    id: "ai-integration",
    title: "AI Enablement",
    shortDescription: "Add AI to the software you already run",
    description:
      "Your product already works. We embed AI where it earns its keep — scribes, copilots, agents, RAG — without rewriting your stack or blowing up your compliance posture.",
    icon: "Brain",
    features: [
      "LLM integration (OpenAI, Claude, open-source)",
      "RAG pipelines with vector search and evals",
      "Voice AI (real-time STT/TTS, diarization)",
      "AI agents with tool-calling and audit trails",
    ],
  },
  {
    id: "full-stack",
    title: "AI-Enabled Web Apps",
    shortDescription: "Custom web apps with AI inside from day one",
    description:
      "Complete web applications — frontend, backend, AI layer — built as a single coherent product. React, Next.js, Node, Postgres, whatever the job needs. No glue-code spaghetti.",
    icon: "Code",
    features: [
      "Next.js App Router, React Server Components",
      "Type-safe APIs, webhooks, background jobs",
      "Auth, billing, multi-tenant from day one",
      "Cloud deploys on Vercel / AWS / Fly",
    ],
  },
  {
    id: "desktop-apps",
    title: "AI-Enabled Desktop Apps",
    shortDescription: "Native-feel Electron apps with AI inside",
    description:
      "For when the web isn't the right surface. Electron apps that feel native, run offline, and ship AI features behind a fast, polished UI. macOS, Windows, Linux.",
    icon: "Monitor",
    features: [
      "Offline-first architecture",
      "Native OS integrations (tray, shortcuts, files)",
      "Auto-update + code-signing pipelines",
      "Voice, vision, and local-LLM support",
    ],
  },
  {
    id: "saas-development",
    title: "AI-Enabled SaaS",
    shortDescription: "From MVP to production, AI inside",
    description:
      "Full-lifecycle SaaS with AI built into the core loop — not bolted on. Multi-tenant, billing, analytics, evals. We help you go from zero to paying users without the usual debt.",
    icon: "Rocket",
    features: [
      "MVP to production in 8–16 weeks",
      "Multi-tenant architecture",
      "Stripe billing, usage metering",
      "LLM evals + monitoring baked in",
    ],
  },
  {
    id: "healthcare-tech",
    title: "AI for Healthcare",
    shortDescription: "HIPAA-ready AI software for clinics + devices",
    description:
      "Depth we've earned. AI scribes, clinic OS, EHR add-ons, AI-assisted medical imaging — built to withstand audits, privacy reviews, and actual practitioners using them all day.",
    icon: "Heart",
    features: [
      "HIPAA-compliant architectures",
      "EHR/EMR integration",
      "AI scribes for 10+ specialties",
      "Voice-first clinical workflows",
    ],
  },
  {
    id: "consulting",
    title: "AI Readiness + Strategy",
    shortDescription: "Find out if AI is the right bet — honestly",
    description:
      "Not every product needs AI. Before you commit a quarter, we audit your product, data, and workflows — then tell you where AI will move the needle, and where it won't.",
    icon: "Lightbulb",
    features: [
      "AI opportunity mapping",
      "Architecture + data review",
      "Vendor-vs-build guidance",
      "ROI + rollout roadmap",
    ],
  },
];

export const portfolio = [
  {
    id: "nudge-ai",
    title: "Nudge AI",
    category: "Healthcare AI",
    shortDescription:
      "AI Scribe and Coding Platform for medical practitioners",
    description:
      "Nudge is an AI Scribe and Coding Platform that supports Psychiatry, Psychotherapy, Family Medicine, Internal Medicine, Pediatrics & More. It saves doctors hours of documentation time and provides advanced insights on each session.",
    image: "/portfolio/nudge.png",
    accent: "#FF4D1F",
    url: "https://getnudgeai.com",
    technologies: ["Electron", "React", "AI/ML", "Node.js"],
    highlights: [
      "Saves hours of documentation",
      "Multi-specialty support",
      "Advanced session insights",
    ],
    featured: true,
  },
  {
    id: "curastream-ai",
    title: "Curastream AI",
    category: "Healthcare AI",
    shortDescription: "Voice Controlled Medical Assistant for Doctors",
    description:
      "Your Voice Controlled Medical Assistant that helps doctors focus more on patients rather than documentation. Streamlines the entire clinical workflow with intelligent voice commands.",
    image: "",
    accent: "#8BE9FD",
    url: "https://curastreamai.com",
    technologies: ["Voice AI", "React", "Node.js", "Speech Recognition"],
    highlights: [
      "Voice-first interface",
      "Real-time transcription",
      "Focus on patient care",
    ],
    featured: true,
  },
  {
    id: "lucy",
    title: "Lucy",
    category: "Healthcare Software",
    shortDescription: "Advanced healthcare software for medical practitioners",
    description:
      "Lucy is an advanced healthcare software solution deployed in Luxembourg, serving over 100 doctors and clinics. Built with Electron, it handles end-to-end processes related to doctors & patients management. Led a team of 5 developers from scratch to production.",
    image: "",
    accent: "#B5E48C",
    url: "https://medlucy.com",
    technologies: ["Electron", "React", "Node.js", "PostgreSQL"],
    highlights: [
      "100+ active doctors",
      "Deployed in Luxembourg",
      "Led team of 5 developers",
    ],
    featured: true,
  },
  {
    id: "smarthabits",
    title: "SmartHabits",
    category: "Productivity",
    shortDescription: "Work-life balance tool backed by Logitech",
    description:
      "SmartHabits is an Electron-based software developed for Logitech to manage user's work activities, reduce stress, and improve overall well-being with timely suggested breaks and mini exercises.",
    image: "/portfolio/smarthabits.png",
    accent: "#F5F0E8",
    url: "https://smarthabits.logitech.com",
    client: "Logitech",
    technologies: ["Electron", "React", "Node.js"],
    highlights: [
      "Built for Logitech",
      "Wellness-focused features",
      "Productivity tracking",
    ],
    featured: true,
  },
  {
    id: "sonnet-ai",
    title: "Sonnet AI",
    category: "Productivity AI",
    shortDescription: "AI meeting assistant for transcription and insights",
    description:
      "Sonnet AI is an AI meeting assistant that helps you transcribe meetings, handle documentation, and provide actionable insights from your conversations.",
    image: "/portfolio/sonnet.png",
    accent: "#FFD166",
    url: "https://sonnetai.com",
    technologies: ["AI/ML", "React", "Node.js", "Speech Recognition"],
    highlights: [
      "Meeting transcription",
      "Automated documentation",
      "Actionable insights",
    ],
    featured: false,
  },
  {
    id: "presselab",
    title: "PresseLab",
    category: "Scientific Research",
    shortDescription: "Internal tool for University of Arizona Biology Dept",
    description:
      "PresseLab was an internal software developed for University of Arizona Biology department for their internal model testing on microscopic data and visualization. Software involved selecting microscopic data and running AI model-based analysis.",
    image: "",
    accent: "#C77DFF",
    client: "University of Arizona",
    technologies: ["Electron", "Python", "AI/ML", "Data Visualization"],
    highlights: [
      "Microscopic data analysis",
      "AI model integration",
      "Scientific visualization",
    ],
    featured: false,
  },
  {
    id: "lsms-audit",
    title: "LSMS Audit Tool",
    category: "Healthcare Analytics",
    shortDescription: "Audit tool for London School of Medical Science",
    description:
      "Developed a complex Audit tool for the London School of Medical Science for analyzing their Audit Data, Representation, Visualization, and result calculation. Used by their team and remote health experts.",
    image: "",
    accent: "#06D6A0",
    client: "London School of Medical Science",
    technologies: ["Electron", "React", "Data Visualization", "Node.js"],
    highlights: [
      "Complex data analysis",
      "Visual reporting",
      "Multi-user collaboration",
    ],
    featured: false,
  },
  {
    id: "haven",
    title: "Haven",
    category: "Social Media Tools",
    shortDescription: "Screenshot enhancement for social media",
    description:
      "Haven is a tool for social media users to create impressive screenshots with varied backgrounds ranging from gradients to images to special effects, with export options for different social media platforms.",
    image: "",
    accent: "#FF006E",
    technologies: ["Electron", "React", "Canvas API"],
    highlights: [
      "Multiple export sizes",
      "Custom backgrounds",
      "Social media optimized",
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Healthcare Client",
    role: "CTO, Medical Software Company",
    content:
      "Yash and his team delivered our healthcare platform with exceptional attention to compliance and user experience. The system now serves over 100 medical practitioners daily.",
    rating: 5,
  },
  {
    id: 2,
    name: "SaaS Founder",
    role: "Founder & CEO",
    content:
      "From MVP to scale, Jaypore Labs has been instrumental in our growth. Their AI integration expertise helped us differentiate in a competitive market.",
    rating: 5,
  },
  {
    id: 3,
    name: "Enterprise Client",
    role: "Product Manager, Fortune 500",
    content:
      "Professional, reliable, and technically excellent. The team's experience with Electron applications is unmatched. Highly recommend for desktop application development.",
    rating: 5,
  },
];

export const clients = [
  { name: "Logitech", logo: "/clients/logitech.svg" },
  { name: "Mercedes Benz", logo: "/clients/mercedes.svg" },
  { name: "University of Arizona", logo: "/clients/arizona.svg" },
  { name: "London School of Medical Science", logo: "/clients/lsms.svg" },
];

export const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Electron", category: "Desktop" },
  { name: "Python", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "OpenAI", category: "AI" },
  { name: "TailwindCSS", category: "Styling" },
];

export const faq = [
  {
    question: "So what exactly do you build?",
    answer:
      "AI-enabled software — web apps, desktop apps, SaaS platforms, internal tools — with AI embedded where it earns its keep. We also help existing products introduce AI without ripping everything up. We don't sell AI models; we build the software around them.",
  },
  {
    question: "We already have an engineering team. Can you fit in?",
    answer:
      "Yes. A common engagement is team augmentation — we drop in as senior AI engineers beside your team to stand up scribes, RAG pipelines, agents, or eval infra, then hand off cleanly. You keep the IP and the playbook.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "Three shapes: fixed-scope projects (best for MVPs and discrete AI features), monthly retainers (best for ongoing AI products), or per-engineer team augmentation (best for existing teams). We'll recommend one honestly — sometimes that means a different studio entirely.",
  },
  {
    question: "What is your typical timeline?",
    answer:
      "AI-enabled MVPs take 8–12 weeks. Full-production SaaS with AI inside runs 16–24 weeks. AI readiness audits are two weeks. Friday demos every week, in production from day one.",
  },
  {
    question: "Do you work with regulated industries?",
    answer:
      "Yes — we've shipped HIPAA-compliant medical software to Luxembourg clinics (serving 100+ doctors), AI scribes for multiple specialties, and enterprise work for Logitech and Mercedes Benz. We design for audits from day one.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes, we work globally and remotely. Most of our clients are in North America, Europe, and the Middle East. Async-first by default, with IST-friendly live hours for working sessions.",
  },
  {
    question: "What makes Jaypore Labs different?",
    answer:
      "We're industry-first, then AI-first. We learn your business before we touch the stack. You talk to the engineers writing your code, we ship weekly, and we tell you when AI is the wrong answer. No middle layer, no buzzword bingo.",
  },
];

// What you actually get — deliverables matrix
export const capabilities = [
  {
    group: "AI inside your software",
    items: [
      { title: "AI scribes", detail: "Domain-tuned scribes for medicine, law, meetings, voice notes" },
      { title: "AI copilots", detail: "In-app assistants with streaming, structured output, and tool-calling" },
      { title: "AI agents", detail: "Multi-step agents with evals, fallbacks, and audit trails" },
      { title: "RAG systems", detail: "Retrieval pipelines with vector search, rerankers, evals" },
      { title: "Voice AI", detail: "Real-time STT/TTS, multi-speaker diarization, wake-word" },
      { title: "MCP servers", detail: "Model Context Protocol servers that plug into Claude, Cursor, IDEs" },
    ],
  },
  {
    group: "Product surfaces",
    items: [
      { title: "Web apps", detail: "Next.js · App Router · Server Actions · Edge runtime" },
      { title: "Desktop apps", detail: "Electron apps that feel native — offline-first, auto-update" },
      { title: "Mobile apps", detail: "React Native · Expo · iOS + Android from one codebase" },
      { title: "Chrome extensions", detail: "MV3 extensions with AI assistance baked in" },
      { title: "Internal tools", detail: "Admin dashboards, CMS, workflow automations" },
      { title: "APIs + backends", detail: "Type-safe APIs, webhooks, background jobs, queues" },
    ],
  },
  {
    group: "Craft + care",
    items: [
      { title: "Design systems", detail: "Component libraries, tokens, docs — built to last" },
      { title: "Data viz", detail: "Charts, dashboards, clinical reports — numbers that tell stories" },
      { title: "Evals + monitoring", detail: "LLM evals, observability, incident response playbooks" },
      { title: "Compliance", detail: "HIPAA, SOC2-ready architectures for regulated industries" },
      { title: "Infra + DevOps", detail: "Vercel, AWS, Fly, Docker — boring on purpose" },
      { title: "Team augmentation", detail: "Drop us in beside your team as senior AI engineers" },
    ],
  },
];

export const industries = [
  { name: "Healthcare", detail: "AI scribes, clinic OS, EHR add-ons — built for real practitioners" },
  { name: "Legal", detail: "AI doc review, contract agents, client-intake copilots" },
  { name: "Enterprise", detail: "Internal tools + AI copilots for knowledge work and ops" },
  { name: "Productivity", detail: "Meeting AI, wellness rituals, focus + habit software" },
  { name: "Fintech", detail: "Dashboards, analytics, AI-assisted underwriting + ops" },
  { name: "Research", detail: "Labs, universities, scientific viz with AI analysis on top" },
  { name: "Consumer", detail: "Creator tools, voice apps, AI-assisted social products" },
  { name: "Education", detail: "Learning tools, tutors, AI-enabled assessments" },
];

// Homepage manifesto — expanded principles
export const principles = [
  {
    k: "01",
    h: "AI-enabled, not AI-obsessed.",
    b: "We put AI inside real software, where it earns its keep. The rest we keep boring on purpose — boring is what scales.",
  },
  {
    k: "02",
    h: "Industry-first.",
    b: "We learn your business before we touch the stack. AI without context is theater. Good software starts with good questions.",
  },
  {
    k: "03",
    h: "Friendly by default.",
    b: "No architects peacocking. No gatekept Slack. You talk to the engineers writing your code, directly, every day.",
  },
  {
    k: "04",
    h: "Ship weekly.",
    b: "Every Friday you see something working in production. We iterate in public and measure in real users, not dry-runs.",
  },
  {
    k: "05",
    h: "Production, not prototype.",
    b: "Every sprint ends in front of real users. Demos don't count. Shipping is the grader. Reality has the final word.",
  },
  {
    k: "06",
    h: "No buzzword bingo.",
    b: "We'll tell you when AI is the wrong answer. Half the time it is. We'd rather ship real software than sound smart in a pitch.",
  },
];

// Text-driven hero specimens (replaces image reel)
export const heroSpecimens = [
  {
    kicker: "AI Scribe · Healthcare",
    title: "Nudge AI",
    stat: "3 hrs",
    statLabel: "saved per doctor, daily",
    note: "Deployed across Psychiatry, Pediatrics, Family Medicine.",
  },
  {
    kicker: "Voice AI · Medical",
    title: "Curastream",
    stat: "100%",
    statLabel: "hands-free clinical workflow",
    note: "Voice-controlled assistant for doctors in clinic.",
  },
  {
    kicker: "Clinic OS · Luxembourg",
    title: "Lucy",
    stat: "100+",
    statLabel: "doctors in production",
    note: "End-to-end clinic OS. Led team of 5 to v1.",
  },
  {
    kicker: "Consumer · Logitech",
    title: "SmartHabits",
    stat: "8",
    statLabel: "wellness rituals, on the wrist",
    note: "Electron wellness app built for Logitech.",
  },
  {
    kicker: "Meeting AI · Consumer",
    title: "Sonnet AI",
    stat: "24/7",
    statLabel: "meeting insights",
    note: "AI that transcribes, tags, and surfaces actions.",
  },
];
