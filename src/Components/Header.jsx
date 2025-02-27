import "./Header.css"
import Logo from "../assets/Logo_Img.jpg"

function Header() {
  return (
    <>
    <header>
    <h1> AS GATITAS </h1>
    <img className="Img_1" src={Logo} alt="As Gatitas" />
    </header>
    </>
  );
}

export default Header;