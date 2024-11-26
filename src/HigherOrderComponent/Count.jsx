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

// 
//   class Count extends React.Component{
//     constructor(props) {

//       super(props)
    
//       this.state = {
//         countes :0
//       }
//     }
//     incrementCount = ()=>{
//     this.setState(prevState => {
//       return { countes: prevState.countes + 2}
//     })
    
//     }
//       render(){
//         const {countes,incrementCount}=this.state
//           
//           incrementCount = {this.state.incrementCount}/>
//       }
//   }
//   
// }
// export default Count