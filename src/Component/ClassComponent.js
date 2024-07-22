
import React, { Component } from 'react'
// class Component -- older version ------
/**
 * constructor
 * render()
 * life methods
 */
// StateFull component

class ClassComponent extends Component{

   constructor(props){ // first

    super(props)

    this.state={
  count:10,
  numbers : 1
    }
   }
    
incrementCount1 =()=>{
this.setState(prevState => {
    return {count: prevState.count + 10}
})

}
        render(){ // second // this
            return(
              <div>

<button onClick={this.incrementCount1}> Clicked {this.state.count}  button</button>           
 </div>
        )
        }
}
export default ClassComponent