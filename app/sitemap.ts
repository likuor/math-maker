import { MetadataRoute } from 'next';

import config from '@/lib/config';

const sitemap = (): Promise<MetadataRoute.Sitemap> => {
  const lastModified = new Date();

  return Promise.resolve([
    {
      url: `${config.appBaseUrl}`,
      lastModified,
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
    {
      url: `${config.appBaseUrl}/about`,
      lastModified,
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
    {
      url: `${config.appBaseUrl}/contact`,
      lastModified,
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
  ]);
};
export default sitemap;
