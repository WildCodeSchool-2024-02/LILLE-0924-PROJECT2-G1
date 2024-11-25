import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <p>&copy;</p>
        <Link to="/about" className="about">
          About
        </Link>
        <p>🍽️</p>
      </footer>
    </>
  );
}

export default Footer;
