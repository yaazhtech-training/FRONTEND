
import React from 'react'


class SigninButton extends React.Component{


constructor(props){
    super(props)
}

handleClick(){
    console.log("My second Event is started")
}

    render(){
return(
<div>
<button  onClick ={this.handleClick}> Click Here  </button>
</div>

);

    }
}

export default SigninButton