import { MetadataRoute } from 'next';
import { personalProfile } from '@/data/profile';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = personalProfile.portfolio || 'https://dhanush.dev';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
