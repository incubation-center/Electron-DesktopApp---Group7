import React from 'react'
import Avatar from '@/Components/Avatar'
import Button from '@/Components/Button'

const Profile = () => {
  return (
    <div className='antialiased w-full justify-center items-center shadow-lg'>
      <div className='flex flex-col bg-white rounded-xl shadow-lg'>
        <div className='flex justify-between p-10 space-x-16'>
          <div className='p-2 space-y-5'>
            <Avatar></Avatar>
            <Button className='rounded-sm p-1 font-bold w-full'>Update</Button>
          </div>
          <div className='flex flex-col p-2 space-y-6'>
            <div>
              <label htmlFor="" className='text-lg font-bold'>First Name</label>
              <input type="email" placeholder='Enter your email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 mb-2' />
            </div>
            <div>
              <label htmlFor="" className='text-lg font-bold'>Last Name</label>
              <input type="email" placeholder='Enter your email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 mb-2' />
            </div>
            <p>Your email address example123@gmail.com</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile
