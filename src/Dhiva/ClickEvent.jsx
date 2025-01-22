import React, { useState } from 'react'

// const ClickEvent = () => {

//     const [color , setColor] = useState("Black");
    
//    function handleColor(){
//         setColor("Red")
//     }
//    function handleColor2(){
//         setColor("Blue")
//     }
//    function handleColor3(){
//         setColor("Yellow")
//     }
//    function handleColor4(){
//         setColor("Orange")
//     }
//    function handleColor5(){
//         setColor("Green")
//     }
//   return (
//     <div>
//       <h1>My Favourite Color is {color}</h1>
//       <button type='text' onClick={handleColor}>
//           Red
//       </button>
//       <button type='text' onClick={handleColor2}>
//           Blue
//       </button>
//       <button type='text' onClick={handleColor3}>
//           Yellow
//       </button>
//       <button type='text' onClick={handleColor4}>
//           Orange
//       </button>
//       <button type='text' onClick={handleColor5}>
//           Green
//       </button>
//     </div>
//   )
// }


const ClickEvent = () => {

    const [color , setColor] = useState("Black");
    
  return (
    <div>
      <h1>My Favourite Color is {color}</h1>
      <button type='text' onClick={()=> setColor("Red")}>
          Red
      </button>
      <button type='text' onClick={()=> setColor("Blue")}>
          Blue
      </button>
      <button type='text' onClick={()=> setColor("Yellow")}>
          Yellow
      </button>
      <button type='text' onClick={()=> setColor("Orange")}>
          Orange
      </button>
      <button type='text' onClick={()=> setColor("Green")}>
          Green
      </button>
    </div>
  )
}

export default ClickEvent
