import React from 'react'
import TableCustom from "@/Components/TableCustom";

const data = [
  {
    date: "23/Dec/2022",
    time: "08:30-10:30",
    report: "Please write your report here",
    key: "1",
  },
  {
    date: "24/Dec/2022",
    time: "09:30-11:30",
    report: "Please write your report here",
    key: "2",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 150,
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: 150,
  },
  {
    title: "Report",
    dataIndex: "report",
    key: "report",
    width: 500,
  },
];

const Generatereport = () => {
  return (
    <div className="p-10">
      <div className='flex mb-10'>
        Semester :
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

      <div className='flex flex-col m-10'>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
            Add Report
          </button>
        </div>
      </div>

    </div>
  )
}

export default Generatereport