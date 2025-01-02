
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [number, setNumber] = useState(5);

  return (
    <div>
        <h1 className='text-5xl font-bold font-serif'>Props</h1>
      <h1 className='text-2xl font-bold'>Parent Component</h1>
      <p>Initial Number: {number}</p>
      <Child number={number} incrementNumber={(amount) => setNumber(number + amount)} decrementNumber={(amount) => setNumber(number - amount)}/>
    </div>
  );
};

export default Parent;
