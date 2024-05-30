import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

const fetchArticleImage = async (url: string) => {
  const res = await fetch(url, {
    cache: 'no-store',
  });
  const articleImage = await res.json();
  return articleImage;
};

const ArticleCard = async ({ article }: any) => {
  const articleImage = await fetchArticleImage(
    article?._links['wp:featuredmedia']['0'].href
  );

  return (
    <Card className={cn('w-[430px]')}>
      <CardHeader className=' min-h-[150px]'>
        <CardTitle>{article?.title.rendered}</CardTitle>
        <CardDescription>{formatDate(article?.date)}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='w-full h-[240px] relative'>
          <Image
            src={articleImage.guid?.rendered}
            alt={article?.title.rendered}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        </div>
      </CardContent>
      <CardFooter>
        <Link href='/' className=' text-blue-500'>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
