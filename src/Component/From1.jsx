import React, { useState } from 'react'
//functional component
const From1 = () => {
//logic
const[ball,setBall] = useState(100); // 1--state  2. update state
  return (// css part
    <>
 <h2 style={{fontSize:"60px", color:"green" }}>
        I am going to count the number of balls : {ball}
      </h2>
    </>
  )
}

export default From1