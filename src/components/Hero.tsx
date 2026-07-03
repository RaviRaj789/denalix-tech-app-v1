import LineWaves from "@/components/effects/LineWaves";
import Ferrofluid from "@/components/effects/Ferrofluid";
import Magnet from "@/components/effects/Magnet";
import Reveal from "@/components/effects/Reveal";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import TextType from "@/components/effects/TextType";
import BorderGlow from "@/components/effects/BorderGlow";
import { ServiceIcon, WhyIcon } from "@/components/icons";

const heroHighlights: {
  label: string;
  icon: { kind: "why"; name: "speed" | "explain" | "connect" } | { kind: "service"; name: "analytics" };
}[] = [
  { label: "Less manual work", icon: { kind: "why", name: "speed" } },
  { label: "Clearer operations", icon: { kind: "why", name: "explain" } },
  { label: "Better decisions", icon: { kind: "service", name: "analytics" } },
  { label: "Smoother customer service", icon: { kind: "why", name: "connect" } },
];

const heroMilestones = [
  { step: "01", label: "audit the leaks" },
  { step: "02", label: "map the roadmap" },
  { step: "03", label: "build to scale" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="snap-section relative flex min-h-dvh items-center overflow-hidden bg-[#08090c]"
    >
      <div className="pointer-events-none absolute inset-0 sm:hidden">
        <Ferrofluid
          colors={["#ffffff", "#ffffff", "#ffffff"]}
          speed={0.1}
          scale={1}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={1}
          glow={1}
          flowDirection="down"
          opacity={1}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.3}
        />
      </div>
      <div className="edge-fade-bottom absolute inset-0 hidden sm:block">
        <LineWaves
          speed={0.1}
          innerLineCount={45}
          outerLineCount={45}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.2}
          color1="#ffffff"
          color2="#a855f7"
          color3="#ffffff"
          enableMouseInteraction
          mouseInfluence={2.0}
        />
      </div>

      <div className="pointer-events-none relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-28 pt-24 sm:pt-32 md:grid-cols-2">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            <span className="sm:hidden">
              <TextType
                as="span"
                text={["Built to move faster"]}
                typingSpeed={35}
                loop={false}
                startOnVisible
                showCursor
                cursorCharacter="_"
              />
            </span>
            <span className="hidden sm:inline">
              <TextType
                as="span"
                text={["Digital foundation for businesses ready to move faster"]}
                typingSpeed={35}
                loop={false}
                startOnVisible
                showCursor
                cursorCharacter="_"
              />
            </span>
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            <SplitText
              tag="span"
              text="Modernize. Automate."
              splitType="chars"
              delay={20}
              duration={0.8}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="text-white"
            />{" "}
            <SplitText
              tag="span"
              text="Scale with confidence."
              splitType="chars"
              delay={20}
              duration={0.8}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="text-white"
            />
          </h1>
          <BlurText
            text="Denalix Tech helps startups, local businesses, healthcare teams, and growing companies turn manual chaos into digital clarity."
            delay={30}
            animateBy="words"
            direction="top"
            className="mt-7 max-w-xl text-lg leading-8 text-zinc-200"
          />
          <Reveal className="pointer-events-auto mt-10 flex flex-wrap items-center gap-5">
            <Magnet padding={60} magnetStrength={5}>
              <a
                href="#contact"
                className="shine rounded-full bg-purple-500 px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
              >
                Book a Consultation
              </a>
            </Magnet>
            <a
              href="#services"
              className="text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
            >
              Explore services →
            </a>
          </Reveal>
        </div>

        <Reveal className="pointer-events-auto mx-auto w-full max-w-sm md:mx-0" delay={150}>
          <BorderGlow
            backgroundColor="#0a0b10"
            borderRadius={20}
            glowRadius={30}
            glowIntensity={0}
            edgeSensitivity={35}
            glowColor="271 91% 65%"
            colors={["#a855f7", "#e879f9", "#c084fc"]}
            fillOpacity={0}
          >
            <div className="p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-base font-semibold text-purple-300">
                    Business Growth System
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Operations, customers, data, and delivery aligned
                  </p>
                </div>
                <span className="mt-1 flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {heroHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/10 text-purple-300">
                      {item.icon.kind === "why" ? (
                        <WhyIcon name={item.icon.name} className="h-3.5 w-3.5" />
                      ) : (
                        <ServiceIcon name={item.icon.name} className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <span className="text-xs font-medium text-zinc-100">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {heroMilestones.map((m) => (
                  <div
                    key={m.step}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-2.5 text-center"
                  >
                    <p className="font-display text-base font-semibold text-white">{m.step}</p>
                    <p className="mt-1 text-[10px] leading-tight text-zinc-400">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </BorderGlow>
        </Reveal>
      </div>
    </section>
  );
}
