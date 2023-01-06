import TableCustom from "@/Components/TableCustom";
const columns = [
    {
      title: "Mark",
      dataIndex: "Mark",
      key: "Mark",
      width: 180,
    },
    {
      title: "SchoolId",
      dataIndex: "SchoolId",
      key: "SchoolId",
      width: 280,
    },
    {
      title: "StudentId",
      dataIndex: "StudentId",
      key: "StudentId",
      width: 150,
    },
    {
      title: "Examid",
      dataIndex: "ExamId",
      key: "ExamId",
      width: 150,
    }
  ];

  const data = [
    {
      Mark: "Student Mark1",
      SchoolId: "gamil@student1.com",
      StudentId: "012 345 678",
      ExamId: "ExamId"
    },
    {
      Mark: "Student Mark2",
      SchoolId: "gamil@student2.com",
      StudentId: "096 376 766",
      ExamId: "ExamId"
    },
  ];
const Studentresult = () => {
  return (
    <div className="p-10">
      <p className="mb-5">List all student student result !!! : </p>
      <TableCustom data={data} columns={columns}/>
    </div>
  )
}

export default Studentresult
