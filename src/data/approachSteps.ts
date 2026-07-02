export type ApproachStep = {
  slug: string;
  step: string;
  title: string;
  description: string;
  detail: string;
  highlights: string[];
  effect: "dots" | "waves" | "rings" | "lightfall";
};

export const approachSteps: ApproachStep[] = [
  {
    slug: "share-the-problem",
    step: "01",
    title: "Share the problem",
    description:
      "Tell us what is slowing the business down, what feels messy, or what you want customers or staff to do more easily.",
    detail:
      "Every engagement starts with a conversation, not a contract. We want to understand what's actually slowing your team down — the manual processes, the tools that don't talk to each other, the workarounds everyone's gotten used to. No assumptions, no generic templates.",
    highlights: [
      "A working session to map what's broken today",
      "No commitment required to start the conversation",
      "We ask about people and workflows, not just tools",
    ],
    effect: "dots",
  },
  {
    slug: "map-the-workflow",
    step: "02",
    title: "Map the workflow",
    description:
      "We look at the people, tools, files, handoffs, and decisions involved so the real bottlenecks are clear.",
    detail:
      "Before we propose anything, we trace how work actually moves through your business: who touches what, where handoffs happen, and where things quietly break down. This is where the real bottlenecks surface — often different from what anyone expected.",
    highlights: [
      "A full walkthrough of your current tools and processes",
      "Identification of the highest-friction points",
      "Clarity on what's actually worth fixing first",
    ],
    effect: "waves",
  },
  {
    slug: "create-the-plan",
    step: "03",
    title: "Create the plan",
    description:
      "You get a practical roadmap: what to build first, what can wait, what it may cost, and what success should look like.",
    detail:
      "You get a concrete, sequenced roadmap — not a vague strategy deck. What to build first, what can wait, rough cost and timeline, and what success looks like at each stage, so you can make an informed decision before any code is written.",
    highlights: [
      "A prioritized build sequence, not a wish list",
      "Transparent cost and timeline expectations",
      "Clear definitions of what success looks like",
    ],
    effect: "rings",
  },
  {
    slug: "build-and-improve",
    step: "04",
    title: "Build and improve",
    description:
      "We build in stages, connect the right tools, launch the system, and keep improving it with feedback.",
    detail:
      "We build in stages and ship early, connecting the tools you already use rather than replacing them wholesale. Once it's live, we keep refining based on real usage — because a system's first version is rarely its best one.",
    highlights: [
      "Incremental delivery, not a single big-bang launch",
      "Integration with your existing stack where it makes sense",
      "Ongoing improvement after launch, not a one-time handoff",
    ],
    effect: "lightfall",
  },
];
