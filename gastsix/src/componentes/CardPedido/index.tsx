import "./style.css";


function CardPedido(props: any) {
    return (
        <div className="div_alinhamento_label">
            <p>Id Pedido: {props.id}</p>
            <p>Observações: {props.observacoes}</p>
            <p>Usuario Operador: {props.usuario_operador}</p>
            <p>Usuario Supervisor: {props.usuario_supervisor}</p>
            <p>Setor: {props.setor}</p>
        </div>
    );

}

export default CardPedido;