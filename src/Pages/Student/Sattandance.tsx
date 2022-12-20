import TableC from '@/Components/TableC'
import data from '../data.json'

function Sattandance() {
  const columns = [
    {field:'id', header: 'ID'},
    {field:'last_name', header: 'Last Name'},
    {field:'first_name', header: 'First Name'},
    {field:'last_name', header: 'Last Name'},
    {field:'email', header: 'Email'},
    {field:'gender', header: 'Gender'},
  ]
  return (
    <div>
      Sattandance for student view !!! Sub Total Present Absent Precentage
      <TableC data={data} columns={columns}/>
    </div>
  );
}

export default Sattandance
