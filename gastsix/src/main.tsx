//Imports React - adicionar imports dos componentes React abaixo 
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'

//Estilização da página CSS
import './index.css'

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
)
