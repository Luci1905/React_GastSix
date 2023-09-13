import "./style.css"

function Imp_Pedido() {
  return (
    <main className="banner">
  {/*indica o conteudo principal*/}
  <section className="section_formulario">
  {/*tag section indica uma secao*/}
  <form>
    <div className="div_alinhamento_campos">
      <label htmlFor="selecior_arquivo">Selecionar Arquivo:</label>
      <input type="text" name="selecior_arquivo" id="" />
    </div>
    <div className="div_alinhamento_botao_importar">
      <button className="botao_importar" type="submit">
        Importar
      </button>
    </div>
  </form>
</section>

</main>

  )
}

export default Imp_Pedido;