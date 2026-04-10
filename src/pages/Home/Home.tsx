import { useContext } from "react";
import { UsuarioContext } from "../../Hooks/useContext";

function Home() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <h1 className="text-center text-5xl italic">
      {usuario == "" ? "Hola Mundo" : usuario}
    </h1>
  );
}

export default Home;
