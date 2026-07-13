// components/ui/input.tsx
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

const FIELD_BASE_CLASSES =
  'w-full rounded-lg border border-haxia-slate/20 bg-white px-4 py-3 text-sm text-haxia-dark placeholder:text-haxia-slate/40 transition-colors duration-200 focus:border-haxia-orange focus:outline-none focus:ring-4 focus:ring-haxia-orange/10';

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  className?: string;
}

interface InputProps
  extends FieldWrapperProps,
    InputHTMLAttributes<HTMLInputElement> {}

export function Input({ label, htmlFor, className = '', ...props }: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-haxia-dark"
      >
        {label}
      </label>
      <input id={htmlFor} className={FIELD_BASE_CLASSES} {...props} />
    </div>
  );
}

interface TextareaProps
  extends FieldWrapperProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({
  label,
  htmlFor,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-haxia-dark"
      >
        {label}
      </label>
      <textarea
        id={htmlFor}
        className={`${FIELD_BASE_CLASSES} resize-none`}
        {...props}
      />
    </div>
  );
}