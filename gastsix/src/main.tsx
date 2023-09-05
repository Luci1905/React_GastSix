//Imports React - adicionar imports dos componentes React abaixo 
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

//Estilização da página CSS
import './index.css'

<<<<<<< HEAD
//Import do Header
import Header from '../src/Componentes/Header/index'

//Imports de Pages - adicionar imports pages abaixo
import Log_home from '../src/Componentes/Pages/Log_home/index'

//Import de Assets - adicionar import de assets utilizadas na página main - login
import './assets/img/LOGO.png'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
    <BrowserRouter>
    <Header></Header>
    </BrowserRouter>
    </>
    
  </React.StrictMode>,
=======
//componentes
import Header from "../src/componentes/Header";
import Menu_Lateral from "./componentes/Menu_Lateral";
import Cad_Produto from "./pages/Cad_Produto";

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
        <Route path='/Cad_Produto' element={<Cad_Produto />} /> {/*Indica o caminho do componente e o nome da rota dele*/}
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
>>>>>>> cad_produto
)
