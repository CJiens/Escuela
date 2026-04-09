import type { statesInterface } from "../../interfaces/statesInterface";

interface prop {
  state: statesInterface;
  cambiarColor: (color: string) => void;
}

function Button({ state, cambiarColor }: prop) {
  return (
    <button
      onClick={() => cambiarColor(state.color)}
      className={`${state.color} h-16 w-32 m-5 text-white hover:scale-105 transition duration-500 shadow-sm shadow-white rounded-2xl`}
    >
      {state.nombre}
    </button>
  );
}

export default Button;
