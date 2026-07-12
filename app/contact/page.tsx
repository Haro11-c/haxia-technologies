// app/contact/page.tsx
import type { Metadata } from 'next';
import ContactForm from '@/components/sections/contact-form';

export const metadata: Metadata = {
  title: 'Contact | Haxia Technologies',
  description:
    'Get in touch with Haxia Technologies to discuss your next web, mobile, or cloud project.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-white pb-4 pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-haxia-dark sm:text-5xl">
              Start a Conversation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-haxia-slate/70">
              Whether it&apos;s a new build or a system that needs scaling,
              we&apos;re ready to help.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}