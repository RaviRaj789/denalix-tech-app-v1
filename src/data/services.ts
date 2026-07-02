export type ServiceItem = {
  slug: string;
  icon:
    | "ai"
    | "fullstack"
    | "cloud"
    | "geo"
    | "automation"
    | "analytics"
    | "saas"
    | "integrations";
  title: string;
  description: string;
  detail: string;
  highlights: string[];
  deliverables: string[];
  effect: "colorBends" | "softAurora";
};

export const services: ServiceItem[] = [
  {
    slug: "ai-applications-and-intelligent-agents",
    icon: "ai",
    title: "AI Applications & Intelligent Agents",
    description:
      "LLM-powered workflows, copilots, retrieval systems, and autonomous agents that move business processes forward.",
    detail:
      "We design and ship AI features that do real work instead of sitting in a demo — copilots grounded in your own data, retrieval systems that actually answer correctly, and agents that carry out multi-step tasks with the right guardrails around them.",
    highlights: [
      "Retrieval-augmented systems grounded in your own documents and data",
      "Agents scoped to specific, verifiable tasks — not open-ended automation",
      "Evaluation and guardrails so AI output stays trustworthy in production",
    ],
    deliverables: [
      "A working prototype you can test with real inputs early",
      "Clear documentation of what the system can and can't do",
      "A plan for monitoring and improving accuracy after launch",
    ],
    effect: "colorBends",
  },
  {
    slug: "full-stack-software-development",
    icon: "fullstack",
    title: "Full-Stack Software Development",
    description:
      "Modern web applications, portals, dashboards, and internal platforms designed for scale and usability.",
    detail:
      "From customer-facing portals to internal tools your team lives in every day, we build software end to end — thoughtful interfaces on the front end, and a backend architected to hold up as usage grows.",
    highlights: [
      "Interfaces designed around how your team actually works",
      "An architecture that scales without a rebuild in a year",
      "Clean handoff: readable code, sensible structure, real documentation",
    ],
    deliverables: [
      "A production-ready application, not just a prototype",
      "Component and API documentation for future developers",
      "A deployment pipeline so releases stay low-risk",
    ],
    effect: "softAurora",
  },
  {
    slug: "backend-apis-and-cloud-systems",
    icon: "cloud",
    title: "Backend APIs & Cloud Systems",
    description:
      "Secure APIs, data services, cloud infrastructure, authentication, and deployment pipelines.",
    detail:
      "The unglamorous parts of software are often what determines whether it survives contact with real usage. We build the APIs, authentication, and cloud infrastructure underneath your product so it stays fast, secure, and easy to operate.",
    highlights: [
      "APIs designed for the clients that will actually consume them",
      "Authentication and access control done the right way from day one",
      "Infrastructure that's monitored, not just deployed and forgotten",
    ],
    deliverables: [
      "A documented API surface your team or partners can build against",
      "Infrastructure-as-code so environments are reproducible",
      "Deployment automation with rollback built in",
    ],
    effect: "softAurora",
  },
  {
    slug: "gis-and-geospatial-platforms",
    icon: "geo",
    title: "GIS & Geospatial Platforms",
    description:
      "Map-based products, spatial analytics, GeoJSON pipelines, and location intelligence systems.",
    detail:
      "We build the mapping and spatial-analysis layer for products where location is central to the value — from GeoJSON pipelines that keep spatial data clean to interactive maps that make that data usable by non-technical teams.",
    highlights: [
      "Mapping interfaces built for the questions your users actually ask",
      "Spatial data pipelines that stay accurate as sources change",
      "Performance-tuned rendering, even with large geospatial datasets",
    ],
    deliverables: [
      "An interactive mapping interface tailored to your data",
      "A documented spatial data pipeline",
      "Guidance on which geospatial tools fit your scale",
    ],
    effect: "colorBends",
  },
  {
    slug: "workflow-automation",
    icon: "automation",
    title: "Workflow Automation",
    description:
      "Automations that connect tools, reduce manual handoffs, and standardize repeatable operations.",
    detail:
      "Most operational drag comes from the same repeatable steps being done by hand, over and over, across tools that don't talk to each other. We map those steps and automate the ones worth automating — nothing more.",
    highlights: [
      "A map of where manual handoffs are actually costing time",
      "Automations that fail loudly, not silently, when something breaks",
      "Standardized processes your team can rely on and audit",
    ],
    deliverables: [
      "Automated workflows connecting the tools you already use",
      "A record of what's automated and why, for future maintenance",
      "Monitoring so failures get caught quickly",
    ],
    effect: "softAurora",
  },
  {
    slug: "analytics-dashboards",
    icon: "analytics",
    title: "Analytics Dashboards",
    description:
      "Operational dashboards, reporting layers, and business intelligence views for better decisions.",
    detail:
      "Decisions are only as good as the data behind them. We build dashboards and reporting layers that replace scattered spreadsheets with a single, trustworthy view of how the business is actually performing.",
    highlights: [
      "Metrics chosen around the decisions they're meant to inform",
      "A single source of truth instead of conflicting spreadsheets",
      "Dashboards fast enough to actually get checked daily",
    ],
    deliverables: [
      "A live dashboard connected to your real data sources",
      "Documentation of metric definitions, so numbers stay trusted",
      "A reporting layer that scales as data volume grows",
    ],
    effect: "softAurora",
  },
  {
    slug: "saas-product-development",
    icon: "saas",
    title: "SaaS Product Development",
    description:
      "Product strategy, MVP builds, multi-tenant architecture, subscription flows, and iteration roadmaps.",
    detail:
      "Whether you're validating a new idea or scaling an existing one, we help shape product strategy and build the multi-tenant architecture, billing, and subscription flows a real SaaS product needs to grow.",
    highlights: [
      "An MVP scoped tight enough to ship fast and learn quickly",
      "Multi-tenant architecture built to scale from the start",
      "Subscription and billing flows that just work",
    ],
    deliverables: [
      "A launch-ready MVP with room to iterate",
      "A technical roadmap for post-launch growth",
      "Billing and account infrastructure wired end to end",
    ],
    effect: "colorBends",
  },
  {
    slug: "crm-and-third-party-api-integrations",
    icon: "integrations",
    title: "CRM & Third-Party API Integrations",
    description:
      "HubSpot, Zapier, payment, scheduling, CRM, and domain-specific integrations that keep systems aligned.",
    detail:
      "Your business already runs on a set of tools — CRM, payments, scheduling, marketing platforms. We connect them so data flows automatically instead of being copied by hand between systems that were never meant to talk.",
    highlights: [
      "Integrations built around your actual CRM and tool stack",
      "Data kept in sync without manual re-entry",
      "Resilient error handling when a third-party API changes",
    ],
    deliverables: [
      "Working integrations between the systems you specify",
      "Documentation of data flow between connected tools",
      "Alerting when an integration needs attention",
    ],
    effect: "colorBends",
  },
];
