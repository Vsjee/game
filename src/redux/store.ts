import { CharactersInfo } from '@/types';
import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './state/characters';

export interface AppStore {
  characters: CharactersInfo[];
}

const MyStore = configureStore<AppStore>({
  reducer: {
    characters: charactersSlice,
  },
});

export default MyStore;
