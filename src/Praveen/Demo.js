import React from 'react';

const Demo = () => {
  const fruits = ['apple', 'orange', 'banana'];
  
  const modifiedFruits = fruits.map((fruit) => fruit.toUpperCase());

  return (
    <div>
      <h1>Modified Fruits</h1>
      <ul>
        {modifiedFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;





// const fruits = ['apple', 'orange', 'banana']

//  const modifiedFruit = fruits.map((fruits)=>fruits.toUpperCase())

//  console.log(modifiedFruit);
 
   