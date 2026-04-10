import { users } from "../../data/Tarea1Data.ts";
import Tarjeta from "../../components/Tarjeta/Tarjeta.tsx";
import type { userInterface } from "../../interfaces/userInterface.ts";
import { useContext } from "react";
import { UsuarioContext } from "../../Hooks/useContext.tsx";

function Tarea1() {
  const { usuario } = useContext(UsuarioContext);
  const Listusers = users.map((user: userInterface) => (
    <Tarjeta
      key={user.id}
      id={user.id}
      nombre={user.nombre}
      edad={user.edad}
      profesion={user.profesion}
      activo={user.activo}
      imagen={user.imagen}
    />
  ));
  return (
    <div>
      <h1 className="text-3xl">Tarea 5 : {usuario}</h1>
      <div className="flex content-start justify-center min-h-screen min-w-screen flex-wrap">
        {Listusers}
      </div>
    </div>
  );
}

export default Tarea1;
