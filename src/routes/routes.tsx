import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Tarea1  from "../pages/Tarea1/Tarea1.tsx";
import Tarea3  from "../pages/Tarea3/Tarea3.tsx";
import Tarea2  from "../pages/Tarea2/Tarea2.tsx";

function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tarea1" element={<Tarea1 />} />
      <Route path="/Tarea2" element={<Tarea2 />} />
      <Route path="/Tarea3" element={<Tarea3 />} />
    </Routes>
  );
}


export default Rout;