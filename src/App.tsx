import { Route, Routes } from "react-router-dom";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Generatereport from "./Pages/Faculty/Generatereport";

import Studentmarks from "./Pages/Faculty/Studentmarks";
import Exam from "./Pages/Student/Exam";
import Riseissue from "./Pages/Student/Riseissue";
import Sattandance from "./Pages/Student/Attandance";
import Profile from "./Pages/Profile";
import Stimetable from "./Pages/Stimetable";
import Menubar from "./Components/Menubar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Subject from "./Components/Subject";
import Teachers from "./Pages/Admin/Teachers";
import ExpenseRecorded from "./Pages/Admin/ExpenseRecorded";
import Studentresult from "./Pages/Admin/Studentresult";
import Classes from "./Pages/Admin/Classes";
import StudentPage from "./Pages/Admin/student";
import IncomeRecorded from "./Pages/Admin/IncomeRecorded";
import Schedule from "./Pages/Schedule/Schedule";

const App: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <Navbar />
      <Menubar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacus" element={<Contactus />} />
          <Route path="/generatereport" element={<Generatereport />} />
          <Route path="/studentresult" element={<Studentmarks />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/class" element={<Classes />} />
          <Route path="/students" element={<StudentPage />} />
          <Route path="/expenseRecorded" element={<ExpenseRecorded />} />
          <Route path="/faculties" element={<Teachers />} />
          <Route path="/incomeRecorded" element={<IncomeRecorded />} />
          <Route path="/studentresult" element={<Studentresult />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subjects" element={<Subject />} />
          <Route path="/attendances" element={<Sattandance />} />
          <Route path="/timetable" element={<Stimetable />} />
          <Route path="/riseissues" element={<Riseissue />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Menubar>
    </div>
  );
};

export default App;
