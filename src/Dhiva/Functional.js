


import React, { useState } from 'react';

const Functional = () => {

    const [isOn, setIsOn] = useState(false);

  // Function to toggle the 'isOn' state

  const toggle = () => {
    setIsOn(!isOn); // Toggle between true and false
  };

  return (
    <div>
      <h1 className='text-5xl font-bold font-serif'>Toggle Button</h1>
      <p>The button is {isOn ? 'ON' : 'OFF'}</p>
      <button className='bg-red-600' onClick={toggle}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>

      <hr />
    </div>
    
  );
};

export default Functional;