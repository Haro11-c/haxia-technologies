// components/modules/hero/hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-haxia-dark">
      {/* Decorative background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_white_10%,_transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,_#121212_10%,_transparent_65%)]" />
        <div className="absolute -top-40 right-[-15%] h-[32rem] w-[32rem] rounded-full bg-haxia-orange/15 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-15%] h-[28rem] w-[28rem] rounded-full bg-haxia-slate/10 blur-3xl dark:bg-white/5" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-haxia-orange/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left column: copy */}
          <div className="animate-slide-up lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-haxia-orange/20 bg-haxia-orange/5 px-4 py-1.5 dark:bg-haxia-orange/10">
              {/* <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-haxia-orange opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-haxia-orange" />
              </span> */}
              <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
                Enterprise Software Partner
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-haxia-dark sm:text-5xl lg:text-[3.5rem] dark:text-white">
              We Engineer{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-haxia-orange">
                  Scalable Software
                </span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-haxia-orange/10" />
              </span>{' '}
              for Ambitious Businesses
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-haxia-slate/70 dark:text-white/60">
              Haxia Technologies partners with founders and enterprises to
              design, build, and ship{' '}
              <span className="font-semibold text-haxia-dark dark:text-white">
                web platforms, cloud infrastructure,
              </span>{' '}
              and{' '}
              <span className="font-semibold text-haxia-dark dark:text-white">
                data-driven products
              </span>{' '}
              that perform at scale.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-haxia-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-haxia-orange/25 transition-all duration-200 hover:bg-haxia-hover hover:shadow-xl hover:shadow-haxia-orange/30 sm:w-auto"
              >
                Start Your Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-haxia-slate/20 bg-white px-7 py-3.5 text-sm font-semibold text-haxia-slate transition-all duration-200 hover:border-haxia-orange hover:text-haxia-orange sm:w-auto dark:border-white/20 dark:bg-transparent dark:text-white/80"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-haxia-slate/10 pt-8 dark:border-white/10">
              <div>
                <p className="text-3xl font-extrabold text-haxia-dark dark:text-white">
                  50+
                </p>
                <p className="mt-1 text-xs leading-tight text-haxia-slate/55 dark:text-white/45">
                  Projects Delivered
                </p>
              </div>
              <div className="border-l border-haxia-slate/10 pl-6 dark:border-white/10">
                <p className="text-3xl font-extrabold text-haxia-dark dark:text-white">
                  99.9%
                </p>
                <p className="mt-1 text-xs leading-tight text-haxia-slate/55 dark:text-white/45">
                  Uptime Guarantee
                </p>
              </div>
              <div className="border-l border-haxia-slate/10 pl-6 dark:border-white/10">
                <p className="text-3xl font-extrabold text-haxia-dark dark:text-white">
                  24/7
                </p>
                <p className="mt-1 text-xs leading-tight text-haxia-slate/55 dark:text-white/45">
                  Support Coverage
                </p>
              </div>
            </div>
          </div>

          {/* Right column: visual mockup panel */}
          <div className="animate-fade-in lg:col-span-5">
            <div className="relative">
              {/* Floating accent card - top */}
              <div className="absolute -left-6 -top-6 z-20 hidden rounded-xl border border-haxia-slate/10 bg-white px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-3 dark:border-white/10 dark:bg-neutral-900">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 dark:bg-green-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-green-600 dark:text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-haxia-dark dark:text-white">
                    Deployment Successful
                  </p>
                  <p className="text-[11px] text-haxia-slate/50 dark:text-white/40">
                    Just now
                  </p>
                </div>
              </div>

              {/* Main mockup card - already dark by design, needs no change */}
              <div className="relative overflow-hidden rounded-2xl border border-haxia-slate/10 bg-haxia-dark shadow-2xl shadow-haxia-slate/20 dark:border-white/10">
                {/* Fake browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                </div>

                {/* Fake dashboard content */}
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 rounded bg-white/15" />
                    <div className="h-6 w-16 rounded-full bg-haxia-orange/20" />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="h-2 w-10 rounded bg-white/15" />
                      <div className="mt-3 h-5 w-14 rounded bg-haxia-orange/60" />
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="h-2 w-10 rounded bg-white/15" />
                      <div className="mt-3 h-5 w-14 rounded bg-white/30" />
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="h-2 w-10 rounded bg-white/15" />
                      <div className="mt-3 h-5 w-14 rounded bg-white/30" />
                    </div>
                  </div>

                  {/* Fake bar chart */}
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="flex h-28 items-end gap-2">
                      {[40, 65, 45, 80, 60, 95, 70].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-haxia-orange to-haxia-orange/40"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-haxia-orange/30" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 w-3/4 rounded bg-white/15" />
                      <div className="h-2 w-1/2 rounded bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent card - bottom */}
              <div className="absolute -bottom-6 -right-4 z-20 hidden rounded-xl border border-haxia-slate/10 bg-white px-4 py-3 shadow-lg sm:block dark:border-white/10 dark:bg-neutral-900">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="h-7 w-7 rounded-full border-2 border-white bg-haxia-orange/30 dark:border-neutral-900" />
                    <div className="h-7 w-7 rounded-full border-2 border-white bg-haxia-slate/30 dark:border-neutral-900" />
                    <div className="h-7 w-7 rounded-full border-2 border-white bg-haxia-orange/50 dark:border-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-haxia-dark dark:text-white">
                      12 engineers
                    </p>
                    <p className="text-[11px] text-haxia-slate/50 dark:text-white/40">
                      Active on projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}