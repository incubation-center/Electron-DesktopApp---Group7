import React, { useEffect, useState } from "react";

import TableCustom from "@/Components/TableCustom";
import { getExams } from "@/services/exam";
import { Exam } from "@/types";
import Modal from "react-modal";
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
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="p-10">
      <p className="mb-5">Exam page!!!! Exam Sub Marks Result</p>
      <button
        className="bg-blue-500 rounded-md hover:bg-blue-700"
        onClick={openModal}
      >
        Add Exam
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button className="" onClick={closeModal}>
          Add Exam
        </button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <TableCustom data={exams} columns={columns} />
    </div>
  );
}

export default ExamPage;
