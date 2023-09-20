import "./style.css"
import PDF from "../../assets/issues/vis_pedidos.pdf"
import { useEffect } from "react";

//Hook
import { useState } from "react";

function Vis_Pedido() {

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

  const [DataInicial, setDataInicial] = useState<string>("");
  const [DataFinal, setDataFinal] = useState<string>("");
  const [porpedidos, setPorPedido] = useState<string>("");
  
  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section_formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario_central">
          <div className="div_alinhamento_data_pedidos">
            <div className="div_alinhamento_data">
              <label htmlFor="input_data">Data Inicial:</label>
              <input
                type="date"
                name="input_data"
                id=""
                onChange={(e) => setDataInicial(e.target.value)}
                required
              />
            </div>
            <div className="div_alinhamento_data">
              <label htmlFor="input_data">Data Final:</label>
              <input
                type="date"
                name="input_data"
                id=""
                onChange={(e) => setDataFinal(e.target.value)}
                required
              />
            </div>
            <div className="div_alinhamento_porpedidos">
              <label htmlFor="input_porpedidos">Por pedido:</label>
              <input
                type="text"
                name="input_porpedidos"
                id=""
                onChange={(e) => setPorPedido(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div_pdf">
            <iframe
              src={PDF}
              width={600}
              height={600}
              style={{ border: "none" }}
            ></iframe>
          </div>
          <div className="div_alinhamento_botao">
            <button className="botao_gerar" type="submit">
              Gerar xml
            </button>
            <button className="botao_gerar" type="submit">
              Gerar pdf
            </button>
          </div>
        </form>
      </section>

    </main>
  )
}

export default Vis_Pedido;