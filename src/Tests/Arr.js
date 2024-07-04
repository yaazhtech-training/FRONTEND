import React, { useState } from 'react'
/*Filter given array and return only those values which are greater than 30
    	Input = [10, 20, 25, 30, 45, 70, 80] 
      */


const Arr = () => {

  const[arr, setArr]= useState([]);

    const arrs = [10, 20, 25, 30, 45, 70, 80];
    
const data=()=>{

 const answer = arrs.filter (value => value>30);
setArr(answer);
}

  return (
    <div style={{textAlign:"center", fontSize:"40px"}}> 
   <button onClick={data}>Greater Number</button>
   <ul>
        {arr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
        </ul>
     </div>
  )
}

export default Arr