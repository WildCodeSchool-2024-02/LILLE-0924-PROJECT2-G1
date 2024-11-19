import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Carrousel from "./components/carrousel/Carrousel";
import RestaurantsList from "./components/restaurants-list/restaurantList";

function App() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <RestaurantsList />
      {/* <Article /> */}
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
export default App;
