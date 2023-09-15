import "./style.css"

function Tel_Ajuste() {
  return (
    <main className="banner">
  {/*indica o conteudo principal*/}
  <section className="section_formulario">
  {/*tag section indica uma secao*/}
  <form className="formulario_central">
    <div className="div_alinhamento_funcao_data">
      <div className="div_alinhamento_data">
        <label htmlFor="input_dataadm">Data Inicial:</label>
        <input
          className="div_alinhamento_campos_data"
          type="date"
          name="input__dataadm"
          id=""
        />
      </div>
      <div className="div_alinhamento_data">
        <label htmlFor="input_dataadm">Data Final:</label>
        <input
          className="div_alinhamento_campos_data"
          type="date"
          name="input__dataadm"
          id=""
        />
      </div>
    </div>
    <div className="div_botao_visualizar">
      <button className="botao_visualizar" type="submit">
        Visualizar
      </button>
    </div>
    <div className="aj_div__alinhamento_campos_quantidade">
      <table className="aj_section__formulario_table">
        <tbody>
          <tr className="aj_tr">
            <th>Cod.material</th>
            <th>Descrição material</th>
            <th>Posição no estoque</th>
          </tr>
          <tr>
            <td>83475t</td>
            <td>Tampão</td>
            <td>0137B1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="div_alinhamento_botao_cadastrar">
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

export default Tel_Ajuste;