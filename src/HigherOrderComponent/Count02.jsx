import React, { Component } from 'react'
import updatedComponent from './WithCounter'

 class Count02 extends Component {
    
     
  render() {
    const {countes,incrementCount}=this.props
    return (
      <div>
        <h1>HouCounter</h1>
        <button onMouseOver={incrementCount}>Click the {countes} button</button>
      </div>
    )
  }
}

export default  updatedComponent(Count02)

// 
//   class Count02 extends React.Component{
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
// export default Count02