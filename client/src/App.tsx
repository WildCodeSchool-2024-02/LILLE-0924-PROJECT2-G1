import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/article/Article";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";
import Carrousel from "./components/carrousel/Carrousel";

function App() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <CardRestaurants />
      <Article />
    </>
  );
}
export default App;
