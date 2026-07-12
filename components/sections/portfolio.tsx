// components/sections/portfolio.tsx
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects, type Project } from '@/data/projects';

const CATEGORIES = [
  'All',
  'Web Development',
  'Mobile Development',
  'Cloud Solutions',
] as const;

type FilterCategory = (typeof CATEGORIES)[number];

const FILTER_MAP: Record<FilterCategory, (project: Project) => boolean> = {
  All: () => true,
  'Web Development': (project) =>
    project.category === 'Web Application' ||
    project.category === 'Search Engine' ||
    project.category === 'E-Commerce' ||
    project.category === 'Dashboard' ||
    project.tags.some((tag) => /web|full-stack|dashboard|e-commerce/i.test(tag)),
  'Mobile Development': (project) =>
    project.category === 'Mobile App' ||
    project.tags.some((tag) => /mobile/i.test(tag)) ||
    project.techStack.some((tech) => /react native|swift|kotlin/i.test(tech)),
  'Cloud Solutions': (project) =>
    project.techStack.some((tech) =>
      /aws|azure|gcp|redis|docker|kubernetes|cloud/i.test(tech)
    ) || project.tags.some((tag) => /cloud|infra/i.test(tag)),
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredProjects = useMemo(
    () => projects.filter(FILTER_MAP[activeFilter]),
    [activeFilter]
  );

  return (
    <section id="portfolio" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-haxia-slate/70">
            A snapshot of platforms and products we have engineered for
            clients across search, enterprise tooling, and commerce.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-haxia-orange text-white shadow-sm shadow-haxia-orange/30'
                    : 'bg-haxia-slate/5 text-haxia-slate hover:bg-haxia-orange/10 hover:text-haxia-orange'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-haxia-slate/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-haxia-orange/30 hover:shadow-lg hover:shadow-haxia-orange/5"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-haxia-slate/5">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-haxia-slate backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-haxia-dark transition-colors duration-200 group-hover:text-haxia-orange">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-haxia-slate/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-haxia-slate/10 pt-5">
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
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-14 rounded-2xl border border-dashed border-haxia-slate/20 py-16 text-center">
            <p className="text-sm text-haxia-slate/60">
              No projects found in this category yet.
            </p>
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-haxia-slate/20 bg-white px-6 py-3 text-sm font-semibold text-haxia-slate transition-colors duration-200 hover:border-haxia-orange hover:text-haxia-orange"
          >
            View Full Portfolio
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
        </div>
      </div>
    </section>
  );
}