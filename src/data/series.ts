// Source of truth for the 8 editorial series on the Jaypore Labs journal.
// Adding a series here makes it appear at /series/<slug> automatically.

export interface SeriesMeta {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  hook: string;
  description: string;
  audience: string;
  postCount: number;
}

export const series: SeriesMeta[] = [
  {
    slug: "ai-agents-in-industry",
    title: "AI agents in industry",
    shortTitle: "Agents in industry",
    eyebrow: "Series 01",
    hook: "Where agents actually earn their keep — and where they fall on their face.",
    description:
      "A grounded look at AI agents working in real industries: what teams are deploying, what's surviving past the pilot, and how to think about agent boundaries when the stakes aren't synthetic.",
    audience: "Operators, product leaders, and engineering managers evaluating agentic systems for their domain.",
    postCount: 25,
  },
  {
    slug: "claude-code-in-business",
    title: "Claude Code in business",
    shortTitle: "Claude Code in business",
    eyebrow: "Series 02",
    hook: "AI employees, marketing copilots, and case studies where Claude Code is doing the work.",
    description:
      "Industry-by-industry case studies of how Claude Code (and AI assistants generally) are showing up as 'AI employees' — in marketing, ops, sales, support, and back-office workflows. Real workflows, real outputs, real numbers when we have them.",
    audience: "Founders, COOs, and team leads who want to put AI to work — not just talk about it.",
    postCount: 25,
  },
  {
    slug: "ai-for-software-development",
    title: "AI for software development",
    shortTitle: "AI for shipping software",
    eyebrow: "Series 03",
    hook: "How Claude Code reshapes a senior engineer's day — role by role, task by task.",
    description:
      "Concrete, practitioner-level walkthroughs of using AI assistants across every tech role: backend, frontend, mobile, data, DevOps, SRE, QA, security, ML. What it changes, what stays the same, what's still a trap.",
    audience: "Working software engineers who want to actually get faster — not just use the buzzwords.",
    postCount: 25,
  },
  {
    slug: "building-agents",
    title: "Building agents",
    shortTitle: "Building agents",
    eyebrow: "Series 04",
    hook: "Managed agents, custom agents, skills files — how to build them so they don't melt under load.",
    description:
      "An engineering-grade series on building AI agents: planning vs. acting, tool design, skill files, managed agents, sub-agents, context management, failure modes. Less theory, more 'what we changed when this broke'.",
    audience: "Engineers building agentic features in production apps.",
    postCount: 25,
  },
  {
    slug: "predictable-ai-output",
    title: "Predictable AI output",
    shortTitle: "Predictable output",
    eyebrow: "Series 05",
    hook: "Making LLMs do the same useful thing twice in a row.",
    description:
      "Tactics for getting correct, reliable, and reproducible output from probabilistic models — structured outputs, schemas, constrained decoding, retries, judge patterns, and the unglamorous engineering that turns 'demo magic' into 'shippable feature'.",
    audience: "Engineers shipping LLM features into production where wrong answers cost real money.",
    postCount: 25,
  },
  {
    slug: "testing-in-the-age-of-ai",
    title: "Testing in the age of AI",
    shortTitle: "Testing for AI",
    eyebrow: "Series 06",
    hook: "Your old test pyramid won't catch what your new model is doing.",
    description:
      "Reframing software testing for AI-enabled products: where unit tests still earn their keep, what integration tests mean now, and the new disciplines (golden sets, drift checks, behavioural assertions) that have to join the suite.",
    audience: "QA leads and engineers building or maintaining AI-enabled products.",
    postCount: 25,
  },
  {
    slug: "evals-and-output-testing",
    title: "Evals & output testing",
    shortTitle: "Evals",
    eyebrow: "Series 07",
    hook: "Evals are the load-bearing column nobody wants to pour. Pour it anyway.",
    description:
      "Deep, practical dives on LLM evaluation: building eval sets, running them in CI, scoring agent trajectories, judging open-ended outputs, catching silent regressions before users do.",
    audience: "Tech leads and ML engineers responsible for an AI product's output quality.",
    postCount: 25,
  },
  {
    slug: "mcp-and-ai-protocols",
    title: "MCP & AI protocols",
    shortTitle: "MCP",
    eyebrow: "Series 08",
    hook: "The standards quietly rewiring how AI tools connect to everything else.",
    description:
      "A working engineer's tour of MCP and the surrounding protocol layer: building MCP servers, securing them, debugging them, hooking them into agents, and what's coming next in tool-use standards.",
    audience: "Engineers and tooling leads designing AI integrations that have to last more than one quarter.",
    postCount: 25,
  },
];

export function findSeriesBySlug(slug: string): SeriesMeta | undefined {
  return series.find((s) => s.slug === slug);
}
