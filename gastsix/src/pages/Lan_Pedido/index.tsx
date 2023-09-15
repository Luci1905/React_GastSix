import "./style.css"

function Lan_Pedido() {
  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
          <div className="div__alinhamento_campos">
            <label htmlFor="input__cod">Cod.do Produto:</label>
            <input type="text" name="input__cod" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__num">Num.Pedido:</label>
            <input type="text" name="input__num" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__ope">Operador:</label>
            <input type="text" name="input__ope" id="" />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__sup">Supervisor:</label>
            <input type="text" name="input__sup" id="" />
          </div>
          <div className="div__alinhamento_justificativa">
            <label htmlFor="input__jus">Justificativa:</label>
            <input type="text" name="input__jus" id="" />
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