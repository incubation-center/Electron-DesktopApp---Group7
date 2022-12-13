import React from 'react'
import Button from '@/Components/Button'

const Riseissue = () => {
  return (
    // <div className="w-full">
    //   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //     <div className="mb-4">
    //       <label className="block text-gray-700 text-xl font-bold mb-2">
    //         Your email
    //       </label>
    //       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter your email"/>
    //     </div>
    //     <div className="mb-6">
    //       <label className="block text-gray-700 text-xl font-bold mb-2">
    //         Your comment
    //       </label>
    //       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your comment"/>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    //         Submit
    //       </Button>
    //     </div>
    //   </form>
    // </div>
    <div className='anitaliased bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100'>
      <form action="" className='flex flex-col space-y-4'>
        <div>
          <label htmlFor="" className='text-lg font-bold'>Your email</label>
          <input type="email" placeholder='Enter your email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 mb-2' />
        </div>
        <div>
          <label htmlFor="" className='text-lg font-bold'>Your comment</label>
          <textarea rows={4} placeholder='Enter your comment' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2' />
        </div>
        <Button className='inline-block self-start bg-blue-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-blue-500'>Submit</Button>
      </form>
    </div>
  )
}

export default Riseissue
