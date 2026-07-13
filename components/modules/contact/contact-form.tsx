// components/modules/contact/contact-form.tsx
'use client';

import { useState, type FormEvent } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  projectDetails: string;
}

const INITIAL_FORM_STATE: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  projectDetails: '',
};

const OFFICES = [
  {
    city: 'Addis Ababa, Ethiopia',
    address: 'Bole Road, Kirkos Sub-City, 1000',
  },
  {
    city: 'Nairobi, Kenya',
    address: 'Westlands Business District, 00100',
  },
];

const CONTACT_EMAILS = [
  { label: 'General Inquiries', email: 'hello@haxiatech.com' },
  { label: 'Support', email: 'support@haxiatech.com' },
  { label: 'Careers', email: 'careers@haxiatech.com' },
];

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Replace with actual API route / email service integration
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData(INITIAL_FORM_STATE);
    } catch {
      setStatus('error');
    }
  };

  const inputBaseClasses =
    'w-full rounded-lg border border-haxia-slate/20 bg-white px-4 py-3 text-sm text-haxia-dark placeholder:text-haxia-slate/40 transition-colors duration-200 focus:border-haxia-orange focus:outline-none focus:ring-4 focus:ring-haxia-orange/10 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/30';

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32 dark:bg-haxia-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-haxia-orange">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haxia-dark sm:text-4xl dark:text-white">
            Let&apos;s Build Something Reliable
          </h2>
          <p className="mt-4 text-base leading-relaxed text-haxia-slate/70 dark:text-white/60">
            Tell us about your project and our team will get back to you
            within one business day.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: office & contact info — already dark by design, no change needed */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-haxia-slate/10 bg-haxia-dark p-8 text-white dark:border-white/10">
              <h3 className="text-lg font-bold">Our Offices</h3>
              <div className="mt-6 space-y-6">
                {OFFICES.map((office) => (
                  <div key={office.city} className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-haxia-orange"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {office.city}
                      </p>
                      <p className="mt-0.5 text-sm text-white/50">
                        {office.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-lg font-bold">Contact Emails</h3>
                <div className="mt-6 space-y-4">
                  {CONTACT_EMAILS.map((contact) => (
                    <div key={contact.email} className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        className="h-5 w-5 flex-shrink-0 text-haxia-orange"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <div>
                        <p className="text-xs text-white/40">
                          {contact.label}
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-sm font-medium text-white hover:text-haxia-orange"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-haxia-slate/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-haxia-dark dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className={inputBaseClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-haxia-dark dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className={inputBaseClasses}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-haxia-dark dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className={inputBaseClasses}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="projectDetails"
                  className="mb-2 block text-sm font-semibold text-haxia-dark dark:text-white"
                >
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className={`${inputBaseClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-haxia-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-haxia-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-sm font-medium text-green-600 dark:text-green-400">
                  Thanks — your message has been sent. We&apos;ll be in touch
                  shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-sm font-medium text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email us
                  directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}