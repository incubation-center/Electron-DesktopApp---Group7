import Table from '@/Components/Table'
import React from 'react'
import data from "../data.json"
type Data = typeof data;
type SortKeys = keyof Data[0];

function Exam() {
//  const headers: { key: SortKeys; label: string }[] = [
//    { key: "id", label: "ID" },
//    { key: "first_name", label: "First name" },
//    { key: "last_name", label: "Last name" },
//    { key: "email", label: "Email" },
//    { key: "gender", label: "Gender" },
//    { key: "ip_address", label: "IP address" },
//  ];
  return (
    <div>
      <Table data={data} />
    </div>
  )
}

export default Exam