import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Article from "./components/Article/Article";
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
        <Link to="/about"><AboutUs /></Link>
      </footer>
    </>
  );
}
export default App;
