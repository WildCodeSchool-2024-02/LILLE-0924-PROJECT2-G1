import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Link to="/">
          <img
            className="logo image-flandresto"
            src="./public/images/logo-flandresto.png"
            alt="Flandresto"
          />
        </Link>
        <h1>Découvrez Lille, une assiette à la fois</h1>
        <img
          className="connexion"
          src="./public/images/connexion.png"
          alt="connexion"
        />
      </div>
    </>
  );
}

export default Navbar;
