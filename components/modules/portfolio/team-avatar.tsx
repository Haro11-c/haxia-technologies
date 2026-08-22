// components/modules/team/team-avatar.tsx
'use client';

import { useState } from 'react';

interface TeamAvatarProps {
  src: string;
  alt: string;
  name: string;
}

// Deterministic color pick so the same person always gets the same background
const PALETTE = [
  'bg-haxia-orange',
  'bg-emerald-600',
  'bg-sky-600',
  'bg-violet-600',
  'bg-rose-600',
  'bg-amber-600',
];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function getColor(name: string) {
  const index = name
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return PALETTE[index % PALETTE.length];
}

export default function TeamAvatar({ src, alt, name }: TeamAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center ${getColor(
          name
        )}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-3xl font-bold text-white sm:text-4xl">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  // Plain <img> instead of next/image: next/image's onError is unreliable
  // for local 404s served through the dev image optimizer.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}