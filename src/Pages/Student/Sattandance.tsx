import TableCustom from "@/Components/TableCustom";

const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    width: 200,
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    width: 150,
  },
  {
    title: "Present",
    dataIndex: "present",
    key: "present",
    width: 150,
  },
  {
    title: "Absent",
    dataIndex: "absent",
    key: "absent",
    width: 150,
  },
  {
    title: "Percentage",
    dataIndex: "percentage",
    key: "percentage",
    width: 150,
  },
];
const data = [
  {
    subject: "Database Management",
    total: 50,
    present: 25,
    absent: 25,
    percentage: 90,
  },
  {
    subject: "Computer Science",
    total: 50,
    present: 45,
    absent: 5,
    percentage: 90,
  },
];
function Sattandance() {
  return (
    <div className="p-10">
      <div className="text-3xl text-center font-bold mb-7">Students Attendance</div>
      <TableCustom data={data} columns={columns}/>
    </div>
  );
}

export default Sattandance;
