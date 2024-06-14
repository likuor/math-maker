'use client';

import dynamic from 'next/dynamic';

import PDF from '@/components/feature/PDF/PDF';

type Question = {
  equation: string;
  answer: number;
  id: number;
};

type Props = {
  questions: Question[][];
};

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFViewer), {
  ssr: false,
});

const PDFSection = ({ questions }: Props) => {
  return (
    <section
      style={{
        height: '100vh',
      }}
    >
      <PDFViewer width='100%' height='100%'>
        <PDF questions={questions} />
      </PDFViewer>
    </section>
  );
};

export default PDFSection;
