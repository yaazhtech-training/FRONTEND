// import React, { useEffect, useState } from 'react'

// const Test = () => {

//     const[ intervalID , setIntervalId]= useState();
//     const[time, setTime]= useState(new Date());

//     useEffect(()=>{
//    const intervalID = setIntervalId(()=>{
//     setTime(new Date());
//    },1000);
//    return() =>clearInterval( intervalID )
//     },[])

// const formatTime = (time) =>time.toLocaleTimeString();



//   return (
    
//     <div style={{ fontSize: '2em', textAlign: 'center', marginTop: '20%' }}>
//        {formatTime(time)}
//     </div>
    
//   )
// }

// export default Test

import React, { useEffect, useState } from 'react'
/* Digital clock */

const DigitalClock = () => {

     const [time, setTime]= useState(new Date())
     const [interval, setInterval]= useState()

     useEffect(()=>{
        const interval= setInterval(()=>{
            setTime(new Date())// update
        }, 1000)
     },[])

     const formateTime=(time)=>
        {return time.toLocaleTimeString();}

  return (
    <div style={{ color:" red", textAlign:"center", flex:"20px", fontSize:"80px"}}>
        ClOCK : {formateTime(time)}
    </div>
  )
}

export default DigitalClock