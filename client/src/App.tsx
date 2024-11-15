import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Article from "./components/article/Article";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";
import { Link, Outlet, useLoaderData } from "react-router-dom";


function App() {
  const restaurants = useLoaderData();

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
