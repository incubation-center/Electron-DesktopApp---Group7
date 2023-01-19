import Paginition from "@/Components/Paginition";
import TableCustom from "@/Components/TableCustom";
import { useState } from "react";
import Modal from "react-modal";
const columns = [
  {
    title: "Mark",
    dataIndex: "Mark",
    key: "Mark",
    width: 180,
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
  },
];

const data = [
  {
    Mark: "Student Mark1",
    SchoolId: "gamil@student1.com",
    StudentId: "012 345 678",
    ExamId: "ExamId",
  },
  {
    Mark: "Student Mark2",
    SchoolId: "gamil@student2.com",
    StudentId: "096 376 766",
    ExamId: "ExamId",
  },
];
const Studentresult = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "100%",
      left: "100%",
    },
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="m-auto h-screen overflow-auto">
      <div className="flex justify-between">
        <div className="py-4 px-2 ">Students Managements</div>
        <button
          onClick={openModal}
          className="bg-sky-400 py-1 px-4 rounded-lg m-4"
        >
          + Add
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
      >
        <div className="justify-center items-center flex fixed inset-0 ">
          <div className="bg-blue-300 w-6/12 rounded-xl">
            <div className="m-10">
              <div className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mark
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Mark"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      StudentId
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="StudentId"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      ExamId
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="ExamId"
                    />
                  </div>
                </div>
              </div>
              <button className="ml-2 text-white bg-blue-400 hover:bg-blue-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Add
              </button>
              <button
                className="ml-2 text-white bg-red-400 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <TableCustom data={data} columns={columns} />
      <Paginition />
    </div>
  );
};

export default Studentresult;
