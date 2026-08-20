import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteChrome from '@/components/layout/site-chrome';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Haxia Technologies | Enterprise Software & Cloud Solutions',
  description:
    'Haxia Technologies designs and engineers scalable web platforms, mobile applications, and cloud infrastructure for ambitious businesses.',
  keywords: [
    'Haxia Technologies',
    'software development',
    'web development',
    'mobile app development',
    'cloud solutions',
    'IT consulting',
  ],
  openGraph: {
    title: 'Haxia Technologies | Enterprise Software & Cloud Solutions',
    description:
      'We engineer scalable software for ambitious businesses — from search platforms to enterprise dashboards.',
    siteName: 'Haxia Technologies',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('haxia-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}