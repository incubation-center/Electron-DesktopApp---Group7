import { useEffect, useState } from "react";
import TableCustom from "@/Components/TableCustom";
import { Result } from "@/types";
import { getResults } from "@/services/result";
import { userInfo } from "@/services/auth";

const Studentmarks = () => {
  const user = userInfo();
  const [students, setStudents] = useState<Result>();
  const [columnTable, setColumnTable] = useState<any[]>([]);
  useEffect(() => {
    const columnsstudent = [
      {
        title: "Subject Name",
        dataIndex: ["exam", "subject", "name"],
        key: "mark",
        width: 150,
      },
      {
        title: "Mark",
        dataIndex: "mark",
        key: "name",
        width: 200,
      },
      {
        title: "Date",
        dataIndex: ["exam", "date"],
        key: "examId",
        width: 300,
      },
      {
        title: "code",
        dataIndex: ["exam", "subject", "code"],
        key: "examId",
        width: 100,
      },
    ];
    const columnsTeacher = [
      {
        title: "fist Name",
        dataIndex: ["student", "firstname"],
        key: "firstname",
        width: 200,
      },
      {
        title: "last Name",
        dataIndex: ["student", "lastname"],
        key: "lastname",
        width: 200,
      },
      {
        title: "gender",
        dataIndex: ["student", "gender"],
        key: "examId",
        width: 100,
      },
      {
        title: "Mark",
        dataIndex: "mark",
        key: "mark",
        width: 300,
      },
      {
        title: "Email",
        dataIndex: ["student", "email"],
        key: "mark",
        width: 300,
      },
      {
        title: "Mark",
        dataIndex: ["student", "address"],
        key: "mark",
        width: 300,
      },
    ];

    switch (user.role) {
      case "student":
        setColumnTable(columnsstudent);
        getResults().then((res) => {
          console.log(res);
          setStudents(res);
        });
        break;
      case "teacher":
        setColumnTable(columnsTeacher);
        getResults().then((res) => {
          console.log(res);
          setStudents(res);
        });
    }
  }, []);

  return (
    <div className="m-auto h-screen overflow-auto">
      <div className="mb-10 text-3xl text-center font-bold">
        Students Result
      </div>
      {/* <div className='flex mb-10'>
        Batch :
        <select className="pr-2 pl-2 ml-2">
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
      </div> */}

      <div className="text-left">
        <TableCustom data={students} columns={columnTable} />
      </div>

      {/* <div className="flex justify-center items-center mt-7">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded grid">
            Add
        </button>
      </div> */}
    </div>
  );
};

export default Studentmarks;
