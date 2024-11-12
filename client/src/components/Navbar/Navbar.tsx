import "./Navbar.css";
function Navbar() {
  return (
    <>
      <img
        src="/images/DALL·E-2024-11-05-11.41.34-A-logo-for-a-restaurant-named-_Flandresto_-with-a-minimalistic-design.png"
        alt="logo"
      />
      <section className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherche"
        />
      </section>
      <button type="button">catégorie</button>
      <button type="button">catégorie</button>
      <button type="button">catégorie</button>
      <button type="button">catégorie</button>
    </>
  );
}

export default Navbar;
