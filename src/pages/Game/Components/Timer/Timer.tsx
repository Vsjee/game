import { useEffect, useRef, useState } from 'react';
import TimerWrapper from './TimerWrapper.css';

function Timer() {
  const [timer, setTimer] = useState(30);

  const id = useRef<number | any>(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);

    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <TimerWrapper>
      <h1>{timer}</h1>
    </TimerWrapper>
  );
}
export default Timer;
