import React, { useState } from 'react';

const Fibonaccai = () => {
  
    const [previous1, setPrevious1] = useState(1);
    const [previous2, setPrevious2] = useState(0);

    
    const clickIncrease = () => {
        setPrevious1(previous1 + previous2);
        setPrevious2(previous1);
    };

    
    const clickDecrease = () => {
        if (previous2 > 0) {
            setPrevious1(previous2);
            setPrevious2(previous1 - previous2);
        }
    };

    return (
        <div style={{ fontSize: "40px", fontFamily: 'sans-serif', backgroundColor: 'lightblue', padding: '275px' }}>
            Fibonacci Series
            <span>The current number is </span><b>{previous1}</b> <br />
            <button onClick={clickDecrease} style={{ fontSize: "40px", color: 'orange', margin: '20px' }}>Minuss-</button>
            <button onClick={clickIncrease} style={{ fontSize: "40px", color: 'blue', margin: '20px' }}>Pluss+</button>
        </div>
    );
};

export default Fibonaccai;
