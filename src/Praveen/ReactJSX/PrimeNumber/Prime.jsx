

import React, { useState } from 'react';
import { prime } from './Calucation';

function Prime() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');

    const handleCheckPrime = () => {
        const num = parseInt(number, 10);
        if (!isNaN(num)) {
            setResult(prime(num));  
        } else {
            setResult('Please enter a valid number');
        }
    };

    return (
        <div>
            <h1>Prime Number Checker</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter a number"
            />
            <button onClick={handleCheckPrime}>Check if Prime</button>
            <div>
                <p>{result}</p>
            </div>
        </div>
    );
}

export default Prime;
