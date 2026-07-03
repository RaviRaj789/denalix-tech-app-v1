import ChromaGrid from "@/components/effects/ChromaGrid";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";

const testimonials = [
  {
    title: "Operations Lead",
    subtitle: "Healthcare Client",
    quote:
      "The workflow automation cut our intake process from days to hours. Their team actually understood our compliance constraints instead of ignoring them.",
    borderColor: "#a855f7",
    gradient: "linear-gradient(145deg, #a855f7, #000)",
    image: "/images/testimonials/healthcare-ops-lead.jpg",
  },
  {
    title: "Founder",
    subtitle: "Local Services Business",
    quote:
      "We got a clear, honest roadmap before any code was written. No overselling — just a plan we could actually afford to execute.",
    borderColor: "#e879f9",
    gradient: "linear-gradient(210deg, #e879f9, #000)",
    image: "/images/testimonials/local-services-founder.jpg",
  },
  {
    title: "COO",
    subtitle: "Growing SaaS Company",
    quote:
      "Denalix built our AI copilot feature end-to-end and integrated it directly into our existing product without a rewrite.",
    borderColor: "#d8b4fe",
    gradient: "linear-gradient(165deg, #d8b4fe, #000)",
    image: "/images/testimonials/saas-coo.jpg",
  },
  {
    title: "IT Director",
    subtitle: "Enterprise Client",
    quote:
      "Their cloud and API work has been rock solid. Deployments are smooth, and support after launch has been just as responsive.",
    borderColor: "#c026d3",
    gradient: "linear-gradient(195deg, #c026d3, #000)",
    image: "/images/testimonials/enterprise-it-director.jpg",
  },
  {
    title: "Product Lead",
    subtitle: "Early-Stage Startup",
    quote:
      "We had a working MVP in weeks, not months. It let us start getting real user feedback almost immediately.",
    borderColor: "#d8b4fe",
    gradient: "linear-gradient(225deg, #d8b4fe, #000)",
    image: "/images/testimonials/startup-product-lead.jpg",
  },
  {
    title: "Analytics Manager",
    subtitle: "Retail Business",
    quote:
      "The dashboards they built finally gave our team a single source of truth instead of five different spreadsheets.",
    borderColor: "#9333ea",
    gradient: "linear-gradient(135deg, #9333ea, #000)",
    image: "/images/testimonials/retail-analytics-manager.jpg",
  },
];

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
