"use client";

import { useRef, useState } from "react";
import Magnet from "@/components/effects/Magnet";
import VariableProximity from "@/components/effects/VariableProximity";

const links = [
  { href: "/#work", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#services", label: "Services" },
];

export default function Navbar() {
  const logoRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="inline-block" onClick={() => setOpen(false)}>
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

        <div className="hidden sm:block">
          <Magnet padding={50} magnetStrength={5}>
            <a
              href="/#contact"
              className="rounded-full bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-purple-400"
            >
              Book a Consultation
            </a>
          </Magnet>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-300 sm:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${open ? "max-h-80" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 text-sm font-medium text-zinc-300">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-purple-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-purple-400"
            >
              Book a Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
