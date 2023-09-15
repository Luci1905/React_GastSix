//estilizacao
import "./style.css";

//imagens
import imgLOGO from "../../assets/img/LOGO.png";


function Login() {
    return (

<main>
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
    <button onClick="window.location.href = './log_home/index.html';">
        
      Entrar
    </button>
  </div>
</main>

);
}

export default Login;