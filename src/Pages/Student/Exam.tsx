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
    width: 100,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    width: 100,
  },
  {
    title: "Marks",
    dataIndex: "mark",
    key: "mark",
    width: 200,
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
    width: 200,
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
    <div>
      Exam page!!!! Exam Sub Marks Result
      <TableCustom data={data} columns={columns} />
    </div>
  );
}

export default Exam;
