import React, { useState } from 'react';

const DecrementLoop = () => {
  const [counter, setCounter] = useState(10);  

  const handleDecrement = () => {
    let newCounter = counter;
    for (let i = 0; i < 1; i++) {
      newCounter -= 1; 
      console.log(newCounter) 
    }
    setCounter(newCounter); 
  };

  return (
    <div>
      <h1>Counter Value: {counter}</h1>
      <button onClick={handleDecrement}>Decrement Counter</button>
    </div>
  );
};

export default DecrementLoop;
