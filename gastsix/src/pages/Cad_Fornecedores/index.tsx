import "./style.css";

function Cad_Fornecedores() {
    return(
        <main className="banner">
        {/*indica o conteudo principal*/}
        <section className="section__formulario">
          {/*tag section indica uma secao*/}
          <form className="formulario-central">
            <div className="div__alinhamento_campos">
              <label htmlFor="input__id">Id:</label>
              <input type="text" name="input__id" id="" />
            </div>
            <div className="div__alinhamento_campos">
              <label htmlFor="input__nome">Nome:</label>
              <input type="text" name="input__nome" id="" />
            </div>
            <div className="div__alinhamento_campos">
              <label htmlFor="input__cnpj">CNPJ:</label>
              <input type="text" name="input__cnpj" id="" />
            </div>
            <div className="div__alinhamento_campos">
              <label htmlFor="input__ie">IE:</label>
              <input type="text" name="input__ie" id="" />
            </div>
            <div className="div__alinhamento_campos">
              <label htmlFor="input__rs">Razão Social:</label>
              <input type="text" name="input__rs" id="" />
            </div>
            <div className="div__alinhamento_campos">
              <label htmlFor="input__E-mail">E-mail:</label>
              <input type="email" name="input__E-mail" id="" />
            </div>
            <div className="div__alinhamento_campos">
              <label htmlFor="input__end">Endereço:</label>
              <input type="text" name="input__end" id="" />
            </div>
            <button className="botao_cadastrar" type="submit">
              Cadastrar
            </button>
          </form>
        </section>
      </main>
      
    )
}
export default Cad_Fornecedores;