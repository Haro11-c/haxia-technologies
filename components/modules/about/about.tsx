// components/modules/about/about.tsx

const PILLARS = [
  {
    title: 'Reliability',
    description:
      'We build systems designed to run without surprises — tested, monitored, and engineered to hold up under real production load.',
  },
  {
    title: 'Scalability',
    description:
      'Every architecture decision accounts for growth from day one, so your platform scales with demand instead of against it.',
  },
  {
    title: 'Transparency',
    description:
      'Clear timelines, honest scoping, and direct communication — no black boxes between our team and yours.',
  },
  {
    title: 'Craftsmanship',
    description:
      'Clean code, thoughtful UX, and attention to detail at every layer of the stack, not just the parts that show.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 lg:py-32 dark:bg-haxia-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl dark:text-white">
            Built on Vision, Driven by Mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-haxia-slate/70 dark:text-white/60">
            Haxia Technologies exists to turn ambitious ideas into dependable
            software — grounded in engineering discipline and a genuine
            partnership with every client we work with.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-haxia-slate/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-haxia-orange/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="h-6 w-6 text-haxia-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haxia-dark dark:text-white">
              Our Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-haxia-slate/70 dark:text-white/55">
              To be the technology partner ambitious companies turn to when
              they need software that doesn&apos;t just launch — it lasts,
              scales, and compounds in value over time.
            </p>
          </div>

          <div className="rounded-2xl border border-haxia-slate/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-haxia-orange/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="h-6 w-6 text-haxia-orange"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-haxia-dark dark:text-white">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-haxia-slate/70 dark:text-white/55">
              To engineer reliable, well-architected products — from search
              platforms to enterprise dashboards — while giving every client
              full clarity into how their systems are built and why.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-haxia-slate/60 dark:text-white/40">
            Core Pillars
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group relative rounded-xl border border-haxia-slate/10 bg-white p-6 transition-colors duration-200 hover:border-haxia-orange/30 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-3xl font-extrabold text-haxia-orange/15 transition-colors duration-200 group-hover:text-haxia-orange/25 dark:text-haxia-orange/25 dark:group-hover:text-haxia-orange/40">
                  0{index + 1}
                </span>
                <h4 className="mt-2 text-base font-bold text-haxia-dark dark:text-white">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-haxia-slate/60 dark:text-white/50">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}