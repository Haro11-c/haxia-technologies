// data/team.ts

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  image: {
    src: string;
    alt: string;
  };
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Haro Utura',
    title: 'Founder & CEO',
    bio: 'Leads Haxia\'s technical vision and client strategy, with a background in scalable backend systems and enterprise architecture.',
    skills: ['System Architecture', 'Product Strategy', 'Node.js'],
    image: {
      src: '/team/Haro-ceo.png',
      alt: 'Portrait of Haro Utura, Founder and CEO',
    },
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: '2',
    name: 'Naomi Getachew',
    title: 'Head of Engineering',
    bio: 'Oversees full-stack delivery across all client projects, specializing in performance-focused React and Next.js applications.',
    skills: ['Next.js', 'TypeScript', 'System Design'],
    image: {
      src: '/team/Haro-ceo.png',
      alt: 'Portrait of Naomi Getachew, Head of Engineering',
    },
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: '3',
    name: 'Dawit Alemu',
    title: 'Lead DevOps Engineer',
    bio: 'Builds and maintains cloud infrastructure and CI/CD pipelines, keeping deployments fast, secure, and highly available.',
    skills: ['AWS', 'Docker', 'Kubernetes'],
    image: {
      src: '/team/Haro-ceo.png',
      alt: 'Portrait of Dawit Alemu, Lead DevOps Engineer',
    },
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: '4',
    name: 'Bethlehem Mekonnen',
    title: 'Product Designer',
    bio: 'Shapes the user experience across every product, translating complex workflows into clean, intuitive interfaces.',
    skills: ['UI/UX Design', 'Figma', 'Design Systems'],
    image: {
      src: '/team/Haro-ceo.png',
      alt: 'Portrait of Bethlehem Mekonnen, Product Designer',
    },
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: '5',
    name: 'Yosef Kebede',
    title: 'Senior Backend Engineer',
    bio: 'Designs and maintains the API and database layers powering Haxia\'s most data-intensive client platforms.',
    skills: ['Node.js', 'PostgreSQL', 'API Design'],
    image: {
      src: '/team/Haro-ceo.png',
      alt: 'Portrait of Yosef Kebede, Senior Backend Engineer',
    },
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: '6',
    name: 'Selam Fikru',
    title: 'QA & Test Automation Lead',
    bio: 'Builds automated testing pipelines and quality processes that keep every release stable and regression-free.',
    skills: ['Test Automation', 'CI/CD', 'Playwright'],
    image: {
      src: '/team/Haro-ceo.png',
      alt: 'Portrait of Selam Fikru, QA and Test Automation Lead',
    },
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
];