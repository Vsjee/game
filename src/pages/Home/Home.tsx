import { publicRoutes } from '@/models';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCharacters } from '@/redux/state/characters';
import { CharactersInfo } from '@/types';
import { getCharacterData } from '@/utilities/getData';
import HomeWrapper from './HomeWrapper.css';

function Home() {
  const dispatch = useDispatch();
  let characters: CharactersInfo[] = [];

  const handleClick = async () => {
    let res = await getCharacterData();
    let results: [] = res.results;
    results.forEach((character: CharactersInfo) => {
      characters.push({ name: character.name, image: character.image });
    });
    dispatch(addCharacters(characters));
  };

  return (
    <HomeWrapper>
      <h1>Guessing Game</h1>
      <Link to={`/${publicRoutes.GAME}`}>
        <button onClick={handleClick}>Start</button>
      </Link>
    </HomeWrapper>
  );
}
export default Home;
