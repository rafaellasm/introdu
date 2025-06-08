import Styles from '../css/Pronto_Comecar.module.css'
import Circulo1 from '../images/vire_membro/circulo_amarelo.png'
import Circulo2 from '../images/vire_membro/circulo.png'
import Circulo3 from '../images/vire_membro/circulo2.png'
import Amarela from '../images/vire_membro/flor_amarela.png'

function Pronto_Comecar(){

    return(
        <section className={Styles.comecar}>
            <img className={Styles.circulo1} src={Circulo1} alt="Icone circulo" />
            <img className={Styles.circulo2} src={Circulo2} alt="Icone circulo" />
            <img className={Styles.circulo3} src={Circulo3} alt="Icone circulo" />
            <img className={Styles.amarela} src={Amarela} alt="Icone flor amarela" />
            <h2 className={Styles.titulo_comecar}>Pronto para começar?</h2>
            <hr />
            <p>Junte-se à nossa comunidade e tenha acesso a todos esses recursos e muito mais. O cadastro é gratuito para famílias.</p>
            <button type='button'>Cadastre-se</button>
        </section>
    )
}

export default Pronto_Comecar