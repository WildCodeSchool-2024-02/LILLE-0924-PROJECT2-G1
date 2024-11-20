import "./Navbar.css";
function Navbar() {
  return (
    <>
      <img
        className="logo"
        src="./public/images/logo-flandresto.png"
        alt="Flandresto"
      />
      <div className="filter">
        <div className="categoryBar">
          <button type="button" className="category">
            catégorie
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
