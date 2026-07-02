import Reveal from "@/components/effects/Reveal";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import DotField from "@/components/effects/DotField";
import LaserFlow from "@/components/effects/LaserFlow";
import MagicRings from "@/components/effects/MagicRings";
import Magnet from "@/components/effects/Magnet";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-section relative flex min-h-screen items-center overflow-hidden bg-[#08090c] py-20"
    >
      <div className="edge-fade-both pointer-events-none absolute inset-0">
        <DotField
          dotRadius={2}
          dotSpacing={22}
          cursorRadius={500}
          bulgeStrength={80}
          glowRadius={0}
          gradientFrom="rgba(255, 255, 255, 0.55)"
          gradientTo="rgba(255, 255, 255, 0.55)"
          glowColor="#ffffff"
        />
      </div>
      <div className="edge-fade-both pointer-events-none absolute inset-0 opacity-70">
        <LaserFlow
          color="#a855f7"
          horizontalBeamOffset={0}
          verticalBeamOffset={0.15}
          wispDensity={1.1}
          wispIntensity={4}
          fogIntensity={0.35}
          flowSpeed={0.3}
          mouseTiltStrength={0.006}
        />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0b10]/80 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2">
              <div className="relative flex flex-col justify-center overflow-hidden p-8 sm:p-12 lg:p-14">
                <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 opacity-60">
                  <MagicRings
                    color="#a855f7"
                    colorTwo="#e879f9"
                    ringCount={5}
                    attenuation={12}
                    lineThickness={1.5}
                    baseRadius={0.3}
                    radiusStep={0.09}
                    scaleRate={0.08}
                    opacity={0.8}
                    noiseAmount={0.05}
                  />
                </div>
                <SplitText
                  tag="h2"
                  text="Book a Consultation"
                  splitType="chars"
                  delay={25}
                  duration={0.7}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="left"
                  className="relative font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
                />
                <BlurText
                  text="Practical digital systems for businesses that want less manual work, clearer operations, better customer experiences, and room to grow."
                  delay={15}
                  animateBy="words"
                  direction="top"
                  className="relative mt-4 max-w-md text-zinc-400"
                />
                <Magnet padding={50} magnetStrength={5} wrapperClassName="relative mt-8">
                  <a
                    href="mailto:hello@denalixtech.ai"
                    className="shine inline-block w-fit rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
                  >
                    hello@denalixtech.ai
                  </a>
                </Magnet>
              </div>

              <div className="relative border-t border-white/10 bg-white/2 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
                <ContactForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
