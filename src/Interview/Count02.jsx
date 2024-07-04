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