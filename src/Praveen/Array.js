import React from 'react'
import { json } from 'react-router-dom'

const Array = () => {

    const number =[1,2,3,4,5,6]
    const name =['praveen','jeeva','sam','sathish']
    const age = [20,18,24,25]

    //map
 const mappedArray = number.map(num => num*2)
 const filterArray = number.filter(num => num >2)
  return (
    <div>
        <h1> Array programing</h1>
        <ul>
            <li>number: {JSON.stringify(number)}</li>
            <li>name: {JSON.stringify(name)}</li>
            <li> age: {JSON.stringify(age)}</li>
            <li> mapArray : {JSON.stringify(mappedArray)}</li>
            <li>filter array:{JSON.stringify (filterArray)} </li>

        </ul>
      
    </div>
  )
};

export default Array;
