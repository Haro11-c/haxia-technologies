// components/ui/card.tsx
import type { HTMLAttributes } from 'react';

type CardTone = 'light' | 'dark' | 'muted';

const TONE_CLASSES: Record<CardTone, string> = {
  light: 'bg-white border-haxia-slate/10',
  dark: 'bg-haxia-dark border-white/10 text-white',
  muted: 'bg-haxia-slate/[0.02] border-haxia-slate/10',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CardTone;
  hoverable?: boolean;
}

export default function Card({
  tone = 'light',
  hoverable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const hoverClasses = hoverable
    ? 'transition-all duration-200 hover:-translate-y-1 hover:border-haxia-orange/30 hover:shadow-lg hover:shadow-haxia-orange/5'
    : '';

  return (
    <div
      className={`rounded-2xl border p-6 ${TONE_CLASSES[tone]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}