//Imports React - adicionar imports dos componentes React abaixo 
import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilização da página CSS
import './index.css';

//componentes
import Header from "../src/componentes/Header";
import Menu_Lateral from "./componentes/Menu_Lateral";
import Cad_Produto from "./pages/Cad_Produto";
import Cad_Fornecedores from './pages/Cad_Fornecedores';
import Tel_Ajuste from "./pages/Tel_Ajuste";
<<<<<<< HEAD
import Ent_Estoque from "./pages/Ent_Estoque";
import Con_Estoque from "./pages/Ent_Estoque";
import Cad_Dispositivo from './pages/Cad_Dispositivo';
import Rel_Movimentacao from './pages/Rel_Movimentacao';
=======
import Rel_Operadores from './pages/Rel_Operadores';

//estilização global
import "./index.css";
>>>>>>> rel_operadores

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header />
      <Menu_Lateral />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/cadastroProduto' element={<Cad_Produto />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='/cadastroFornecedores' element={<Cad_Fornecedores />} />
        <Route path='/telaAjuste' element={<Tel_Ajuste />} />
<<<<<<< HEAD
        <Route path='/entEstoque' element={<Ent_Estoque />} />
        <Route path='/conEstoque' element={<Con_Estoque />} />
        <Route path='/cadastroDispositivo' element={<Cad_Dispositivo />} />
        <Route path='/relatorioMovimentacao' element={<Rel_Movimentacao />} />
=======
        <Route path='/relatorioOperadores' element={<Rel_Operadores />} />
>>>>>>> rel_operadores
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
