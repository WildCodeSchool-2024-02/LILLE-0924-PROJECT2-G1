import "./App.css";
import Article from "./components/Article/Article";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";
import Navbar from "./components/Navbar/Navbar";
import CardRestaurants from "./components/card-restaurants/CardRestaurants";

function App() {
  return (
    <>
      <Navbar />
      <CardRestaurants />
    </>
  );
}

export default App;
