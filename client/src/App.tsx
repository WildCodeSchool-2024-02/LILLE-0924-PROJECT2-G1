import "./App.css";
import Article from "./components/Article/Article";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CardRestaurant />
      <Article />
    </>
  );
}

export default App;
