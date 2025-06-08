import Styles from '../css/Introducao_Principal.module.css'
import SaibaMais from '../images/icons/seta_saiba_mais.png'

function Introducao_Principal() {

    return (
        <section className={Styles.infos_principais}>
            <h1>Tudo o que você precisa para o desenvolvimento do seu filho</h1>
            <p>Encontre instituições, profissionais especializados, uma rede de apoio e produtos selecionados para crianças com Síndrome de Down.</p>
            <p className={Styles.saiba_mais}>Saiba mais</p>
            <img src={SaibaMais} alt="Seta de saiba mais" />
        </section>
    )
}

export default Introducao_Principal