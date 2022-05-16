import MainContent from './components/MainContent/MainContent';
import AdCardList from './components/AdCardList/AdCardList';
import DisneyNews from './components/DisneyNews/DisneyNews';
import DisneyPlusTrending from './components/DisneyPlusTrending/DisneyPlusTrending';

const Home = () => {
  
  
    return (
      <div> 
          <MainContent />
          <AdCardList />
          <DisneyNews />
          <DisneyPlusTrending />
      </div>
    );
}

export default Home