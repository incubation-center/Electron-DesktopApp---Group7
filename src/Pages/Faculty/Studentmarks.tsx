import React from 'react'
import TableCustom from "@/Components/TableCustom";

const data = [
  {
    no: 1,
    name: "Lim Kimsea",
    gender: "M",
    mark: 80,
    email_address: "lim.kimsea19@kit.edu.kh", 
    key: "1",
  },
  {
    no: 2,
    name: "Lim Kimseng",
    gender: "F",
    mark: 90,
    email_address: "lim.kimseng19@kit.edu.kh", 
    key: "2",
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
    key: "gender",
    width: 100,
  },
  {
    title: "Mark",
    dataIndex: "mark",
    key: "mark",
    width: 100,
  },
  {
    title: "Email Address",
    dataIndex: "email_address",
    key: "email_address",
    width: 300,
  },
];


const Studentmarks = () => {
  return (
    <div className='m-10'>
      <div className='flex mb-10'>
        Batch :
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
        <TableCustom data={data} columns={columns} />
      </div>

      <div className="flex justify-center items-center mt-7">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
            Add
        </button>
      </div>
      
    </div>
  )
}

export default Studentmarks