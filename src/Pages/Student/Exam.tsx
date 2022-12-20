// import Table from '@/Components/Table'
// import React from 'react'
// import data from "../data.json"

// function Exam() {
//   const headers: { key: SortKeys; label: string }[] = [
//     { key: "id", label: "ID" },
//     { key: "first_name", label: "First name" },
//     { key: "last_name", label: "Last name" },
//     { key: "email", label: "Email" },
//     // { key: "gender", label: "Gender" },

//   ];
//   return (
//     <div>Exam page!!!! Exam Sub Marks Result
//       <Table data={data} />
//     </div>
//   )
// }

import TableC from '@/Components/TableC'
import data from '../data.json'

function Exam() {
  const columns = [
    {field:'id', header: 'ID'},
    {field:'last_name', header: 'Last Name'},
  ]
  return (
    <div>
      Sattandance for student view !!! Sub Total Present Absent Precentage
      <TableC data={data} columns={columns}/>
    </div>
  );
}

export default Exam
