import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import CuisineFilterButtons from "./components/buttonCategory/CuisineFilterButtons";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";
=======
import Article from "./components/article/Article";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";
>>>>>>> dev

function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <CuisineFilterButtons restaurantsList={[]} />
      <CardRestaurant />
=======
      <Carrousel />
      <CardRestaurants />
      <Article />
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
>>>>>>> dev
    </>
  );
}
export default App;
