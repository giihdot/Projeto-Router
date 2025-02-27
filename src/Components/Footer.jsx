import "./Footer.css"
import Email from "../assets/Email_Img.jpeg"

function Footer() {
  return (
    <>
    <footer className="junt">
    <img className="Img_2" src={Email} alt="Email" />        
    <p> Email: asgatitas24@gmail.com </p>
    <p> | </p>
    <p> Tel: (19) 97864-2324 </p>
    </footer>
    </>
  );
}

export default Footer;