import TableCustom from "@/Components/TableCustom";

const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
    width: 200,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    width: 150,
  },
  {
    title: "ClassId",
    dataIndex: "classId",
    key: "classId",
    width: 150,
  },
  {
    title: "TeacherId",
    dataIndex: "teacherId",
    key: "teacherId",
    width: 150,
  },
  {
    title: "SchoolId",
    dataIndex: "schoolId",
    key: "schoolId",
    width: 150,
  },
];
const data = [
  {
    subject: "Database Management",
    code: 50,
    classId: 25,
    teacherId: 25,
    schoolId: 90,
  },
  {
    subject: "Computer Science",
    code: 50,
    classId: 45,
    teacherId: 5,
    schoolId: 90,
  },
];

const Studentpayment = () => {
  return (
    <div className="p-10">
      <p className="mb-10 font-bold text-center text-3xl">Student Payment</p>
      <TableCustom data={data} columns={columns}/>
    </div>
  )
}

export default Studentpayment
