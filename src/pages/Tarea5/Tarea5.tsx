// Tarea5.tsx
import { useContext, useState } from "react";
import { UsuarioContext } from "../../Hooks/useContext";

function Tarea5() {
  const { usuario, cambiarNombre } = useContext(UsuarioContext);
  const [nuevoNombre, setNuevoNombre] = useState("");

  return (
    <div className="min-h-screen flex justify-center">
      <div className="bg-gray-500 w-60  h-60 flex flex-col items-center text-white rounded-xl shadow-white">
        <h1 className="text-3xl mt-5">Usuario : {usuario}</h1>

        <input
          className=" text-white h-10 w-50 bg-black  mt-10"
          type="text"
          placeholder="Ingrese el nombre...."
          onChange={(e) => setNuevoNombre(e.target.value)}
        />

        <button
          className="bg-green-500 w-30 mt-10 rounded-xl"
          onClick={() => cambiarNombre(nuevoNombre)}
        >
          Cambiar Nombre
        </button>
      </div>
    </div>
  );
}

export default Tarea5;
