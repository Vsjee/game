import { CharactersInfo } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialCharactersState: CharactersInfo[] = [];

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {
    addCharacters: (state, actions) => {
      return [...state, ...actions.payload];
    },
  },
});

export const { addCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
