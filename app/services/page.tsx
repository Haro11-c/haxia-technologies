// app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Haxia Technologies',
  description:
    'Explore Haxia Technologies\' full range of services — web development, mobile applications, cloud & DevOps, and IT consulting.',
};

interface ServiceDetail {
  slug: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
  icon: React.ReactNode;
}

const SERVICES: ServiceDetail[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    summary:
      'Fast, scalable web platforms built on modern frameworks and clean architecture.',
    description:
      'We design and build production-grade web applications using Next.js, React, and TypeScript — architected for performance, SEO, and long-term maintainability. Whether it\'s a marketing site, a SaaS dashboard, or a full-scale platform like a search engine, we engineer the frontend and backend to work together cleanly.',
    deliverables: [
      'Next.js & React application builds',
      'REST & GraphQL API design and integration',
      'Performance auditing & Core Web Vitals optimization',
      'Component-driven design systems',
    ],
    process: [
      { step: 'Discovery', detail: 'Scope requirements, map user flows, define technical constraints.' },
      { step: 'Architecture', detail: 'Design data models, API contracts, and component structure.' },
      { step: 'Build', detail: 'Iterative development with continuous review checkpoints.' },
      { step: 'Launch', detail: 'Performance testing, deployment, and post-launch monitoring.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-7 w-7 text-haxia-orange">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    summary:
      'Cross-platform mobile experiences engineered for speed and native-quality feel.',
    description:
      'We build mobile applications that feel native on both iOS and Android using React Native, with careful attention to offline behavior, performance on lower-end devices, and platform-specific design conventions.',
    deliverables: [
      'iOS & Android app delivery via React Native',
      'Offline-first data architecture',
      'Push notification & deep-linking setup',
      'App Store & Play Store submission support',
    ],
    process: [
      { step: 'Discovery', detail: 'Define platform requirements and device support matrix.' },
      { step: 'Prototyping', detail: 'Build interactive prototypes to validate core flows.' },
      { step: 'Build', detail: 'Cross-platform development with native module integration where needed.' },
      { step: 'Launch', detail: 'Store submission, QA across devices, and release management.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-7 w-7 text-haxia-orange">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    summary:
      'Resilient infrastructure and automated pipelines that scale with your traffic.',
    description:
      'We design cloud infrastructure that scales predictably and fails gracefully. From CI/CD pipeline setup to container orchestration and monitoring, we handle the operational layer so your team can focus on product.',
    deliverables: [
      'CI/CD pipeline setup (GitHub Actions, GitLab CI)',
      'AWS / GCP / Azure infrastructure provisioning',
      'Container orchestration with Docker & Kubernetes',
      'Monitoring, alerting & auto-scaling configuration',
    ],
    process: [
      { step: 'Audit', detail: 'Review current infrastructure and identify bottlenecks or risks.' },
      { step: 'Design', detail: 'Architect scalable, cost-efficient cloud infrastructure.' },
      { step: 'Implementation', detail: 'Set up pipelines, provisioning scripts, and monitoring.' },
      { step: 'Handoff', detail: 'Document systems and train internal teams where needed.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-7 w-7 text-haxia-orange">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    summary:
      'Strategic technical guidance to help you make the right architecture calls early.',
    description:
      'Before writing a line of code, we help you make the right calls — technology stack, system architecture, and scaling strategy. Our consulting engagements are built to de-risk technical decisions before they become expensive to undo.',
    deliverables: [
      'Technology stack audits & recommendations',
      'System architecture review & documentation',
      'Scaling & roadmap strategy sessions',
      'Technical due diligence for investors or acquirers',
    ],
    process: [
      { step: 'Assessment', detail: 'Review existing systems, team structure, and business goals.' },
      { step: 'Analysis', detail: 'Identify risks, gaps, and scaling constraints.' },
      { step: 'Recommendation', detail: 'Deliver a prioritized roadmap with clear trade-offs.' },
      { step: 'Support', detail: 'Ongoing advisory as decisions get implemented.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-7 w-7 text-haxia-orange">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.146.083.217.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.397-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.216.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.071-.044.144-.086.219-.128.332-.183.582-.495.644-.869l.213-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative bg-white pb-16 pt-20 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
              What We Do
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-haxia-dark sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-haxia-slate/70">
              End-to-end technical services covering the full lifecycle of
              your product — from first line of code to production scale.
            </p>
          </div>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 gap-10 rounded-2xl border border-haxia-slate/10 p-8 lg:grid-cols-5 lg:gap-12 lg:p-12 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-haxia-slate/[0.02]'
                }`}
              >
                <div className="lg:col-span-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-haxia-orange/10">
                    {service.icon}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-haxia-dark">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm font-medium text-haxia-orange">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-haxia-slate/70">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-haxia-slate/70"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-haxia-orange"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-haxia-slate/60">
                    Our Process
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.process.map((phase, phaseIndex) => (
                      <div
                        key={phase.step}
                        className="rounded-xl border border-haxia-slate/10 bg-white p-5"
                      >
                        <span className="text-xs font-bold text-haxia-orange">
                          Step {phaseIndex + 1}
                        </span>
                        <h4 className="mt-1 text-base font-bold text-haxia-dark">
                          {phase.step}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-haxia-slate/60">
                          {phase.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-haxia-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Not sure which service fits your project?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Tell us what you&apos;re building and we&apos;ll help you scope
            the right approach.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-haxia-orange px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-haxia-orange/20 transition-colors duration-200 hover:bg-haxia-hover"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}