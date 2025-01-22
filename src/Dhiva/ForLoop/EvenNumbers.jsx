import React, { useState } from 'react'

const EvenNumber = () => {
    const [odd , setOdd] = useState();
    
    function handleChangeOdd (){
        const Array = []
        for(let i=1; i<50; i++){
            if(i%2==0){
                Array.push(i)
            }
            else{
                console.log("Odd Numbers"+[i])
            }
        }
        setOdd(Array)
    }
  return (
    <div>
      <h1>Counter:{odd}</h1>
      <button onClick={handleChangeOdd}>Odd</button>
    </div>
  )
}

export default EvenNumber
