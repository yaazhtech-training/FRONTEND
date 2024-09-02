import React, { useEffect } from 'react'


const Leader = () => {

  useEffect(()=>{
    findLeaders();
  },[])
  const findLeaders =(arr)=>{
    let leaders =[];
    let maxifromRight = arr[arr.length-1];
    leaders.push(maxifromRight);
    for(let i=arr.length-2 ; i >=0; i++){
        if(arr[i]>maxifromRight){
            maxifromRight = arr[i];
            leaders.push(maxifromRight);
        }
    }
    return leaders.reverse();
};
    const predefinedArray = [16, 17, 4, 3, 5, 2];
    const predefinedLeaders = findLeaders(predefinedArray)
  return (
    <div>
      <h1 style={{fontSize:"40px", color:"violet"}}>leaders</h1>
    <div>{predefinedLeaders.join(',')}</div>
    </div>
  )
};

export default Leader