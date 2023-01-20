import { Cards } from '@/components';
import { AppStore } from '@/redux/store';
import { CharactersInfo } from '@/types';
import { shuffleCards } from '@/utilities';
import { useSelector } from 'react-redux';
import GameBoardWrapper from './GameBoardWrapper.css';

function GameBoard() {
  const characters = useSelector((state: AppStore) => state.characters);
  const reduceCharacter = characters.slice(0, 6);
  const duplicateCharacter = [...reduceCharacter, ...reduceCharacter];
  const shuffledCharacters = shuffleCards(duplicateCharacter);

  return (
    <GameBoardWrapper>
      {shuffledCharacters.map((item: CharactersInfo, i) => {
        return <Cards name={item.name} image={item.image} key={i} />;
      })}
    </GameBoardWrapper>
  );
}
export default GameBoard;
