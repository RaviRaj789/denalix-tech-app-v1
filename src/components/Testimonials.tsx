import ChromaGrid from "@/components/effects/ChromaGrid";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";

function premiumArt(seed: number, colors: [string, string, string]) {
  const [c1, c2, c3] = colors;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='450'>
    <defs>
      <radialGradient id='g1' cx='28%' cy='22%' r='75%'>
        <stop offset='0%' stop-color='${c1}' stop-opacity='0.95'/>
        <stop offset='100%' stop-color='${c1}' stop-opacity='0'/>
      </radialGradient>
      <radialGradient id='g2' cx='82%' cy='72%' r='75%'>
        <stop offset='0%' stop-color='${c2}' stop-opacity='0.9'/>
        <stop offset='100%' stop-color='${c2}' stop-opacity='0'/>
      </radialGradient>
      <radialGradient id='g3' cx='58%' cy='38%' r='65%'>
        <stop offset='0%' stop-color='${c3}' stop-opacity='0.55'/>
        <stop offset='100%' stop-color='${c3}' stop-opacity='0'/>
      </radialGradient>
      <filter id='grain-${seed}'>
        <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='${seed}' stitchTiles='stitch' result='noise'/>
        <feColorMatrix in='noise' type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0'/>
      </filter>
    </defs>
    <rect width='600' height='450' fill='#08090c'/>
    <rect width='600' height='450' fill='url(#g1)'/>
    <rect width='600' height='450' fill='url(#g2)'/>
    <rect width='600' height='450' fill='url(#g3)'/>
    <rect width='600' height='450' filter='url(#grain-${seed})'/>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const testimonials = [
  {
    title: "Operations Lead",
    subtitle: "Healthcare Client",
    quote:
      "The workflow automation cut our intake process from days to hours. Their team actually understood our compliance constraints instead of ignoring them.",
    borderColor: "#a855f7",
    gradient: "linear-gradient(145deg, #a855f7, #000)",
    colors: ["#a855f7", "#e879f9", "#7e22ce"] as [string, string, string],
    seed: 2,
  },
  {
    title: "Founder",
    subtitle: "Local Services Business",
    quote:
      "We got a clear, honest roadmap before any code was written. No overselling — just a plan we could actually afford to execute.",
    borderColor: "#e879f9",
    gradient: "linear-gradient(210deg, #e879f9, #000)",
    colors: ["#e879f9", "#a855f7", "#d8b4fe"] as [string, string, string],
    seed: 7,
  },
  {
    title: "COO",
    subtitle: "Growing SaaS Company",
    quote:
      "Denalix built our AI copilot feature end-to-end and integrated it directly into our existing product without a rewrite.",
    borderColor: "#d8b4fe",
    gradient: "linear-gradient(165deg, #d8b4fe, #000)",
    colors: ["#d8b4fe", "#c026d3", "#e879f9"] as [string, string, string],
    seed: 11,
  },
  {
    title: "IT Director",
    subtitle: "Enterprise Client",
    quote:
      "Their cloud and API work has been rock solid. Deployments are smooth, and support after launch has been just as responsive.",
    borderColor: "#c026d3",
    gradient: "linear-gradient(195deg, #c026d3, #000)",
    colors: ["#c026d3", "#9333ea", "#a855f7"] as [string, string, string],
    seed: 19,
  },
  {
    title: "Product Lead",
    subtitle: "Early-Stage Startup",
    quote:
      "We had a working MVP in weeks, not months. It let us start getting real user feedback almost immediately.",
    borderColor: "#d8b4fe",
    gradient: "linear-gradient(225deg, #d8b4fe, #000)",
    colors: ["#d8b4fe", "#e879f9", "#a855f7"] as [string, string, string],
    seed: 23,
  },
  {
    title: "Analytics Manager",
    subtitle: "Retail Business",
    quote:
      "The dashboards they built finally gave our team a single source of truth instead of five different spreadsheets.",
    borderColor: "#9333ea",
    gradient: "linear-gradient(135deg, #9333ea, #000)",
    colors: ["#9333ea", "#c026d3", "#d8b4fe"] as [string, string, string],
    seed: 31,
  },
].map((t) => ({
  ...t,
  image: premiumArt(t.seed, t.colors),
}));

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="snap-section flex min-h-dvh items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <SplitText
          tag="h2"
          text="What it's like to work with us"
          splitType="words"
          delay={30}
          duration={0.6}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
          className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
        />
        <BlurText
          text="A few notes from the kinds of teams we work with."
          delay={40}
          animateBy="words"
          direction="top"
          className="mt-3 max-w-2xl text-zinc-400"
        />

        <div className="mt-14">
          <ChromaGrid items={testimonials} radius={280} columns={3} rows={2} damping={0.45} fadeOut={0.6} />
        </div>
      </div>
    </section>
  );
}
