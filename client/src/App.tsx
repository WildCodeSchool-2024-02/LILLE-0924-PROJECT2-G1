import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/about-us/AboutUs";
import Article from "./components/article/Article";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";
import { Link } from "react-router-dom";

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
