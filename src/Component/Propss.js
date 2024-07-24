import React from 'react'
// child parent
const Propss = (props) => {
  return (
    <div>
        <h1> I love Television</h1>
        <h2>I love to watch tv in this particular =  {props.time} </h2>
    </div>
  )
}

export default Propss

//props and state

// props ====== read message - immutable
//        ======  passing the data

//        from one component to another [parent -> child]