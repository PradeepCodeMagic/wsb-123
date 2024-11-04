import axios from "axios";
import Header from "./Comman/Header";
import { useState } from "react";
import { useEffect } from "react";


export default function App() {

  const [allCat,setAllCat]=useState([])
  const displayCat=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>{
      setAllCat(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // product
  const [allProduct,setAllProduct]=useState([])

  const displayProduct=(url)=>{
 
    let API;

    if(url==undefined){
      API="https://dummyjson.com/products"
    }
    else{
      API=url
    }

    axios.get(API)
    .then((ress)=>{
      setAllProduct(ress.data.products)
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  // filter data
    let liData=(url)=>{
      displayProduct(url)
    }


  useEffect(()=>{
    displayCat()
    displayProduct()
  },[])


  return (
    <div>
      <Header />
      <div className="grid grid-cols-[25%_auto] p-[20px] ">
        <div className="left px-5 ">
          <h2 className="text-[25px] font-bold text-center py-[20px] "> All Category </h2>


          <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

          {allCat.map((v)=>{
              
            return(
              <>
              <li onClick={()=>liData(v.url)} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"> {v.
                name} </li>
              </>
            )
          })}
            
           
          </ul>

        </div>


        <div className="right">
          <h2 className="text-[25px] font-bold text-center py-[20px] "> All Product </h2>
          <div className="grid grid-cols-4 gap-5 ">

          {allProduct.map((v)=>{
            return(
              <>
              <Card  data={v} />
              </>
            )
          })}

           
           

          </div>

        </div>
      </div>


    </div>
  )
}

let Card = ({data}) => {

  
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={data.thumbnail} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Id:-
          {data.id}
        </a>
      </div>
    </div>
  )
}
