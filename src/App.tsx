// Importação da biblioteca de rotas
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// Importação de telas
import Home from "./pages/Home";
import Estacao from "./pages/Estacao";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estacao/:sigla" element={<Estacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
