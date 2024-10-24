import React, { useState } from 'react'

export default function About() {
    let [counter , setCounter]=useState(0 )

   
    let incresValue=()=>{
        if(counter==10){
            setCounter(10)
        }
        else{
            setCounter(counter+1)
        } 
    }

  return (
    <div>
      <button onClick={ ()=>{ setCounter(counter-1) } } >-</button>
      <span> {counter} </span>
      <button onClick={incresValue} >+</button>
    </div>
  )
}
