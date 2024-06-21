import { MetadataRoute } from 'next';

const sitemap = (): Promise<MetadataRoute.Sitemap> => {
  const lastModified = new Date();

  return Promise.resolve([
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified,
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified,
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified,
      // changeFrequency: 'monthly',
      // priority: 0.8,
    },
  ]);
};
export default sitemap;
