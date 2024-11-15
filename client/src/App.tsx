import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel";
import Article from "./components/Article/Article";
import Navbar from "./components/Navbar/Navbar";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";


function App() {
  return (
    <>
      <Navbar />
      <main>
          <Carrousel />
          <CardRestaurants />
      </main>
      <footer>
        <p>&copy;</p>
        <p>
          About
          {/* il faudra mettre le composant en lien avec react router */}
        </p>
        <p>
          emoji ?
          {/* il faudra rajouter un petit emoji de couvert*/}
        </p>
      </footer>

    </>
  );
}

export default App;
