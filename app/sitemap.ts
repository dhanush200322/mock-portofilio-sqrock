import { MetadataRoute } from 'next';
import { personalProfile } from '@/data/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = personalProfile.portfolio || 'https://dhanush.dev';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
