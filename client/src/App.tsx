import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/article/Article";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Carrousel />
      <CardRestaurants />
      <Article />
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
export default App;
