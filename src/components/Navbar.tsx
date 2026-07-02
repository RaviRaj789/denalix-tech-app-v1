"use client";

import { useRef } from "react";
import Magnet from "@/components/effects/Magnet";
import VariableProximity from "@/components/effects/VariableProximity";

const links = [
  { href: "/#work", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#services", label: "Services" },
];

export default function Navbar() {
  const logoRef = useRef(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="inline-block">
          <span
            ref={logoRef}
            className="inline-flex font-display text-lg font-semibold tracking-tight text-white"
          >
            <VariableProximity
              label="Denalix"
              containerRef={logoRef}
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 800"
              radius={80}
            />
            <VariableProximity
              label="Tech"
              containerRef={logoRef}
              className="text-purple-400"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 800"
              radius={80}
            />
          </span>
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-zinc-400 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Magnet padding={50} magnetStrength={5}>
          <a
            href="/#contact"
            className="rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
          >
            Book a Consultation
          </a>
        </Magnet>
      </nav>
    </header>
  );
}
