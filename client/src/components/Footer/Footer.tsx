import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <p className="copyright">&copy;</p>
        <Link to="/about" className="about">
          About
        </Link>
        <p className="emoji">🍽️</p>
      </footer>
    </>
  );
}

export default Footer;
