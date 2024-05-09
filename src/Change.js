import React, { useState } from 'react'

const Change = () => {
    const [name , setName] = useState('manik')
    const togglename = ()=>{
        if(name == 'manik'){
            setName('Gupta')
        }
        else{
            setName('manik')
        }
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={togglename}>Toggle name</button>
    </div>
  )
}

export default Change