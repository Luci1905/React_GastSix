import { useEffect } from "react";
import "./style.css";

//Hook
import { useState } from "react";

function Cad_Fornecedores() {
  const [id, setId] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [ie, setIe] = useState<string>("");
  const [razaosocial, setRazaosocial] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");

  function mascaraCNPJ(event: any) {
    console.log(event.target.value);

    // Remove todos os caracteres não-alfanuméricos
    let cnpjValue = event.target.value.replace(/[^a-zA-Z0-9]/g, "");

    // Aplica a máscara
    cnpjValue = cnpjValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");

    // Atualiza o valor do campo CNPJ com a máscara aplicada
    setCnpj(cnpjValue);

  }

  function recolherMenu() {

    let menu: any = document.getElementById("menu_lateral");
    // let menu_barras: any = document.getElementById("menu_barras");
    let menu_relatorios: any = document.getElementById("menu_lateral_relatorios");
    // let menu_relatorios_aberto: any = document.getElementById("menu_relatorios_aberto");
    let menu_pedidos: any = document.getElementById("menu_lateral_pedidos");
    let menu_estoque: any = document.getElementById("menu_lateral_estoque");
    let menu_cadastros: any = document.getElementById("menu_lateral_cadastro");
    // let menu_pedidos_aberto: any = document.getElementById("menu_pedidos_aberto");
    // let menu_estoque_aberto: any = document.getElementById("menu_estoque_aberto");

    menu.style.display = "none"
    // menu_barras.setAttribute("aria-label", "abrir menu")
    // menu_barras.setAttribute("aria-expandede", "false")
    menu_relatorios.style.display = "none"
    // menu_relatorios_aberto.setAttribute("aria-label", "abrir menu")
    // menu_relatorios_aberto.setAttribute("aria-expandede", "false")
    menu_pedidos.style.display = "none"
    // menu_pedidos_aberto.setAttribute("aria-label", "abrir menu")
    // menu_pedidos_aberto.setAttribute("aria-expandede", "false")
    menu_estoque.style.display = "none"
    // menu_estoque_aberto.setAttribute("aria-label", "abrir menu")
    // menu_estoque_aberto.setAttribute("aria-expandede", "false")
    menu_cadastros.style.display = "none"

  }

  useEffect(() => {
    //executa uma ação após o componente ser recarregado
    recolherMenu();
  }, [])

  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
          <div className="div__alinhamento_campos">
            <label htmlFor="input__id">Id:</label>
            <input 
            type="text" 
            name="input__id" 
            id=""
            onChange={(e) => setId(e.target.value)}
            required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__nome">Nome:</label>
            <input
              type="text"
              name="input__nome"
              id=""
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__cnpj">CNPJ:</label>
            <input
              type="text"
              name="input__cnpj"
              id=""
              value={cnpj}
              minLength={14}
              maxLength={14}
              onChange={mascaraCNPJ}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__ie">IE:</label>
            <input
              type="text"
              name="input__ie"
              id=""
              onChange={(e) => setIe(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__rs">Razão Social:</label>
            <input
              type="text"
              name="input__rs"
              id=""
              onChange={(e) => setRazaosocial(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__E-mail">E-mail:</label>
            <input
              type="email"
              name="input__E-mail"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__end">Endereço:</label>
            <input
              type="text"
              name="input__end"
              id=""
              onChange={(e) => setEndereco(e.target.value)}
              required
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
export default Cad_Fornecedores;