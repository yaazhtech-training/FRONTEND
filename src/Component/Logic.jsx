import React, { useEffect } from 'react'
import { useState } from 'react';

const Logic = () => {
// const themeContext = React.createContext("light");
const[data, setData]= useState(null);
const[error, setError]= useState(null);

useEffect(()=>{
loadData();
},[])

    const loadData = async() =>{
      try{
        const response = await fetch("http");
        if(!response.ok){
          throw new Error("")
        }
        const result = await response.json();
        setData(result.results[0]);
      }
      catch{
        setError(error.message);
      }
    };

  return (
    <div>
      <h2> User Data</h2>
      {data&&(
        <div>

        <p> Name : {data.name.first}</p>
        <p>Email :{data.email}</p>
        <p>Location : {data.location.city}</p>
        </div>



      )}
    </div>
  )
}

export default Logic