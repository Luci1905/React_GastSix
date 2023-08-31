//Imports React - adicionar imports dos componentes React abaixo 
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

//Estilização da página CSS
import './index.css'

//Imports de Components - adicionar imports componentes abaixo
import Header from './componentes/Header/index'

//Imports de Pages - adicionar imports pages abaixo
// import './pages/tel_ajuste/'
// import './pages/rel_estoque/'
// import './pages/rel_movimentacao/'
// import './pages/rel_operadores/'
// import quemSomos from './pages/qem_somos/index'

//Import de Assets - adicionar import de assets utilizadas na página main - login
import './assets/img/LOGO.png'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>GastSix - LogIn</title>
      <link rel="shortcut icon" href="../img/LOGO.png" type="image/x-icon" />
      <link rel="stylesheet" href="style.css" />
      
        
        <header>
        <div className="posicionamento_header">
          <div className="div_header_1"></div>
          <div className="div_header_2">
            <h1>gastsix</h1>
          </div>
          <a className="div_header_3 " href="fechar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              {/*! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </a>
        </div>
        </header>
      
      <main>
        <div className="big_logo">
          <img src="" alt="logo gastsix" />
        </div>
        <div className="box_login">
          <h2>login</h2>
          <div className="preenchimentos">
            <div className="usuario">
              <label htmlFor="usuário">Usuário:</label>
              <input type="text" />
            </div>
            <div className="senha">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="password" />
            </div>
          </div>
          <button
            type="submit"
            // onclick="window.location.href='./log_home/index.html'"
          >
            entrar
          </button>
        </div>
      </main>
      <footer>
        <a href="./qem_somos/index.html">quem somos</a>
        <a href="./qem_somos/index.html">suporte</a>
      </footer>
    </>
    
  </React.StrictMode>,
)
