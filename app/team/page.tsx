// app/team/page.tsx
import type { Metadata } from 'next';
import Team from '@/components/modules/team/team';

export const metadata: Metadata = {
  title: 'Team | Haxia Technologies',
  description:
    'Meet the senior team behind Haxia Technologies — engineers, designers, and infrastructure specialists shipping production software.',
};

export default function TeamPage() {
  return <Team />;
}