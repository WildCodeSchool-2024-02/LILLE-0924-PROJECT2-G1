import "./App.css";
import Carrousel from "./components/Carrousel/Carrousel";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";


function App() {
  const restaurants = useLoaderData();

  return (
    <>
      <nav>
        <Navbar />
        <Link to="/">Home</Link>
        <Link to="/article">Article</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy;</p>
        <Link to="/about"><AboutUs /></Link>
      </footer>
    </>
  );
}

export default App;
