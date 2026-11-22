// Case studies — anonymised.
//
// Clients are described by type and region only, never by name, logo or
// product URL. Every fact is drawn from the project records in `site.ts`
// (portfolio). Do not add metrics that have not been confirmed.
//
// Voice: plain-spoken, solution- and architecture-led. Say what the
// problem was, what we designed, and what runs today. AI is one tool
// among several, mentioned only where it was genuinely part of the build.

export type CaseStudy = {
  slug: string;
  /** Anonymised client description, e.g. "Healthcare software provider, Europe". */
  client: string;
  /** Short name used in page titles and search results. */
  title: string;
  /** Plain, outcome-led headline. */
  headline: string;
  sector: "Healthcare" | "Consumer technology" | "Research & education" | "Productivity";
  services: string[];
  summary: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
  /** Optional confirmed headline figure. */
  metric?: { value: string; label: string };
  technologies: string[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinic-management-platform",
    title: "Clinic Management Platform",
    client: "Healthcare software provider, Europe",
    headline: "A unified clinic management platform in production with 100+ doctors",
    sector: "Healthcare",
    services: ["Solution Architecture", "Desktop Applications"],
    summary:
      "Clinics were running scheduling, records and daily operations across separate tools. We designed and built a single platform for the whole doctor and patient workflow, and took it from a blank page to production.",
    challenge:
      "Each part of a clinic's day lived in a different place, so staff re-entered the same data and nobody had the full picture. The replacement had to run on the hardware clinics already owned, perform under peak clinical load, and meet European data-protection requirements.",
    approach: [
      "Designed one data model for doctors, patients and appointments, instead of bolting modules together.",
      "Chose a cross-platform desktop architecture so clinics could keep their existing machines.",
      "Put records on PostgreSQL for consistency and a clear audit trail.",
      "Led a team of five engineers from the first architecture sketch to the production release.",
    ],
    outcomes: [
      "In daily use by more than 100 doctors and clinics.",
      "One system for doctor and patient management, end to end.",
      "Built from scratch to production by a team of five.",
    ],
    metric: { value: "100+", label: "doctors and clinics in production" },
    technologies: ["Electron", "React", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    slug: "clinical-documentation-platform",
    title: "Clinical Documentation Platform",
    client: "Healthcare technology company",
    headline: "Clinical documentation and coding, unified on one platform",
    sector: "Healthcare",
    services: ["AI Enablement", "Desktop Applications"],
    summary:
      "Clinicians were spending hours a day on session notes and medical coding in separate tools. We built one platform that produces a structured note and the codes in the same workflow, across five specialties.",
    challenge:
      "Notes and coding happened in different places, so every session meant double handling. Generic transcription tools couldn't produce notes to the standard each specialty expects.",
    approach: [
      "Designed the note and the coding as one workflow with one data model, not two tools glued together.",
      "Used speech-to-text and language models for the first draft, with the clinician reviewing every note.",
      "Supported psychiatry, psychotherapy, family medicine, internal medicine and pediatrics from one codebase.",
      "Shipped it as a desktop app that fits the way clinics already work.",
    ],
    outcomes: [
      "Clinicians spend hours less on documentation each day.",
      "One platform for several specialties.",
      "Detailed insights for every session.",
    ],
    metric: { value: "3 hrs", label: "of documentation saved per clinician, daily" },
    technologies: ["Electron", "React", "Node.js", "Speech recognition"],
    featured: true,
  },
  {
    slug: "workplace-wellbeing-desktop-app",
    title: "Enterprise Desktop Software",
    client: "Global consumer electronics brand",
    headline: "Enterprise desktop software for a global hardware brand",
    sector: "Consumer technology",
    services: ["Desktop Applications"],
    summary:
      "A global hardware brand wanted software that helps people build healthier work habits. We built a desktop app for macOS and Windows that runs quietly in the background and meets the brand's own product standards.",
    challenge:
      "The app had to run all day on very different machines without slowing anyone down, look and behave like a first-party product, and ship to a large consumer audience.",
    approach: [
      "Built a single cross-platform codebase for macOS and Windows.",
      "Designed lightweight background tracking so the app stays out of the way.",
      "Added timed break reminders and short guided exercises.",
      "Worked to the client's product, design and release standards.",
    ],
    outcomes: [
      "Released under the client's own brand.",
      "Well-being features built into the working day.",
      "Activity and productivity tracking for each user.",
    ],
    technologies: ["Electron", "React", "Node.js"],
    featured: true,
  },
  {
    slug: "voice-driven-clinical-workflow",
    title: "Voice-Driven Clinical Workflow",
    client: "Clinical software company",
    headline: "Voice-driven clinical workflows that keep attention on the patient",
    sector: "Healthcare",
    services: ["AI Enablement", "Custom Software"],
    summary:
      "Keyboard-driven software was pulling doctors' attention away from patients. We designed a voice-first interface and wired it through the core clinical workflow, with live transcription during the consultation.",
    challenge:
      "Clinical software that needs a keyboard and mouse makes the doctor look at a screen instead of the patient. Voice had to work reliably for real clinical tasks, not just dictation.",
    approach: [
      "Mapped the core clinical tasks and designed a voice command for each.",
      "Built real-time speech recognition and transcription into the app.",
      "Routed voice commands through the whole workflow, not a single screen.",
    ],
    outcomes: [
      "The core clinical workflow runs by voice.",
      "Transcription happens live, during the consultation.",
      "Doctors keep more of their attention on the patient.",
    ],
    technologies: ["React", "Node.js", "Speech recognition"],
    featured: true,
  },
  {
    slug: "research-data-analysis-tool",
    title: "Research Data Analysis Platform",
    client: "University biology department, United States",
    headline: "A research analysis platform that replaces ad-hoc scripts with one governed workflow",
    sector: "Research & education",
    services: ["Custom Software", "Desktop Applications"],
    summary:
      "Researchers were assembling scripts by hand for every experiment. We built an internal desktop tool for selecting microscopic datasets, running model-based analysis on them, and comparing the results visually.",
    challenge:
      "Each experiment depended on hand-assembled scripts, data files and plotting code. The process was slow, hard to reproduce, and dependent on a few individuals.",
    approach: [
      "Built a desktop app for selecting and managing microscopic datasets.",
      "Put model-based analysis directly into the workflow, with Python under the hood.",
      "Added scientific visualization for reviewing and comparing results.",
    ],
    outcomes: [
      "Used in-house for model testing on microscopic data.",
      "Analysis runs inside one tool instead of ad-hoc scripts.",
      "Results shown as scientific visualizations.",
    ],
    technologies: ["Electron", "Python", "Data visualization"],
  },
  {
    slug: "medical-audit-analytics",
    title: "Medical Audit Analytics Platform",
    client: "Medical education institution, United Kingdom",
    headline: "Audit analytics shared across in-house teams and remote experts",
    sector: "Healthcare",
    services: ["Custom Software", "Desktop Applications"],
    summary:
      "A medical institution needed to analyze complex audit data and calculate results the same way every time. We built a purpose-made analytics tool with visual reporting that in-house staff and remote health experts use together.",
    challenge:
      "Audit results were calculated by hand, so they varied with whoever did the work. Findings also had to be shared with experts outside the organization.",
    approach: [
      "Designed a structured model for audit datasets and the calculations run on them.",
      "Built repeatable result calculation and visual reports.",
      "Set it up so in-house and remote reviewers work in the same tool.",
    ],
    outcomes: [
      "Used by the institution's team and remote health experts.",
      "Results calculated the same way every time.",
      "Audit findings shown as visual reports.",
    ],
    technologies: ["Electron", "React", "Data visualization", "Node.js"],
  },
  {
    slug: "meeting-documentation-platform",
    title: "Meeting Documentation Platform",
    client: "Productivity software company",
    headline: "Automated meeting documentation and action tracking",
    sector: "Productivity",
    services: ["SaaS Product Engineering", "AI Enablement"],
    summary:
      "Decisions and follow-ups were getting lost after meetings. We built a product that transcribes the conversation, writes up the documentation, and pulls out the actions.",
    challenge:
      "Manual meeting notes were inconsistent and incomplete, so decisions and follow-ups were lost. The platform had to capture meetings automatically and produce documentation teams could rely on.",
    approach: [
      "Built meeting transcription with speech recognition.",
      "Generated documentation from each conversation automatically.",
      "Pulled out the actions and decisions from each meeting.",
    ],
    outcomes: [
      "Meetings transcribed automatically.",
      "Documentation written without anyone taking notes.",
      "Actions and insights from every conversation.",
    ],
    technologies: ["React", "Node.js", "Speech recognition"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
