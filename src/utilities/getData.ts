const baseURL: string = 'https://rickandmortyapi.com/api';
const endpoint: string = baseURL + '/character';

export const getCharacterData = (page: number) => {
  return fetch(`${endpoint}/?page=${page}`).then((data) => data.json());
};
