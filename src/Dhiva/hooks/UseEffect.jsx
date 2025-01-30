import React, { useState } from 'react'
import { useEffect } from 'react';

const UseEffect = () => {
    const [num1 , setnum1]= useState(100);
    const [num2 , setnum2] = useState(1000);

    useEffect(()=>{
        setnum1(200);
        console.log("From useEffect");

        return ()=>{
            setnum1(1000);
            console.log("Memory clean")
        }

    },[num1,num2])
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={()=>setnum1((current)=>current +1)}>ADD</button>
      <h1>{num2}</h1>
      <button onClick={()=>setnum2((current)=>current +1)}>ADD</button>
    </div>
  )
}

export default UseEffect
