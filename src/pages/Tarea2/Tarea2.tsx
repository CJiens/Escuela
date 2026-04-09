import { states } from "../../data/Tarea2Data.ts";
import type { statesInterface } from "../../interfaces/statesInterface.ts";
import Button from "../../components/Button/Button.tsx";
import { useState } from "react";

function Tarea2() {
  
  const [color, setColor] = useState("bg-gray-500");

  function cambiarColor(color: string) {
    setColor(color);
  }

  const butons = states.map((state: statesInterface) => (
    <Button
      key={state.id}
      state={state}
      cambiarColor={cambiarColor}
    />
  ));

  return (
    <div className={`flex flex-col text-center ${color}`}>
      <h1 className="mt-10 text-5xl text-white">{color}</h1>

      <div className="mt-5 flex flex-wrap justify-center">{butons}</div>
    </div>
  );
}

export default Tarea2;
