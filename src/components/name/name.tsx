import { ChangeEvent, useState } from 'react';

export const Name = () => {
  const [name, setName] = useState('');

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type='text' onChange={handleName} />
      <div>name: {name}</div>
    </div>
  );
};
