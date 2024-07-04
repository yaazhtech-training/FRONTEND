import React, { useState } from 'react'
/*
Merge the two arrays and remove duplicates out of it
	var array1 = [1, 2, 3];
	var array2 = [2, 30, 1];
*/
const Merge = () => {
    const arr1 = [1, 2, 3];
    const arr2 = [2, 30, 1];
    const [mergedArray, setMergedArray] = useState([]);
    const mergeArrays = () => {
        const combinedArray = [...arr1, ...arr2];
        const uniqueArray = [...new Set(combinedArray)];
        setMergedArray(uniqueArray);
      };
    
  return (
    <div>
    <h1>Merged Array without Duplicates</h1>
    <button onClick={mergeArrays}>Merge Arrays</button>
    <ul>
      {mergedArray.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  </div>
  
);
};
  

export default Merge