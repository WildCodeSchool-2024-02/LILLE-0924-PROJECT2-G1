import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Reservation from "./components/Reservation/Reservation";
import CardRestaurant from "./components/card-restaurant/CardRestaurant";

function App() {
	return (
		<>
			<Navbar />
			<CardRestaurant />
			<Reservation />
		</>
	);
}

export default App;
