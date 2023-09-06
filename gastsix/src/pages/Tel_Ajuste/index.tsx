import "./style.css"

function Tel_Ajuste() {
  return (
    <main className="banner">
  {/*indica o conteudo principal*/}
  <section className="aj_section__formulario">
    {/*tag section indica uma secao*/}
    <form className="aj_formulario-central">
      <div className="aj_div__alinhamento_campos">
        <label htmlFor="input__codigo">Codigo:</label>
        <input type="text" name="input__codigo" id="" />
      </div>
      <button className="aj_botao" type="submit">
        Buscar
      </button>
    </form>
    <div className="aj_div__alinhamento_campos_quantidade">
      Quantidade Atual:
      <table className="aj_section__formulario_table">
        <tbody>
          <tr className="aj_tr">
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
          </tr>
          <tr>
            <td>5NN839015A</td>
            <td>Fechadura elétrica de porta</td>
            <td>100</td>
          </tr>
          <tr>
            <td>8X0831403E</td>
            <td>Dobradiça de porta</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
    <form className="aj_formulario-central" action="">
      <div className="aj_div__alinhamento_campos">
        <label
          className="aj_ajustar_quantidade"
          htmlFor="input__ajustar_quantidade"
        >
          Ajustar quantidade:
        </label>
        <input type="text" name="input__ajustar quantidade" id="" />
      </div>
      <button className="aj_botao" type="submit">
        Inserir
      </button>
    </form>
  </section>
</main>
  )
}

export default Tel_Ajuste;