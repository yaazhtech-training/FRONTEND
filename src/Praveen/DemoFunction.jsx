// import React, { useEffect, useState } from 'react'

// const DemoFunction = () => {
//     const [multiple,setMultiple] = useState (100)

//     const countNumberOfTimes =() => {
//         console.log ('executed sucessfully')
//     }
//      useEffect (()=> {
//         countNumberOfTimes();
//      },[multiple])
      
//      function handleclick () {
//         setMultiple ((current) => current + 100)
//      }

//   return (
//     <div>
//       <h1>multiple : {multiple}</h1>
//       <button onClick={handleclick}>multiple</button>
//     </div>
//   )
// }

// export default DemoFunction;



// class components direct method;

// import React, { Component } from 'react'

// export class DemoFunction extends Component {
//     constructor (props){
//         super (props);

//         this.state ={
//             first: 0,
//             second: 100,
//         };
//     }
//   render() {
//     return (
//       <div>
//         <h1>first : {this.state.first}</h1>
//         <h1>sceond : {this.state.second} </h1>
//         <button onClick={()=> this.setState ({first: this.state.first + 1})} >add first </button>
//         <button onClick={() => this.setState ({second : this.state.second *2})}> sceond</button>
//       </div>


//     )
//   }
// }

// export default DemoFunction



// class component using handle method ;


import React, { Component } from 'react'

export class DemoFunction extends Component {
    constructor (props){
        super (props)

        this.state = {
            first:0 ,
            second :100

        }
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }
    handleClick1 (){
        
        this.setState ({first : this.state.first+1})
    }

    handleClick2 (){
        this.setState ({second : this.state.second+1})
    }


  render() {
    return (
      <div>
        <h1>first : {this.state.first}</h1>
        <h1>second: {this.state.second}</h1>
      <button onClick={this.handleClick1}>   add one</button>
      <button onClick={this.handleClick2}>  add second</button>
      </div>
    )
  }
}

export default DemoFunction
