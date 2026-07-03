import DotField from "@/components/effects/DotField";
import RoadmapSteps from "@/components/effects/RoadmapSteps";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import { approachSteps } from "@/data/approachSteps";

export default function Approach() {
  return (
    <section
      id="work"
      className="snap-section relative flex min-h-dvh items-center overflow-hidden bg-[#08090c]"
    >
      <div className="edge-fade-both pointer-events-none absolute inset-0">
        <DotField
          dotRadius={3}
          dotSpacing={22}
          cursorRadius={500}
          bulgeStrength={80}
          glowRadius={0}
          gradientFrom="rgba(255, 255, 255, 0.55)"
          gradientTo="rgba(255, 255, 255, 0.55)"
          glowColor="#ffffff"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <SplitText
          tag="h2"
          text="From business problem to practical technology roadmap"
          splitType="words"
          delay={30}
          duration={0.6}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
          className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
        />
        <BlurText
          text="A simple plan before we build."
          delay={40}
          animateBy="words"
          direction="top"
          className="mt-3 max-w-2xl text-zinc-400"
        />
        <RoadmapSteps steps={approachSteps} />
      </div>
    </section>
  );
}
