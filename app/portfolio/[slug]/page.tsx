// app/portfolio/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found | Haxia Technologies' };
  }

  return {
    title: `${project.title} | Haxia Technologies`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="relative bg-white pb-12 pt-20 lg:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-haxia-slate/60 transition-colors duration-200 hover:text-haxia-orange"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to Portfolio
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="rounded-full bg-haxia-orange/10 px-3 py-1 text-xs font-semibold text-haxia-orange">
                {project.category}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-haxia-slate/70">
                {project.description}
              </p>
            </div>

            {(project.liveUrl || project.repoUrl) && (
              <div className="flex flex-shrink-0 gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-haxia-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-haxia-hover"
                  >
                    Live Site
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-haxia-slate/20 px-5 py-2.5 text-sm font-semibold text-haxia-slate transition-colors duration-200 hover:border-haxia-orange hover:text-haxia-orange"
                  >
                    Repository
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-haxia-slate/5">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Details grid */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-haxia-dark">
                About This Project
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-haxia-slate/70">
                {project.longDescription ?? project.description}
              </p>

              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.gallery.map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-haxia-slate/5"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="rounded-2xl border border-haxia-slate/10 bg-haxia-slate/[0.02] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-haxia-slate/60">
                  Tech Stack
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-xs font-medium text-haxia-slate shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-haxia-slate/60">
                  Tags
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-haxia-orange/10 px-2.5 py-1 text-xs font-medium text-haxia-orange"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-haxia-slate/10 pt-6">
                  <p className="text-xs text-haxia-slate/50">Year</p>
                  <p className="mt-1 text-sm font-semibold text-haxia-dark">
                    {project.year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More projects */}
      {otherProjects.length > 0 && (
        <section className="bg-haxia-slate/[0.02] py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-xl font-bold text-haxia-dark">
              More Projects
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.slug}`}
                  className="group overflow-hidden rounded-xl border border-haxia-slate/10 bg-white transition-colors duration-200 hover:border-haxia-orange/30"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-haxia-slate/5">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-haxia-dark group-hover:text-haxia-orange">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}