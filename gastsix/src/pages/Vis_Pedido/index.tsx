import "./style.css"
import PDF from "../../assets/issues/vis_pedidos.pdf"


function Vis_Pedido() {
  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section_formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario_central">
          <div className="div_alinhamento_data_pedidos">
            <div className="div_alinhamento_data">
              <label htmlFor="input_data">Data Inicial:</label>
              <input type="date" name="input_data" id="" />
            </div>
            <div className="div_alinhamento_data">
              <label htmlFor="input_data">Data Final:</label>
              <input type="date" name="input_data" id="" />
            </div>
            <div className="div_alinhamento_porpedidos">
              <label htmlFor="input_porpedidos">Por pedido:</label>
              <input type="text" name="input_porpedidos" id="" />
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