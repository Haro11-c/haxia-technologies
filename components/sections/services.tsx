// components/sections/services.tsx

interface Service {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description:
      'Fast, scalable web platforms built on modern frameworks and clean architecture.',
    bullets: [
      'Next.js & React applications',
      'API design & integration',
      'Performance optimization',
    ],
    icon: (
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
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile experiences engineered for speed and native-quality feel.',
    bullets: [
      'iOS & Android delivery',
      'React Native builds',
      'Offline-first architecture',
    ],
    icon: (
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
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Resilient infrastructure and automated pipelines that scale with your traffic.',
    bullets: [
      'CI/CD pipeline setup',
      'AWS / GCP / Azure deployment',
      'Monitoring & auto-scaling',
    ],
    icon: (
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
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    description:
      'Strategic technical guidance to help you make the right architecture calls early.',
    bullets: [
      'Technology stack audits',
      'System architecture review',
      'Roadmap & scaling strategy',
    ],
    icon: (
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
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.146.083.217.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.397-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.216.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.071-.044.144-.086.219-.128.332-.183.582-.495.644-.869l.213-1.28z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-haxia-slate/[0.02] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl">
            Core Capabilities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-haxia-slate/70">
            End-to-end technical services covering the full lifecycle of your
            product — from first line of code to production scale.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col rounded-2xl border border-haxia-slate/10 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-haxia-orange/30 hover:shadow-lg hover:shadow-haxia-orange/5"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-haxia-orange/10 transition-colors duration-200 group-hover:bg-haxia-orange/15">
                {service.icon}
              </div>

              {/* Title & description */}
              <h3 className="text-lg font-bold text-haxia-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-haxia-slate/60">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="mt-5 space-y-2.5 border-t border-haxia-slate/10 pt-5">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
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
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}