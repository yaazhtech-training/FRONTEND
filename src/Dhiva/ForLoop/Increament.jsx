import React, { useState } from 'react';

const Increament = () => {
  const [counter,setCounter] =useState(0);

 function handleIncreament(){
    let newCounter = counter;
    for(let i=0; i<1; i++){
        newCounter += 1;
        console.log(newCounter)
    }
    setCounter(newCounter)
  }

  return (
    <div>
        <h1>Counter :{counter}</h1>
        <button onClick={handleIncreament}>Increament</button>
    </div>
  );
}

export default Increament;
