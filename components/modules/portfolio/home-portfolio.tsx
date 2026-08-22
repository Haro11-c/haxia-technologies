// components/modules/portfolio/home-portfolio.tsx
'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';

export default function HomePortfolio() {
  const loopProjects = [...projects, ...projects];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-24 lg:py-32 dark:bg-haxia-dark"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
            Launch Record
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl dark:text-white">
            Everything here is live and in production.
          </h2>
        </div>
      </div>

      <div className="group relative mt-16 w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-haxia-dark" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-haxia-dark" />

        <div className="animate-marquee flex w-max gap-8 group-hover:[animation-play-state:paused]">
          {loopProjects.map((project, i) => (
            <a
              key={`${project.id}-${i}`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card flex w-[360px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-haxia-slate/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-haxia-orange/30 hover:shadow-lg hover:shadow-haxia-orange/5 dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-haxia-slate/5 dark:bg-white/5">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="360px"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-haxia-slate backdrop-blur-sm dark:bg-black/70 dark:text-white/80">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    IN-HOUSE
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-haxia-dark transition-colors duration-200 group-hover/card:text-haxia-orange dark:text-white">
                    {project.title}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-1 h-4 w-4 flex-shrink-0 text-haxia-slate/40 transition-colors group-hover/card:text-haxia-orange"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-haxia-slate/10 pt-5 dark:border-white/10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-haxia-slate dark:bg-slate-700 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}