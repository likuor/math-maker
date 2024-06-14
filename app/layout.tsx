import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/layouts/header/Header';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Next14 shadcn template',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='flex justify-center min-h-[100vh] py-10'>
          <div className='w-[84%]'>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
