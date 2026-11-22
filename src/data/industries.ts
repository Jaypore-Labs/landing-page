// Industry landing pages — built as paid-ads destinations (/industries/[slug]).
//
// Copy is deliberately general: it describes the problems we solve and the
// way we work in each sector, without naming clients or claiming figures.
// Case studies are attached only where we have real, related work.
//
// Audience: enterprise buyers (CIO, CTO, VP Engineering, Head of Operations,
// Chief Digital Officer, procurement). Subject: enterprise solutions —
// architecture, integration across core systems, modernization, data,
// governance and resilience — delivered as programs, not one-off projects.
// Voice: plain, confident, no hype. AI appears at most once per industry,
// framed as "where it fits".

export type Industry = {
  slug: string;
  name: string;
  /** Short line for cards and nav. */
  short: string;
  /** Ad-matched hero headline. */
  headline: string;
  lede: string;
  outcomes: string[];
  challenges: { h: string; b: string }[];
  useCases: { h: string; b: string }[];
  safeguards: string[];
  faq: { q: string; a: string }[];
  /** Related case-study slugs (only where genuinely relevant). */
  caseStudies?: string[];
  keywords: string[];
};

const commonFaq = {
  timeline: {
    q: "How does an engagement start, and how quickly does it deliver?",
    a: "Most programs begin with a one- to two-week architecture assessment of your systems, data and constraints. Delivery then runs in two-week increments with working software reviewed by your stakeholders, and a first production release typically within 8–12 weeks.",
  },
  systems: {
    q: "Do we need to replace our core systems?",
    a: "Rarely. In most enterprises the better path is to integrate and modernize around the systems of record, replacing components only where they constrain the business. Where full replacement is the stronger case, we set out the costs, risks and migration path so you can decide with full information.",
  },
  partnership: {
    q: "Can you work alongside our internal IT and engineering teams?",
    a: "Yes. We typically work as an extension of your architecture and engineering teams, follow your governance and change processes, and hand over documentation and ownership so your organization is never dependent on us.",
  },
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    short: "EHR integration, clinical platforms and data for provider networks.",
    headline: "Clinical, operational and financial systems that finally work as one.",
    lede: "Hospital groups and provider networks run on an EHR, scheduling, billing and dozens of departmental systems that were never designed to work together. We design the architecture and build the integrations and platforms that connect them, securely and without disrupting care.",
    outcomes: [
      "One connected view across clinical, operational and financial systems",
      "Less duplicate data entry for clinical and administrative staff",
      "Architecture that stands up to privacy, security and regulatory review",
    ],
    challenges: [
      { h: "Systems that don't share data", b: "Patient, scheduling and billing data sit in separate systems, so staff re-key information and leadership works from inconsistent reports." },
      { h: "Integration done point to point", b: "Years of one-off interfaces have created a fragile web that is expensive to change and hard to audit." },
      { h: "Compliance slowing delivery", b: "Security and privacy requirements are addressed late, so programs stall at review instead of reaching production." },
    ],
    useCases: [
      { h: "EHR and systems integration", b: "A governed integration layer connecting the EHR with scheduling, billing, labs and departmental systems." },
      { h: "Clinical and practice platforms", b: "Platforms for scheduling, patient records and operations across sites, built around existing systems of record." },
      { h: "Patient and referrer portals", b: "Secure portals for appointments, documents and communication, integrated with the systems behind them." },
      { h: "Healthcare data platforms", b: "Consolidated operational and clinical data for reporting, audit and research, with clear lineage and access control." },
      { h: "Legacy modernization", b: "Incremental replacement of ageing clinical and administrative applications without interrupting care." },
      { h: "AI, where it fits", b: "Clinical documentation and coding assistance inside existing workflows, with clinician review of every output." },
    ],
    safeguards: [
      "HIPAA- and GDPR-aligned architecture and data handling",
      "Role-based access control and full audit trails",
      "Data residency and retention aligned to your policies",
      "Security review built into every release",
    ],
    faq: [
      { q: "Can you integrate with our existing EHR and enterprise systems?", a: "Yes. We integrate through the interfaces your EHR and enterprise systems expose, including standards-based APIs and HL7/FHIR where available, and design around constraints where they are not." },
      { q: "How do you handle patient data?", a: "Patient data is processed under your policies, with encryption, access controls and audit logging throughout. We never use client data to train models." },
      commonFaq.timeline,
    ],
    caseStudies: ["clinic-management-platform", "clinical-documentation-platform", "voice-driven-clinical-workflow"],
    keywords: ["enterprise healthcare software", "healthcare systems integration", "EHR integration services", "healthcare legacy modernization", "healthcare data platform"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    short: "Core system integration, data platforms and auditable workflows.",
    headline: "Modern financial platforms built around the core systems you can't switch off.",
    lede: "Banks, lenders and financial institutions depend on core systems that must keep running while the business around them changes. We design and deliver the integration, data and workflow platforms that let you modernize with control, traceability and regulatory confidence.",
    outcomes: [
      "Core, risk and finance data available through governed interfaces",
      "Reporting and reconciliation that no longer depends on manual work",
      "Every change and decision traceable for audit and regulators",
    ],
    challenges: [
      { h: "Core systems that are hard to change", b: "Core banking and finance platforms carry decades of logic, so even small changes carry high cost and risk." },
      { h: "Critical processes outside the systems", b: "Reconciliation, reporting and approvals often run on spreadsheets and email, which is slow and difficult to control." },
      { h: "Regulatory and audit pressure", b: "New regulation and audit findings demand traceability that legacy architectures were never designed to provide." },
    ],
    useCases: [
      { h: "Core system integration", b: "API and event layers that expose core banking, payments and ledger data safely to new products and channels." },
      { h: "Finance and reporting platforms", b: "Automated reconciliation, close and regulatory reporting with a full audit trail." },
      { h: "Workflow and approval systems", b: "Lending, onboarding and approval workflows with defined controls, segregation of duties and logging." },
      { h: "Enterprise data platforms", b: "A governed data layer across products and entities, with lineage that satisfies auditors." },
      { h: "Legacy modernization", b: "Phased migration from ageing platforms with parallel running and controlled cutover." },
      { h: "AI, where it fits", b: "Document extraction and review assistance for onboarding and compliance, with human sign-off and recorded reasoning." },
    ],
    safeguards: [
      "Full audit trails and traceability for every change",
      "Segregation of duties and approval controls",
      "Encryption, key management and access control by design",
      "Architecture aligned to SOC 2 and regulatory expectations",
    ],
    faq: [
      { q: "Can you work within our risk, security and change-management processes?", a: "Yes. We work within your existing governance, including architecture review boards, security assessments and change control, and design so those reviews pass first time." },
      commonFaq.systems,
      commonFaq.timeline,
    ],
    keywords: ["enterprise financial software development", "core banking integration", "financial services modernization", "fintech architecture consulting", "regulatory reporting platform"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    short: "Policy, claims and distribution systems, modernized and connected.",
    headline: "Modernize core insurance systems without stopping the business.",
    lede: "Carriers, MGAs and brokers run policy administration, claims and billing on platforms that are expensive to change and hard to integrate. We modernize around them in controlled phases, and connect them to the digital channels, partners and data your business now needs.",
    outcomes: [
      "Faster product and process changes without destabilizing core systems",
      "Connected policy, claims and billing data across the organization",
      "Broker, partner and customer channels integrated with systems of record",
    ],
    challenges: [
      { h: "Legacy policy and claims platforms", b: "Core systems hold critical logic but are costly to change, so every new product or regulation becomes a major project." },
      { h: "Manual work between systems", b: "Claims and underwriting depend on documents, email and re-keying between applications that do not share data." },
      { h: "Disconnected distribution", b: "Brokers and partners work through portals and file transfers that are slow to onboard and hard to govern." },
    ],
    useCases: [
      { h: "Core system modernization", b: "Phased modernization of policy administration, claims and billing with parallel running and controlled migration." },
      { h: "Claims and underwriting platforms", b: "Workflow platforms that bring documents, data and decisions into one governed process." },
      { h: "Broker and partner integration", b: "APIs and portals for quoting, binding and servicing, integrated with the systems of record." },
      { h: "Insurance data platforms", b: "A consolidated view of policy, claims and financial data for pricing, reserving and reporting." },
      { h: "Customer self-service", b: "Secure portals for policy changes, claims submission and documents, connected end to end." },
      { h: "AI, where it fits", b: "Document intake and triage that extracts data from submissions and claims, with adjusters and underwriters making every decision." },
    ],
    safeguards: [
      "Audit trails for every decision and data change",
      "Controlled migration with parallel running and rollback",
      "Data protection aligned to regulatory requirements",
      "Role-based access across internal and partner users",
    ],
    faq: [
      commonFaq.systems,
      { q: "How do you reduce the risk of modernizing core systems?", a: "We modernize in phases, run old and new side by side where needed, and migrate one capability at a time with clear rollback, so the business keeps operating throughout." },
      commonFaq.timeline,
    ],
    keywords: ["insurance software development", "policy administration modernization", "insurance systems integration", "claims platform development", "insurance legacy modernization"],
  },
  {
    slug: "legal",
    name: "Legal & Professional Services",
    short: "Matter, document and knowledge platforms integrated across the firm.",
    headline: "Firm-wide platforms for matters, documents and knowledge.",
    lede: "Law firms, corporate legal departments and professional services organizations run on practice management, document management, billing and CRM systems that rarely share data. We design and build the integrations and platforms that connect them, with confidentiality and governance built in.",
    outcomes: [
      "Matter, client and financial data connected across systems",
      "Knowledge that is findable and governed across the organization",
      "Secure client collaboration integrated with internal systems",
    ],
    challenges: [
      { h: "Fragmented practice systems", b: "Practice management, DMS, billing and CRM each hold part of the picture, so reporting and client service depend on manual effort." },
      { h: "Knowledge locked in silos", b: "Precedents and expertise sit across repositories and teams, so the organization repeatedly re-creates work it already has." },
      { h: "Strict confidentiality demands", b: "Ethical walls, client requirements and data protection rules make generic tools hard to adopt safely." },
    ],
    useCases: [
      { h: "Practice system integration", b: "A governed integration layer connecting practice management, DMS, billing, time and CRM." },
      { h: "Client portals and extranets", b: "Secure portals for document exchange, matter updates and requests, integrated with internal systems." },
      { h: "Knowledge platforms", b: "Firm-wide search and knowledge management across repositories, respecting ethical walls and permissions." },
      { h: "Workflow automation", b: "Intake, conflicts and approval workflows with defined controls and logging." },
      { h: "Reporting and analytics", b: "Matter profitability, utilization and pipeline reporting from consolidated data." },
      { h: "AI, where it fits", b: "Document review and drafting assistance over your own precedents, with sources cited and lawyers accountable for every output." },
    ],
    safeguards: [
      "Ethical walls and matter-level permissions enforced in every system",
      "Client data kept within your environment and jurisdiction",
      "Full audit trails of access and changes",
      "Security architecture aligned to client and regulatory requirements",
    ],
    faq: [
      { q: "Can you integrate with our practice and document management systems?", a: "Yes. We integrate with the practice management, DMS, billing and CRM platforms you already run, using their supported interfaces." },
      commonFaq.partnership,
      commonFaq.timeline,
    ],
    keywords: ["legal technology development", "law firm systems integration", "legal knowledge management platform", "enterprise legal software", "professional services software development"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    short: "ERP, MES and shop-floor systems connected into one operational picture.",
    headline: "Connect ERP, MES and the shop floor into one operational picture.",
    lede: "Manufacturers run planning in ERP, production in MES and quality in separate systems, with spreadsheets filling the gaps. We design the architecture and build the integrations, data platforms and operational applications that give leadership and plants the same, current view.",
    outcomes: [
      "Planning, production and quality data connected across sites",
      "Fewer manual handoffs between enterprise and plant systems",
      "Operational reporting leadership and plants can both trust",
    ],
    challenges: [
      { h: "ERP and plant systems out of step", b: "Planning, inventory and production data diverge between ERP, MES and plant tools, so decisions rely on reconciliation." },
      { h: "Ageing plant applications", b: "Critical line-side and quality systems run on unsupported technology that is risky to change." },
      { h: "Inconsistent data across sites", b: "Each plant records data differently, making enterprise-wide reporting slow and unreliable." },
    ],
    useCases: [
      { h: "ERP and MES integration", b: "A governed integration layer keeping orders, inventory and production status consistent across systems." },
      { h: "Operational data platforms", b: "Consolidated production, quality and maintenance data across plants, with consistent definitions." },
      { h: "Plant and quality applications", b: "Applications for quality, traceability and maintenance, integrated with enterprise systems." },
      { h: "Legacy modernization", b: "Phased replacement of ageing plant applications without disrupting production." },
      { h: "Supplier and partner integration", b: "Integrations and portals for forecasts, orders and quality data with suppliers." },
      { h: "AI, where it fits", b: "Search across manuals, procedures and maintenance history, so operational knowledge stays available to every site." },
    ],
    safeguards: [
      "Segregation between enterprise IT and operational technology networks",
      "Changes scheduled and tested around production windows",
      "Traceability of quality and production records",
      "Role-based access across plants and partners",
    ],
    faq: [
      commonFaq.systems,
      { q: "Can you work across multiple plants and regions?", a: "Yes. We design for multi-site rollout, with shared standards and integrations that accommodate local systems and processes." },
      commonFaq.timeline,
    ],
    keywords: ["manufacturing software development", "ERP MES integration", "manufacturing data platform", "manufacturing systems modernization", "enterprise manufacturing software"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    short: "TMS, WMS and partner integrations for end-to-end visibility.",
    headline: "End-to-end supply chain visibility across every system and partner.",
    lede: "3PLs, shippers and distributors run transport, warehouse and order systems alongside carrier and customer platforms that all hold part of the picture. We design and build the integration and data platforms that connect them, so operations act on one current view.",
    outcomes: [
      "Shipment, inventory and order status visible across systems and partners",
      "Exceptions identified early and routed to the right team",
      "Faster onboarding of carriers, customers and partners",
    ],
    challenges: [
      { h: "Visibility split across systems", b: "TMS, WMS, ERP and carrier portals each show part of the picture, so status is assembled manually." },
      { h: "Slow partner onboarding", b: "Every new carrier or customer means another EDI map, API or file feed, built and maintained by hand." },
      { h: "Legacy operational platforms", b: "Core warehouse and transport systems are difficult to extend as volumes and service models change." },
    ],
    useCases: [
      { h: "TMS, WMS and ERP integration", b: "A governed integration layer keeping orders, inventory and shipments consistent across systems." },
      { h: "Partner integration platforms", b: "Standardized EDI and API onboarding for carriers, customers and suppliers." },
      { h: "Visibility and control towers", b: "Real-time tracking and exception management across the network." },
      { h: "Customer portals", b: "Self-service tracking, documents and reporting for customers, integrated with operational systems." },
      { h: "Supply chain data platforms", b: "Consolidated operational data for performance, cost and capacity reporting." },
      { h: "AI, where it fits", b: "Exception and delay prediction that alerts planners early, with people deciding the response." },
    ],
    safeguards: [
      "Resilient integrations with monitoring, retries and alerting",
      "Role-based access for internal teams, customers and partners",
      "Audit trails for operational changes",
      "Architecture designed for peak volumes",
    ],
    faq: [
      { q: "Can you integrate with our existing TMS, WMS and partner networks?", a: "Yes. We integrate with your existing platforms and partners through APIs, EDI and file-based interfaces, and standardize how new partners are onboarded." },
      commonFaq.partnership,
      commonFaq.timeline,
    ],
    keywords: ["logistics software development", "TMS WMS integration", "supply chain visibility platform", "EDI integration services", "enterprise logistics software"],
  },
  {
    slug: "retail",
    name: "Retail & E-commerce",
    short: "Commerce, inventory and order platforms integrated across channels.",
    headline: "One consistent view of inventory, orders and customers across every channel.",
    lede: "Retailers and brands run e-commerce, stores, marketplaces, ERP and fulfilment on separate platforms that rarely agree. We design and build the integration, order management and data platforms that keep them consistent as channels and volumes grow.",
    outcomes: [
      "Accurate inventory and order status across channels",
      "Fewer manual interventions between commerce, ERP and fulfilment",
      "Platforms that handle peak trading reliably",
    ],
    challenges: [
      { h: "Inventory that differs by system", b: "Stock levels drift between ERP, stores, e-commerce and marketplaces, leading to overselling and lost sales." },
      { h: "Order flows held together manually", b: "Orders move between platforms through batch jobs and manual fixes that fail under load." },
      { h: "Platforms that limit growth", b: "Adding a channel, market or fulfilment partner requires custom work every time." },
    ],
    useCases: [
      { h: "Commerce and ERP integration", b: "Governed integrations keeping products, prices, stock and orders consistent across platforms." },
      { h: "Order management", b: "Centralized order orchestration across stores, warehouses and fulfilment partners." },
      { h: "Marketplace and partner integration", b: "Standardized onboarding of marketplaces, suppliers and logistics partners." },
      { h: "Retail data platforms", b: "Consolidated sales, inventory and customer data for planning and reporting." },
      { h: "Platform modernization", b: "Phased migration from legacy commerce platforms without disrupting trading." },
      { h: "AI, where it fits", b: "Customer service assistance grounded in live order and inventory data, with escalation to staff." },
    ],
    safeguards: [
      "PCI DSS-aware architecture for payment flows",
      "Load testing and resilience planning for peak trading",
      "Customer data protection and consent management",
      "Monitoring and alerting on every critical integration",
    ],
    faq: [
      commonFaq.systems,
      { q: "Can you deliver around our peak trading periods?", a: "Yes. We plan releases around your trading calendar, load-test ahead of peak, and respect your change freezes." },
      commonFaq.timeline,
    ],
    keywords: ["retail software development", "e-commerce ERP integration", "order management system development", "omnichannel retail platform", "enterprise e-commerce development"],
  },
  {
    slug: "education-research",
    name: "Education & Research",
    short: "Research platforms, data pipelines and institutional systems integration.",
    headline: "Institutional and research platforms that scale beyond a single lab.",
    lede: "Universities, research institutes and medical schools run student, research and administrative systems alongside tools built lab by lab. We design and build the platforms, data pipelines and integrations that turn them into maintainable, institution-wide infrastructure.",
    outcomes: [
      "Research workflows that are repeatable and shareable across teams",
      "Institutional systems connected and consistent",
      "Data governed to meet funder, ethics and privacy requirements",
    ],
    challenges: [
      { h: "Research tools that don't scale", b: "Analysis depends on scripts and tools maintained by individuals, making work hard to reproduce or extend." },
      { h: "Disconnected institutional systems", b: "Student, research, finance and learning systems each hold part of the picture." },
      { h: "Data governance requirements", b: "Funders, ethics boards and privacy law require controls that ad-hoc tools cannot provide." },
    ],
    useCases: [
      { h: "Research platforms", b: "Applications that manage datasets, run analysis and visualize results in one governed workflow." },
      { h: "Research data pipelines", b: "Reliable pipelines for collecting, processing and storing research data at scale." },
      { h: "Institutional systems integration", b: "Integration across student, learning, research and finance systems." },
      { h: "Audit and analytics tools", b: "Platforms for audit, assessment and reporting shared across internal and external reviewers." },
      { h: "Legacy modernization", b: "Rebuilding critical departmental tools on maintainable, supported technology." },
      { h: "AI, where it fits", b: "Model-based analysis integrated into research workflows, with results that remain reproducible." },
    ],
    safeguards: [
      "Data governance aligned to funder, ethics and privacy requirements",
      "Role-based access for internal and external collaborators",
      "Reproducible, versioned analysis workflows",
      "Documentation and handover to institutional IT",
    ],
    faq: [
      { q: "Can you work with our central IT and research computing teams?", a: "Yes. We work within institutional standards and hand over documented, supported systems to central IT or research computing." },
      commonFaq.partnership,
      commonFaq.timeline,
    ],
    caseStudies: ["research-data-analysis-tool", "medical-audit-analytics"],
    keywords: ["research software development", "university systems integration", "research data platform", "higher education software development", "enterprise education software"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
