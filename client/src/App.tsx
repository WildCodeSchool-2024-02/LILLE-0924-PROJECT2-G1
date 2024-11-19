import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CuisineFilterButtons from "./components/button-category/CuisineFilterButtons";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";

function App() {
  return (
    <>
      <Navbar />
      <CuisineFilterButtons />
      <CardRestaurant />
    </>
  );
}

export default App;
