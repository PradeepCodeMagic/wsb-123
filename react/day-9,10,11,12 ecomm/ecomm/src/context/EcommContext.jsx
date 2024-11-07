
import { createContext, useState } from "react"

 export const main_context=createContext()

export default function EcommContext({children}) {

    const [wish,setWish]=useState([])

    const [cart,setCart]=useState([])

    let allState={wish,setWish,cart,setCart}

  return (
    <main_context.Provider value={allState} >
            {children}
    </main_context.Provider>
  )
}
