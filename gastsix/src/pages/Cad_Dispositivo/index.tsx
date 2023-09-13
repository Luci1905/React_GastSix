import "./style.css";

function Cad_Dispositivo() {
    return (
        <main className="banner">
            {/*indica o conteudo principal*/}
            <section className="section__formulario">
                {/*tag section indica uma secao*/}
                <form className="formulario-central">
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__codigo">Código Tipo:</label>
                        <input type="text" name="input__codigo" id="" />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__ip">IP:</label>
                        <input type="text" name="input__ip" id="" />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__nomef">Nome Faricante:</label>
                        <input type="text" name="input__nomef" id="" />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__tipo">Tipo:</label>
                        <input type="text" name="input__tipo" id="" />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__sisope">Sistema Operacional:</label>
                        <input type="text" name="input__sisope" id="" />
                    </div>
                    <button className="botao_cadastrar" type="submit">
                        Cadastrar
                    </button>
                </form>
            </section>
        </main>

    )

}
export default Cad_Dispositivo;