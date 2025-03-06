import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
  return (
    <nav className="navegacao">
      <Link to="/"> AP </Link>
      <Link to="/GF"> GF </Link>
      <Link to="/MD"> MD </Link>
      <Link to="/JP"> JP </Link>
      <Link to="/KB"> KB </Link>
    </nav>
  );
}

export default Nav;