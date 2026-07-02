import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import DotField from "@/components/effects/DotField";
import LineWaves from "@/components/effects/LineWaves";
import MagicRings from "@/components/effects/MagicRings";
import Lightfall from "@/components/effects/Lightfall";
import Magnet from "@/components/effects/Magnet";
import { approachSteps, type ApproachStep } from "@/data/approachSteps";

export function generateStaticParams() {
  return approachSteps.map((step) => ({ slug: step.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const step = approachSteps.find((s) => s.slug === slug);
  if (!step) return {};
  return {
    title: `${step.title} — Denalix Tech`,
    description: step.description,
  };
}

function StepBackground({ effect }: { effect: ApproachStep["effect"] }) {
  switch (effect) {
    case "dots":
      return (
        <DotField
          dotRadius={1}
          dotSpacing={22}
          cursorRadius={400}
          bulgeStrength={45}
          glowRadius={0}
          gradientFrom="rgba(168, 85, 247, 0.3)"
          gradientTo="rgba(232, 121, 249, 0.1)"
          glowColor="#a855f7"
        />
      );
    case "waves":
      return (
        <LineWaves
          speed={0.22}
          innerLineCount={22}
          outerLineCount={26}
          warpIntensity={0.8}
          rotation={-35}
          edgeFadeWidth={0.1}
          colorCycleSpeed={0.3}
          brightness={0.16}
          color1="#a855f7"
          color2="#e879f9"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={1.2}
        />
      );
    case "rings":
      return (
        <MagicRings
          color="#a855f7"
          colorTwo="#e879f9"
          ringCount={6}
          attenuation={11}
          lineThickness={1.5}
          baseRadius={0.32}
          radiusStep={0.1}
          scaleRate={0.09}
          opacity={0.9}
          noiseAmount={0.06}
        />
      );
    case "lightfall":
      return (
        <Lightfall
          colors={["#a855f7", "#e879f9", "#d8b4fe"]}
          backgroundColor="#2e1065"
          speed={0.35}
          streakCount={4}
          streakWidth={1}
          streakLength={1.1}
          glow={0.85}
          density={0.45}
          twinkle={0.7}
          zoom={3}
          backgroundGlow={0.55}
          opacity={0.85}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={0.8}
          mixBlendMode="screen"
        />
      );
  }
}

export default async function StepDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = approachSteps.findIndex((s) => s.slug === slug);
  const step = approachSteps[index];
  if (!step) notFound();

  const prev = approachSteps[index - 1];
  const next = approachSteps[index + 1];

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#08090c] py-24 sm:py-32">
          <div className="absolute inset-0 opacity-60">
            <StepBackground effect={step.effect} />
          </div>

          <div className="relative mx-auto max-w-4xl px-6">
            <Link
              href="/#work"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              ← Back to how it works
            </Link>

            <p className="mt-8 text-sm font-medium uppercase tracking-wide text-purple-400">
              Step {step.step}
            </p>

            <SplitText
              tag="h1"
              text={step.title}
              splitType="words"
              delay={30}
              duration={0.7}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-6xl"
            />

            <BlurText
              text={step.detail}
              delay={20}
              animateBy="words"
              direction="top"
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200"
            />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
            What this looks like in practice
          </h2>
          <ul className="mt-8 space-y-5">
            {step.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-base leading-7 text-zinc-300">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            {prev ? (
              <Link
                href={`/how-it-works/${prev.slug}`}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/how-it-works/${next.slug}`}
                className="text-sm font-medium text-purple-300 transition-colors hover:text-fuchsia-200"
              >
                {next.title} →
              </Link>
            ) : (
              <Magnet padding={50} magnetStrength={5}>
                <Link
                  href="/#contact"
                  className="shine rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
                >
                  Book a Consultation
                </Link>
              </Magnet>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
