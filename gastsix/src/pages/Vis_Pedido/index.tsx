import "./style.css"
import PDF from "../../assets/issues/vis_pedidos.pdf"

//Hook
import { useState } from "react";

function Vis_Pedido() {

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