import { Route, Routes } from "react-router-dom";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Fattendance from "./Pages/Faculty/Fattendance";
import Generatereport from "./Pages/Faculty/Generatereport";
import Studentattendance from "./Pages/Faculty/Studentattendance";
import Studentmarks from "./Pages/Faculty/Studentmarks";
import Exam from "./Pages/Student/Exam";
import Riseissue from "./Pages/Student/Riseissue";
import Sattandance from "./Pages/Student/Sattandance";
import Profile from "./Pages/Profile";
import Stimetable from "./Pages/Student/Stimetable";
import Menubar from "./Components/Menubar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Menubar>
        <Routes>
          <Route path="/contacus" element={<Contactus />} />
          <Route path="/f-attendance" element={<Fattendance />} />
          <Route path="/generatereport" element={<Generatereport />} />
          <Route path="/studentattendace" element={<Studentattendance />} />
          <Route path="/studentmarks" element={<Studentmarks />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/s-profile" element={<Profile />} />
          <Route path="/s-attendace" element={<Sattandance />} />
          <Route path="/s-timetable" element={<Stimetable />} />
          <Route path="/riseissue" element={<Riseissue />} />
        </Routes>
      </Menubar>
    </div>
  );
};

export default App;
