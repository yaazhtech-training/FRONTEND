
import React from 'react';

const Child = ({ number, incrementNumber, decrementNumber}) => {
  return (
    <div className='space-x-5'>
      <h2 className='text-2xl font-bold'>Child Component</h2>
      <p>Current Number: {number}</p>
      <button className='bg-red-600 rounded-md' onClick={() => incrementNumber(1)}>Increment by 1</button>
      <button className='bg-red-600 rounded-md' onClick={() => decrementNumber(1)}>Increment by 1</button>

      <hr />
    </div>
  );
};

export default Child;
