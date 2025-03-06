// import './Profiles.css'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Aside from '../Components/Aside'
import Footer from "../Components/Footer"
import K from "../assets/Kamilly_Img.jpeg";
import "../App.css"
import "./Ap.css"

function Kamilly() {

    return (
        <div>
              <Header/>
            
            <section className='Flex-row'>
            <Nav/>
            <section className='Flex-Colunm'>
           <h3> KAMILLY BARRA </h3>
           <p className='pp'> Entre a Razão e a Emoção
            Kamilly, aos 17 anos, carrega em si uma profundidade rara. De personalidade forte e olhar crítico, 
            ela enxerga o mundo com uma sensibilidade que poucos compreendem. Sempre refletindo sobre a vida e suas 
            complexidades, sua mente está em constante análise — questionando, observando e buscando significados além do óbvio.

            Melancólica por natureza, Kamilly sente tudo intensamente. As emoções não são apenas passageiras para ela; 
            são ondas profundas que moldam sua visão de mundo. Mas, ao mesmo tempo que carrega essa intensidade, 
            há também um lado cuidadoso e acolhedor em seu coração. Com quem ama, é protetora, sempre pronta para oferecer apoio,
            conselhos sinceros e um ombro seguro.

            Sua fé cristã é seu alicerce, a luz que a guia mesmo nos momentos mais sombrios. Para Kamilly, Deus está presente 
            não apenas nos momentos de alegria, mas também nos silêncios e nas incertezas. Sua espiritualidade a fortalece e 
            lhe dá propósito, ajudando-a a equilibrar sua mente crítica com a esperança de dias melhores.

            Autêntica e intensa, Kamilly não se encaixa em rótulos — ela os desafia. </p>
            <img src={K} />
            </section>
            <Aside/>
            </section>
            <Footer/>
        </div>
    )
}
export default Kamilly