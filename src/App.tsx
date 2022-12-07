import { Route, Routes } from "react-router-dom";
import Contactus from "./Pages/Contactus";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacus" element={<Contactus />} />
      </Routes>
    </div>
  );
};

export default App;
