import React  from "react";
//HOC - Higher Order Component
const updatedComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
      constructor(props) {

        super(props)
      
        this.state = {
          countes :0
        }
      }
      incrementCount = ()=>{
      this.setState(prevState => {
        return { countes: prevState.countes + 2}
      })
      
      }
        render(){
          const {countes,incrementCount}=this.state
            return <OriginalComponent countes ={this.state.countes}
            incrementCount = {this.state.incrementCount}/>
        }
    }
    return NewComponent
}
export default updatedComponent

// props - small data
// Context - small data - global
 
// HOC -  component logic