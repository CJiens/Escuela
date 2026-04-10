// contexto.tsx
import { createContext, useState } from "react";

export const UsuarioContext = createContext<any>(null);

export function UsuarioProvider({ children }: any) {
  const [usuario, setUsuario] = useState<any>("");

  const cambiarNombre = (nombre: any) => setUsuario(nombre);

  return (
    <UsuarioContext.Provider value={{ usuario, cambiarNombre }}>
      {children}
    </UsuarioContext.Provider>
  );
}