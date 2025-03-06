// import './Profiles.css'
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import J from "../assets/Julia_Img.jpeg";
import "../App.css";
import "./Ap.css";

function Julia() {
  return (
    <div>
      <section className="Flex-Colunm">
        <Header />

        <section className="Flex-row">
          <Nav />
          <section className="Flex-Colunm">
            <h3> JULIA PIAZZOLI </h3>
            <p className="pp">
              {" "}
              Intensidade e Poder Julia, aos 17 anos, não passa despercebida.
              Com uma personalidade forte e uma presença marcante, ela sabe
              exatamente o que quer e não tem paciência para meias palavras.
              Crítica por natureza, enxerga o mundo com olhos afiados, sempre
              analisando tudo ao seu redor com precisão e, muitas vezes, sem
              filtros. Egocêntrica? Talvez. Mas para Julia, confiar em si mesma
              é essencial. Ela não se contenta em ser apenas mais uma — gosta de
              liderar, de ter controle da situação e de garantir que as coisas
              sejam feitas do jeito certo (o dela, claro). Mandona? Sim, mas
              apenas porque acredita que, se algo pode ser feito melhor, então
              deve ser feito da melhor forma possível. Sua fé na Umbanda é um
              pilar em sua vida. Conectada com os guias espirituais e os
              ensinamentos da religião, ela encontra força e propósito em sua
              jornada. Para Julia, espiritualidade e poder caminham juntos, e
              ela faz questão de honrar sua crença com respeito e intensidade.
              Determinada e cheia de opinião, Julia não nasceu para seguir — ela
              nasceu para comandar.{" "}
            </p>
            <img src={J} />
          </section>
          <Aside />
        </section>
        <Footer />
      </section>
    </div>
  );
}
export default Julia;
