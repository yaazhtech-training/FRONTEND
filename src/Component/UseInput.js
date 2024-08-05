import React, { useEffect } from 'react'
//CustomHooks
const UseInput = (initvalue) => {

    const[value, setValue] = useEffect(initvalue);
    const reset = ()=> {
        setValue(initvalue);
    }
    const bind = {
        //value : value,
        onchange : e =>{(e.target.value)}
    }
  return[value,bind,reset];
}

export default UseInput