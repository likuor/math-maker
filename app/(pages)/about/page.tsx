import { Metadata } from 'next';

import AboutPage from '@/components/pages/about';

export const metadata: Metadata = {
  title: 'Math Maker - About',
  description:
    'Math Makerは、子供たちが楽しく学べる算数ドリルを提供します。私たちの使命、提供するサービス、チームについてご紹介します。',
};

const About = () => <AboutPage />;

export default About;
