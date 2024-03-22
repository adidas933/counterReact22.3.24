import { useState } from 'react';
import { maxValue, minValue } from '../../data/counterData';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count > minValue) setCount(count - 1);
  };

  const handlePlus = () => {
    if (count < maxValue) setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handlePlus}>+</button>
      <div className='count'>{count}</div>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
