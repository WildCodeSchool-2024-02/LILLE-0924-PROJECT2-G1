import "./App.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Home from "./pages/Home";

function App() {
  const restaurants = useLoaderData();

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/article">Article</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Link to="/about">About</Link>{" "}
      </footer>
    </>
  );
}

export default App;
