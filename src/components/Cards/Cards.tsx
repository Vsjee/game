import { useState } from 'react';
import CardsWrapper from './CardsWrapper.css';

interface Props {
  name: string;
  image: string;
}

function Cards({ name, image }: Props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((active) => !active);
  };

  return (
    <CardsWrapper>
      <button onClick={handleClick} className={active ? 'show' : 'hide'}>
        <picture>
          <img src={`${image}`} alt={`${name}`} />
        </picture>
      </button>
    </CardsWrapper>
  );
}
export default Cards;
