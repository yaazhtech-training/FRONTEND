//useState
    //controlled state
    //unctrolled DOM

    //this.SeTState{
    //count,
//}

//uncontrolled
//const number = ref.getElementId()
//getElementId

//HOC 
// = <wrappedComponent>
//higherorderComponent <> =<wrappedComponent>

 import React, { Component } from 'react'
 import updatedComponent from './WithCounter'
 class Count extends Component {
  
 
   render() {

const {countes, incrementCount}  = this.props 
return (
       <div>Count

        <button onClick={incrementCount}>Clicked {countes}button</button>
       </div>
     )
   }
 }
 
 export default updatedComponent(Count)