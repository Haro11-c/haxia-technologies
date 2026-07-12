// data/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Web Application' | 'Search Engine' | 'Dashboard' | 'Mobile App' | 'E-Commerce';
  description: string;
  longDescription?: string;
  tags: string[];
  techStack: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
  liveUrl?: string;
  repoUrl?: string;
  year: number;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'gootiraa-search-engine',
    title: 'GooTiraa Search Engine',
    category: 'Search Engine',
    description:
      'A high-performance, localized search engine built to index and retrieve regional content with speed and accuracy.',
    longDescription:
      'GooTiraa is a full-stack search engine platform designed to crawl, index, and rank localized web content. Built with a custom scoring algorithm and optimized MongoDB text indexes, it delivers sub-second query responses at scale.',
    tags: ['Search', 'Full-Stack', 'AI-Ready'],
    techStack: ['Next.js', 'MongoDB', 'Node.js', 'TypeScript', 'Redis'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'GooTiraa Search Engine dashboard preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://gootiraa.haxia.tech',
    year: 2025,
    featured: true,
  },
  {
    id: '2',
    slug: 'haburu-admin-dashboard',
    title: 'Haburu Admin Dashboard',
    category: 'Dashboard',
    description:
      'A robust enterprise admin panel for managing users, analytics, and content across multiple client applications.',
    longDescription:
      'Haburu Admin Dashboard centralizes operational control for enterprise clients, offering real-time analytics, role-based access control, and modular widgets for tracking KPIs across departments.',
    tags: ['Dashboard', 'Enterprise', 'Analytics'],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Haburu Admin Dashboard overview screen',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://haburu.haxia.tech',
    year: 2024,
    featured: true,
  },
  {
    id: '3',
    slug: 'sanyata-ecommerce-platform',
    title: 'Sanyata E-Commerce Platform',
    category: 'E-Commerce',
    description:
      'A modern, scalable online storefront featuring dynamic product catalogs, secure checkout, and vendor management.',
    longDescription:
      'Sanyata is a multi-vendor e-commerce solution built for scale, supporting dynamic inventory management, integrated payment gateways, and a responsive shopping experience optimized for conversion.',
    tags: ['E-Commerce', 'Multi-Vendor', 'Payments'],
    techStack: ['Next.js', 'Stripe', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Sanyata E-Commerce Platform storefront preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://sanyata.haxia.tech',
    year: 2024,
    featured: false,
  },
  {
    id: '4',
    slug: 'wabii-mobile-banking-app',
    title: 'Wabii Mobile Banking App',
    category: 'Mobile App',
    description:
      'A secure cross-platform mobile banking application supporting transfers, bill payments, and account management.',
    longDescription:
      'Wabii brings core banking functionality to a native-quality mobile experience, built with React Native and hardened with biometric authentication, encrypted local storage, and real-time transaction syncing.',
    tags: ['Mobile', 'FinTech', 'Security'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'TypeScript'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Wabii Mobile Banking App interface preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://wabii.haxia.tech',
    year: 2025,
    featured: true,
  },
  {
    id: '5',
    slug: 'dagu-logistics-platform',
    title: 'Dagu Logistics Platform',
    category: 'Web Application',
    description:
      'A fleet and delivery management platform providing real-time tracking, route optimization, and driver dispatch.',
    longDescription:
      'Dagu streamlines logistics operations for regional delivery businesses, combining live GPS tracking, automated route optimization, and a dispatcher dashboard for coordinating drivers at scale.',
    tags: ['Logistics', 'Real-Time', 'Full-Stack'],
    techStack: ['Next.js', 'PostgreSQL', 'WebSockets', 'TypeScript', 'Redis'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Dagu Logistics Platform dashboard preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://dagu.haxia.tech',
    year: 2024,
    featured: false,
  },
  {
    id: '6',
    slug: 'sooqa-marketplace',
    title: 'Sooqa Marketplace',
    category: 'E-Commerce',
    description:
      'A multi-vendor B2B marketplace connecting regional suppliers with businesses through bulk ordering and invoicing.',
    longDescription:
      'Sooqa enables suppliers and buyers to transact directly through a structured marketplace, with support for bulk quotes, automated invoicing, and vendor performance tracking.',
    tags: ['Marketplace', 'B2B', 'Payments'],
    techStack: ['Next.js', 'MongoDB', 'Stripe', 'TypeScript', 'Tailwind CSS'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Sooqa Marketplace storefront preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://sooqa.haxia.tech',
    year: 2023,
    featured: false,
  },
  {
    id: '7',
    slug: 'baraaka-cloud-monitoring',
    title: 'Baraaka Cloud Monitoring Suite',
    category: 'Dashboard',
    description:
      'An observability dashboard aggregating infrastructure metrics, logs, and alerts across multi-cloud environments.',
    longDescription:
      'Baraaka gives DevOps teams a single pane of glass over AWS, GCP, and on-prem infrastructure, with customizable alerting rules, historical trend charts, and incident timeline tracking.',
    tags: ['Cloud', 'DevOps', 'Monitoring'],
    techStack: ['Next.js', 'Prometheus', 'Grafana API', 'TypeScript', 'Docker'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Baraaka Cloud Monitoring Suite dashboard preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://baraaka.haxia.tech',
    year: 2025,
    featured: true,
  },
  {
    id: '8',
    slug: 'furqaan-lms-platform',
    title: 'Furqaan Learning Management System',
    category: 'Web Application',
    description:
      'An online learning platform supporting course delivery, live sessions, quizzes, and progress tracking at scale.',
    longDescription:
      'Furqaan powers online education for institutions, combining video-based course delivery, auto-graded quizzes, and detailed student progress analytics in a single platform.',
    tags: ['Education', 'Full-Stack', 'Video'],
    techStack: ['Next.js', 'PostgreSQL', 'AWS S3', 'TypeScript', 'Tailwind CSS'],
    image: {
      src: '/projects/portfolioimage.jpg',
      alt: 'Furqaan Learning Management System interface preview',
      width: 1200,
      height: 800,
    },
    liveUrl: 'https://furqaan.haxia.tech',
    year: 2023,
    featured: false,
  },
];