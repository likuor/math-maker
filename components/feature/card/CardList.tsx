import ArticleCard from './ArticleCard';

const CardList = ({ allArticles }: any) => {
  return (
    <div className='grid lg:grid-cols-3 p-4 gap-4'>
      {allArticles.map((article: any) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CardList;
