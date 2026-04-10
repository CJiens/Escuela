import { useContext, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard.tsx";
import useFetch from "../../Hooks/getItems";
import { UsuarioContext } from "../../Hooks/useContext.tsx";


function Tarea3() {
  const { usuario } = useContext(UsuarioContext);
  const [id, setId] = useState(1);

  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character/",
    id,
  );

  if (loading)
    return (
      <h1 className="text-black text-5xl text-center">Cargando personaje...</h1>
    );

  if (error)
    return (
      <div className="text-center mt-5">
        <h1 className="text-red-500">Error: {error}</h1>
        <p className="text-red mt-2">ID válidos: 1-20</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center  min-h-screen">
      <h1 className="text-3xl">Tarea 5 : {usuario}</h1>
      {data && <CharacterCard data={data} />}
      <div className="flex mb-6">
        <button
          onClick={() => setId(id - 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          disabled={id <= 1}
        >
          Anterior
        </button>

        <span className="m-5 text-black text-xl font-bold">ID: {id}</span>

        <button
          onClick={() => setId(id + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          disabled={id >= 20}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Tarea3;
