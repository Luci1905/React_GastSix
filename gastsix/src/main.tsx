//Imports React - adicionar imports dos componentes React abaixo 
import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilização da página CSS
import './index.css'

//componentes
import Header from "../src/componentes/Header";
import Menu_Lateral from "./componentes/Menu_Lateral";
import Cad_Produto from "./pages/Cad_Produto";
import Tel_Ajuste from "./pages/Tel_Ajuste";
import Ent_Estoque from "./pages/Ent_Estoque";


//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header />
      <Menu_Lateral />
      <Routes>{/*Indica uma lista de rotas*/}
        <Route path='/cadastroProduto' element={<Cad_Produto />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
        <Route path='/telaAjuste' element={<Tel_Ajuste />} />
        <Route path='/entEstoque' element={<Ent_Estoque />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
