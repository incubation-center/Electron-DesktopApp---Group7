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
    exam: "Time stamp",
    subject: "Subject1",
    mark: 100,
    result: "Status",
    key: "1",
  },
  {
    exam: "Time stamp",
    subject: "Subject2",
    mark: 100,
    result: "Status",
    key: "2",
  },
];
const columns = [
  {
    title: "Exam",
    dataIndex: "exam",
    key: "exam",
    width: 200,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    width: 150,
  },
  {
    title: "Marks",
    dataIndex: "mark",
    key: "mark",
    width: 150,
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
    width: 150,
  },
  {
    title: "Operations",
    dataIndex: "",
    key: "operations",
    render: () => <a href="#">Delete</a>,
  },
];
function Exam() {
  return (
    <div className="p-10">
      <p className="mb-5">Exam page!!!! Exam Sub Marks Result</p>
      <TableCustom data={data} columns={columns} />
    </div>
  );
}

export default Exam;
