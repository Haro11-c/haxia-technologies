// components/modules/team/team.tsx
import { team } from '@/data/team';
import TeamAvatar from './team-avatar';

const SOCIAL_ICONS = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.48 2 2 6.58 2 12.17c0 4.48 2.87 8.28 6.84 9.62.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.28 9.28 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.17C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.79.47-1.67.81-2.6 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.85-.51v.05a4.1 4.1 0 0 0 3.29 4.02c-.6.16-1.24.19-1.87.07a4.11 4.11 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.57a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53a8.3 8.3 0 0 0 2.04-2.12v-.16z" />
    </svg>
  ),
};

export default function Team() {
  return (
    <section id="team" className="relative bg-haxia-slate/[0.02] py-24 lg:py-32 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
            Our People
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl dark:text-white">
            Meet the Leadership
          </h2>
          <p className="mt-4 text-base leading-relaxed text-haxia-slate/70 dark:text-white/60">
            A senior team with hands-on experience shipping production
            software across engineering, design, and infrastructure.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-haxia-slate/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-haxia-orange/30 hover:shadow-lg hover:shadow-haxia-orange/5 dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-haxia-slate/5 dark:bg-white/5">
                <TeamAvatar
                  src={member.image.src}
                  alt={member.image.alt}
                  name={member.name}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-bold text-haxia-dark dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-haxia-orange">
                  {member.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-haxia-slate/60 dark:text-white/50">
                  {member.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-haxia-slate/10 pt-4 dark:border-white/10">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-haxia-orange/5 px-2.5 py-1 text-xs font-medium text-haxia-orange dark:bg-haxia-orange/15"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {member.social && (
                  <div className="mt-4 flex items-center gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const icon =
                        SOCIAL_ICONS[platform as keyof typeof SOCIAL_ICONS];
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${platform}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-haxia-slate/5 text-haxia-slate/60 transition-colors duration-200 hover:bg-haxia-orange hover:text-white dark:bg-white/5 dark:text-white/50"
                        >
                          {icon}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}