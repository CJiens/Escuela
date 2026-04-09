import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Tarea1  from "../pages/Tarea1/Tarea1.tsx";
function Rout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tarea1" element={<Tarea1 />} />
    </Routes>
  );
}


export default Rout;