"use client"
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../FireConfig';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {  useRouter } from 'next/navigation';

export default function page() {
    const router=useRouter()

    let userRegister = (e) => {
        e.preventDefault()

        let userOnj = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }


        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, userOnj.email , userOnj.password )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                toast("successfully Register !!")
                router.push("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast("YOu Are Already Registed !!")
                // ..
            });
    }
    return (
        <div>
 <ToastContainer />
            <div className="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
                <form onSubmit={userRegister} >
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md text-gray-800" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md text-gray-800" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md text-gray-800" />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
