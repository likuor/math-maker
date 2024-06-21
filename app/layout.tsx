import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Header from '../components/layouts/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Math Maker - 子供向けカスタマイズ可能な算数ドリル',
    template: '%s - Math Maker',
  },
  description:
    'Math Makerでは、子供たちが楽しく学べる算数ドリルを簡単に作成できます。年齢やスキルレベルに合わせてカスタマイズ可能なインタラクティブな算数ドリルを提供します。',
  keywords:
    '算数, 算数ドリル, 子供向け, 教育, 学習, 算数学習, 算数教育, Math Maker, カスタマイズ可能',
  twitter: { card: 'summary_large_image' },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='flex min-h-[100vh] justify-center py-10'>
          <div className='w-[84%]'>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
