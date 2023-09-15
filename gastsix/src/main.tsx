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
import Ent_Estoque from "./pages/Ent_Estoque";
import Con_Estoque from "./pages/Ent_Estoque";
import Cad_Dispositivo from './pages/Cad_Dispositivo';
import Rel_Movimentacao from './pages/Rel_Movimentacao';
<<<<<<< HEAD

//estilização global
import "./index.css";
=======
import Rel_Operadores from './pages/Rel_Operadores';
import Rel_Estoque from './pages/Rel_Estoque';
import Imp_Pedido from './pages/Imp_Pedido';
import Vis_Pedido from './pages/Vis_Pedido';
import Lan_Pedido from './pages/Lan_Pedido';
import Cad_Usuario from './pages/Cad_Usuario';
import Log_Home from './pages/Log_Home';
import Login from './pages/Login';
import Quem_Somos from './pages/Quem_Somos';
>>>>>>> e9515720991872c05f1a0258ce9f16433252f057

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
<<<<<<< HEAD
        <Route path='/telaAjuste' element={<Tel_Ajuste />} />
        <Route path='/entEstoque' element={<Ent_Estoque />} />
        <Route path='/conEstoque' element={<Con_Estoque />} />
        <Route path='/cadastroDispositivo' element={<Cad_Dispositivo />} />
        <Route path='/relatorioMovimentacao' element={<Rel_Movimentacao />} />
=======
        <Route path='/ajusteEstoque' element={<Tel_Ajuste />} />
        <Route path='/entradaEstoque' element={<Ent_Estoque />} />
        <Route path='/consultaEstoque' element={<Con_Estoque />} />
        <Route path='/visualizarPedido' element={<Vis_Pedido />} />
        <Route path='/lancarPedido' element={<Lan_Pedido />} />
        <Route path='/importarPedido' element={<Imp_Pedido />} />
        <Route path='/cadastroDispositivo' element={<Cad_Dispositivo />} />
        <Route path='/relatorioMovimentacao' element={<Rel_Movimentacao />} />
        <Route path='/relatorioOperadores' element={<Rel_Operadores />} />
        <Route path='/relatorioEstoque' element={<Rel_Estoque />} />
        <Route path='/relatorioMovimentacao' element={<Log_Home />} />
        <Route path='/relatorioOperadores' element={<Login />} />
        <Route path='/relatorioEstoque' element={<Quem_Somos />} />
        <Route path='/relatorioEstoque' element={<Cad_Usuario />} />
>>>>>>> e9515720991872c05f1a0258ce9f16433252f057
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
