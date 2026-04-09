import { useState } from "react";
import { states } from "../../data/Tarea2Data.ts";
import type { statesInterface } from "../../interfaces/statesInterface.ts";

function Tarea2() {
  const [color, setColor] = useState("bg-gray-500");

  function cambiarColor(color: string) {
    setColor(color);
  }

  const butons = states.map((state: statesInterface) => (
    <button
      onClick={() => cambiarColor(state.color)}
      className={`${state.color} h-16 w-32 m-5 text-white hover:scale-105 transition duration-500 shadow-sm shadow-white rounded-2xl`}
    >
      {state.nombre}
    </button>
  ));

  return (
    <div className={`flex flex-col text-center ${color}`}>
      <h1 className="mt-10 text-5xl text-white">{color}</h1>

      <div className="mt-5 flex flex-wrap justify-center">{butons}</div>
    </div>
  );
}

export default Tarea2;
