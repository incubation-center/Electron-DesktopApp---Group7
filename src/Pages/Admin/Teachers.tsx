import TableCustom from "@/Components/TableCustom";

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    width: 180,
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    width: 280,
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    key: "Phone",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
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
    Name: "Teacher name1",
    Email: "gamil@teacher1.com",
    Phone: "012 345 678",
    Address: "Address1",
    schoolId: 90,
  },
  {
    Name: "Teacher name2",
    Email: "gamil@teacher2.com",
    Phone: "096 376 766",
    Address: "Address2",
    schoolId: 90,
  },
];
const Teachers = () => {
  return (
    <div className="p-10">
    <p className="mb-5">List all teacher :</p>
    <TableCustom data={data} columns={columns}/>
  </div>
  )
}

export default Teachers
