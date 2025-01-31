import React, { useState } from 'react'

const ApiCall = () => {
    const [user , setUser] = useState(null);

    async function apiCall() {
        try{
            const response = await fetch("https://official-joke-api.appspot.com/random_joke")
                const data = await response.json();
                console.log(data)    
            setUser(data)
        }catch(error){
            console.error("Fetching data is missing")
        }
        
        
    }
  return (
    <div>
     <h1>Trigger Api</h1>
     <div>
        {user ? (
           <div> <h1>{user?.id}</h1>
           <h2><p>Punchline:</p>{user?.punchkine}</h2>
           <h3><p>Setup:</p> {user?.setup}</h3></div>
        ):(
            <h1>Click a button to fetch data</h1>
        )}
        <button onClick={apiCall}>Api call</button>
     </div>
    </div>
  )
}

export default ApiCall

