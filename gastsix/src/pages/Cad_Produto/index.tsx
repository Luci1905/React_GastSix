import "./style.css"

function Cad_Produtos() {
  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
          <div className="div__alinhamento_campos">
            <label htmlFor="input__descricao">Descrição:</label>
            <input type="text" name="input__discricao" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__part">Part Number:</label>
            <input type="text" name="input__pat" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigoalt">Código Alternativo:</label>
            <input type="text" name="input__codigoalt" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigofor">Código Fornecedor:</label>
            <input type="text" name="input__codigofor" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigosap">Código SAP:</label>
            <input type="text" name="input__codigosap" id="" />
          </div>
          <button className="botao_cadastrar" type="submit">
            Cadastrar
          </button>
        </form>
      </section>
    </main>

  )
}

export default Cad_Produtos;