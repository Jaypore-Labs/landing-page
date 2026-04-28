# Editorial curriculum — Jaypore Labs

Eight series. 25 articles each. 200 articles total.

This document is the **single queue** the `/daily-article` skill consumes. Each article has:

- **#** — order within the series (used as `seriesOrder` frontmatter)
- **Slug** — kebab-case, MDX filename
- **Title** — final headline
- **Hook** — the one-line tease (used in eyebrow + share copy)
- **Beats** — 3–5 short outline bullets

When an article ships, prefix the row with `✅` and add the publish date. The remaining `📝` rows are the queue.

---

## Series 01 — AI agents in industry

**Slug:** `ai-agents-in-industry` · **Audience:** operators, product leaders, EMs evaluating agents for their domain.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `agent-maturity-curve` | The agent maturity curve | What "agent in production" actually means · Pilot/POC/scoped/owned/retired · Where most teams plateau · How to know which rung you're on · The boring milestones that matter |
| 02 | `agents-in-healthcare` | Agents in healthcare: scribe yes, nurse no | Drawing the line that keeps patients safe · Documentation vs. decision · The audit-trail rule · A clinic that got it right · Where the next decade goes |
| 03 | `agents-in-legal` | Agents in legal: contract review with receipts | What partners trust, what they don't · The clause-classifier as the load-bearing piece · Citation discipline · Why "summarise this contract" is the wrong ask · A real workflow |
| 04 | `agents-in-finance-compliance` | Agents in finance: compliance with an audit trail | Evidence over output · The reviewer-of-record pattern · Tooling for explainability · Regulator-ready logging · Cost of a missed flag |
| 05 | `agents-in-customer-support` | Agents in support: tier-1 deflection without tier-1 backlash | Where customers want self-service, where they don't · The escalation contract · Tone as a feature · Real numbers from a deployed agent · The handoff design |
| 06 | `agents-in-sales` | Agents in sales: SDR copilots that don't get you blocked | The ICP-respect rule · Personalisation that doesn't lie · Cadence + suppression · Account-protection patterns · A pilot that worked |
| 07 | `agents-in-marketing` | Agents in marketing: campaign agents and the brand-voice problem | Brand voice as a constraint, not a vibe · The style-guide-as-eval pattern · Approval gates · How to measure on-brand-ness · A weekly campaign loop |
| 08 | `agents-in-hr-recruiting` | Agents in HR: recruiting agents and the bias receipts they leave behind | The auditability requirement · Screening agents vs. ranking agents · A bias-monitoring eval set · Candidate-experience as a metric · What to never automate |
| 09 | `agents-in-manufacturing` | Agents on the factory floor | Maintenance prediction + work-order drafting · The PLC-data integration · Safety boundary · ROI math the plant manager believes · The deployment sequence |
| 10 | `agents-in-logistics` | Agents in logistics: route-planning with a human in the loop | Where determinism beats LLMs · The exception-handler pattern · Driver-app UX · Real-world disruption response · How to start small |
| 11 | `agents-in-insurance` | Agents in insurance: claims processing, speed vs. accuracy | The 70/30 split · Fraud-flag agents · Customer-comms drafts · Reviewer workflow · Compliance tracking |
| 12 | `agents-in-real-estate` | Agents in real estate: lead qualification at speed | Disqualification as a feature · Texting agents and the TCPA reality · CRM hygiene · Agent-as-receptionist · The 5-minute rule |
| 13 | `agents-in-education` | Agents in education: tutor agents and the assessment problem | What tutoring is, what it isn't · Curriculum-aware retrieval · Assessment-creation guardrails · Equity considerations · A working tutor pattern |
| 14 | `agents-in-government` | Agents in government: constituent services with public-records care | The records retention rule · Privacy boundaries · Translation as a primary feature · A municipality pilot · Compliance posture |
| 15 | `agents-in-retail` | Agents in retail: shoppers that don't feel creepy | Recommend without surveilling · Inventory-aware suggestions · The chat surface vs. the page · A weekly cohort review · Returns as a UX |
| 16 | `agents-in-energy` | Agents in energy: grid monitoring with a safety case | Where LLMs aid, not act · Anomaly summarisation · Operator override defaults · The dispatcher's day · Why this is a multi-year arc |
| 17 | `agents-in-construction` | Agents in construction: estimator copilots in margin-thin work | RFP intake + redline · Quantity-takeoff assist · Subcontractor coordination · Field photo classification · A pilot blueprint |
| 18 | `agents-in-pharma` | Agents in pharma: literature review with citation discipline | Sourcing-first · Hallucination as a regulatory risk · Reviewer workflow · A literature-summary agent · The escalation tree |
| 19 | `agents-in-media` | Agents in media: news summary with a corrections workflow | Speed vs. accuracy in newsroom contexts · Sourcing chain · Corrections automation · Editorial guardrails · A real desk's workflow |
| 20 | `agents-in-hospitality` | Agents in hospitality: reservations + recovery | Recovery as the killer use case · Personalisation without overreach · Front-desk handoff · Loyalty data discipline · A property pilot |
| 21 | `agents-in-saas` | In-product agents that earn renewal | Adoption as the success metric · The 30-day curve · Onboarding agents · Power-user agents · Renewal-risk indicators |
| 22 | `agents-in-agriculture` | Agents in agriculture: yield prediction with weather data | Multimodal inputs · Field-trip data labelling · Edge deployment · Insurance-data partnerships · A grower's day |
| 23 | `agents-in-non-profit` | Agents for non-profits: donor research on a tight budget | Doing more with less · Donor-research workflows · Grant-application copilots · Privacy + IRS rules · A foundation pilot |
| 24 | `agents-in-telecom` | Agents in telecom: diagnostics that route faster than tier-1 | Modem-log triage · NLP over support tickets · Reroute decisions · Field-tech preparation · CSAT effects |
| 25 | `agents-in-research` | Agents for research synthesis | Literature-scanning workflows · Note-taking agents · Citation chains · Lab-meeting prep · The PI's-eye view |

---

## Series 02 — Claude Code in business

**Slug:** `claude-code-in-business` · **Audience:** founders, COOs, team leads putting AI to work.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `ai-employee-not-bot` | An AI employee isn't a bot — it's a teammate with a desk | Reframe · The job-description test · Reporting line · The 'first 90 days' for an AI employee · How to fire one |
| 02 | `claude-code-marketing-brief` | Marketing: the campaign-brief copilot | Brief drafting from a transcript · Reviewer loop · Approval gates · Outcome metrics · A campaign anatomy |
| 03 | `claude-code-seo-audits` | Marketing: SEO audits as a Claude Code workflow | The audit checklist · Site-crawl integration · Issue prioritisation · Re-running on a schedule · A real audit |
| 04 | `claude-code-sales-discovery` | Sales: discovery summariser that keeps the human | The transcript-to-MEDDIC pattern · Speaker labels · Action-item discipline · CRM hygiene · A weekly review |
| 05 | `claude-code-pipeline-review` | Sales: pipeline reviewer + forecast challenger | Pipeline hygiene checks · Stage-conversion sanity · Forecast challengers · Manager prep · A Friday-morning loop |
| 06 | `claude-code-onboarding-playbook` | CS: onboarding playbook generator per customer | Per-account templates · Stakeholder map · Risk flags · Plan revision · A 30-day flow |
| 07 | `claude-code-renewal-risk` | CS: renewal-risk scoring that explains itself | Signal mix · Explanation as the product · CSM workflow · Action triggers · A retention dashboard |
| 08 | `claude-code-sop-writer` | Operations: the SOP writer that updates itself | SOP drafting + maintenance · Versioning · Approver workflow · How to detect drift · A team's library |
| 09 | `claude-code-vendor-briefs` | Operations: vendor-comparison briefs in 30 minutes | The brief template · Disqualification rules · Pricing-summary discipline · Decision-record output · A real example |
| 10 | `claude-code-ap-audit` | Finance: AP-invoice auditor on a small ops team | Three-way match · Anomaly flags · Approver routing · Audit trail · A month-end run |
| 11 | `claude-code-forecast-commentary` | Finance: variance commentary that reads like the CFO wrote it | Commentary template · Source linking · Reviewer loop · Distribution discipline · A monthly close |
| 12 | `claude-code-recruiting-jd` | Recruiting: JD writer + screening-question generator | Role-card input · Inclusive language pass · Question rubric · Calibration loop · A team's first 10 hires |
| 13 | `claude-code-sourcing-brief` | Recruiting: sourcing brief from a single role description | Persona generation · Boolean strings · Outreach drafts · Pipeline target math · A search anatomy |
| 14 | `claude-code-policy-answerer` | Legal-ops: internal policy answerer with citation discipline | Policy library ingestion · Cite-or-don't · Question logging · Audit posture · A help-channel substitute |
| 15 | `claude-code-feedback-synthesis` | Product: synthesising 1,000 tickets into 7 themes | Ticket pipeline · Clustering vs. tagging · Theme write-up · PM review · A monthly ritual |
| 16 | `claude-code-prd-draft` | Product: PRD draft from a discovery transcript | Transcript intake · Goal/non-goal scaffolding · Risk register · Reviewer loop · A team's PRD library |
| 17 | `claude-code-sprint-planning` | EM: sprint-planning copilot for managers | Backlog synthesis · Capacity sanity · Dependency surfacing · Risk callouts · A planning meeting anatomy |
| 18 | `claude-code-pr-reviewer` | EM: PR reviewer that flags scope creep | Diff intake · Scope diff · Owner-respect rule · Comment etiquette · A weekly metric |
| 19 | `claude-code-onboarding-buddy` | HR: onboarding-buddy automation | Day-1/7/30 emails · Question logging · Manager-prompt loop · Equity language · A new-hire's first month |
| 20 | `claude-code-perf-review` | HR: performance-review draft assistant | Self-review intake · Manager bias check · Calibration prep · Bias receipts · A review cycle |
| 21 | `claude-code-internal-newsletter` | Comms: internal newsletter that captures the actual week | Source aggregation · Tone calibration · Editorial review · Distribution · A weekly cadence |
| 22 | `claude-code-crisis-comms` | Comms: crisis-comms first-draft drafter | Severity tiers · Stakeholder map · Draft templates · Legal review hook · A tabletop exercise |
| 23 | `claude-code-investor-update` | Founder ops: investor-update auto-drafter | Metrics intake · Narrative scaffolding · Ask discipline · Founder edit · A monthly ritual |
| 24 | `claude-code-board-deck` | Founder ops: board-deck content from raw metrics | Slide skeleton · Commentary block · Risk pages · Reviewer loop · A real deck |
| 25 | `claude-code-handoff-contract` | The hand-off contract — turning an AI employee from prototype to permanent | The four-question contract · Owner · KPIs · Failure mode · How to retire it |

---

## Series 03 — AI for software development

**Slug:** `ai-for-software-development` · **Audience:** working software engineers across roles.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `senior-engineer-day-with-claude-code` | A senior engineer's day with Claude Code | The shape of a real day · Where it saves hours · Where it doesn't · How to hand off context · End-of-day loop |
| 02 | `backend-api-design-with-claude-code` | Backend: API design + endpoint scaffolding | The contract-first pattern · OpenAPI scaffolding · Test-first generation · Code-review loop · A real refactor |
| 03 | `backend-migrations-with-claude-code` | Backend: database migrations without fear | Migration-pair pattern · Rollback drills · Production-shadow testing · The reviewer's checklist · A real migration |
| 04 | `frontend-component-scaffolding` | Frontend: component scaffolding + state machines | XState sketches · Type-driven generation · Storybook discipline · Visual review · A feature in an afternoon |
| 05 | `frontend-a11y-audits` | Frontend: accessibility passes that finally get done | Axe + LLM combo · Issue triage · Fix-recipe library · Reviewer loop · A monthly a11y ritual |
| 06 | `mobile-ios-swiftui-translation` | Mobile (iOS): UIKit-to-SwiftUI translation | Component-by-component approach · State migration · Snapshot tests · Performance check · A screen at a time |
| 07 | `mobile-android-compose-rollout` | Mobile (Android): Compose rollout audits | Module audit · Theming sanity · Performance regressions · Test coverage · A migration plan |
| 08 | `fullstack-feature-in-an-afternoon` | Full-stack: a real feature in an afternoon | The vertical slice · Test-first scaffold · Deploy preview · Reviewer loop · The next-morning cleanup |
| 09 | `devops-terraform-refactor` | DevOps: Terraform refactor with a watchful copilot | Module extraction · State surgery · Plan-diff discipline · Reviewer ritual · A real refactor |
| 10 | `devops-ci-2am-diagnosis` | DevOps: CI pipeline diagnosis at 2am | Log triage · Root-cause first-draft · Fix-and-document loop · Monitoring follow-up · A real incident |
| 11 | `sre-runbook-generation` | SRE: runbook generation that captures the response | Incident-to-runbook pipeline · Owner discipline · Drill loop · Search-friendly format · A real runbook |
| 12 | `sre-postmortem-drafts` | SRE: postmortem first drafts that don't blame | Timeline reconstruction · Contributing-factor framing · Action-item discipline · Reviewer loop · A real postmortem |
| 13 | `data-pipeline-explainer` | Data: pipeline DAG explainer + drift detector | DAG documentation · Drift signals · Alerting workflow · Reviewer loop · A real pipeline |
| 14 | `data-sql-refactor-lineage` | Data: SQL refactors and lineage maps | Query archaeology · Lineage extraction · Refactor patterns · Reviewer loop · A real refactor |
| 15 | `ml-eval-harness-from-spec` | ML: eval harness from a spec | Spec intake · Test-case generation · CI integration · Reviewer loop · A real harness |
| 16 | `ml-feature-store-rewrites` | ML: feature-store query rewrites | Query archaeology · Performance pass · Lineage update · Reviewer loop · A real rewrite |
| 17 | `qa-test-plan-from-criteria` | QA: test-plan generation from acceptance criteria | Criteria intake · Edge-case mining · Coverage matrix · Reviewer loop · A real test plan |
| 18 | `qa-flaky-test-triage` | QA: flaky test triage at scale | Flake-rate measurement · Quarantine pattern · Root-cause workflow · Trend tracking · A real triage |
| 19 | `security-code-pattern-audits` | Security: code-pattern audits and CVE sweeps | Pattern library · Sweep automation · Triage loop · Reviewer discipline · A real audit |
| 20 | `security-threat-model-draft` | Security: threat-model first draft from architecture | Diagram intake · STRIDE pass · Mitigation drafting · Reviewer loop · A real model |
| 21 | `architect-vendor-comparison` | Architect: vendor-comparison architecture doc | Requirements intake · Trade-off matrix · Decision record · Reviewer loop · A real doc |
| 22 | `em-1on1-prep` | EM: 1:1 prep + roadmap sanity check | Prep template · Concern scan · Roadmap audit · Follow-up discipline · A weekly ritual |
| 23 | `tech-writer-doc-audits` | Tech writer: doc audits that catch what humans miss | Audit checklist · Search-intent diff · Reviewer loop · Update workflow · A real audit |
| 24 | `tech-lead-pr-reviews` | Tech lead: PR reviews deeper than 'lgtm' | Review template · Risk surfacing · Mentorship loop · Comment etiquette · A real review |
| 25 | `oss-maintainer-triage` | OSS maintainer: triage + contributor-guide updates | Triage automation · Contributor experience · Issue deduplication · Reviewer loop · A real triage |

---

## Series 04 — Building agents

**Slug:** `building-agents` · **Audience:** engineers building agentic features in production apps.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `plan-vs-act-loop` | Plan vs. act: the agent loop everyone gets wrong | The two-step pattern · Why one-shot fails · Plan-as-doc · Act-as-tool · A real loop |
| 02 | `tool-design-like-apis` | Tool design: write tools the way you write APIs | Names, args, errors · Discoverability · Versioning · A tool review checklist · A real tool |
| 03 | `skills-files-recipes` | Skills files: recipes the model can call | Skills as composable units · Trigger conditions · Reviewer loop · Versioning · A real skill |
| 04 | `managed-agents` | Managed agents (Anthropic API): when to reach for them | The build-vs-buy table · Cost shape · Migration path · Where they shine · A real adoption |
| 05 | `sub-agents` | Sub-agents: when 1+1 actually equals 2 | Boundaries that work · Context isolation · Result-merging · Failure isolation · A real composition |
| 06 | `context-engineering` | Context engineering: what to load, what to defer | The context budget · Lazy loading · Summary-first patterns · Compaction discipline · A real architecture |
| 07 | `judge-pattern` | The judge pattern: agents that grade other agents | When to spend the extra call · Judge calibration · Cost accounting · Failure modes · A real deployment |
| 08 | `agent-memory` | Agent memory: what to write down, what to forget | The memory contract · Writeback discipline · Forgetting on purpose · Privacy boundary · A real architecture |
| 09 | `tool-failure-modes` | Tool failure modes: timeouts, retries, idempotency | The classic four · Idempotency keys · Retry budgets · Reviewer signal · A real outage post-mortem |
| 10 | `long-horizon-tasks` | Long-horizon tasks: keeping an agent on rails for hours | Checkpointing · Plan-revision · Cost ceilings · Recovery patterns · A real long-runner |
| 11 | `agent-observability` | Agent observability: traces that tell you what happened | Span model · Tool-call attributes · Cost breakdowns · Reviewer UX · A trace anatomy |
| 12 | `prompt-evolution` | Prompt evolution: how agents get worse without you noticing | Prompt drift · Eval triggers · Revert patterns · Reviewer ritual · A real regression |
| 13 | `cost-guardrails` | Cost guardrails: stop runaway agents before billing does | Per-task ceilings · Org budgets · Alerting · Kill-switch defaults · A real overrun |
| 14 | `safety-guardrails` | Safety guardrails: refusal patterns that don't make agents useless | Refuse-then-route · Reason transparency · Auditing · Reviewer flags · A real refusal library |
| 15 | `multimodal-agents` | Multimodal agents: when adding vision actually helps | The vision-as-input rule · Latency cost · Quality gate · Reviewer discipline · A real workflow |
| 16 | `voice-first-agents` | Voice-first agents: the latency budget you live within | The 250ms ceiling · Streaming TTS · Interruption handling · Eval cadence · A real voice agent |
| 17 | `browsing-agents` | Browsing agents: scraping vs. structured tools | The 'turn it into a tool' rule · Sandboxing · Rate limits · Eval discipline · A real browser agent |
| 18 | `code-writing-agents` | Code-writing agents: the test-first discipline | Tests-as-spec · Diff review · Sandbox runs · Human gate · A real generation loop |
| 19 | `agents-in-ci` | Deploying agents in CI: scoped, audited, repeatable | Scoped tokens · Audit logs · Reproducibility · Review gates · A real pipeline |
| 20 | `agent-versioning` | Versioning agent behaviour: prompts as source code | Repo layout · Review process · Release notes · Rollback · A real release flow |
| 21 | `agent-ab-tests` | Agent A/B tests: comparing without confusing users | Cohort design · Statistical power for LLM evals · Cost accounting · Reviewer rituals · A real experiment |
| 22 | `agent-rollback` | Agent rollback: kill switches on day one | Switch design · Per-feature granularity · Comms plan · Drill cadence · A real rollback |
| 23 | `agents-that-explain` | Building agents that explain themselves | The reasoning trace as a product · Explanation eval · Reviewer UX · Privacy considerations · A real explainer |
| 24 | `multi-agent-orchestration` | Multi-agent orchestration: from kitchen brigade to opera | Orchestration patterns · Failure-isolation rules · Cost accounting · Reviewer ritual · A real org |
| 25 | `retiring-an-agent` | Retiring an agent | The 'workflow outgrew it' signal · Decommission checklist · Knowledge capture · Stakeholder comms · A real sunset |

---

## Series 05 — Predictable AI output

**Slug:** `predictable-ai-output` · **Audience:** engineers shipping LLM features into production.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `probabilistic-with-deterministic-contracts` | Why probabilistic systems still need deterministic contracts | The contract pattern · Schema-first design · Tolerance bands · Reviewer loop · A real contract |
| 02 | `structured-output` | Structured output: JSON mode, schemas, why one beats the other | Comparison · Failure modes · Validation layer · Reviewer signal · A real implementation |
| 03 | `constrained-decoding` | Constrained decoding: the underrated lever | Where grammars beat retries · Cost shape · Tooling state · Reviewer ritual · A real adoption |
| 04 | `temperature-top-p-tradeoff` | Temperature, top-p, and the production tradeoff | Defaults that actually work · Per-feature tuning · Variance accounting · Reviewer feedback · A real ablation |
| 05 | `retry-strategies` | Retry strategies that don't compound errors | Exponential backoff with sense · Idempotency · Cost ceilings · Reviewer signal · A real retry library |
| 06 | `judge-pattern-confidence` | The judge pattern for confidence | Pay double for certainty · Calibration · Cost accounting · Reviewer ritual · A real shipping decision |
| 07 | `self-consistency` | Self-consistency: when N=3 beats a smarter prompt | The voting pattern · Cost shape · Failure modes · Reviewer signal · A real benchmark |
| 08 | `prompt-invariance` | Prompt invariance: prompts that survive paraphrase | The paraphrase eval · Robustness loop · Reviewer ritual · A real test set · A real fix |
| 09 | `few-shot-drift` | Few-shot drift: why golden examples poison new versions | The example half-life · Curation discipline · Reviewer loop · A real cleanup · How to avoid |
| 10 | `output-validation-libs` | Output validation: pydantic, zod, and friends in production | Schema layering · Error surface · Reviewer ritual · Performance cost · A real stack |
| 11 | `idempotency-keys-for-llm-calls` | Idempotency keys for LLM calls | Why deduping matters · Key design · Storage · Reviewer signal · A real implementation |
| 12 | `versioning-model-and-prompt` | Versioning model + prompt as a unit | The release-bundle pattern · Migration · Rollback · Reviewer ritual · A real release |
| 13 | `caching-deterministic-prefixes` | Caching deterministic prefixes | Where caching wins · TTL design · Invalidation · Reviewer ritual · A real saving |
| 14 | `confidence-calibration` | Confidence calibration: when 'I don't know' is the answer | The IDK pattern · Threshold tuning · Reviewer ritual · A real shipping decision · The honest UX |
| 15 | `fallback-chains` | Fall-back chains: cheap → expensive → human | Chain design · Cost shape · Latency budget · Reviewer ritual · A real chain |
| 16 | `output-postprocessors` | Output post-processors that don't hide the truth | The transparency rule · Logging discipline · Reviewer ritual · Where they go wrong · A real post-processor |
| 17 | `refusal-grammars` | Refusal grammars: predictable, not surprising | The refusal vocabulary · Routing rules · Reviewer ritual · A real refusal library · The user's experience |
| 18 | `hallucination-checks` | Hallucination checks: cite-or-it-didn't-happen | The citation contract · Source linking · Reviewer ritual · A real implementation · Edge cases |
| 19 | `determinism-for-tools` | Determinism for tool calls: keys, ordering, side-effects | The side-effect rule · Tool key design · Reviewer ritual · A real tool · Failure modes |
| 20 | `pinning-model-versions` | Pinning model versions through provider migrations | Version pinning · Migration drills · Reviewer ritual · A real migration · The cost shape |
| 21 | `drift-catchers` | Drift catchers: detecting style shifts | The style eval · Trigger thresholds · Reviewer ritual · A real catch · Recovery |
| 22 | `output-diffing-in-ci` | Output diffing in CI | The diff-as-eval pattern · Tooling · Reviewer ritual · A real catch · How to roll out |
| 23 | `counter-example-mining` | Counter-example mining | Where prompts fail · Mining workflow · Reviewer ritual · A real mining · Coverage |
| 24 | `red-team-your-prompt` | Red-teaming your own prompt | The adversarial set · Reviewer ritual · A real set · Coverage · Reporting |
| 25 | `deterministic-envelope-pattern` | The deterministic-envelope pattern | The envelope concept · Implementation · Reviewer ritual · A real shipping decision · Trade-offs |

---

## Series 06 — Testing in the age of AI

**Slug:** `testing-in-the-age-of-ai` · **Audience:** QA leads and engineers building/maintaining AI products.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `new-test-pyramid` | The new test pyramid for AI products | Where unit tests still pay · Integration shifts · Eval as a layer · The pyramid redrawn · A real test plan |
| 02 | `integration-tests-for-ai` | Integration tests for AI features: contract or behavioural? | The two patterns · When each wins · Reviewer ritual · A real test set · Trade-offs |
| 03 | `golden-set-discipline` | Golden-set discipline | The 200 examples that earn their place · Curation rules · Reviewer ritual · Coverage · A real set |
| 04 | `behavioural-assertions` | Behavioural assertions: testing 'should-ness' | The shouldness pattern · Implementation · Reviewer ritual · A real test set · Trade-offs |
| 05 | `property-based-testing-llms` | Property-based testing for LLM features | The properties that work · Hypothesis-style · Reviewer ritual · A real test · Coverage |
| 06 | `snapshot-tests-llm` | Snapshot tests: where they help, where they trap | The snapshot half-life · Update discipline · Reviewer ritual · A real catch · How to avoid |
| 07 | `eval-driven-development` | Eval-driven development | EDD vs. TDD · Building tests before prompts · Reviewer ritual · A real workflow · How to start |
| 08 | `regression-cohorts` | Regression cohorts: catching what evals miss | Cohort design · Trigger conditions · Reviewer ritual · A real catch · Coverage |
| 09 | `drift-vs-functional-tests` | Drift tests vs. functional tests: separate lanes | The lane separation · Pipeline design · Reviewer ritual · A real workflow · Trade-offs |
| 10 | `ci-strategy-for-llm-apps` | CI strategy: smoke vs. full suite for LLM apps | The smoke contract · Full-suite cadence · Reviewer ritual · A real pipeline · Cost shape |
| 11 | `determinism-harnesses` | Determinism harnesses for non-deterministic systems | The mock-with-record pattern · Replay discipline · Reviewer ritual · A real harness · Limits |
| 12 | `mock-llms-in-tests` | Mock LLMs in tests: when to fake, when to call | The faking rules · Real-call cadence · Reviewer ritual · A real strategy · Cost shape |
| 13 | `test-data-management-ai` | Test-data management for AI: synthetic vs. real | The hybrid approach · Privacy · Reviewer ritual · A real strategy · Trade-offs |
| 14 | `pii-in-test-fixtures` | PII in test fixtures: the boring legal slope | The redaction rule · Tooling · Reviewer ritual · A real workflow · Compliance |
| 15 | `tests-for-tool-using-agents` | Tests for tool-using agents: trace assertions | Trace-as-fixture · Assertion library · Reviewer ritual · A real test set · Coverage |
| 16 | `tests-for-streaming` | Tests for streaming responses | The streaming contract · Assertion patterns · Reviewer ritual · A real test · Coverage |
| 17 | `tests-for-retrieval` | Tests for retrieval pipelines | Precision/recall in CI · Reviewer ritual · A real test set · Trade-offs · Coverage |
| 18 | `e2e-tests-for-ai` | End-to-end tests for AI workflows: scope and survival | The thin-slice pattern · Reviewer ritual · A real test · Coverage · Maintenance |
| 19 | `performance-tests-llm` | Performance tests: token budgets and latency SLAs | The budget contract · Tooling · Reviewer ritual · A real test · Trade-offs |
| 20 | `cost-tests` | Cost tests: catching the prompt that doubled spend | The cost-as-test pattern · Threshold design · Reviewer ritual · A real catch · How to roll out |
| 21 | `accessibility-tests-ai-surfaces` | Accessibility tests for AI surfaces | The a11y rule · Tooling · Reviewer ritual · A real test · Trade-offs |
| 22 | `privacy-tests-ai` | Privacy tests: PII redaction assertions | The redaction contract · Tooling · Reviewer ritual · A real test · Compliance |
| 23 | `prompt-injection-regression` | Security tests: prompt-injection regression suite | The attack library · Test design · Reviewer ritual · A real suite · Maintenance |
| 24 | `ux-tests-for-ai-content` | UX tests for AI-generated content | The reviewer rubric · Tooling · Reviewer ritual · A real test · Trade-offs |
| 25 | `post-launch-test-plan` | The post-launch test plan: what runs forever | The forever suite · Cadence · Reviewer ritual · A real plan · Trade-offs |

---

## Series 07 — Evals & output testing

**Slug:** `evals-and-output-testing` · **Audience:** tech leads and ML engineers responsible for output quality.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `what-makes-an-eval-good` | What makes an eval good | Observability · deciding power · repeatability · the three-leg stool · A real eval reviewed |
| 02 | `building-your-first-eval-set` | Building your first eval set from scratch | The 50-example start · Curation · Reviewer ritual · A real set · How to grow it |
| 03 | `eval-taxonomy` | Eval taxonomy: golden, behavioural, drift, safety | The four types · When each wins · Reviewer ritual · A real mix · How to start |
| 04 | `authoring-eval-cases` | Authoring eval cases | The question-and-answer discipline · Reviewer ritual · A real case-study · Trade-offs |
| 05 | `llm-as-judge` | LLM-as-judge: when to trust it, when not | The judge contract · Calibration · Reviewer ritual · A real implementation · Limits |
| 06 | `pairwise-judges` | Pairwise judges: A/B agreement at scale | The pairwise pattern · Cost shape · Reviewer ritual · A real run · Trade-offs |
| 07 | `judging-open-ended` | Judging open-ended output without a rubric | The rubric discipline · Reviewer ritual · A real rubric · Trade-offs · Limits |
| 08 | `calibrating-your-judge` | Calibrating your judge: meta-evals | The meta-eval · Cadence · Reviewer ritual · A real calibration · Limits |
| 09 | `human-eval-workflows` | Human eval workflows: instructions that don't vary | The reviewer's brief · Onboarding · Reviewer ritual · A real workflow · Trade-offs |
| 10 | `auto-generated-eval-cases` | Auto-generated eval cases from production logs | The mining pattern · PII handling · Reviewer ritual · A real workflow · Trade-offs |
| 11 | `sampling-production-traffic` | Sampling production traffic for eval | The sampling rule · Privacy · Reviewer ritual · A real workflow · Trade-offs |
| 12 | `per-feature-vs-per-model-evals` | Per-feature evals vs. per-model evals | The two scopes · When each wins · Reviewer ritual · A real mix · Trade-offs |
| 13 | `evals-for-retrieval` | Evals for retrieval: separating retrieval from synthesis | The two-stage eval · Tooling · Reviewer ritual · A real implementation · Trade-offs |
| 14 | `evals-for-agents` | Evals for agents: trajectory + outcome | The two-axis eval · Cost shape · Reviewer ritual · A real implementation · Trade-offs |
| 15 | `tool-use-evals` | Tool-use evals: right tool, right order | The tool-call eval · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 16 | `eval-ci` | Eval CI: the pass/fail gate that's actually useful | The gate design · Threshold rules · Reviewer ritual · A real pipeline · Trade-offs |
| 17 | `trend-vs-threshold-evals` | Trend evals vs. threshold evals | The two patterns · When each wins · Reviewer ritual · A real implementation · Trade-offs |
| 18 | `eval-driven-prompt-iteration` | Eval-driven prompt iteration | The loop · Reviewer ritual · A real workflow · Trade-offs · Limits |
| 19 | `red-set-evals` | The red set: adversarial cases you're allowed to fail | The red-set discipline · Reviewer ritual · A real implementation · Trade-offs · Reporting |
| 20 | `eval-cost-management` | Eval cost management | The sampling pattern · Caching · Reviewer ritual · A real saving · Trade-offs |
| 21 | `eval-result-storage` | Eval result storage and versioning | The artifact pattern · Reviewer ritual · A real storage · Trade-offs · Limits |
| 22 | `reading-an-eval-dashboard` | Reading an eval dashboard | The four panels · Reviewer ritual · A real dashboard · Trade-offs · Limits |
| 23 | `eval-ownership` | Eval ownership in an org: PM, eng, or QA? | The three options · When each wins · Reviewer ritual · A real org · Trade-offs |
| 24 | `evals-survive-model-bump` | Evals that survive a model bump | The migration discipline · Reviewer ritual · A real migration · Trade-offs · Limits |
| 25 | `eval-anti-patterns` | Eval anti-patterns: when evals make products worse | The five traps · Reviewer ritual · A real cleanup · How to avoid · Limits |

---

## Series 08 — MCP & AI protocols

**Slug:** `mcp-and-ai-protocols` · **Audience:** engineers and tooling leads designing AI integrations.

| # | Slug | Title | Hook · Beats |
| --- | --- | --- | --- |
| 01 | `mcp-in-10-minutes` | MCP in 10 minutes | The primer · Why it exists · Where it fits · A real example · How to start |
| 02 | `why-we-need-mcp` | Why we need MCP at all | The integration-drawer problem · MCP's answer · Reviewer ritual · A real pain · How MCP helps |
| 03 | `first-mcp-server-node` | Your first MCP server (Node) | The boilerplate · Tool definition · Reviewer ritual · A real server · How to ship |
| 04 | `first-mcp-server-python` | Your first MCP server (Python) | The boilerplate · Tool definition · Reviewer ritual · A real server · How to ship |
| 05 | `mcp-tool-naming` | MCP tool naming: making tools discoverable | The naming rules · Reviewer ritual · A real naming guide · Trade-offs · Limits |
| 06 | `mcp-tool-schemas` | MCP tool schemas: arg shapes that help | The schema rules · Reviewer ritual · A real schema · Trade-offs · Limits |
| 07 | `mcp-error-handling` | MCP error handling: tell the model what went wrong | The error contract · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 08 | `mcp-authentication` | MCP authentication: tokens, scopes, OAuth | The three patterns · When each wins · Reviewer ritual · A real implementation · Trade-offs |
| 09 | `mcp-authorization` | MCP authorization: per-user permissions | The permission model · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 10 | `mcp-transport` | MCP transport: stdio vs. HTTP vs. SSE | The three transports · When each wins · Reviewer ritual · A real choice · Trade-offs |
| 11 | `mcp-server-hosting` | MCP server hosting: local, sidecar, remote | The three options · When each wins · Reviewer ritual · A real choice · Trade-offs |
| 12 | `mcp-server-versioning` | MCP server versioning: shipping breaking changes safely | The versioning discipline · Reviewer ritual · A real release · Trade-offs · Limits |
| 13 | `mcp-server-observability` | MCP server observability | The three pillars · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 14 | `mcp-rate-limits` | MCP server rate limits: the polite-rejection pattern | The 429 contract · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 15 | `mcp-secrets` | MCP and secrets management | The secret discipline · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 16 | `mcp-internal-tools` | MCP for internal tools (Linear, Notion, Slack analogues) | The integration patterns · Reviewer ritual · A real server · Trade-offs · Limits |
| 17 | `mcp-data-tools` | MCP for data tools (Postgres, BigQuery, S3) | The data integration · Reviewer ritual · A real server · Trade-offs · Limits |
| 18 | `mcp-actioning-tools` | MCP for actioning tools (PR creator, ticket closer) | The action contract · Reviewer ritual · A real server · Trade-offs · Limits |
| 19 | `mcp-composition` | MCP composition: when one server calls another | The composition pattern · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 20 | `mcp-testing` | MCP testing: harnesses, fixtures, regressions | The test plan · Reviewer ritual · A real implementation · Trade-offs · Limits |
| 21 | `mcp-prompt-injection` | MCP and prompt injection: ambient instructions | The threat model · Reviewer ritual · A real defence · Trade-offs · Limits |
| 22 | `beyond-mcp-tool-use-specs` | Beyond MCP: tool-use specs in major models | The state of the art · Reviewer ritual · A real comparison · Trade-offs · Limits |
| 23 | `mcp-and-claude-code` | MCP and the Claude Code workflow specifically | The integration · Reviewer ritual · A real workflow · Trade-offs · Limits |
| 24 | `mcp-for-cicd` | MCP for CI/CD: build-system tools as agent inputs | The CI integration · Reviewer ritual · A real pipeline · Trade-offs · Limits |
| 25 | `future-of-mcp` | The future of MCP | What's coming · What to bet on · Reviewer ritual · A real prediction · Limits |

---

## Workflow

1. Pick a row (any series, any pending entry).
2. Run `/daily-article` and pass the slug. The skill will:
   - Generate the MDX article (with `series:` + `seriesOrder:` frontmatter).
   - Render the OG image.
   - Generate the IG carousel + LinkedIn post + X thread.
3. Mark the row `✅` with the publish date.
4. Run `npm run build` and push.

## Voice + format reminders

- **Single hook per article.** Don't mix two metaphors.
- **State the pairing in the first two sentences.** No long warm-up.
- **Each lesson should be carousel-ready** — <40 chars, standalone.
- **Ground in a real practitioner.** "The psychiatrist we shipped to…" beats "users."
- **Use absolute dates** — `2026-04-28`, not "yesterday".
- **Voice markers:** "the friendly way", "industry-first, then AI-first", "no buzzword bingo", "real users, not dry-runs", "boring is what scales".
- **Don't say "we ship AI."** We ship AI-enabled software.
