import Button from '@/Components/Button'
import React from 'react'

const Studentattendence = () => {
  return ( 
    <div>
      <div className='flex m-10'>
        <div>Batch :</div>
        <div className='flex border ml-3'>
          <div className='pl-3 pr-10 ml-3'>8</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      <table className="table-auto ml-10">
        <thead className='bg-sky-500/30'>
            <th className='pr-10 pl-3 pt-2'>No</th>
            <th className="pr-20 pl-3">Full Name</th>
            <th className="pr-20 pl-3">Gender</th>
            <th className="pr-20 pl-3">Attendance</th>
            <th className="pr-20 pl-3">Email Address</th>
        </thead>
        <tbody>
          <tr className='bg-gray-100'>
            <td className='pl-3 pt-2'>01</td>
            <td className='pl-3'>Dinesh Kumar</td>
            <td className='pl-3'>Male</td>
            <td className='pl-3'>100</td>
            <td className='pl-3'>dineshkumar@kit.edu.kh</td>
          </tr>
          <tr className='bg-gray-200'>
            <td className='pl-3 pt-2'>02</td>
            <td className='pl-3'>Leo Fernadez</td>
            <td className='pl-3'>Male</td>
            <td className='pl-3'>90</td>
            <td className='pl-3'>leofernadez@kit.edu.kh</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-around items-center">
        <a href="#"><Button className='rounded-full pr-4 pl-4 mt-9'>Update Info</Button></a>
      </div>
    </div>
  )
}

export default Studentattendence