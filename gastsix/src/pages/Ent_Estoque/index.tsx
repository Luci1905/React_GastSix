import "./style.css"

function Ent_Estoque() {
  return (
    <main className="banner">
  {/*indica o conteudo principal*/}
  <section className="section__formulario">
    {/*tag section indica uma secao*/}
    <form className="formulario-central">
      <div className="div__alinhamento_campos">
        <label htmlFor="input_id">Id:</label>
        <input type="text" name="input_id" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_item">Item:</label>
        <input type="text" name="input_item" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_quantidade">Quantidade:</label>
        <input type="number" name="input_quantidade" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_partnumber">Part number:</label>
        <input type="email" name="input_number" id="" />
      </div>
      <div className="div__alinhamento_funcao_data"></div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_posicao">Posição:</label>
        <input type="text" name="input_posicao" id="" />
      </div>
      <div className="div__alinhamento_campos">
        <label htmlFor="input_deposito">Deposito:</label>
        <input type="text" name="input_deposito" id="" />
      </div>
      <div className="div_alinhamento_duplo">
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_altura">Altura:</label>
          <input type="text" name="input_altura" id="" />
        </div>
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_rua">Rua:</label>
          <input type="text" name="input_rua" id="" />
        </div>
      </div>
      <div className="div_alinhamento_duplo">
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_codsap">Cod sap:</label>
          <input type="text" name="input_codsap" id="" />
        </div>
        <div className="div__alinhamento_altura_rua">
          <label htmlFor="input_coluna">Coluna:</label>
          <input type="text" name="input_coluna" id="" />
        </div>
      </div>
      <button className="botao_inserir" type="submit">
        Inserir
      </button>
    </form>
  </section>
</main>

  )
}

export default Ent_Estoque;