// components/sections/hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Decorative background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Radial fade so grid softens toward edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_white_20%,_transparent_70%)]" />

        {/* Blurred orange accent blob - top right */}
        <div className="absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-haxia-orange/20 blur-3xl" />

        {/* Blurred slate accent blob - bottom left */}
        <div className="absolute bottom-[-15%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-haxia-slate/10 blur-3xl" />

        {/* Diagonal accent line */}
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-haxia-orange/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow tag */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-haxia-orange/20 bg-haxia-orange/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-haxia-orange" />
            <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
              Enterprise Software Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-haxia-dark sm:text-5xl lg:text-6xl">
            We Engineer{' '}
            <span className="text-haxia-orange">Scalable Software</span>{' '}
            for Ambitious Businesses
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-haxia-slate/80">
            Haxia Technologies partners with founders and enterprises to
            design, build, and ship{' '}
            <span className="font-semibold text-haxia-dark">
              web platforms, cloud infrastructure,
            </span>{' '}
            and{' '}
            <span className="font-semibold text-haxia-dark">
              data-driven products
            </span>{' '}
            that perform at scale.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-haxia-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-haxia-orange/20 transition-all duration-200 hover:bg-haxia-hover hover:shadow-haxia-orange/30 sm:w-auto"
            >
              Start Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-haxia-slate/20 bg-white px-7 py-3.5 text-sm font-semibold text-haxia-slate transition-all duration-200 hover:border-haxia-orange hover:text-haxia-orange sm:w-auto"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col items-center gap-4 border-t border-haxia-slate/10 pt-8 sm:flex-row sm:justify-center sm:gap-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-haxia-dark">
                50+
              </span>
              <span className="text-left text-xs leading-tight text-haxia-slate/60">
                Projects
                <br />
                Delivered
              </span>
            </div>
            <div className="hidden h-8 w-px bg-haxia-slate/10 sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-haxia-dark">
                99.9%
              </span>
              <span className="text-left text-xs leading-tight text-haxia-slate/60">
                Uptime
                <br />
                Guarantee
              </span>
            </div>
            <div className="hidden h-8 w-px bg-haxia-slate/10 sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-haxia-dark">
                24/7
              </span>
              <span className="text-left text-xs leading-tight text-haxia-slate/60">
                Support
                <br />
                Coverage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}