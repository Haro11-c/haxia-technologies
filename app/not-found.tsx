// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-lg text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-haxia-orange">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-haxia-dark sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-haxia-slate/70">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-haxia-orange px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-haxia-hover"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-haxia-slate/20 bg-white px-6 py-3 text-sm font-semibold text-haxia-slate transition-colors duration-200 hover:border-haxia-orange hover:text-haxia-orange"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}