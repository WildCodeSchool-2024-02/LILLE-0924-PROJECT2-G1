import "./App.css";
import { Link } from "react-router-dom";
import Carrousel from "./components/carrousel/Carrousel";
import Navbar from "./components/navbar/Navbar";
import RestaurantsList from "./components/restaurantsList/restaurantList";
import Article from "./components/article/Article";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Carrousel />
      <RestaurantsList />
      <Article/>
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
export default App;
