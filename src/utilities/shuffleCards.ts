import { CharactersInfo } from '@/types';

export const shuffleCards = (charactersArray: CharactersInfo[]): CharactersInfo[] => {
  for (let i = charactersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = charactersArray[i];
    charactersArray[i] = charactersArray[j];
    charactersArray[j] = temp;
  }
  return charactersArray;
};
