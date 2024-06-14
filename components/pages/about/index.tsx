import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold'>Math Makerについて</h1>
      <p>
        Math
        Makerでは、子供たちが楽しく学べる算数の環境を提供することを信条としています。当プラットフォームは、子供たちがインタラクティブかつ楽しく算数のスキルを向上させるためのカスタマイズ可能な算数ドリルを提供しています。
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>カスタマイズ可能な算数ドリル</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              さまざまな年齢層とスキルレベルに対応したカスタマイズ可能な算数ドリルを提供しています。個々の学習ニーズに合わせて、子供たちが自分のペースで学習できる環境を整えています。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>印刷可能なワークシート</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              自宅での学習や授業で使用できるよう、ドリルはPDFとして印刷可能です。デジタルデバイスを使わずに学習することもでき、従来の紙の教材としても利用可能です。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>私たちのチーム</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              私たちのチームは、経験豊富な教育者、開発者、デザイナーで構成されており、子供たちが楽しみながら学べる算数教育を提供することに情熱を注いでいます。保護者や教師のニーズに応える高品質な教育リソースを提供することに尽力しています。
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>お問い合わせ</h2>
        <p>
          質問やフィードバックがありましたら、
          <Link href='/contact' className='text-blue-500'>
            お問い合わせページ
          </Link>
          からお気軽にお問い合わせください。お待ちしております！
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
