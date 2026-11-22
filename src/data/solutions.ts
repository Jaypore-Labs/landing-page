// Packaged enterprise solutions — outcome-led entry points into an
// engagement. Timelines mirror the ranges stated in the FAQ; do not add
// figures that are not backed elsewhere on the site.

export type Solution = {
  id: string;
  name: string;
  /** Outcome-led headline. */
  headline: string;
  summary: string;
  deliverables: string[];
  bestFor: string;
  timeline: string;
};

export const solutions: Solution[] = [
  {
    id: "architecture-assessment",
    name: "Architecture Assessment",
    headline: "A clear target architecture before you commit budget.",
    summary:
      "A fixed-scope review of your applications, data, integrations and infrastructure, with a target architecture and a sequenced, costed roadmap your leadership can act on.",
    deliverables: [
      "Current-state map and risk register",
      "Target architecture and options analysis",
      "Prioritized, phased roadmap",
    ],
    bestFor: "Leaders planning a modernization, platform investment or vendor decision",
    timeline: "1–2 weeks",
  },
  {
    id: "legacy-modernization",
    name: "Legacy Modernization",
    headline: "Modernize core systems without a big-bang rewrite.",
    summary:
      "Phased replacement of legacy platforms using proven incremental patterns, so operations continue throughout and every phase delivers value in production.",
    deliverables: [
      "Migration strategy and sequencing",
      "Incremental replacement of legacy components",
      "Data migration with reconciliation",
    ],
    bestFor: "Organizations running business-critical systems that are costly to change",
    timeline: "Phased, multi-quarter",
  },
  {
    id: "systems-integration",
    name: "Systems Integration",
    headline: "One operational picture across ERP, CRM and line-of-business systems.",
    summary:
      "An integration layer that connects your core platforms, removes manual re-keying and gives teams consistent, trustworthy data across the organization.",
    deliverables: [
      "Integration architecture and API strategy",
      "Event-driven and batch integrations",
      "Monitoring, alerting and error handling",
    ],
    bestFor: "Teams working across disconnected systems and spreadsheets",
    timeline: "8–12 weeks to first production release",
  },
  {
    id: "enterprise-applications",
    name: "Enterprise Application Delivery",
    headline: "Business-critical applications, in production within a quarter.",
    summary:
      "Customer portals, partner platforms and operational applications, built to your security, accessibility and architecture standards and integrated with your core systems.",
    deliverables: [
      "Product and solution design",
      "Production release with CI/CD and observability",
      "SSO, role-based access and audit trails",
    ],
    bestFor: "New digital services, portals and internal platforms",
    timeline: "8–12 weeks to first production release",
  },
  {
    id: "applied-ai",
    name: "Applied AI & Automation",
    headline: "Automation that runs inside governed production workflows.",
    summary:
      "Document processing, enterprise search and workflow automation embedded in existing systems, with evaluation, monitoring and human review built in from the start.",
    deliverables: [
      "Use-case qualification and business case",
      "Integration into existing workflows",
      "Evaluation, monitoring and human-in-the-loop review",
    ],
    bestFor: "High-volume, document-heavy processes with clear review points",
    timeline: "8–12 weeks to first production release",
  },
  {
    id: "managed-engineering",
    name: "Managed Engineering & Support",
    headline: "Stable systems, continuously improved after go-live.",
    summary:
      "A dedicated team that operates, supports and improves your platforms under an agreed service model, or prepares a structured handover to your internal teams.",
    deliverables: [
      "Agreed service model and reporting",
      "Monitoring, incident response and maintenance",
      "Continuous improvement roadmap",
    ],
    bestFor: "Platforms that need dependable ownership after launch",
    timeline: "Ongoing",
  },
];
