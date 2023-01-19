import TableCustom from "@/Components/TableCustom";
import { useState, useEffect } from "react";
import { getAllExpense } from "@/services/expense";
import { Payment } from "@/types";
import moment from "moment";
import { createPayments, getAllPayments } from "@/services/payments";
import Modal from "react-modal";
const columns = [
  {
    title: "School",
    dataIndex: "schoolId",
    key: "description",
    width: 300,
  },

  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    width: 300,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "data",
    width: 100,
  },
];

const IncomeRecorded = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  useEffect(() => {
    getAllPayments().then((res) => {
      setPayments(res);
    });
  }, []);

  //form state
  const [student, setStudent] = useState<number | null>();
  const [schoolId, setSchoolId] = useState<number>();
  const [amount, setAmount] = useState<number>();
  const [date, setAllDate] = useState<string>();
  const onSetExpense = (payments: Payment) => {
    setSchoolId(payments.schoolId),
      setAmount(payments.amount),
      setAllDate(payments.date);
  };
  // // convert data
  // let dateString = date;
  // let covertedDate = moment(dateString).format("L");
  // console.log(covertedDate);

  // get input state
  const [newAmount, setNewAmount] = useState<string>();
  const [newName, setNewName] = useState<string>();
  const [inputSchoolId, setInputSchoolId] = useState<number>();
  const [newDate, setNewDate] = useState(new Date().toString().slice(0, -1));
  // add model function
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onsetAddPaymentform = () => {
    openModal();
  };
  const onCreateIncome = async () => {
    if (!newAmount || !inputSchoolId) {
      alert("missing input");
      return;
    }
    let data = {
      name: newName,
      amount: parseFloat(newAmount),
      date: new Date(newDate).toISOString(),
      schoolId: inputSchoolId,
    } as unknown as Payment;
    try {
      await createPayments(data);
      closeModal();
      setPayments((prevExpense) => [...prevExpense, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-slate-500 w-full h-full">
      <div className="flex justify-between">
        <p className="">All Income</p>
        <button
          onClick={onsetAddPaymentform}
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
                onClick={onCreateIncome}
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

      <TableCustom data={payments} columns={columns} />
    </div>
  );
};

export default IncomeRecorded;
