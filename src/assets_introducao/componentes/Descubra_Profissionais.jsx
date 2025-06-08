import Styles from '../css/Descubra_Profissionais.module.css'
import Verificacao from '../images/icons/icone_verificado.png'
import Perfil from '../images/icons/icone_perfil.png'
import Coracao from '../images/icons/icone_coracao.png'
import Flor from '../images/vire_membro/flor_profissionais.png'
import ImgPerfil from '../images/icons/foto_perfil.png'

function Descubra_Profissionais() {

    return (
        <section className={Styles.profissionais}>
            <img className={Styles.flor_profissionais} src={Flor} alt="Flor profissionais" />
            <h2>Descubra os melhores profissionais para seu filho</h2>
            <p>Oferecemos uma plataforma completa com recursos especializados para apoiar famílias e profissionais</p>
            <div className={Styles.container}>
                <div className={Styles.container_oferecemos}>
                    <div className={Styles.card_verificacao}>
                        <img src={Verificacao} alt="Icone de verificação" />
                        <p>100% dos profissionais selecionados antes de você contratá-los</p>
                    </div>
                    <div className={Styles.card_verificacao}>
                        <img src={Perfil} alt="Icone de perfil" />
                        <p>Perfis transparentes com avaliações e qualificações oferecidas</p>
                    </div>
                    <div className={Styles.card_verificacao}>
                        <img src={Coracao} alt="Icone de coração" />
                        <p> Equipes dedicadas de suporte para mães e profissionais</p>
                    </div>
                    <button type='button'>Começar</button>
                </div>
                <div className={Styles.feedbeck}>
                    <h2>O que dizem sobre?</h2>
                    <div className={Styles.comentarios}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, dolor fuga in id omnis sit, quod ex repellat dolore impedit illo ipsum odio? Non, nulla et dolores quod itaque cumque?</p>
                        <div className={Styles.usuario}>
                            <img src={ImgPerfil} alt="Imagem de perfil" />
                            <div className={Styles.detalhe_usuarios}>
                                <h3>Ranbeer Hooda</h3>
                                <h6>NEW DELHI</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Descubra_Profissionais