import { addCharacters } from '@/redux/state/characters';
import { CharactersInfo } from '@/types';
import { getCharacterData } from '@/utilities/getData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GameBoard, Timer } from './Components';
import GameWrapper from './GameWrapper.css';

function Game() {
  const dispatch = useDispatch();
  let characters: CharactersInfo[] = [];

  const getCharacters = async () => {
    let randomPage = Math.floor(Math.random() * (9 - 1) + 1);
    let res = await getCharacterData(randomPage);
    let results: [] = res.results;
    results.forEach((character: CharactersInfo) => {
      characters.push({ name: character.name, image: character.image });
    });
    dispatch(addCharacters(characters));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <GameWrapper>
      <Timer />
      <GameBoard />
    </GameWrapper>
  );
}
export default Game;
