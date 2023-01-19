import React from "react";

import Table from "rc-table";
import TableCustom from "@/Components/TableCustom";

// const headers: { key: SortKeys; label: string }[] = [
//   { key: "id", label: "ID" },
//   { key: "first_name", label: "First name" },
//   { key: "last_name", label: "Last name" },
//   { key: "email", label: "Email" },
//   { key: "gender", label: "Gender" },
//   { key: "ip_address", label: "IP address" },
// ];

const data = [
  {
    monsub: "Sub1",
    tuesub: "Sub2",
    wedsub: "Sub3",
    thursub: "Sub4",
    frisub: "Sub5",
    satsub: "Sub6",
    sunsub: "Sub7",
  },
  {
    monsub: "Sub1",
    tuesub: "Sub2",
    wedsub: "Sub3",
    thursub: "Sub4",
    frisub: "Sub5",
    satsub: "Sub6",
    sunsub: "Sub7",
  },
];
const columns = [
  {
    title: "Monday",
    dataIndex: "monsub",
    key: "monsub",
    width: 100,
  },
  {
    title: "Tuesday",
    dataIndex: "tuesub",
    key: "tuesub",
    width: 100,
  },
  {
    title: "Wednesday",
    dataIndex: "wedsub",
    key: "wedsub",
    width: 100,
  },
  {
    title: "Thursday",
    dataIndex: "thursub",
    key: "thursub",
    width: 100,
  },
  {
    title: "Friday",
    dataIndex: "frisub",
    key: "frisub",
    width: 100,
  },
  {
    title: "Saturday",
    dataIndex: "satsub",
    key: "satsub",
    width: 100,
  },
  {
    title: "Sunday",
    dataIndex: "sunsub",
    key: "sunsub",
    width: 100,
  },
];
function timetable() {
  return (
    <div className="p-10">
      <div className="text-3xl text-center font-bold mb-6">TimeTable</div>
      <TableCustom data={data} columns={columns} />
    </div>
  );
}

export default timetable;
