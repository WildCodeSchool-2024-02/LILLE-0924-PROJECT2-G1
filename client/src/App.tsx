import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RestaurantsList from "./components/restaurantsList/restaurantList";


function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <footer>
        <p>&copy;</p>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
export default App;
