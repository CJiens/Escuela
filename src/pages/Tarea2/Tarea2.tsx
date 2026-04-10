import { states } from "../../data/Tarea2Data.ts";
import type { statesInterface } from "../../interfaces/statesInterface.ts";
import Button from "../../components/Button/Button.tsx";
import { useContext, useState } from "react";
import { UsuarioContext } from "../../Hooks/useContext.tsx";

function Tarea2() {
  const [color, setColor] = useState("bg-gray-500");
  const { usuario } = useContext(UsuarioContext);

  function cambiarColor(color: string) {
    setColor(color);
  }

  const butons = states.map((state: statesInterface) => (
    <Button key={state.id} state={state} cambiarColor={cambiarColor} />
  ));

  return (
    <div>
      <h1 className="text-3xl">Tarea 5 : {usuario}</h1>
      <div className={`flex flex-col text-center ${color}`}>
        <h1 className="mt-10 text-5xl text-white">{color}</h1>

        <div className="mt-5 flex flex-wrap justify-center">{butons}</div>
      </div>
    </div>
  );
}

export default Tarea2;
