
import { useParams } from 'react-router-dom';
import Header from './Comman/Header';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { main_context } from './context/EcommContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from "react-icons/fa";

export default function ProductDetails() {

  let Id = useParams().id
  const [singelData, setSingleData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [smallImg, setSmallImg] = useState([])
  const [bigImg, setBigImg] = useState([])



  let singleProduct = () => {
    axios.get(`https://dummyjson.com/products/${Id}`)
      .then((ress) => {
        setSingleData(ress.data)
        setSmallImg(ress.data.images)
        setBigImg(ress.data.thumbnail)
        setLoading(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    singleProduct()
  }, [])

  // wish-work
  let { wish, setWish } = useContext(main_context)

  const [heart, setHeart] = useState(false)

  console.log(heart)

  let addToWishlist = (data) => {
    let newObject = {
      image: data.thumbnail,
      title: data.title,
      price: data.price,
      brand: data.brand,
      quntity: 1,
      id: data.id

    }

    let ckeckData = wish.some((v) => v.id == newObject.id)

    if (!ckeckData) {
      setWish([...wish, newObject])
      toast.success("Item add successfully")
      setHeart(true)
    }
    else {
      toast.error("Item Already in Wishlist")
    }

  }

  return (
    <>
      <ToastContainer />
      <Header />
      {loading == true ?
        <div className="">
          <div className="container  py-24 mx-auto cursor-auto">

            <div className="   grid grid-cols-[15%_30%_auto]">

              <div className=' '>
                {smallImg.map((v) => {
                  return (
                    <>
                      <div className='bg-[white] text-center my-[5px] ' onMouseOver={() => setBigImg(v)} >
                        <img src={v} className='w-[150px]  ' />
                      </div>
                    </>
                  )
                })}



              </div>
              <div className='bg-[white] w-[80%] mx-[15px] h-[200px] '>
                <img
                  alt="ecommerce"
                  className="   lg:h-auto h-64  rounded"
                  src={bigImg}
                />
              </div>
              <div className=" lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">ON SALE</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1"> {singelData.title} </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">20 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 -l-2 -gray-200 space-x-2">
                    {['facebook', 'twitter', 'instagram'].map((social, i) => (
                      <a key={i} className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          {/* Icons for different social media */}
                        </svg>
                      </a>
                    ))}
                  </span>
                </div>
                <p className="leading-relaxed">
                  {singelData.description}
                </p>

                <div className="flex mt-[20px] ">
                  <span className="title-font font-medium text-2xl text-gray-900">$ {singelData.price} </span>

                  <button onClick={() => addToWishlist(singelData)} className="rounded-full w-10 h-10 bg-gray-200 p-0 -0 inline-flex items-center justify-center text-gray-500 ml-4">

                    {heart == true ?
                      <FaHeart  className='text-[red]' />
                      :
                      <CiHeart className='text-[22px]' />
                    }
                    


                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        :
        "Please Wait..............."
      }



    </>
  );
}
