
"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, onValue } from "firebase/database";

import { app } from '../FireConfig';
import { v4 as uuidv4 } from 'uuid';


export default function page() {

  let UserDetails = (e) => {
    e.preventDefault()

    let userObj = {
      Batch_no: e.target.Ubatch.value,
      Father_name: e.target.UFname.value,
      Mother_name: e.target.Umname.value,
      First_name: e.target.Ufirstname.value,
      Last_name: e.target.Ulastname.value,
      Mobile: e.target.Umobile.value,
      Email: e.target.Uemail.value,
    }

    if (userObj.Batch_no == "" && userObj.Mobile == "") {
      alert("please full fill the form input")
    }
    else {
      const db = getDatabase(app);
      let uId = uuidv4();

      set(ref(db, 'wsb_123/' + uId), userObj);

      alert("Form Submit Successfully !!")

    }
    e.target.reset()

  }

  // show Data

  const [dbDAta, setDbData] = useState([])



  let displayData = () => {
    const db = getDatabase(app);

    const starCountRef = ref(db, 'wsb_123/');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      let finalData = []
      for (let i in data) {
        finalData.push(data[i])
      }

      setDbData(finalData)

      updateStarCount(postElement, data);
    });

  }



  useEffect(() => {
    displayData()
  }, [])

  return (
    <>
      <h1 className='text-[30px] text-center ' >
        welcome to home page
      </h1>

      <div className='w-[1000px] mx-auto'>


        <form class="max-w-md mx-auto" onSubmit={UserDetails} >
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="Ubatch" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Batch Number</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="UFname" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Father Name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="Umname" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Mother Name </label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="Ufirstname" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="Ulastname" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input type="tel" name="Umobile" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="Uemail" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email </label>
            </div>
          </div>
          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>


      </div>

      <div className='w-[1000px] mx-auto py-[20px]'>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Sr.
                </th>
                <th scope="col" class="px-6 py-3">
                  Batch No.
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Father Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Mother Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Mobile Number
                </th>
                <th scope="col" class="px-6 py-3">
                  Emaill
                </th>

              </tr>
            </thead>
            <tbody>

              {dbDAta.length > 0 ?
                dbDAta.map((v, i) => {
                  console.log(v)
                  return (
                    <>
                      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {i+1}
                        </th>
                        <td class="px-6 py-4">
                          {v.Batch_no}
                        </td>
                        <td class="px-6 py-4">
                          {v.First_name}
                        </td>
                        <td class="px-6 py-4">
                          {v.Father_name}
                        </td>
                        <td class="px-6 py-4">
                          {v.Mother_name}
                        </td>
                        <td class="px-6 py-4">
                          {v.Mobile}
                        </td>
                        <td class="px-6 py-4">
                         {v.Email}
                        </td>
                      </tr>
                    </>
                  )
                })
                :
                "No Data Added !!"
              }


            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
