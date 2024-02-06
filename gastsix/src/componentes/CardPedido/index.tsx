import "./style.css";


function CardPedido(props: any) {
    return (
    <main>
        <div className="div_alinhamento_label">
            <label htmlFor="input_id">Id Pedido</label>
            <label htmlFor="input_descricao">Descrição</label>
            <label htmlFor="input_usuario_operador">Usuario Operador</label>
            <label htmlFor="input_usuario_supervisor">Usuario Supervisor</label>
            <label htmlFor="input_setor">Setor</label>
        </div>
        
    </main>);

}

export default CardPedido;