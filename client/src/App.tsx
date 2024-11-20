import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CuisineFilterButtons from "./components/buttonCategory/CuisineFilterButtons";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";

function App() {
  return (
    <>
      <Navbar />
      <CuisineFilterButtons restaurantsList={[]} />
      <CardRestaurant />
    </>
  );
}

export default App;
