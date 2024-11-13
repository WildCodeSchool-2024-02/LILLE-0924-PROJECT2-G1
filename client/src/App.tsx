import "./App.css";
import Searchbar from "./components/US-Searchbar/SearchBar";
import Article from "./components/Article/Article";
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
