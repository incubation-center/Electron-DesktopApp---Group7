import React from "react";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../../services/student";
import TableCustom from "@/Components/TableCustom";
import Modal from "react-modal";
import { Student, StudentInput } from "@/types";

const customStyles = {
  content: {
    width: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const StudentPage = () => {
  const columns = [
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
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: 300,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "Address",
      width: 300,
    },
    {
      title: "Operations",
      dataIndex: "",
      key: "operations",
      width: 300,
      render: (r: Student) => (
        <div className="space-x-2 flex justify-center">
          <button
            onClick={() => onShowEditForm(r)} // '/student-info?id=1293'
            className="p-1 bg-green-400 hover:bg-green-300 duration-500 rounded-md"
          >
            View
          </button>
          <button
            onClick={() => onShowEditForm(r)}
            className="p-1 bg-blue-400 hover:bg-blue-300 duration-500 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(r)}
            className="p-1 bg-red-400 hover:bg-red-300 duration-500 rounded-md"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [viewStudent, setViewStudent] = React.useState(false)
  const [students, setStudents] = React.useState<Student[]>([]);
  React.useEffect(() => {
    getStudents().then((res) => {
      setStudents(res);
    });
    return () => {};
  }, []);
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

  // Form State
  const onSubmitForm = async () => {
    let data = {
      firstname: firstNameForm,
      lastname: lastNameForm,
      phone: phoneForm,
      address: addressForm,
      email: emailForm,
      password: passwordForm,
    } as StudentInput;
    if (!firstNameForm || !lastNameForm || !emailForm) {
      alert("Please fill all the fields");
      return;
    }

    if (idForm) {
      const res = await updateStudent(idForm, data);
    } else {
      if (!data.password || data.password.length < 6) {
        alert("Password should be at least 6 characters");
        return;
      }
      const res = await createStudent(data);
    }
    const stdList = await getStudents();
    setStudents(stdList);
    closeModal();
  };
  const onShowEditForm = (r: Student) => {
    setFirstNameForm(r.firstname);
    setLastNameForm(r.lastname);
    setPhoneForm(r.phone || "");
    setAddressForm(r.address || "");
    setEmailForm(r.email);
    setIdForm(r.id);
    openModal();
  };

  const onSetAddNewForm = () => {
    setFirstNameForm("");
    setLastNameForm("");
    setPhoneForm("");
    setAddressForm("");
    setEmailForm("");
    setIdForm(0);
    openModal();
  };
  const onDelete = async (r: Student) => {
    const res = await deleteStudent(r.id);
    const newStudents = students.filter((s) => s.id !== res.id);
    setStudents(newStudents);
  };
  // Form State
  const [idForm, setIdForm] = React.useState<number>();
  const [firstNameForm, setFirstNameForm] = React.useState<string>("");
  const [lastNameForm, setLastNameForm] = React.useState<string>("");
  const [phoneForm, setPhoneForm] = React.useState<string>("");
  const [addressForm, setAddressForm] = React.useState<string>("");
  const [emailForm, setEmailForm] = React.useState<string>("");
  const [passwordForm, setPasswordForm] = React.useState<string>("");

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="py-4 px-2 ">Students Managements</div>
        <button
          onClick={onSetAddNewForm}
          className="bg-sky-400 py-1 px-4 rounded-lg m-4"
        >
          Add
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
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
                      value={phoneForm}
                      onChange={(e) => setPhoneForm(e.target.value)}
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
                      value={emailForm}
                      onChange={(e) => setEmailForm(e.target.value)}
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
                        value={passwordForm}
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
                      value={addressForm}
                      onChange={(e) => setAddressForm(e.target.value)}
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
      
      <div className="  overflow-y-auto flex justify-center">

      
        <TableCustom data={students} columns={columns} />
      </div>
    </div>
  );
};

export default StudentPage;
