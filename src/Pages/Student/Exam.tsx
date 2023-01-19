import { useEffect, useState } from "react";

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
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 200,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: 250,
  },
  {
    title: "Subject",
    dataIndex: "subject",
    key: "name",
    width: 200,
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
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="p-10">
      <div className="text-3xl text-center font-bold mb-5">Examination</div>
      {/* <div className="flex justify-between mb-4">
        <button
          className="bg-sky-400 px-2 py-2 rounded-md hover:bg-sky-300 hover:text-white"
          onClick={openModal}
        >
          + Add Exam
        </button>
      </div> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="justify-center items-center flex fixed inset-0 ">
          {/* ....... content ....... */}
          <div className="bg-blue-300 w-96 rounded-xl">
            {/* ....... body ....... */}
            <div className="m-5">
              <div className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Subject
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Code
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password"
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      ClassId
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-blue-500"
                      type="text"
                      placeholder="ClassId"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      TeacherId
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-blue-500"
                      type="text"
                      placeholder="teacherId"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      SchoolId
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="***************"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Add
              </button>
              <button className=" ml-2 text-white bg-red-400 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " onClick={closeModal}>
                Cancel
              </button>
            </div>
            {/* ....... end body ....... */}
          </div>
          {/* ....... end content ....... */}
        </div>
      </Modal>
      <TableCustom data={exams} columns={columns} />
    </div>
  );
}

export default ExamPage;
