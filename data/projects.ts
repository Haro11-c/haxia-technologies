// data/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Web Application' | 'Search Engine' | 'Dashboard' | 'Mobile App' | 'E-Commerce'| 'News Portal'|'Machine Learning';
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
      src: '/projects/searchengineui.png',
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
      src: '/projects/admindashboard.png',
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
  slug: 'iesport-news',
  title: 'IeSport News',
  category: 'News Portal',
  description:
    'A high-performance, real-time e-sports news portal delivering dynamic tournament coverage, live score updates, interactive leaderboard tracking, and rich editorial media.',
  longDescription:
    'IeSport News is an enterprise-grade digital media and news platform custom-built for the fast-paced competitive gaming ecosystem. Engineered for high-concurrency traffic and rapid content delivery, the platform features a dynamic CMS for editorial workflows, real-time tournament schedule synchronization, categorized article filtering by game titles, and personalized reader bookmarking. Utilizing SSR and ISR strategies for near-instant page load speeds and SEO dominance, it provides a seamless, media-rich reading experience optimized for both mobile and desktop users.',
  tags: ['E-Sports', 'News Portal', 'Real-Time Content', 'Media CMS', 'SSR'],
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis'],
  image: {
    src: '/projects/iesport admin.png',
    alt: 'IeSport News platform preview showing dynamic sports editorial layout and tournament feeds',
    width: 1200,
    height: 800,
  },
  liveUrl: 'https://iesport.haxia.tech',
  year: 2024,
  featured: true,
},
  {
  id: '4',
  slug: 'house-price-prediction',
  title: 'House Price Prediction',
  category: 'Machine Learning',
  description:
    'An end-to-end predictive analytics web application that estimates real estate market valuations using machine learning models trained on historical property data.',
  longDescription:
    'A robust data science platform designed to forecast property values by analyzing key features like location, square footage, amenities, and market trends. The pipeline integrates exploratory data analysis, feature engineering, and ensemble regression algorithms (such as XGBoost and Random Forest) wrapped in an interactive dashboard for instant property valuation and market insights.',
  tags: ['Machine Learning', 'Predictive Analytics', 'Data Science', 'Real Estate'],
  techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Flask', 'React', 'Tailwind CSS'],
  image: {
    src: '/projects/house-price-prediction.png',
    alt: 'House Price Prediction dashboard showcasing real estate valuation metrics and analytics graphs',
    width: 1200,
    height: 800,
  },
  liveUrl: 'https://house-price-prediction-sepia.vercel.app/',
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