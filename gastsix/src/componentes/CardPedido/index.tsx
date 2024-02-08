import "./style.css";


function CardPedido(props: any) {
    return (
        <div className="div_alinhamento_label">
            <article className="cartao__pedido">
                <p>Id Pedido: {props.id}</p>
                
                <p>Observações: {props.observacoes}</p>
                
                <p>Usuario Supervisor: {props.usuario_supervisor}</p>
                
                <p>Setor: {props.setor}</p>
            </article>
            <div className="borda__pedido"></div>
        </div>
        
    );

}

export default CardPedido;