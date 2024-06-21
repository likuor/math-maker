import { MetadataRoute } from 'next';

const robots = (): Promise<MetadataRoute.Robots> => {
  return Promise.resolve({
    rules: [{ userAgent: '*', allow: ['/', 'about', 'contact'] }],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  });
};
export default robots;
