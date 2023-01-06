import { Route, Routes } from "react-router-dom";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Generatereport from "./Pages/Faculty/Generatereport";
import Studentattendance from "./Pages/Faculty/Ftudentattendance";
import Studentmarks from "./Pages/Faculty/Studentmarks";
import Exam from "./Pages/Student/Exam";
import Riseissue from "./Pages/Student/Riseissue";
import Sattandance from "./Pages/Student/Sattandance";
import Profile from "./Pages/Profile";
import Stimetable from "./Pages/Stimetable";
import Menubar from "./Components/Menubar";
import Attandance from "./Pages/Faculty/Attandance";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Menubar>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/contacus" element={<Contactus />} />
          <Route path="/generatereport" element={<Generatereport />} />
          <Route path="/attendancestudent" element={<Attandance />} />
          <Route path="/studentattendace" element={<Studentattendance />} />
          <Route path="/studentmarks" element={<Studentmarks />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/s-attendace" element={<Sattandance />} />
          <Route path="/s-timetable" element={<Stimetable />} />
          <Route path="/riseissues" element={<Riseissue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Menubar>
    </div>
  );
};

export default App;
