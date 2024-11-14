import React, { useContext, useEffect, useState } from 'react'
import Header from './Comman/Header'
import { main_context } from './context/EcommContext'

export default function Cart() {
  let {cart,setCart}=useContext(main_context)
  
  return (
    <div>
    <Header/>
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        
        {cart.map((v,i)=>{
          return(
              <>
                  <DyanamicRow data={v}  index={i}/>
              </>
          )
        })}
       

      </div>

        <TotalAmount/>

    </div>
    </div>
  )
}


let DyanamicRow=({data,index})=>{

  
  let {cart,setCart}=useContext(main_context)

  let [count,setCount]=useState( data.quntity || 1)


  // deleteItem
  let deleteItem=()=>{
    let reminderData=cart.filter((v,i)=>i!=index)
    setCart(reminderData)
  }
  
  let deValue=()=>{
    if(count>1){
      setCount(count-1)
    }
  }

  let InValue=()=>{
      setCount(count+1)
  }

  const updateObject=()=>{
        // let updateQuntity=cart.map((v)=>{

        //  if(data.id==v.id){
        //       let copy={...v,quntity:count}
        //       return copy
             
        //   }
        // })
    /////////////////////////////////
      // let copy=[...cart]
      // copy[index].quntity=count

      // setCart(copy)

      //////////////////////////////

      // let updateQuntity=cart.map((v,i)=>{
      //       if(i==index){
      //           let updateData={...v,quntity:count}
      //           return updateData; 
      //       }
      //         return v
            
      //   })

      //   setCart(updateQuntity)

      let updateData=cart.map((v,i)=>{
          if(i==index){
            let updateObject={...v,quntity:count}
            return updateObject
          }
          return v
      })

      setCart(updateData)
        
        
  }

  useEffect(()=>{
    updateObject()
  },[count])

  return(
  <>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div className="flex w-2/5"> 
      <div className="w-20">
        <img className="h-24" src={data.image} alt=""/>
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm"> {data.title} </span>
        <span className="text-red-500 text-xs"> {data.brand} </span>
        <button onClick={deleteItem} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
      </div>
    </div>
    <div className="flex justify-center w-1/5">
      <svg onClick={deValue} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
      <input className="mx-2 border text-center w-8" type="text" value={count}/>

      <svg onClick={InValue} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
      </svg>
    </div>
    <span className="text-center w-1/5 font-semibold text-sm">$ {data.price} </span>
    <span className="text-center w-1/5 font-semibold text-sm">$ {((data.price)*count).toFixed(2) } </span>
  </div>
  </>
  )
}

let TotalAmount=()=>{
  let {cart,setCart}=useContext(main_context)
  const [total,setTotal]=useState(0)

  let updateTotalAmount=()=>{
    let sum=0
    cart.forEach((v)=>{
        sum=sum+( (v.price)*(v.quntity))
    })

    setTotal(sum)
  }
  useEffect(()=>{
    updateTotalAmount()
  },[cart])

  return(
    <div id="summary" className="w-1/4 px-8 py-10">
    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
    <div className="flex justify-between mt-10 mb-5">
      <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
      <span className="font-semibold text-sm">{(total).toFixed(2)}$</span>
    </div>
    <div>
      <label className="font-medium inline-block mb-3 text-sm uppercase">GST </label>
      <label className="font-medium inline-block mb-3 text-sm uppercase ml-[180px]"> 18 %  </label>
      
    </div>
   
    
    <div className="border-t mt-8">
      <div className="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>$ {((total)+(total*18/100)).toFixed(2)} </span>
      </div>
      <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
    </div>
  </div>
  )
}