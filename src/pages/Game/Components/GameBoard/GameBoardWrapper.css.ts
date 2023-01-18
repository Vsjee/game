import styled from 'styled-components';

const GameBoardWrapper = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 14rem;
  grid-template-columns: repeat(auto-fill, minmax(min(80%, 10rem), 1fr));
  grid-auto-flow: dense;
  gap: 1rem;
`;

export default GameBoardWrapper;
