import React, { useState } from 'react'

const UseState = () => {
    const [count , setCount]=useState(1);

    function handleChange (){
        setCount(count * 2)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleChange}>Multiple</button>
    </div>
  )
}

export default UseState
