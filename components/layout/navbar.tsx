// components/layout/navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/theme-toggle';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

function isLinkActive(pathname: string, href: string) {
  // Hash links (like /#team) aren't real routes — never mark them active
  if (href.includes('#')) return false;
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md dark:bg-haxia-dark/90'
          : 'bg-white/70 backdrop-blur-sm dark:bg-haxia-dark/70'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
  {/* Light mode logo — visible by default, hidden in dark mode */}
  <Image
    src="/brand/white-logo-1.png"
    alt="Haxia Technologies logo"
    width={100}
    height={50}
    className="rounded-lg object-cover dark:hidden"
    priority
  />
  {/* Dark mode logo — hidden by default, visible in dark mode */}
  <Image
    src="/brand/dark-logo-1.png"
    alt="Haxia Technologies logo"
    width={100}
    height={50}
    className="hidden rounded-lg object-cover dark:block"
    priority
  />
  {/* <span className="text-lg font-bold tracking-tight text-haxia-dark dark:text-white">
    Haxia <span className="text-haxia-orange">Technologies</span>
  </span> */}
</Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-haxia-orange'
                    : 'text-haxia-slate hover:text-haxia-orange dark:text-white/70 dark:hover:text-haxia-orange'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-haxia-orange transition-transform duration-200 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-haxia-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-haxia-hover"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-haxia-dark dark:text-white"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'top-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 rounded-full bg-current transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'top-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-haxia-slate/10 bg-white px-6 py-4 dark:border-white/10 dark:bg-haxia-dark">
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-md px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-haxia-orange/10 text-haxia-orange'
                    : 'text-haxia-slate hover:bg-haxia-orange/5 hover:text-haxia-orange dark:text-white/70 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-haxia-orange px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-haxia-hover"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}