import React from 'react'

const Form2 = (props) => {
const{ name }=props;

  return (
    <div>
        <Form1/>
        My name is  : {props.name}</div>
  )
}

export default Form2