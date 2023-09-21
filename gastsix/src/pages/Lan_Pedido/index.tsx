import { useEffect } from "react";
import "./style.css"

//Hook
import { useState } from "react";

function Lan_Pedido() {

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
  const [CoddoProduto, setCodDoProduto] = useState<string>("");
  const [NumPedido, setNumPedido] = useState<string>("");
  const [Operador, setOperador] = useState<string>("");
  const [Supervisor, setSupervisor] = useState<string>("");
  const [Justificativa, setJustificativa] = useState<string>("");

  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
          <div className="div__alinhamento_campos">
            <label htmlFor="input__cod">Cod.do Produto:</label>
            <input
              type="text"
              name="input__cod"
              id=""
              onChange={(e) => setCodDoProduto(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__num">Num.Pedido:</label>
            <input
              type="text"
              name="input__num"
              id=""
              onChange={(e) => setNumPedido(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__ope">Operador:</label>
            <input
              type="text"
              name="input__ope"
              id=""
              onChange={(e) => setOperador(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__sup">Supervisor:</label>
            <input
              type="text"
              name="input__sup"
              id=""
              onChange={(e) => setSupervisor(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_justificativa">
            <label htmlFor="input__jus">Justificativa:</label>
            <input 
            type="text" 
            name="input__jus" 
            id=""
            onChange={(e) => setJustificativa(e.target.value)}
              required 
            />
          </div>
          <button className="botao_lancar" type="submit">
            Lançar
          </button>
        </form>
      </section>

    </main>

  )
}

export default Lan_Pedido;