import React from 'react'
import Button from '@/Components/Button'

const Signup = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex justify-center w-screen">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center px-2 mt-10">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstname"
                        placeholder="First Name" />
                    
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        placeholder="Last Name" />
                    
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phonenumber"
                        placeholder="Phone Number" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
                        <option selected className='opacity-50'>Role</option>
                        <option>Student</option>
                        <option>Faculty</option>
                    </select>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected className='opacity-50'>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <div className='flex items-center justify-center mt-4'>
                        <a href="#">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
                            Submit
                        </button>
                        </a>
                    </div>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account ?  
                    <a className="no-underline border-b border-blue text-blue" href="#">
                        &nbsp;Log in
                    </a>.
                </div>
            </div>
        </div>
  )
}

export default Signup