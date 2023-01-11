import TableCustom from "@/Components/TableCustom";
import { Class, Subject, Teacher } from "@/types";
import { useEffect, useState } from "react";
import { getExams } from "@/services/exam";
import { Exam } from "@/types";
import Modal from "react-modal";
import {
  createSubject,
  deleteSubjectById,
  getAllSubjects,
  updateSubject,
} from "@/services/Subject";
// import { getClasses } from "@/services/class";
import { getTeachers } from "@/services/teacher";
import { getAllClasses } from "@/services/class";

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

function SubjectPage() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      rowKey: "name",
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
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: (r: Subject) => (
        <div className="space-x-2">
          <button
            onClick={() => onSetFormSubject(r)}
            className="p-1 bg-blue-400 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteSubject(r.id)}
            className="p-1 bg-red-400 rounded-md"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  const [subjects, setSubjects] = useState<Subject[]>();
  useEffect(() => {
    getAllSubjects().then((res) => {
      console.log(res);
      setSubjects(res);
    });
    getAllClasses().then((res) => setClasses(res));
    getTeachers().then((res) => setTeachers(res));
    return () => {};
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
  const onAddSubject = async () => {
    if (!subjectName || !code || !teacherIdInput || !classIdInput) {
      console.log("Input missing");
      return;
    }
    let data = {
      name: subjectName,
      code,
      teacherId: teacherIdInput,
      classId: classIdInput,
    } as Subject;
    if (subjectId) {
      await updateSubject(subjectId, data);
    } else {
      await createSubject(data);
    }
    const res = await getAllSubjects();
    setSubjects(res);
    closeModal();
  };
  const onDeleteSubject = async (id: number) => {
    await deleteSubjectById(id);
    const newSubjects = subjects?.filter((v) => v.id != id);
    setSubjects(newSubjects);
  };

  const onSetAddFormSubject = () => {
    setClassIdInput(1);
    setTeacherIdInput(1);
    setCode(undefined);
    setSubjectName("");
    setSubjectId(undefined);
    openModal();
  };
  const onSetFormSubject = (subject: Subject) => {
    setClassIdInput(subject.classId);
    setTeacherIdInput(subject.teacherId);
    setCode(subject.code || "");
    setSubjectName(subject.name);
    setSubjectId(subject.id);
    openModal();
  };

  // Form State
  const [subjectId, setSubjectId] = useState<number>();
  const [subjectName, setSubjectName] = useState<string>();
  const [code, setCode] = useState<string>();
  const [classIdInput, setClassIdInput] = useState<number>(1);
  const [teacherIdInput, setTeacherIdInput] = useState<number>(1);
  const [classes, setClasses] = useState<Class[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    console.log(teacherIdInput);
  }, [teacherIdInput]);
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <p className="mb-5">
          Sattandance: sub total ClassId teacherId schoolId
        </p>
        <button
          onClick={onSetAddFormSubject}
          type="button"
          className="bg-gray-400 py-1 px-4 border rounded-md mb-6 hover:bg-gray-500 hover:text-slate-300 focus:bg-gray-500"
        >
          Add
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
        ariaHideApp={false}
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
                      type="text"
                      placeholder="Subject"
                      defaultValue={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
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
                      type="text"
                      placeholder="******************"
                      defaultValue={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      ClassId
                    </label>
                    <select
                      defaultValue={classIdInput}
                      onChange={(e) => setClassIdInput(+e.target.value)}
                    >
                      {classes.map((c, i) => (
                        <option key={i} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      TeacherId
                    </label>
                    <select
                      defaultValue={teacherIdInput}
                      onChange={(e) => setTeacherIdInput(+e.target.value)}
                    >
                      {teachers.map((t, i) => (
                        <option key={i} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <button
                onClick={onAddSubject}
                className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Add
              </button>
              <button
                className=" ml-2 text-white bg-red-400 hover:bg-red-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
            {/* ....... end body ....... */}
          </div>
          {/* ....... end content ....... */}
        </div>
      </Modal>
      <TableCustom data={subjects} columns={columns} />
    </div>
  );
}

export default SubjectPage;
