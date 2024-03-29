import TableCustom from "@/Components/TableCustom";
import {
  getTeachers,
  updateTeacherByid,
  createTeacher,
  deleteTeacherByid,
} from "@/services/teacher";
import { Teacher } from "@/types";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const TeachersPage = () => {
  const column = [
    {
      title: "First name",
      dataIndex: "firstname",
      key: "firstname",
      width: 180,
    },
    {
      title: "Last name",
      dataIndex: "lastname",
      key: "lastname",
      width: 180,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "lastname",
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
      firstname: firstNameForm,
      lastname: lastNameForm,
      gender: Gender,
      email: emailform,
      password: passwordform,
      phone: phoneform,
      address: addressform,
    } as unknown as Teacher;
    if (!firstNameForm || !lastNameForm || emailform) {
      alert("Please fill all credentail and recheck !!!");
      return;
    }
    if (idForm) {
      const res = await updateTeacherByid(idForm, data);
    } else {
      if (!data.password || data.password.length < 6) {
        alert("Password should be at least 6 characters ");
        return;
      }
      const res = await createTeacher(data);
    }
    const teacherlist = await getTeachers();
    SetTeacher(teacherlist);
    closeModal();
  };

  const onAddteacher = async () => {
    setFirstNameForm("");
    setLastNameForm("");
    setGender("");
    setPhoneform("");
    setEmailform("");
    setAddressform("");
    setIdForm(0);
    openModal();
  };
  const oneditTeacher = async (d: Teacher) => {
    setFirstNameForm(d.firstname);
    setLastNameForm(d.lastname);
    setGender(d.gender);
    setPhoneform(d.phone || "");
    setEmailform(d.email);
    setAddressform(d.address || "");
    setIdForm(d.id);
    openModal();
  };

  const ondelteTeacher = async (d: Teacher) => {
    const res = await deleteTeacherByid(d.id);
    const newTeacher = teachers.filter((t) => t.id !== res.id);
    SetTeacher(newTeacher);
  };

  // form data
  const [idForm, setIdForm] = useState<number>();
  const [firstNameForm, setFirstNameForm] = useState<string>("");
  const [lastNameForm, setLastNameForm] = useState<string>("");
  const [Gender, setGender] = useState<string>("");
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
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="First Name"
                      value={firstNameForm}
                      onChange={(e) => setFirstNameForm(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="First Name"
                      value={Gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Last Name"
                      value={lastNameForm}
                      onChange={(e) => setLastNameForm(e.target.value)}
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
                      value={phoneform}
                      onChange={(e) => setPhoneform(e.target.value)}
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
                      value={emailform}
                      onChange={(e) => setEmailform(e.target.value)}
                    />
                  </div>
                </div>
                {!idForm ? (
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
                        value={passwordform}
                        onChange={(e) => setPasswordForm(e.target.value)}
                      />
                    </div>
                  </div>
                ) : null}
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
                      value={addressform}
                      onChange={(e) => setAddressform(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={onSubmit}
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
