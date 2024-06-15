import { Metadata } from 'next';

import AboutPage from '@/components/pages/about';

export const metadata: Metadata = {
  title: 'Math Maker - About',
  description:
    'Math Makerでは、子供たちが楽しく学べる算数ドリルを簡単に作成できます。年齢やスキルレベルに合わせてカスタマイズ可能なインタラクティブな算数ドリルを提供します。',
  twitter: { card: 'summary_large_image' },
};

const About = () => <AboutPage />;

export default About;
