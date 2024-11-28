import React, { useEffect, useState } from 'react'

const FunctionComponent1 = () => {
    const [first,setFirst] = useState (1);
    const [second,setSecond]= useState(100);
    const [ sub,setSub]= useState (100000000);

    const getdata = ()=>{
      console.log('data recived')
    }
    useEffect (()=>{
    getdata();
    },[])

    useEffect (()=>{
      getdata();
    },[first])

    useEffect (()=> {
      getdata();
    },[second])

 function handleSub  () {
    setSub ((current) => current - 100)
  }

  return (
    <div className=' bg-indigo-700 container mx-auto flex'>
        <h1 className='font-semibold text-2xl'>first: {first}</h1>
        <h1>second: {second}</h1>
        <h1>third : {sub}</h1>
        <button onClick={()=> setFirst ((curr) =>curr+1)}>first</button>
       <button onClick={()=> setSecond ((curr) =>curr+1)}>second</button>
       <button onClick={handleSub}>myness</button>
    </div>
  )
}

export default FunctionComponent1;
