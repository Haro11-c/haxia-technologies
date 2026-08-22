// app/portfolio/page.tsx
import type { Metadata } from 'next';
import Portfolio from '@/components/modules/portfolio/portfolio';

export const metadata: Metadata = {
  title: 'Projects | Haxia Technologies',
  description:
    'Browse the full portfolio of platforms and products engineered by Haxia Technologies across search, enterprise tooling, and commerce.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative bg-white pb-4 pt-20 lg:pt-28 dark:bg-haxia-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
              Our Work
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-haxia-dark sm:text-5xl dark:text-white">
              Full Projects
            </h1>
            <p className="mt-4 text-base leading-relaxed text-haxia-slate/70 dark:text-white/60">
              Every platform we&apos;ve shipped, filterable by discipline.
            </p>
          </div>
        </div>
      </section>
      <Portfolio />
    </>
  );
}