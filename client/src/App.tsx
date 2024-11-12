import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Réservation from "./components/Réservation/Réservation";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";

function App() {
  return (
    <>
      <Navbar />
      <CardRestaurant />
      <Réservation />
    </>
  );
}

export default App;
