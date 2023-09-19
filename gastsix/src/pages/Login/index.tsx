//estilizacao
import "./style.css";

import { Link } from "react-router-dom";

//imagens
import imgLOGO from "../../assets/img/LOGO.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Login() {
  const navigate = useNavigate();

  function recolherMenu() {

    let menu: any = document.getElementById("menu_lateral");
    // let menu_barras: any = document.getElementById("menu_barras");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    // let menu_relatorios_aberto: any = document.getElementById("menu_relatorios_aberto");
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    // let menu_pedidos_aberto: any = document.getElementById("menu_pedidos_aberto");
    // let menu_estoque_aberto: any = document.getElementById("menu_estoque_aberto");

    menu.style.display = "none"
    // menu_barras.setAttribute("aria-label", "abrir menu")
    // menu_barras.setAttribute("aria-expandede", "false")
    menu_relatorios.style.display = "none"
    // menu_relatorios_aberto.setAttribute("aria-label", "abrir menu")
    // menu_relatorios_aberto.setAttribute("aria-expandede", "false")
    menu_pedidos.style.display = "none"
    // menu_pedidos_aberto.setAttribute("aria-label", "abrir menu")
    // menu_pedidos_aberto.setAttribute("aria-expandede", "false")
    menu_estoque.style.display = "none"
    // menu_estoque_aberto.setAttribute("aria-label", "abrir menu")
    // menu_estoque_aberto.setAttribute("aria-expandede", "false")
    menu_cadastros.style.display = "none"

  }

  useEffect(() => {
    //executa uma ação após o componente ser recarregado
    recolherMenu();
  }, [])

  return (
    <div className="alinhamento_login">
      <main>
        <div className="login_container">
          <div className="big_logo">
            <img src={imgLOGO} alt="logo gastsix" />
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
            <button onClick={() => navigate("/loginHome")}>
              Entrar
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Link to={"/qem_somos"}> quem somos </Link>
        <Link to={"/qem_somos"}> suporte </Link>
      </footer>
    </div>
  );
}

export default Login;