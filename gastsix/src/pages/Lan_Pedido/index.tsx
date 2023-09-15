import "./style.css"

//Hook
import { useState } from "react";

function Lan_Pedido() {

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