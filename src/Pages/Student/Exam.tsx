import Table from '@/Components/Table'
import React from 'react'
import data from "../data.json"
type Data = typeof data;
type SortKeys = keyof Data[0];

function Exam() {

      <Table data={data} />
    </div>
  )
}

export default Exam
