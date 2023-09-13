import "./style.css";

import imgRelEstoque from "../../assets/img/img_rel_estoque.png";

function Rel_Estoque() {
    return (
        <main className="banner">
            {/*indica o conteudo principal*/}
            <section className="section_formulario">
                {/*tag section indica uma secao*/}
                <form className="formulario_central">
                    <img src={imgRelEstoque} alt="" />
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
export default Rel_Estoque;