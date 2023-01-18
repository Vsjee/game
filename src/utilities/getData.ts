const baseURL: string = 'https://rickandmortyapi.com/api';
const endpoint: string = baseURL + '/character';

export const getCharacterData = () => {
  return fetch(`${endpoint}/?page=1`).then((data) => data.json());
};
