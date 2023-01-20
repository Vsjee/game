import styled from 'styled-components';

const GameBoardWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 14rem;
  grid-template-columns: repeat(auto-fill, minmax(min(80%, 10rem), 1fr));
  grid-auto-flow: dense;
  gap: 1rem;

  @media screen and (max-width: 870px) {
    width: 90%;
    grid-auto-rows: 12rem;
    grid-template-columns: repeat(auto-fill, minmax(min(80%, 10rem), 1fr));
  }
  @media screen and (max-width: 780px) {
    width: 90%;
    grid-auto-rows: 10rem;
    grid-template-columns: repeat(auto-fill, minmax(min(80%, 8rem), 1fr));
  }
  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(auto-fill, minmax(min(80%, 7rem), 1fr));
  }
  @media screen and (max-width: 550px) {
    grid-auto-rows: 8rem;
    grid-template-columns: repeat(auto-fill, minmax(min(80%, 6rem), 1fr));
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(min(80%, 5rem), 1fr));
  }
  @media screen and (max-width: 410px) {
    grid-auto-rows: 7rem;
  }
`;

export default GameBoardWrapper;
