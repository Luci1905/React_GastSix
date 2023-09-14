import "./style.css"

//Hook
import { useState } from "react";

function Cad_Produtos() {
  const [descricao, setDescricao] = useState<string>("");
  const [partnumber, setPartnumber] = useState<string>("");
  const [codigoalternativo, setCodigoAlternativo] = useState<string>("");
  const [codigofornecedor, setCodigoFornecedor] = useState<string>("");
  const [codigosap, setCodigoSap] = useState<string>("");


  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
          <div className="div__alinhamento_campos">
            <label htmlFor="input__descricao">Descrição:</label>
            <input
              type="text"
              name="input__discricao"
              id=""
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__part">Part Number:</label>
            <input
              type="text"
              name="input__pat"
              id=""
              onChange={(e) => setPartnumber(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigoalt">Código Alternativo:</label>
            <input
              type="text"
              name="input__codigoalt"
              id=""
              onChange={(e) => setCodigoAlternativo(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigofor">Código Fornecedor:</label>
            <input
              type="text"
              name="input__codigofor"
              id=""
              onChange={(e) => setCodigoFornecedor(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__codigosap">Código SAP:</label>
            <input
              type="text"
              name="input__codigosap"
              id=""
              onChange={(e) => setCodigoSap(e.target.value)}
              required
            />
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