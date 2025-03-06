// import './Profiles.css'
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import D from "../assets/Duarte_Img.jpeg";

import "../App.css";
import "./Ap.css";

function Duarte() {
  return (
    <div>
      <section className="Flex-Colunm">
        <Header />
        <section className="Flex-row">
          <Nav />
          <section className="Flex-Colunm">
            <h3> MARIA CLARA DUARTE </h3>
            <p className="pp">
              {" "}
              Coração Forte, Alma Sensível Maria, aos 16 anos, é um misto de
              força e sensibilidade. De personalidade marcante, ela sente o
              mundo de maneira intensa—cada emoção, cada detalhe, cada gesto.
              Sua melancolia não é fraqueza, mas sim uma profundidade rara, que
              a faz enxergar além do que é visível. Ela carrega no olhar um
              oceano de sentimentos e no coração um amor imenso por aqueles que
              fazem parte de sua vida. Cuidadosa e carinhosa, Maria tem um
              instinto protetor natural. Sempre atenta às necessidades dos
              outros, está disposta a ajudar e acolher, oferecendo palavras
              doces e um abraço sincero quando alguém precisa. Mas se engana
              quem pensa que sua doçura significa fragilidade—quando mexem com
              quem ela ama, seu temperamento muda, e sua paciência se esgota
              rapidamente. Ela pode ser calma, mas não leva desaforo para casa
              quando o assunto é proteger aqueles que lhe são importantes. Sua
              fé cristã é sua base, o que lhe dá força nos momentos difíceis e
              acalma seu coração quando o mundo parece pesado. Para Maria, Deus
              é seu refúgio, e é Nele que ela encontra paz, propósito e
              esperança. Com um coração que sente demais e uma alma que ama com
              intensidade, Maria é única — forte, sensível e inegavelmente
              verdadeira.{" "}
            </p>
            <img src={D} />
          </section>
          <Aside />
        </section>
        <Footer />
      </section>
    </div>
  );
}
export default Duarte;
