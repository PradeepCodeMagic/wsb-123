
import { createContext, useState } from "react"

 export const main_context=createContext()

export default function EcommContext({children}) {

    const [wish,setWish]=useState([])

  return (
    <main_context.Provider value={{wish,setWish}} >
            {children}
    </main_context.Provider>
  )
}
