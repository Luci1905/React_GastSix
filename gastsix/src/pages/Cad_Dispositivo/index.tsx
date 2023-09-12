import "./style.css";

//Hooks
import { useState } from "react"

function Cad_Dispositivo() {
    const [codigoTipo, setCodigoTipo] = useState<string>("");
    const [ip, setIP] = useState<string>("");
    const [nomeFabricante, setNomeFabricante] = useState<string>("");
    const [tipo, setTipo] = useState<string>("");
    const [sistemaOperacional, setSistemaOperacional] = useState<string>("");

    return (
        <main className="banner">
            {/*indica o conteudo principal*/}
            <section className="section__formulario">
                {/*tag section indica uma secao*/}
                <form className="formulario-central">
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__codigo">Código Tipo:</label>
                        <input 
                        type="text" 
                        name="input__codigo" 
                        id=""
                        onChange={(e) =>setCodigoTipo(e.target.value)} 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__ip">IP:</label>
                        <input 
                        type="text" 
                        name="input__ip" 
                        id=""
                        onChange={(e) =>setIP(e.target.value)} 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__nomef">Nome Faricante:</label>
                        <input 
                        type="text" 
                        name="input__nomef" 
                        id=""
                        onChange={(e) =>setNomeFabricante(e.target.value)} 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__tipo">Tipo:</label>
                        <input 
                        type="text" 
                        name="input__tipo" 
                        id=""
                        onChange={(e) =>setTipo(e.target.value)} 
                        />
                    </div>
                    <div className="div__alinhamento_campos">
                        <label htmlFor="input__sisope">Sistema Operacional:</label>
                        <input 
                        type="text" 
                        name="input__sisope" 
                        id=""
                        onChange={(e) =>setSistemaOperacional(e.target.value)} 
                        />
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