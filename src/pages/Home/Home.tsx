import { publicRoutes } from '@/models';
import { Link } from 'react-router-dom';

import HomeWrapper from './HomeWrapper.css';

function Home() {
  return (
    <HomeWrapper>
      <h1>Guessing Game</h1>
      <Link to={`/${publicRoutes.GAME}`}>
        <button>Start</button>
      </Link>
    </HomeWrapper>
  );
}
export default Home;
