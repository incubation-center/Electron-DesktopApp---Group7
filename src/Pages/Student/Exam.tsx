import React, { useEffect, useState } from "react";

import TableCustom from "@/Components/TableCustom";
import { getExams } from "@/services/exam";
import { Exam } from "@/types";
import Table from "rc-table";

/**
 *  "id": 2,
        "name": "Exam 2",
        "date": "2022-12-22T08:58:49.644Z",
        "schoolId": 1,
        "subjectId": 2
 */
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    width: 200,
  },
  {
    title: "date",
    dataIndex: "date",
    key: "date",
    width: 150,
  },
  {
    title: "name",
    dataIndex: "name",
    key: "name",
    width: 150,
  },
  {
    title: "Operations",
    dataIndex: "",
    key: "operations",
    render: () => <a href="#">Delete</a>,
  },
];

const testData = [
  {
    id: 2,
    name: "Exam 2",
    date: "2022-12-22T08:58:49.644Z",
    schoolId: 1,
    subjectId: 2,
  },
  {
    id: 3,
    name: "Exam 3",
    date: "2022-12-22T08:58:49.713Z",
    schoolId: 1,
    subjectId: 3,
  },
  {
    id: 4,
    name: "Exam 4",
    date: "2022-12-22T08:58:49.764Z",
    schoolId: 1,
    subjectId: 4,
  },
  {
    id: 5,
    name: "Exam 5",
    date: "2022-12-22T08:58:49.826Z",
    schoolId: 1,
    subjectId: 5,
  },
];
function ExamPage() {
  const [exams, setExams] = useState<Exam[]>([]);
  useEffect(() => {
    getExams().then((res) => {
      setExams(res);
    });
    return () => {
      setExams([]);
    };
  }, []);
  return (
    <div className="p-10">
      <p className="mb-5">Exam page!!!! Exam Sub Marks Result</p>
      <TableCustom data={exams} columns={columns} />
    </div>
  );
}

export default ExamPage;
