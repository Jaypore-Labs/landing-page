export const siteConfig = {
  name: "Jaypore Labs",
  description:
    "Friendly, AI-first product studio. We help teams ship AI products fast and efficiently — from scribes and copilots to voice AI and full SaaS.",
  tagline: "Ship AI. The friendly way.",
  url: "https://jayporelabs.com",
  email: "hello@jayporelabs.com",
  phone: "+91 XXXXXXXXXX",
  location: "India",
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

export const services = [
  {
    id: "full-stack",
    title: "Full-Stack Development",
    shortDescription: "End-to-end web and application development",
    description:
      "Complete web applications from database to frontend. We build scalable, maintainable solutions using modern tech stacks including React, Next.js, Node.js, and more.",
    icon: "Code",
    features: [
      "Custom web applications",
      "API development & integration",
      "Database design & optimization",
      "Cloud deployment & DevOps",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications",
    shortDescription: "Cross-platform Electron applications",
    description:
      "Native-quality desktop applications using Electron. From healthcare systems to productivity tools, we deliver polished experiences that work across Windows, Mac, and Linux.",
    icon: "Monitor",
    features: [
      "Cross-platform compatibility",
      "Native OS integration",
      "Offline-first architecture",
      "Auto-update systems",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    shortDescription: "LLM-powered features and automation",
    description:
      "Integrate AI capabilities into your products. From AI scribes to intelligent assistants, we help you leverage the power of modern language models and machine learning.",
    icon: "Brain",
    features: [
      "LLM integration (OpenAI, Claude, etc.)",
      "Custom AI workflows",
      "Voice & speech processing",
      "Intelligent automation",
    ],
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    shortDescription: "Build and scale your SaaS product",
    description:
      "Full lifecycle SaaS development from MVP to scale. We understand the unique challenges of SaaS products including multi-tenancy, billing, and growth optimization.",
    icon: "Rocket",
    features: [
      "MVP development",
      "Multi-tenant architecture",
      "Subscription & billing systems",
      "Analytics & monitoring",
    ],
  },
  {
    id: "healthcare-tech",
    title: "Healthcare Technology",
    shortDescription: "HIPAA-compliant medical software",
    description:
      "Specialized in healthcare software development. From patient management systems to AI medical scribes, we build compliant, secure, and user-friendly healthcare solutions.",
    icon: "Heart",
    features: [
      "HIPAA compliance",
      "EHR/EMR integration",
      "Patient portals",
      "Medical AI tools",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    shortDescription: "Architecture and technology guidance",
    description:
      "Expert guidance on technology decisions. We help you choose the right stack, design scalable architectures, and optimize existing systems for performance and maintainability.",
    icon: "Lightbulb",
    features: [
      "Architecture review",
      "Technology selection",
      "Code audits",
      "Performance optimization",
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
    question: "What types of projects do you work on?",
    answer:
      "We specialize in full-stack web applications, desktop applications (Electron), AI-powered products, and SaaS platforms. We have particular expertise in healthcare technology and productivity tools.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and hourly engagement models. For well-defined projects, we provide fixed quotes. For ongoing development or evolving requirements, hourly rates work best. We'll discuss and recommend the best model for your specific needs.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timeline varies based on project scope. A typical MVP takes 2-3 months, while more complex applications can take 4-6 months. We provide detailed timelines during project scoping.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages. We believe in building long-term relationships with our clients and ensuring their products continue to perform optimally.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Absolutely. We frequently augment existing teams, providing specialized expertise in areas like AI integration, desktop development, or scaling challenges. We integrate seamlessly with your workflow.",
  },
  {
    question: "What makes Jaypore Labs different?",
    answer:
      "We're AI-first and small by design. You talk to the people writing the code, we ship weekly, and we lean into AI where it actually earns its keep. No middle layer, no buzzword bingo, no decks without demos.",
  },
];

// What you actually get — deliverables matrix
export const capabilities = [
  {
    group: "AI practice",
    items: [
      { title: "AI scribes", detail: "Domain-tuned scribes for medicine, law, meetings, voice notes" },
      { title: "AI agents", detail: "Tool-calling agents with evals, fallbacks, and audit trails" },
      { title: "RAG systems", detail: "Retrieval pipelines with vector search, rerankers, evals" },
      { title: "Voice AI", detail: "Real-time STT/TTS, multi-speaker diarization, wake-word" },
      { title: "LLM apps", detail: "Chat, copilots, summarisers with streaming and structured output" },
      { title: "MCP servers", detail: "Model Context Protocol servers that plug into Claude, Cursor, IDEs" },
    ],
  },
  {
    group: "Product surfaces",
    items: [
      { title: "Web apps", detail: "Next.js / React · App Router · Server Actions · Edge runtime" },
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
  { name: "Healthcare", detail: "Clinics, EHR add-ons, AI scribes, medical devices" },
  { name: "Productivity", detail: "Meeting AI, wellness tools, focus + habits" },
  { name: "Legal", detail: "Doc review, contract agents, intake tools" },
  { name: "Enterprise", detail: "Internal tools, dashboards, AI copilots for knowledge work" },
  { name: "Research", detail: "Labs, universities, scientific visualization" },
  { name: "Consumer", detail: "Creator tools, voice apps, social products" },
  { name: "Fintech", detail: "Dashboards, analytics, AI-assisted workflows" },
  { name: "Education", detail: "Learning tools, tutors, assessment platforms" },
];

// Homepage manifesto — expanded principles
export const principles = [
  {
    k: "01",
    h: "AI-first, always.",
    b: "We lead with AI where it earns its keep — scribes, copilots, agents. Everywhere else we keep software boring.",
  },
  {
    k: "02",
    h: "Friendly by default.",
    b: "No architects peacocking. No gatekept Slack. You talk to the people writing your code, directly.",
  },
  {
    k: "03",
    h: "Ship weekly.",
    b: "Every Friday you see something working. We iterate in public and measure in real users, not dry-runs.",
  },
  {
    k: "04",
    h: "Small by design.",
    b: "Four-person studio on purpose. No middle layers, no handoffs, no Slack threads longer than a haiku.",
  },
  {
    k: "05",
    h: "Production, not prototype.",
    b: "Every sprint ends in front of real users. Staging-only demos don't count. Reality is the grader.",
  },
  {
    k: "06",
    h: "No buzzword bingo.",
    b: "We'll tell you when AI is the wrong answer. Half the time it is. We'd rather ship real than sound smart.",
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
