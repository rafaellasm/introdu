import Styles from '../css/Como_Ajudar.module.css'
import InstiProximas from '../images/icons/insti_proximas.png'
import ProfiQualificados from '../images/icons/profissionais.png'
import RedeApoio from '../images/icons/apoio.png'
import Loja from '../images/icons/loja.png'

function Como_Ajudar() {

    return (
        <div className={Styles.container_porcentagem}>
            <h2 className={Styles.titulo_acenis}>Como a ACENIS pode ajudar</h2>
            <p className={Styles.paragrafo_acenis}>Oferecemos uma plataforma completa com recursos especializados para apoiar famílias e profissionais!</p>
            <hr />
            <div className={Styles.cards}>
                <div className={Styles.wide} >
                    <img src={InstiProximas} alt="Icone de instituições proxímas" />
                    <h2>Instituições Próximas</h2>
                </div>
                <div className={Styles.cards_acenis}>
                    <img src={Loja} alt="Icone de Loja" />
                    <h2>Loja Acenis</h2>
                </div>
                <div className={Styles.small}>
                    <h2>Jogos Acenis</h2>
                </div>
                <div className={Styles.big}>
                    <img src={ProfiQualificados} alt="Icone de profissionais qualificados" />
                    <h2>Profissionais Qualificados</h2>
                </div>
                <div className={Styles.big_2}>
                    <img src={RedeApoio} alt="Icone rede de apoio" />
                    <h2>Rede de Apoio</h2>
                </div>
            </div>
        </div>
    )
}

export default Como_Ajudar