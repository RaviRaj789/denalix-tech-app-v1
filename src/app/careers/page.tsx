import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import DotField from "@/components/effects/DotField";
import Magnet from "@/components/effects/Magnet";
import BorderGlow from "@/components/effects/BorderGlow";
import { WhyIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers — Denalix Tech",
  description:
    "We're a small, hands-on team. There's no open-roles board here, but if you build practical software for real businesses, we want to hear from you.",
};

const values: { icon: "problem" | "explain" | "build" | "connect" | "speed" | "support"; text: string }[] = [
  { icon: "problem", text: "You start with the business problem, not the tech stack" },
  { icon: "build", text: "You'd rather ship something useful than something impressive" },
  { icon: "connect", text: "You're comfortable talking directly with clients, not just tickets" },
  { icon: "speed", text: "You move quickly without cutting corners on quality" },
];

export default function CareersPage() {
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
              Careers
            </p>

            <SplitText
              tag="h1"
              text="Small team, real work."
              splitType="words"
              delay={30}
              duration={0.7}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-6xl"
            />

            <BlurText
              text="We're not running a big hiring pipeline with a stack of open roles. We're a small team that takes on real client work, and we grow by bringing in people who are genuinely good at it."
              delay={20}
              animateBy="words"
              direction="top"
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200"
            />
          </div>
        </section>

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 sm:h-80">
            <Image
              src="/images/careers/team-office.jpg"
              alt="The Denalix Tech team working together in the office"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover grayscale-[15%]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay" />
          </div>
        </div>

        <section className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
            What we look for
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <BorderGlow
                key={value.text}
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
                    <WhyIcon name={value.icon} className="h-5 w-5" />
                  </span>
                  <p className="font-display text-base font-medium text-zinc-100">{value.text}</p>
                </div>
              </BorderGlow>
            ))}
          </div>

          <div className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
              No open roles right now — reach out anyway
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
              We don&apos;t post a job board because we hire rarely and specifically. If that changes,
              it&apos;ll usually be because someone reached out first. Send us what you&apos;ve built,
              what you&apos;re good at, and what kind of work you want to be doing.
            </p>

            <Magnet padding={50} magnetStrength={5} wrapperClassName="mt-8 inline-block">
              <a
                href="mailto:hello@denalixtech.ai"
                className="shine inline-block w-fit rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
              >
                hello@denalixtech.ai
              </a>
            </Magnet>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
