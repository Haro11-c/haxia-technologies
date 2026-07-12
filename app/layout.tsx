// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}