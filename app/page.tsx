// import CardList from '@/components/feature/card/CardList';
import { MathForm } from '@/components/feature/form/MathForm';
import HomePage from '@/components/pages';

const fetchAllArticles = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || '', {
    // const res = await fetch('http://localhost:3001/api/post', {
    cache: 'no-store',
  });
  const articles = await res.json();
  return articles;
};

export default async function Home() {
  // const allArticles = await fetchAllArticles();

  return <HomePage />;
}
