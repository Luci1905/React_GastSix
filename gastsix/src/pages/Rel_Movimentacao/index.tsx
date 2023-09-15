import "./style.css";

import imgRelmov from "../../assets/img/img_rel_movimentacao.png";

//Hooks
import { useState } from "react"

function Rel_Movimentacao() {
    const [dataInicial, setDataInicial] = useState<string>("");
    const [dataFinal, setDataFinal] = useState<string>("");

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
                                onChange={(e) => setDataInicial(e.target.value)}
                                required
                            />
                        </div>
                        <div className="div_alinhamento_data">
                            <label htmlFor="input_dataadm">Data Final:</label>
                            <input
                                className="div_alinhamento_campos_data"
                                type="date"
                                name="input__dataadm"
                                id=""
                                onChange={(e) => setDataFinal(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <img
                        className="img_rel_movimentacao"
                        src={imgRelmov}
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
export default Rel_Movimentacao;