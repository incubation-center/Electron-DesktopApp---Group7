import React from "react";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../services/student";
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
    // {
    //   title: "id",
    //   dataIndex: "id",
    //   key: "id",
    //   width: 50,
    //   rowKey: "id",
    // },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    // {
    //   title: "gender",
    //   dataIndex: "gender",
    //   key: "gender",
    //   width: 150,
    // },
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
  const [students, setStudents] = React.useState<Student[]>([]);
  React.useEffect(() => {
    getStudents().then((res) => {
      setStudents(res);
    });
    return () => {};
  }, []);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  // Form State
  const onSubmitForm = async () => {
    let data = {
      name: nameForm,
      phone: phoneForm,
      address: addressForm,
      email: emailForm,
      password: passwordForm,
    } as StudentInput;
    if (!nameForm || !emailForm) {
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
    setNameForm(r.name);
    setPhoneForm(r.phone || "");
    setAddressForm(r.address || "");
    setEmailForm(r.email);
    setIdForm(r.id);
    openModal();
  };

  const onSetAddNewForm = () => {
    setNameForm("");
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
  const [nameForm, setNameForm] = React.useState<string>("");
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
        <div className="flex justify-between">
          <h2 className="font-bold text-base text-blue-500 py-1">
            Create Student Form
          </h2>
          <button
            onClick={closeModal}
            className="text-red-500 bg-red-100 hover:bg-red-50 hover:text-red-300 px-4 py-1 rounded-lg duration-500"
          >
            Close
          </button>
        </div>
        {/* Form */}
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              value={nameForm}
              onChange={(e) => setNameForm(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium text-gray-500">Phone</label>
            <input
              type="text"
              name="phone"
              value={phoneForm}
              onChange={(e) => setPhoneForm(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium text-gray-500">Address</label>
            <input
              type="text"
              name="address"
              value={addressForm}
              onChange={(e) => setAddressForm(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={emailForm}
              onChange={(e) => setEmailForm(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-1"
            />
          </div>
          {!idForm ? (
            <div className="flex flex-col gap-y-1">
              <label className="text-sm font-medium text-gray-500">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={passwordForm}
                onChange={(e) => setPasswordForm(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 py-1"
              />
            </div>
          ) : null}
          <div className="flex justify-center my-4">
            <button
              onClick={onSubmitForm}
              className="px-4 py-1 bg-sky-400 rounded-lg duration-500 hover:bg-sky-300 hover:text-gray-600"
            >
              {idForm ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </Modal>
      <div className="  overflow-y-auto flex justify-center">
        <TableCustom data={students} columns={columns} />
      </div>
    </div>
  );
};

export default StudentPage;
