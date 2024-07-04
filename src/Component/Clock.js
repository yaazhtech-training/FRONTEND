// import React, { useEffect, useState } from 'react'

// const Clock = () => {

//      const [number,setNumber]= useState(0); // constructor

//      useEffect(()=>{
//         console.log(' counting the ball')
//         checkBall()
//      },[number]); // lifecycle

// function checkBall(){
//     if( number > 50){
//         setNumber(0); // updating state
//     }
// }

// function updateNumber(){
//         setNumber((prevState)=>
//          {return  prevState + 5})
//      }

//   return (
//     <div><h1> I am counting the {number} of balls</h1> 
//     <button style={{ color:"blueviolet"}}
//     onClick={updateNumber}>Add Ball into the Bucket</button></div>
//   )
// } // display {}

// export default Clock


/*
hooks techniques [useState,useEffect, useref] predifined reusable function u.......useEffect, useState
return
function ==== checkBall()
 2 components statefull = class
            stateless = function
*/

import React, { useEffect, useState } from 'react'

const Clock = () => {

  const[number, setNumber]= useState(0); //initiate const , let, var keyword

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

export default Clock
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