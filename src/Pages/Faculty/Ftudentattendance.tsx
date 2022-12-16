import Button from '@/Components/Button'
import React from 'react'
import data from "../data.json"
import Table from '@/Components/Table'

type Data = typeof data;
type SortKeys = keyof Data[0];

const Ftudentattendence = () => {
  return ( 
    <div className='flex flex-col w-full m-10'>
      <div className='flex mb-10'>
        <div>Semester :</div>
        <select className="pr-2 pl-2 ml-2">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
      </div>
      <table className="table-fixed text-left mb-5">
        <thead className='bg-sky-500/30'>
            <th className='pr-10 pl-3 pt-2 w-2/12'>Subject</th>
            <th className="pr-20 pl-3 w-2/12">Date</th>
            <th className="pr-20 pl-3">Time</th>
            <th className="pr-20 pl-3">Section</th>
            <th className="pr-20 pl-3">Attendance</th>
        </thead>
        <tbody>
          <tr className='bg-gray-100'>
            <td className='pl-3 pt-2'>IT Literacy</td>
            <td className='pl-3'>15/12/2022</td>
            <td className='pl-3'>08:30-10:30</td>
            <td className='pl-3'>A</td>
            <td className='pl-3'>2</td>
          </tr>
          <tr className='bg-gray-200'>
          <td className='pl-3 pt-2'>Computer Sciencce</td>
            <td className='pl-3'>16/12/2022</td>
            <td className='pl-3'>09:30-11:30</td>
            <td className='pl-3'>B</td>
            <td className='pl-3'>2</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-7 mb-7">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
            Add
        </button>
      </div>
      {/* <Table data={data}/> */}
    </div>
  )
}

export default Ftudentattendence