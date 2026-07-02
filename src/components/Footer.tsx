export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090c]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="font-display text-lg font-semibold tracking-tight text-white">
              Denalix<span className="text-purple-400">Tech</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Practical digital systems for businesses that want less manual work, clearer
              operations, better customer experiences, and room to grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a href="/" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/#work" className="transition-colors hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/simple-guide" className="transition-colors hover:text-white">
                  Simple Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a href="/careers" className="transition-colors hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/#why-us" className="transition-colors hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Start</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <a href="/#contact" className="transition-colors hover:text-white">
                  Book a Consultation
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@denalixtech.ai"
                  className="transition-colors hover:text-purple-300"
                >
                  hello@denalixtech.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Denalix Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
