import Navbar from "./components/Nav/Nav.tsx";
import Header from "./components/Header/Header.tsx";
import Rout from "./routes/routes.tsx";
import { UsuarioProvider } from "./Hooks/useContext.tsx";

function App() {
  return (
    <UsuarioProvider>
      <Navbar />
      <Header />
      <Rout />
    </UsuarioProvider>
  );
}

export default App;
