import TableCustom from "@/Components/TableCustom";
import {
  createClass,
  deleteClassByid,
  getAllClasses,
  updateClassByid,
} from "@/services/class";
import { Class } from "@/types";
import { useEffect, useState } from "react";
import Modal from "react-modal";
const Classespage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "section",
      width: 200,
    },
    {
      title: "Opperation",
      dataIndex: "",
      key: "opperations",
      render: (r: Class) => (
        <div className="space-x-2">
          <button
            onClick={() => onsetFormclass(r)}
            className="p-1 bg-blue-400 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => ondeletClass(r.id)}
            className="p-1 bg-red-400 rounded-md"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllClasses().then((res) => {
      console.log(res);
      setClasses(res);
    });
  }, []);

  const onsetAddclassform = () => {
    setClassNmae("");
    setSection("");
    openModal();
  };
  const onsetFormclass = (classes: Class) => {
    setClassNmae(classes.name);
    setSection(classes.sections);
    setClassid(classes.id);
    openModal();
  };
  const ondeletClass = async (id: number) => {
    await deleteClassByid(id);
    const newClasses = classs.filter((r) => r.id != id);
    setClasses(newClasses);
  };

  const onAddClass = async () => {
    if (!className || !sections) {
      console.log("Input missing");
      return;
    }
    let data = {
      name: className,
      section: sections,
    } as unknown as Class;
    if (classId) {
      // await updateClassByid
      await updateClassByid(classId, data);
    } else {
      await createClass(data);
    }
    const res = await getAllClasses();
    setClasses(res);
    closeModal();
  };

  const [classs, setClasses] = useState<Class[]>([]);
  //   open and close the modal
  const [modalIsOpen, setIsOpen] = useState(false);
  //   form state
  const [classId, setClassid] = useState<number>();
  const [className, setClassNmae] = useState<string>();
  const [sections, setSection] = useState<string>();
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
    <div className="m-auto h-screen overflow-auto">
      <div className="text-3xl text-center font-bold p-2 mb-7">Courses</div>
      <div className="flex justify-between">
        <button
          onClick={onsetAddclassform}
          type="button"
          className="bg-sky-400 py-1 px-4 border rounded-md mb-6 hover:text-white focus:bg-sky-400"
        >
          + Add
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
                      Class Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="class"
                      defaultValue={className}
                      onChange={(e) => setClassNmae(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Section
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="section"
                      defaultValue={sections}
                      onChange={(e) => setSection(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={onAddClass}
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
      <TableCustom data={classs} columns={columns} />
    </div>
  );
};

export default Classespage;
