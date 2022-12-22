import React from 'react'
import TableCustom from "@/Components/TableCustom";

type Data = typeof data;
type SortKeys = keyof Data[0];
const data = [
  {
    no: 1,
    name: "Lim Kimsea",
    gender: "M",
    mark: "90",
    email_address:"lim.kimsea19@kit.edu.kh",
    key: "1",

  },
  {
    no: 2,
    name: "Lim Kimseng",
    gender: "M",
    mark: "80",
    email_address:"lim.kimseng19@kit.edu.kh",
    key:"2",
  },
];
const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
    width: 50,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gener",
    width: 100,
  },
  {
    title: "Mark",
    dataIndex: "mark",
    key: "mark",
    width: 200,
  },
  {
    title: "Email Address",
    dataIndex: "email_address",
    key: "email_address",
    width: 400,
  },
];
const Studentmarks = () => {
  return (
    <div className='m-10'>
    <div className='flex mb-10'>
        <div>Batch :</div>
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
    <div className='text-left'>
      <TableCustom data={data} columns={columns}/>
    </div>
    </div>
    // <div className='flex flex-col w-full m-10'>
    //   <div className='flex mb-10'>
    //     <div>Batch :</div>
    //     <select className="pr-2 pl-2 ml-2">
    //       <option selected>1</option>
    //       <option>2</option>
    //       <option>3</option>
    //       <option>4</option>
    //       <option>5</option>
    //       <option>6</option>
    //       <option>7</option>
    //       <option>8</option>
    //     </select>
    //   </div>
    //   <table className="table-fixed text-left mb-5">
    //     <thead className='bg-sky-500/30'>
    //         <th className='pr-10 pl-3 pt-2 w-1/12'>No</th>
    //         <th className="pr-20 pl-3 w-2/12">Full Name</th>
    //         <th className="pr-20 pl-3 w-2/12">Gender</th>
    //         <th className="pr-20 pl-3 w-2/12">Mark</th>
    //         <th className="pr-20 pl-3">Email Address</th>
    //     </thead>
    //     <tbody>
    //       <tr className='bg-gray-100'>
    //         <td className='pl-3 pt-2'>01</td>
    //         <td className='pl-3'>Lim Kimsea</td>
    //         <td className='pl-3'>M</td>
    //         <td className='pl-3'>90/100</td>
    //         <td className='pl-3'>lim.kimsea19@kit.edu.kh</td>
    //       </tr>
    //       <tr className='bg-gray-200'>
    //         <td className='pl-3 pt-2'>02</td>
    //         <td className='pl-3'>Lim Kimsang</td>
    //         <td className='pl-3'>F</td>
    //         <td className='pl-3'>85/100</td>
    //         <td className='pl-3'>lim.kimsang19@kit.edu.kh</td>
    //       </tr>
    //     </tbody>
    //   </table>

    //   <div className="flex justify-center items-center mt-7">
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
    //         Add
    //     </button>
    //   </div>
    // </div>

  )
}

export default Studentmarks