import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ws from './Ws'

function App() {
 
  let data={
    name:"ws",
    age:14,
    location:"jodhpur",
    img:"https://uptownskylla.in/wp-content/uploads/2022/09/01-1-2048x1497.jpg"
  }

  return (
    <>
     App page

     <Ws myPropes={data} />
    </>
  )
}

export default App
