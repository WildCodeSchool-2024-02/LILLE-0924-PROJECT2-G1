import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/article/Article";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";
import Navbar from "./components/navbar/Navbar";
import RestaurantsList from "./components/restaurants-list/restaurantList";
import CuisineFilterButtons from "./components/buttonCategory/CuisineFilterButtons";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <CuisineFilterButtons restaurantsList={[]} />
      <Carrousel />
      <RestaurantsList />
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
export default App;
