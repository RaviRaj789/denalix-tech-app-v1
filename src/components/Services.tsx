import Link from "next/link";
import BorderGlow from "@/components/effects/BorderGlow";
import Reveal from "@/components/effects/Reveal";
import SoftAurora from "@/components/effects/SoftAurora";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import { ServiceIcon } from "@/components/icons";
import { services } from "@/data/services";

// Card-content hover accent (icon recolor + "Learn more" reveal) — off for now, flip to true to bring it back.
const ENABLE_CARD_HOVER_ACCENT = true;

export default function Services() {
  return (
    <section
      id="services"
      className="snap-section relative flex min-h-dvh items-center overflow-hidden bg-[#08090c]"
    >
      <div className="edge-fade-both pointer-events-none absolute inset-0 opacity-60">
        <SoftAurora
          speed={0.5}
          scale={3}
          brightness={0.9}
          color1="#e879f9"
          color2="#a855f7"
          noiseFrequency={2.2}
          noiseAmplitude={1.0}
          bandHeight={0.35}
          bandSpread={0.9}
          colorSpeed={0.6}
          mouseInfluence={0.2}
        />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <SplitText
          tag="h2"
          text="The specific ways Denalix Tech can help"
          splitType="words"
          delay={30}
          duration={0.6}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
          className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
        />
        <BlurText
          text="Practical digital systems for businesses that want less manual work, clearer operations, better customer experiences, and room to grow."
          delay={20}
          animateBy="words"
          direction="top"
          className="mt-3 max-w-2xl text-zinc-400"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
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
                  <div className="flex h-full flex-col p-5">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300 transition-colors ${
                        ENABLE_CARD_HOVER_ACCENT ? "group-hover:border-fuchsia-300/50 group-hover:text-fuchsia-200" : ""
                      }`}
                    >
                      <ServiceIcon name={service.icon} className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 font-display text-lg font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                      {service.description}
                    </p>
                    <span
                      className={`mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-purple-300 opacity-0 transition-opacity ${
                        ENABLE_CARD_HOVER_ACCENT ? "group-hover:opacity-100" : ""
                      }`}
                    >
                      Learn more
                      <span
                        className={`transition-transform ${ENABLE_CARD_HOVER_ACCENT ? "group-hover:translate-x-1" : ""}`}
                      >
                        →
                      </span>
                    </span>
                  </div>
                </BorderGlow>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
