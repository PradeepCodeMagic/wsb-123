import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RxCrossCircled } from "react-icons/rx";

function App() {
  let [inputValue, setInpuValue ]=useState('')
  let [allLi,setAllLi]=useState([])


  //  value pick-up
  let inputValueFn=(e)=>{
    setInpuValue(e.target.value)
  }

  


  //  work on add-btn
  let AddLi=()=>{
    setAllLi([...allLi,inputValue])

    setInpuValue('')
  }

  // remove-work
  let removeLi=(id)=>{
     let finalData=allLi.filter((p,k)=> id!=k )

     setAllLi(finalData)
  }
  

  return (
    <>
      <div className='main'>
          {/* <input type='text' onChange={(e)=>{setInpuValue(e.target.value)}} /> */}
          <input type='text' onChange={inputValueFn}  value={inputValue} />
          
          <button onClick={AddLi} > Add </button>

          <div className='row'>
            <ul>  
              { allLi.map((v,i)=>{

                console.log(v)
                return(
                  <li>{v} <RxCrossCircled className='myItag' onClick={()=> removeLi(i) } /> </li>
                )
             
              }) }



             
            </ul>
          </div>
      </div>
    </>
  )
}

export default App
