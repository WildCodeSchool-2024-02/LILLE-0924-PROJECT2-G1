import "./App.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Home from "./pages/Home";

function App() {
  const restaurants = useLoaderData();
  console.log("restaurants" , restaurants);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
