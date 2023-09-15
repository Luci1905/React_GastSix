//estilizacao
import "./style.css";

//imagens
import imgprod from "../../assets/img/prod_segundo.png";
import imgqtd from "../../assets/img/qtd_prod_hora.png";
import imgtempo from "../../assets/img/tempo_em_min.png";
import imgmeta from "../../assets/img/meta_prop.png";

function Log_Home() {

  return (
    <main className="banner">
      < section className="dash" >
        <div className="primeiros_dashs">
          <img src={imgprod} alt="" />
          <img src={imgqtd} alt="" />
        </div>
        <div className="segundos_dash">
          <img src={imgtempo} alt="" />
          <img src={imgmeta} alt="" />
        </div>
      </section >
    </main >

  )
}

export default Log_Home;
