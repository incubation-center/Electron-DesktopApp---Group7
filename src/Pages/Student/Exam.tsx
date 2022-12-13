import Table from '@/Components/Table'
import React from 'react'
import data from "../data.json"

function Exam() {
  // const headers: { key: SortKeys; label: string }[] = [
  //   { key: "id", label: "ID" },
  //   { key: "first_name", label: "First name" },
  //   { key: "last_name", label: "Last name" },
  //   { key: "email", label: "Email" },
  //   { key: "gender", label: "Gender" },
  //   { key: "ip_address", label: "IP address" },
  // ];
  return (
    <div>Exam page!!!!
      <Table data={data} />
    </div>
  )
}

export default Exam