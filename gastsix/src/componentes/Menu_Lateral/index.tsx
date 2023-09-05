import "./style.css"

function MenuLateral() {
    return(
        <>
        <aside className="posiciomaneto_menu">
    <a
      id="menu_barras"
      aria-label="abrir menu"
      aria-controls="menu_lateral"
      aria-expanded="false"
      aria-haspopup="true"
      className="menu_barras"
      href="#"
      //onClick={mostrarMenu}
    >
      <svg
        width={170}
        height={90}
        viewBox="0 0 170 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={85} cy={45} r={44} stroke="white" strokeWidth={2} />
        <line y1={44} x2={170} y2={44} stroke="white" strokeWidth={2} />
        <line
          x1="85.7107"
          y1="15.9578"
          x2="71.7107"
          y2="30.0999"
          stroke="white"
          strokeWidth={2}
        />
        <line
          x1="99.0473"
          y1="30.2158"
          x2="84.5387"
          y2="15.7072"
          stroke="white"
          strokeWidth={2}
        />
        <line
          x1="85.0437"
          y1="73.5508"
          x2="99.0437"
          y2="59.4087"
          stroke="white"
          strokeWidth={2}
        />
        <line
          x1="71.7071"
          y1="59.2929"
          x2="86.2157"
          y2="73.8015"
          stroke="white"
          strokeWidth={2}
        />
      </svg>
    </a>
    <nav id="menu_lateral" className="menu_lateral">
      <a href="">
        {" "}
        <img src="../img/menu_superior.png" alt="" />
      </a>
      <a
        id="menu_cadastro_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_cadastro"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_cadastro_aberto"
        href="#"
        //onClick={mostrar_menu_cadastro}
      >
        cadastros &gt;{" "}
      </a>
      <hr />
      <a
        id="menu_estoque_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_estoque"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_estoque_aberto"
        href="#"
        //onClick="mostrar_menu_estoque()"
      >
        estoque &gt;{" "}
      </a>
      <hr />
      <a
        id="menu_pedido_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_pedidos"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_pedido_aberto"
        href="#"
        //onClick="mostrar_menu_pedidos()"
      >
        pedidos &gt;
      </a>
      <hr />
      <a
        id="menu_relatorios_aberto"
        aria-label="abrir menu"
        aria-controls="menu_lateral_relatorios"
        aria-expanded="false"
        aria-haspopup="true"
        className="menu_relatorios_aberto"
        href="#"
        //onClick="mostrar_menu_relatorios()"
      >
        relatórios &gt;
      </a>
      <hr />
      <a href="">sair</a>
      <a href="">
        {" "}
        <img src="../img/menu_inferior.png" alt="" />
      </a>
    </nav>
  </aside>
  {/* MENU CADASTROS */}
  <aside className="posiciomaneto_menu_cadastro">
    <nav id="menu_lateral_cadastro" className="menu_lateral_cadastro">
      <a href="../cad_usuario/index.html">usuários</a>
      <hr />
      <a href="../cad_produto/index.html">produtos</a>
      <hr />
      <a href="../cad_dispositivo/index.html">dispositivos</a>
      <hr />
      <a href="../cad_fornecedores/index.html">fornecedores</a>
    </nav>
  </aside>
  {/* MENU  ESTOQUE */}
  <aside className="posiciomaneto_menu_estoque">
    <nav id="menu_lateral_estoque" className="menu_lateral_estoque">
      <a href="../con_estoque/index.html">consulta</a>
      <hr />
      <a href="../ent_estoque_opcional/index.html">entrada</a>
      <hr />
      <a href="../tel_ajuste/index.html">ajustes</a>
    </nav>
  </aside>
  {/* MENU  PEDIDOS */}
  <aside className="posiciomaneto_menu_pedidos">
    <nav id="menu_lateral_pedidos" className="menu_lateral_pedidos">
      <a href="../imp_pedido/index.html">importar</a>
      <hr />
      <a href="../vis_pedidos_opcional/index.html">visualizar</a>
      <hr />
      <a href="../lan_pedido/index.html">lançar</a>
    </nav>
  </aside>
  {/* MENU  RELATORIO */}
  <aside className="posiciomaneto_menu_relatorios">
    <nav id="menu_lateral_relatorios" className="menu_lateral_relatorios">
      <a href="../rel_movimentacao/index.html">movimentação</a>
      <hr />
      <a href="../rel_operadores/index.html">operadores</a>
      <hr />
      <a href="../rel_estoque/index.html">estoque</a>
    </nav>
  </aside>
        </>
    )
    
}

export default MenuLateral;