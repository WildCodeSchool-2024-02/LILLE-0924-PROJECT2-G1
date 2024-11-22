import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <img
          className="logo image-flandresto"
          src="./public/images/logo-flandresto.png"
          alt="Flandresto"
        />
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
