import "./style.css";

import imgRelOp from "../../assets/img/img_rel_operadores.png"

function Rel_Operadores() {
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
                    <img
                        className="img_rel_movimentacao"
                        src={imgRelOp}
                        alt=""
                    />
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
export default Rel_Operadores;