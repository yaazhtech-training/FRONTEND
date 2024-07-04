import React from 'react';

// Function to check for pairs with a given sum
const hasPairWithSum = (arr, x) => {
  const set = new Set();
  for (let num of arr) {
    if (set.has(x - num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

const Pair = () => {
  const predefinedArray1 = [0, -1, 2, -3, 1];
  const predefinedX1 = -2;

  const predefinedArray2 = [1, -2, 1, 0, 5];
  const predefinedX2 = 0;

  const result1 = hasPairWithSum(predefinedArray1, predefinedX1) ? "Yes" : "No";
  const result2 = hasPairWithSum(predefinedArray2, predefinedX2) ? "Yes" : "No";

  return (
    <div>
      <h1>Check for Pair with Given Sum</h1>
      <div>
        <h2>Array: {predefinedArray1.join(', ')} | Sum: {predefinedX1}</h2>
        <p>Result: {result1}</p>
      </div>
      <div>
        <h2>Array: {predefinedArray2.join(', ')} | Sum: {predefinedX2}</h2>
        <p>Result: {result2}</p>
      </div>
    </div>
  );
};

export default Pair;
