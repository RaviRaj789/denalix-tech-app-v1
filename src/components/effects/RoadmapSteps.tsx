"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import BorderGlow from "@/components/effects/BorderGlow";
import BlurText from "@/components/effects/BlurText";
import type { ApproachStep } from "@/data/approachSteps";

const LINE_DURATION = 1.4;
const STEP_STAGGER = 0.3;
const STEP_DURATION = 0.6;

export default function RoadmapSteps({ steps }: { steps: ApproachStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative mt-16">
      <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px overflow-hidden sm:left-6">
        <motion.div
          className="h-full w-full origin-top bg-linear-to-b from-purple-400 via-fuchsia-400 to-violet-300"
          initial={{ scaleY: 0 }}
          animate={visible ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: LINE_DURATION, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-col gap-8">
        {steps.map((item, i) => (
          <motion.div
            key={item.slug}
            className="relative flex gap-5 sm:gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: STEP_DURATION,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3 + i * STEP_STAGGER,
            }}
          >
            <Link
              href={`/how-it-works/${item.slug}`}
              aria-label={`Learn more about ${item.title}`}
              className="group relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-400/40 bg-[#08090c] font-display text-sm font-medium text-purple-300 transition-transform hover:scale-110 hover:border-fuchsia-300/70 hover:text-fuchsia-200 sm:h-12 sm:w-12"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-purple-400/0 blur-md transition-colors group-hover:bg-purple-400/20" />
              <span className="relative">{item.step}</span>
            </Link>

            <Link href={`/how-it-works/${item.slug}`} className="group block max-w-xl flex-1 pb-2">
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
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-medium text-white transition-colors group-hover:text-fuchsia-200">
                      {item.title}
                    </h3>
                    <span className="text-purple-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </div>
                  <BlurText
                    text={item.description}
                    animateBy="words"
                    direction="top"
                    className="mt-2 max-w-xl text-sm leading-6 text-zinc-400"
                  />
                </div>
              </BorderGlow>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
