import React, { Component } from 'react';

class LifeCycle extends Component {

  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      count: 100 //initiate
    };
  }

  componentDidMount() {
    console.log('Component mounted');
    // Example of setting up event listeners or fetching data
    document.addEventListener('mousedown', this.handleMouseDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
    console.log('Count updated');
    }
  }

  componentWillUnmount() {
  console.log('Component will unmount');
    document.removeEventListener('mousedown', this.handleMouseDown);
  }

  handleMouseDown = () => {
    console.log('Mouse down event occurred');
  };

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 10
    }));
  };

  render(){
   console.log('rendered');  
     {
    return (
      <div style={{fontSize:"40px", color:"green" }}>
        <p>COUNT : {this.state.count}</p>
        <button onClick={this.increaseCount} style={{fontSize:"20px", color:"green" }}>Increase Count</button>
      </div>
    );
  }
}
}

export default LifeCycle;
/*constructor
render {return}
important=========lifecycle[ componentDidMount, componentDidUpdate,componentWillUnmount]..............



 componentdidMount  ======   constructor,  render, didmount

component update ====== render, updatemount

*/