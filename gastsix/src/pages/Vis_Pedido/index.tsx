//estilizacao
import "./style.css"

//axios
import api from "../../utils/api";

//Hook
import { useState } from "react";
import { useEffect } from "react";


//Componentes
import CardPedido from "../../componentes/CardPedido";

function Vis_Pedido() {
  const [listaPedidos, setListaPedidos] = useState<any[]>([]);
  const [DataFinal, setDataFinal] = useState<string>("");
  const [porpedidos, setPorPedido] = useState<string>("");

  function ListarPedidos() {

    //consumo api - lista pedidos
    api.get("pedido")
      .then((response) => {
        setListaPedidos(response.data)
        console.log(response)
      })
      .catch((error) => console.log(error)
      )
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
    ListarPedidos();
  }, [])



  return (
    <main className="banner">
      <ul>
        {
          listaPedidos.map((lista: any, index) => {
            return <li key={index}>
              <CardPedido
                id_pedido={lista.id}
                descricao={lista.descricao}
                usuario_operador={lista.usuario_operador}
                usuario_supervisor={lista.usuario_supervisor}
              />
            </li>
          })
        }
      </ul>


    </main>
  )
}

export default Vis_Pedido;