
import { createContext, useEffect, useState } from "react"

 export const main_context=createContext()

export default function EcommContext({children}) {

    const [wish,setWish]=useState( JSON.parse(localStorage.getItem("wsb_wish")) ?? [])

    const [cart,setCart]=useState(JSON.parse(localStorage.getItem("wsb_cart")) ?? [])

    useEffect(()=>{
        localStorage.setItem("wsb_wish",JSON.stringify(wish))
    },[wish])

    useEffect(()=>{
      localStorage.setItem("wsb_cart",JSON.stringify(cart))
  },[cart])


    let allState={wish,setWish,cart,setCart}

  return (
    <main_context.Provider value={allState} >
            {children}
    </main_context.Provider>
  )
}
