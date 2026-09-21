// Importação da biblioteca de rotas
import { HashRouter , Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// Importação de telas
import Home from "./pages/Home";
import Estacao from "./pages/Estacao";
import Operacao from "./pages/Operacao";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/operacao" element={<Operacao />} />
        <Route path="/estacao/:sigla" element={<Estacao />} />
      </Routes>
    </HashRouter >
  );
}

export default App;