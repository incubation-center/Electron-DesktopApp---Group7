import TableCustom from "@/Components/TableCustom";
import { useState, useEffect } from "react";
import { getAllExpense, createExpense } from "@/services/expense";
import { Expense } from "@/types";
import moment from "moment";
import Modal from "react-modal";
import ReactDateInputs from "react-date-inputs";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "studenid",
    width: 200,
  },
  {
    title: "SchoolID",
    dataIndex: "schoolId",
    key: "description",
    width: 150,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    width: 150,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "data",
    width: 150,
  },
];

const ExpenseRecorded = () => {
  const [expense, setExpense] = useState<Expense[]>([]);
  useEffect(() => {
    getAllExpense().then((res) => {
      setExpense(res);
    });
  }, []);

  //form state
  const [name, setName] = useState<string>();
  const [schoolId, setSchoolId] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [date, setDate] = useState<string>();
  const onSetExpense = (expense: Expense) => {
    setSchoolId(expense.schoolId),
      setAmount(expense.amount),
      setDate(expense.date),
      setName(expense.name);
  };

  // // convert data
  // let dateString = date;
  // let covertedDate = moment(dateString).format("L");
  // console.log(covertedDate);
  // open and close model
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // add data
  const onAddExpense = async () => {
    if (!newName || !newAmount || !inputSchoolId) {
      alert("missing input");
      return;
    }
    let data = {
      name: newName,
      amount: parseFloat(newAmount),
      date: new Date(newDate).toISOString(),
      schoolId: inputSchoolId,
    } as unknown as Expense;
    try {
      await createExpense(data);
      closeModal();
      setExpense((prevExpense) => [...prevExpense, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const [newAmount, setNewAmount] = useState<string>();
  const [newName, setNewName] = useState<string>();
  const [inputSchoolId, setInputSchoolId] = useState<number>();
  const [newDate, setNewDate] = useState(new Date().toString().slice(0, -1));
  // pop up button add
  const onsetAddExpense = () => {
    openModal();
  };

  return (
    <div className="m-auto h-screen overflow-auto">
      <div className="flex justify-between">
        <p className="">All Expense</p>
        <button
          onClick={onsetAddExpense}
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
        // style={customStyles}
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
                      Schoolid
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      placeholder="Title"
                      defaultValue={schoolId}
                      onChange={(e) => setInputSchoolId(e.target.valueAsNumber)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Expanse Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Title"
                      defaultValue={name}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Amount
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      placeholder="Amount"
                      defaultValue={amount}
                      onChange={(e) => setNewAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-500 text-3 font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Date
                    </label>
                    <input
                      type="datetime-local"
                      value={date}
                      onChange={(event) => setNewDate(event.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={onAddExpense}
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
      <TableCustom data={expense} columns={columns} />
    </div>
  );
};
export default ExpenseRecorded;
