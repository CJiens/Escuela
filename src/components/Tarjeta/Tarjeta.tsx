import type { userInterface } from "../../interfaces/userInterface";

function Tarjeta(tarjeta: userInterface) {
  return (
    <div
        className={`m-2.5  shadow-gray-500 hover:scale-150 transition duration-500 shadow-lg rounded-lg  w-96 h-60 flex flex-col justify-center ${tarjeta.activo ? "bg-white" : "bg-gray-400"}`}
    >
      <div className="flex flex-row items-center">
        <img
          className="h-32 w-32"
          src={`assets/${tarjeta.imagen}`}
          alt={tarjeta.imagen}
        />
        <h1 className="text-3xl ml-5 text-center ">{tarjeta.nombre}</h1>
      </div>

      <div className="flex flex-col text-start m-5">
        <p>Edad: {tarjeta.edad}</p>
        <p>Profesion: {tarjeta.profesion}</p>
        <p>Estado: {tarjeta.activo == true ? "Activo" : "Inactivo"}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
