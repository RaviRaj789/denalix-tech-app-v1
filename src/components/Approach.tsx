import ColorBends from "@/components/effects/ColorBends";
import DotField from "@/components/effects/DotField";
import Ferrofluid from "@/components/effects/Ferrofluid";
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
      <div className="pointer-events-none absolute inset-0 sm:hidden">
        <Ferrofluid
          colors={["#ffffff", "#a855f7", "#ffffff"]}
          speed={0.5}
          scale={1}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={1}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.3}
        />
      </div>
      <div className="edge-fade-both pointer-events-none absolute inset-0 hidden sm:block">
        <ColorBends
           colors={["#a855f7"]}
          // colors={["#ffffff"]}
          speed={0.2}
          frequency={1.0}
          noise={0.15}
          bandWidth={2.5}
          rotation={90}
          iterations={1}
          intensity={1.3}
        />
      </div>
      <div className="edge-fade-both pointer-events-none absolute inset-0 opacity-40 sm:opacity-20">
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
