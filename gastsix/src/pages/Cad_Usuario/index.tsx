//estilizacao
import { useState } from "react";
import "./style.css";

//Hook

function Cad_Usuario() {
  const [nome, setNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [matricula, setMatricula] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dataadm, setDataAdm] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarsenha, setConfirmarSenha] = useState<string>("");

  function mascaraCPF(event: any) {
    // console.log(event.target.value);

    //remove todos os caracteres nao-alfanumericos
    let cpfValue = event.target.value.replace(/[^a-zA-z0-9]/g, "");

    //Aplica a mascara
    cpfValue = cpfValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    //atualiza o valor do campo CPF com a mascara aplicada
    setCPF(cpfValue);
  }

  function validarSenha() {

    if (senha !== confirmarsenha && confirmarsenha !== senha) {
      alert("Valor de senha e confirmar senha estao diferentes.Os valores devem ser iguais")
    }
    
  }

  return (
    <main className="banner">
      {/*indica o conteudo principal*/}
      <section className="section__formulario">
        {/*tag section indica uma secao*/}
        <form className="formulario-central">
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
            <label htmlFor="input__cpf">CPF:</label>
            <input
              type="text"
              name="input__cpf"
              id=""
              value={cpf}
              minLength={11}
              maxLength={11}
              onChange={mascaraCPF}
              required
            />

          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__matricula">Matricula:</label>
            <input
              type="text"
              name="input__matricula"
              id=""
              onChange={(e) => setMatricula(e.target.value)}
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
          <div className="div__alinhamento_funcao_data">
            <div className="div__alinhamento__funcao">
              <label htmlFor="">Função:</label>
              <select name="" id="">
                <option disabled={true} selected={true} value="">
                  Selecione
                </option>
                <option value="">Administrador</option>
                <option value="">Funcionario</option>
                <option value="">Supervisor</option>
              </select>
            </div>
            <div className="div__alinhamento__data">
              <label htmlFor="input__dataadm">Data adm:</label>
              <input
                className="div__alinhamento_campos_data"
                type="date"
                name="input__dataadm"
                id=""
                onChange={(e) => setDataAdm(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__senha">Senha:</label>
            <input
              type="password"
              name="input__senha"
              id=""
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="div__alinhamento_campos">
            <label htmlFor="input__confirmarsenha">Confirmar Senha:</label>
            <input
              type="password"
              name="input__confirmarsenha"
              id=""
              onChange={(e) => setConfirmarSenha(e.target.value)}
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

export default Cad_Usuario;