import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-5 flex gap-4 bg-indigo-100/50 border-b border-indigo-200">
      <NavLink
        className="text-indigo-800 hover:text-indigo-600 font-medium"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-indigo-800 hover:text-indigo-600 font-medium"
        to="/Tarea1"
      >
        Tarea1
      </NavLink>
      <NavLink
        className="text-indigo-800 hover:text-indigo-600 font-medium"
        to="/Tarea2"
      >
        Tarea2
      </NavLink>
    </nav>
  );
}

export default Navbar;
