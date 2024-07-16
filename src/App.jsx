import Menu from "./components/Menu";
import Ajuda from "./pages/Ajuda";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import NovaTarefa from "./pages/NovaTarefa";
import Rodape from "./pages/Rodape";
import Tarefas from "./pages/Tarefas";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/tarefas" element={<Tarefas/>}/>
          <Route path="/tarefas/adicionar" element={<NovaTarefa />}/>
          <Route path="/rodape" element={<Rodape />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right"/> 
      <Rodape />   
    </>
  );
}
export default App
