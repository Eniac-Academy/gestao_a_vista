// Importação da biblioteca de rotas
import { HashRouter , Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// Importação de telas
import Home from "./pages/Home";
import Estacao from "./pages/Estacao";

const basename =
  window.location.hostname === "eniacacademy.github.io"
    ? "/gestao_a_vista"
    : "";

function App() {
  return (
    <HashRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estacao/:sigla" element={<Estacao />} />
      </Routes>
    </HashRouter >
  );
}

export default App;