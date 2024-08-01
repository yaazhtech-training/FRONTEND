import React from 'react'
import SigninButton from './SigninButton'
import LifeCycle from '../Component/LifeCycle'

const SignInEvent = () => {

    function handleClick(){
        console.log("I am going to click the event")
    }

    function MyEvent(){
        console.log("Hai all UI developers")
    }

  return (
    <div>
        
        <button  onClick ={handleClick}> Login  </button>
        <button  onClick ={MyEvent}>ArrowEvent</button>
        <SigninButton></SigninButton>
        <LifeCycle></LifeCycle>
    </div>
  )
}

export default SignInEvent