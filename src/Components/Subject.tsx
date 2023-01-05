import TableCustom from "@/Components/TableCustom";
import { useState } from "react";

const columns = [
  {
    title: "Subject",
    dataIndex: "subject",
    rowKey: "subject",
    width: 200,
  },
  {
    title: "Code",
    dataIndex: "code",
    rowKey: "code",
    width: 150,
  },
  {
    title: "ClassId",
    dataIndex: "classId",
    rowKey: "classId",
    width: 150,
  },
  {
    title: "TeacherId",
    dataIndex: "teacherId",
    rowKey: "teacherId",
    width: 150,
  },
  {
    title: "SchoolId",
    dataIndex: "schoolId",
    rowKey: "schoolId",
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

function Subject() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <p className="mb-5">
          Sattandance: sub total ClassId teacherId schoolId
        </p>
        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="bg-gray-400 py-1 px-4 border rounded-md mb-6 hover:bg-gray-500 hover:text-slate-300 focus:bg-gray-500"
        >
          Edit
        </button>
        {showModal ? (
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
                  onClick={() => setShowModal(false)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
              {/* ....... end body ....... */}
            </div>
            {/* ....... end content ....... */}
          </div>
        ) : null}
      </div>
      <TableCustom data={data} columns={columns} />
    </div>
  );
}

export default Subject;
