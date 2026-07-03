import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import DotField from "@/components/effects/DotField";
import Magnet from "@/components/effects/Magnet";
import { approachSteps } from "@/data/approachSteps";

export const metadata: Metadata = {
  title: "Simple Guide — Denalix Tech",
  description:
    "A simple guide to how working with Denalix Tech actually goes, from the first conversation to the system you end up running on.",
};

export default function SimpleGuidePage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="relative flex-1 overflow-hidden bg-[#08090c]">
        <div className="edge-fade-bottom pointer-events-none absolute inset-0 opacity-60">
          <DotField
            dotRadius={2}
            dotSpacing={22}
            cursorRadius={400}
            bulgeStrength={60}
            glowRadius={0}
            gradientFrom="rgba(168, 85, 247, 0.35)"
            gradientTo="rgba(232, 121, 249, 0.15)"
            glowColor="#a855f7"
          />
        </div>

        <section className="relative py-24 sm:py-32">
          <div className="relative mx-auto max-w-4xl px-6">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              ← Back home
            </Link>

            <p className="mt-8 text-sm font-medium uppercase tracking-wide text-purple-400">
              Simple Guide
            </p>

            <SplitText
              tag="h1"
              text="A simple plan before we build."
              splitType="words"
              delay={30}
              duration={0.7}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-6xl"
            />

            <BlurText
              text="No jargon, no surprise invoices. Here's exactly what happens at each stage of working with us, in plain language."
              delay={20}
              animateBy="words"
              direction="top"
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200"
            />
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="space-y-16">
            {approachSteps.map((step) => (
              <div
                key={step.slug}
                className="grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-[#08090c] font-display text-sm font-medium text-purple-300">
                  {step.step}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">{step.detail}</p>
                  <ul className="mt-6 space-y-3">
                    {step.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/how-it-works/${step.slug}`}
                    className="mt-6 inline-block text-sm font-medium text-purple-300 transition-colors hover:text-fuchsia-200"
                  >
                    Read the full breakdown →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            <Link
              href="/#work"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              ← See it on the homepage
            </Link>
            <Magnet padding={50} magnetStrength={5}>
              <Link
                href="/#contact"
                className="shine rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
              >
                Book a Consultation
              </Link>
            </Magnet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
