//function Component
/*
Hooks techniques
*/
import React, { useEffect, useState } from 'react'

const FunctionComponent = () => {

  const[number, setNumber]= useState(0); //initiate const , let, var keyword
const [count, setCount ] = useState();
   useEffect(()=>{
    console.log("Checkball",checkBall);
   
    checkBall();
   },[]);

   function checkBall(){
    if(number>10){ //condition
  setNumber(0); //update
    }}

function updateNumber(){
  setNumber((prevstate)=>
  {return prevstate+1})
}
  return (
    <div>

      <h1 style={{fontSize:"40px", color:"green" }}>
        I am going to count the number of balls : {number}
      </h1>
      <button size="lg "style={{color :"red", fontSize:"20px" }}

onClick={ updateNumber}> add the ball
      </button>
    </div>
  )
}

export default FunctionComponent
/** HOOK TECHNIQUES
 * useEffect
 * useState
 * useRef
 * useContext
 * useReducer
 * useCallabe
 * 
 * 
 * jsx
 */