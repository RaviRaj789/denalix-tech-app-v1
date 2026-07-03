"use client";

import { motion } from "motion/react";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import Reveal from "@/components/effects/Reveal";
import BorderGlow from "@/components/effects/BorderGlow";
import ColorBends from "@/components/effects/ColorBends";
import DotField from "@/components/effects/DotField";
import Ferrofluid from "@/components/effects/Ferrofluid";
import LogoLoop from "@/components/effects/LogoLoop";
import { WhyIcon } from "@/components/icons";

const techStack = [
  "Next.js",
  "React",
  "Python",
  "Node.js",
  "PostgreSQL",
  "PostGIS",
  "AWS",
  "Docker",
  "OpenAI",
  "Stripe",
].map((name) => ({
  node: (
    <span className="font-display font-medium tracking-tight text-zinc-500 transition-colors hover:text-zinc-300">
      {name}
    </span>
  ),
  ariaLabel: name,
}));

const reasons: { icon: "problem" | "explain" | "build" | "connect" | "speed" | "support"; text: string }[] = [
  { icon: "problem", text: "We start with the business problem" },
  { icon: "explain", text: "We explain options clearly" },
  { icon: "build", text: "We build tools people can actually use" },
  { icon: "connect", text: "We connect with your existing systems" },
  { icon: "speed", text: "We move quickly without skipping quality" },
  { icon: "support", text: "We support the work after launch" },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
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
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-wide text-purple-400"
        >
          Why Denalix Tech
        </motion.p>

        <SplitText
          tag="h2"
          text="From operational leaks to scalable systems"
          splitType="words"
          delay={30}
          duration={0.6}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
          className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
        />
        <BlurText
          text="If the business is stuck, we find the bottleneck. If the idea is new, we shape the roadmap. If the team is growing, we build the digital foundation that keeps work moving."
          delay={15}
          animateBy="words"
          direction="top"
          className="mt-5 max-w-2xl leading-7 text-zinc-400"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.text} delay={i * 70}>
              <BorderGlow
                className="h-full"
                backgroundColor="rgba(15, 16, 23, 0.92)"
                borderRadius={16}
                glowRadius={30}
                glowIntensity={0}
                edgeSensitivity={35}
                glowColor="271 91% 65%"
                colors={["#a855f7", "#e879f9", "#c084fc"]}
                fillOpacity={0}
              >
                <div className="flex items-center gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                    <WhyIcon name={reason.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-display text-base font-medium text-zinc-100">
                    {reason.text}
                  </p>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Comfortable working across
          </p>
          <div className="mt-4">
            <LogoLoop
              logos={techStack}
              speed={40}
              gap={48}
              logoHeight={20}
              fadeOut
              fadeOutColor="#08090c"
              pauseOnHover
              ariaLabel="Technologies we work with"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
