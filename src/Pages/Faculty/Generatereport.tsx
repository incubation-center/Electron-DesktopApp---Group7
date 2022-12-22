import React from 'react'
import TableCustom from "@/Components/TableCustom";

type Data = typeof data;
type SortKeys = keyof Data[0];
const data = [
  {
    date: "12.Dec.2022",
    time: "08:30-11:30",
    report: "Please write descitionp here",
    key: "1",

  },
  {
    date: "22.Dec.2022",
    time: "09:30-12:30",
    report: "Please write descitionp here",
    key: "2",
  },
];
const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 200,
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    width: 200,
  },
  {
    title: "Report",
    dataIndex: "report",
    key: "report",
    width: 400,
  },

];

const Generatereport = () => {
  return (
    <div className='m-10'>
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
    <div className='text-left'>
      <TableCustom data={data} columns={columns}/>
    </div>
    </div>
  )
}

export default Generatereport