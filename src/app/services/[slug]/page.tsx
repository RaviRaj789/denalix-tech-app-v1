import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitText from "@/components/effects/SplitText";
import BlurText from "@/components/effects/BlurText";
import ColorBends from "@/components/effects/ColorBends";
import SoftAurora from "@/components/effects/SoftAurora";
import { ServiceIcon } from "@/components/icons";
import { services, type ServiceItem } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Denalix Tech`,
    description: service.description,
  };
}

function ServiceBackground({ effect }: { effect: ServiceItem["effect"] }) {
  switch (effect) {
    case "colorBends":
      return (
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
      );
    case "softAurora":
      return (
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
      );
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  if (!service) notFound();

  const prev = services[index - 1];
  const next = services[index + 1];

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="relative flex-1 overflow-hidden bg-[#08090c]">
        <div className="edge-fade-bottom pointer-events-none absolute inset-0 opacity-60">
          <ServiceBackground effect={service.effect} />
        </div>

        <section className="relative py-24 sm:py-32">
          <div className="relative mx-auto max-w-4xl px-6">
            <Link
              href="/#services"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              ← Back to services
            </Link>

            <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>

            <SplitText
              tag="h1"
              text={service.title}
              splitType="words"
              delay={30}
              duration={0.7}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
              className="mt-5 font-display text-4xl font-medium tracking-tight text-white sm:text-6xl"
            />

            <BlurText
              text={service.detail}
              delay={20}
              animateBy="words"
              direction="top"
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200"
            />
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
                What this looks like
              </h2>
              <ul className="mt-8 space-y-5">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-base leading-7 text-zinc-300">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
                What you get
              </h2>
              <ul className="mt-8 space-y-5">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-base leading-7 text-zinc-300">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            {prev ? (
              <Link
                href={`/services/${prev.slug}`}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/services/${next.slug}`}
                className="text-sm font-medium text-purple-300 transition-colors hover:text-fuchsia-200"
              >
                {next.title} →
              </Link>
            ) : (
              <Link
                href="/#contact"
                className="shine-periodic rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
              >
                Book a Consultation
              </Link>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
