import TableCustom from "@/Components/TableCustom";
import { getTeachers, updateTeacherByid,createTeacher, deleteTeacherByid } from "@/services/teacher";
import { Teacher } from "@/types";
import {  useEffect, useState } from "react";
import Modal from "react-modal";

// const data = [
//   {
//     Name: "Teacher name1",
//     Email: "gamil@teacher1.com",
//     Phone: "012 345 678",
//     Address: "Address1",
//     schoolId: 90,
//   },
//   {
//     Name: "Teacher name2",
//     Email: "gamil@teacher2.com",
//     Phone: "096 376 766",
//     Address: "Address2",
//     schoolId: 90,
//   },
// ];
const TeachersPage = () => {
  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "Name",
      width: 180,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Email",
      width: 280,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "Phone",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "Address",
      width: 150,
    },
    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      render: (r: Teacher) => (
        <div className="space-x-2">
          <button
            // onClick={() => onSetFormSubject(r)}
            className="p-1 bg-blue-400 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => ondelteTeacher(r)}
            // onClick={() => onDeleteSubject(r.id)}
            className="p-1 bg-red-400 rounded-md"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  const [teachers, SetTeacher] = useState<Teacher[]>([]);
  useEffect(() => {
    getTeachers().then((res) => {
      console.log(res);
      SetTeacher(res);
    });
  }, []);
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "100%",
      left: "100%",
    },
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // form state
  const onSubmit = async () => {
    let data = {
      name: nameform,
      email: emailform,
      password: passwordform,
      phone: phoneform,
      address: addressform,
    } as Teacher;
    if(!nameform || emailform) {
      alert("Please fill all credentail and recheck !!!");
      return;
    }
    if(idForm){
      const res = await updateTeacherByid(idForm , data);
    } else{
      if(!data.password || data.password.length < 6){
        alert("Password should be at least 6 characters ")
        return;
      }
      const res = await createTeacher(data)
    }
    const teacherlist = await getTeachers();
    SetTeacher(teacherlist);
    closeModal()
  };

  const onAddteacher =async () => {
    setNameform("");
    setPhoneform("")
    setEmailform("")
    setAddressform("")
    setIdForm(0)
    openModal()
  }
  const oneditTeacher =async (d:Teacher) => {
    setNameform(d.name);
    setPhoneform(d.phone || "");
    setEmailform(d.email);
    setAddressform(d.address || "");
    setIdForm(d.id);
    openModal()
  }

  const ondelteTeacher = async (d: Teacher) => {
    const res = await deleteTeacherByid(d.id)
    // const newTeacher = teachers.filter((t) => t.id !== <res className="id"></res> );
    // SetTeacher(newTeacher)
  }

  // form data
  const [idForm, setIdForm] = useState<number>();
  const [nameform, setNameform] = useState<string>("");
  const [phoneform, setPhoneform] = useState<string>("");
  const [emailform, setEmailform] = useState<string>("");
  const [addressform, setAddressform] = useState<string>("");
  const [passwordform, setPasswordForm] = useState<string>("");

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <p className="mb-5">List all teachers :</p>
        <button
          onClick={openModal}
          type="button"
          className="bg-gray-400 py-1 px-4 border rounded-md mb-6 hover:bg-gray-500 hover:text-slate-300 focus:bg-gray-500"
        >
          Add
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="justify-center items-center flex fixed inset-0 ">
          {/* ....... content ....... */}
          <div className="bg-blue-300 w-6/12 rounded-xl">
            {/* ....... body ....... */}
            <div className="m-10">
              <div className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Name"
                      // defaultValue={className}
                      // onChange={(e) => setClassNmae(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="phone"
                      // defaultValue={section}
                      // onChange={(e) => setSection(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Email"
                      // defaultValue={section}
                      // onChange={(e) => setSection(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Passowrd
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="***************"
                      // defaultValue={section}
                      // onChange={(e) => setSection(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-3">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Address"
                      // defaultValue={section}
                      // onChange={(e) => setSection(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={openModal}
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
      <TableCustom data={teachers} columns={column} />
    </div>
  );
};

export default TeachersPage;
