import React from 'react'
import Avatar from '@/Components/Avatar'
import Button from '@/Components/Button'

const Profile = () => {
  return (
    <div>
      <div className="flex justify-around items-center ml-20 mr-20 mt-20 pl-20">
        <div className='mr-20'>
          <Avatar/>
          <a href="#"><Button>Update Info</Button></a>
        </div>
        <div>
        <div className="bg-gray-lighter">
            <div className="container flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Your Profile</h1>
                    <div className='grid grid-cols-2'>
                        <h3 className='pl-1 pb-2'>Name : </h3>
                        <div className="block border border-grey-light w-full rounded mb-4 pl-3">Lim Kimsea</div>
                        <h3 className='pl-1 pb-2'>Email Address : </h3>
                        <div className="block border border-grey-light w-full rounded mb-4 pl-3">lim.kimsea19@kit.edu.kh</div>
                        <h3 className='pl-1 pb-2'>Phone Number : </h3>
                        <div className="block border border-grey-light w-full rounded mb-4 pl-3">+855 12 123456</div>
                        <h3 className='pl-1 pb-2'>Address : </h3>
                        <div className="block border border-grey-light w-full rounded mb-4 pl-3">Kampong Cham, Cambodia</div>
                        <h3 className='pl-1 pb-2'>Role : </h3>
                        <div className="block border border-grey-light w-full rounded mb-4 pl-3">Lecturer</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile