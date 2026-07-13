// app/robots.ts
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.haxiatech.com'; // replace with your real domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}