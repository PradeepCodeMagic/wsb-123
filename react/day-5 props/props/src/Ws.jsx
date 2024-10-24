import React from 'react'

export default function Ws( {myPropes} ) {


    console.log(myPropes)
    
  return (
    <div>
      <h3> name : {myPropes.name} </h3>   
      <h3> age : {myPropes.age} </h3>
      <h3>  location : {myPropes.location}  </h3>
        <img src={myPropes.img} style={ {width:"200px" , height:"200px" } } />
    </div>
  )
}
