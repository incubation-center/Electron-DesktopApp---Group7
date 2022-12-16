import React from 'react'

const Generatereport = () => {
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
            <th className='pr-10 pl-3 pt-2 w-2/12'>Date</th>
            <th className="pr-20 pl-3 w-2/12">Time</th>
            <th className="pr-20 pl-3">Report</th>
        </thead>
        <tbody>
          <tr className='bg-gray-100'>
            <td className='pl-3 pt-2'>15/12/2022</td>
            <td className='pl-3'>08:30-10:30</td>
            <td className='pl-3'>Please write desciption here</td>
          </tr>
          <tr className='bg-gray-200'>
            <td className='pl-3 pt-2'>16/12/2022</td>
            <td className='pl-3'>09:30-10:30</td>
            <td className='pl-3'>Please write descitionp here</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-7">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
            Add Report
        </button>
      </div>
    </div>
  )
}

export default Generatereport