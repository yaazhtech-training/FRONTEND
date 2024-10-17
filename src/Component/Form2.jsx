import React from 'react'
import { Form } from 'react-router-dom';

const Form2 = (props) => {
const{ name }=props;

  return (
    <div>
      //  <Form/>
        My name is  : {props.name}</div>
  )
}

export default Form2