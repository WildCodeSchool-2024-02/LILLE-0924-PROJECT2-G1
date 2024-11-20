import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Article from "./components/article/Article";
import CardRestaurants from "./components/cardRestaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";

function App() {
  return (
    <>
      <Navbar />
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
