// import './Profiles.css'
import Nav from "../Components/Nav";
import Header from "../Components/Header";
import Aside from "../Components/Aside";
import Footer from "../Components/Footer";
import G from "../assets/Giovanna_Img.jpeg";
import "../App.css";
import "./Ap.css";

function Giovanna() {
  return (
    <div>
      <section className="Flex-Colunm">
        <Header />

        <section className="Flex-row">
          <Nav />
          <section className="Flex-Colunm">
            <h3> GIOVANNA FERREIRA </h3>
            <p className="pp">
              {" "}
              Arte, Fé e Determinação Giovanna, aos 17 anos, já carrega em si a
              intensidade de quem sabe o que quer. Dona de uma personalidade
              forte, ela não teme expressar suas opiniões e defender aquilo em
              que acredita. Sua alma é inquieta, movida por uma paixão profunda
              por todas as formas de arte—seja pintura, música, teatro ou
              literatura, ela encontra beleza e significado em cada detalhe
              criativo do mundo. Sua fé católica é o alicerce que sustenta sua
              jornada. Para Giovanna, a espiritualidade não é apenas um aspecto
              de sua vida, mas uma força que a guia e a inspira. Entre pincéis e
              partituras, entre cenas e versos, ela vê a presença divina em cada
              expressão artística. Determinada e sonhadora, Giovanna não se
              contenta com o óbvio. Ela quer ir além, desafiar limites e deixar
              sua marca no mundo — com autenticidade, coragem e muita arte.{" "}
            </p>
            <img src={G} />
          </section>
          <Aside />
        </section>
        <Footer />
      </section>
    </div>
  );
}
export default Giovanna;
