import React, { useContext } from 'react'
import Header from './Comman/Header'
import { main_context } from './context/EcommContext';

export default function Wishlist() {

  let { wish, setWish } = useContext(main_context)

  let deleteItem=(index)=>{
      let finalData=wish.filter((p,k)=>k!=index)
      setWish(finalData)
  }

  // moveTobBag

  let {cart,setCart}=useContext(main_context)

  let moveTobBag=(item,index)=>{
    setCart([...cart,item])
    let finalData=wish.filter((p,k)=>k!=index)
    setWish(finalData)
  }


  return (
    <div>
      <Header />
      <div className="w-[80%] mx-auto bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Wishlist Cart</h1>
          <h2 className="font-semibold text-2xl">{wish.length>0 ?  <sup>{wish.length}  </sup> : "" }  Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>

          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>

        </div>

        {wish.length > 0 ?
          wish.map((v, i) => {
            
            return (
              <>
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={v.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm"> {v.title} </span>
                      <span className="text-red-500 text-xs"> {v.brand} </span>
                      <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs"></a>
                    </div>
                  </div>

                  <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                  <button onClick={()=>moveTobBag(v,i)} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Move To Bag </button>
                  <button onClick={()=>deleteItem(i)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>
                </div>
              </>
            )
          })
          :
          "No Data Added !"
        }






      </div>
    </div>
  )
}
