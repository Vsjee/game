import styled from 'styled-components';

const CardsWrapper = styled.article`
  padding: 0;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  background: url('https://i.pinimg.com/564x/2a/42/a6/2a42a62a1018d3150385647da07fa677.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0;

  button {
    background: transparent;
    border: none;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }

  .hide {
    cursor: pointer;
  }

  .show {
    pointer-events: none;
    img {
      opacity: 1;
    }
  }
`;

export default CardsWrapper;
