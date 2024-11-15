import "./App.css";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Reservation from "./components/Reservation/Reservation";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";


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
