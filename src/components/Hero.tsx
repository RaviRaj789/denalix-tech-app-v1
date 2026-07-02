import LineWaves from "@/components/effects/LineWaves";
import Magnet from "@/components/effects/Magnet";
import Reveal from "@/components/effects/Reveal";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import TextType from "@/components/effects/TextType";

export default function Hero() {
  return (
    <section
      id="top"
      className="snap-section relative flex min-h-screen items-center overflow-hidden bg-[#08090c]"
    >
      <div className="edge-fade-bottom absolute inset-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.2}
          color1="#c642c2"
          color2="#b029d8"
          color3="#a3acc7"
          enableMouseInteraction
          mouseInfluence={2.0}
        />
      </div>

      <div className="pointer-events-none relative mx-auto max-w-6xl px-6 pb-28 pt-24 sm:pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            <TextType
              as="span"
              text={["Digital foundation for businesses ready to move faster"]}
              typingSpeed={35}
              loop={false}
              startOnVisible
              showCursor
              cursorCharacter="_"
            />
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
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
              className="text-purple-300"
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
      </div>
    </section>
  );
}
