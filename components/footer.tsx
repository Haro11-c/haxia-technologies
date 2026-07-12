// components/footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const SERVICE_LINKS = [
  { label: 'Web Development', href: '/services#web-development' },
  { label: 'Mobile Applications', href: '/services#mobile-apps' },
  { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
  { label: 'UI/UX Design', href: '/services#ui-ux' },
  { label: 'Data & Analytics', href: '/services#data-analytics' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.79.47-1.67.81-2.6 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.85-.51v.05a4.1 4.1 0 0 0 3.29 4.02c-.6.16-1.24.19-1.87.07a4.11 4.11 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.57a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53a8.3 8.3 0 0 0 2.04-2.12v-.16z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.58 2 12.17c0 4.48 2.87 8.28 6.84 9.62.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27long 2.75 1.05a9.28 9.28 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.17C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-haxia-dark text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Bio */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/brand/logo-of-haxia.jpg"
                alt="Haxia Technologies logo"
                width={36}
                height={36}
                className="rounded-lg object-cover"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                Haxia Technologies
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Haxia Technologies designs and engineers scalable digital
              products — from search platforms to enterprise dashboards —
              built for performance, reliability, and long-term growth.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-colors duration-200 hover:bg-haxia-orange hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-haxia-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-haxia-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/40 sm:flex-row lg:px-8">
          <p>
            &copy; {currentYear} Haxia Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}