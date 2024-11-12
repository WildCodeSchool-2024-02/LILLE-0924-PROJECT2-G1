import { useState } from "react";
import restaurantList from "../../../public/data.json";

interface restaurantProps {
  id: number;
  name: string;
  address: string;
  cuisine: string;
  price_range: string;
  rating: number;
  description: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday?: string | undefined;
    sunday?: string | undefined;
  };
  location?:
    | {
        latitude?: number;
        longitude?: number;
      }
    | undefined;
}

function Searchbar() {
  const [restaurant, setRestaurant] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<restaurantProps | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurant(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedRestaurant) {
      alert(selectedRestaurant.name);
    } else {
      alert("Aucun restaurant sélectionné");
    }
  };

  const handleSelectRestaurant = (restaurant: restaurantProps) => {
    if (!selectedRestaurant) {
      setSelectedRestaurant(restaurant);
      setRestaurant(restaurant.name);
    }
  };

  const filteredData = restaurantList.restaurants.filter(
    (item: restaurantProps) =>
      item.name.toLowerCase().includes(restaurant.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(restaurant.toLowerCase()),
  );

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <label htmlFor="character">Où Manger ?</label>
        <input
          id="character"
          name="character"
          type="text"
          value={restaurant}
          onChange={handleChange}
          placeholder="Nom du restaurant ou type de cuisine"
          style={{ width: "80%", textAlign: "center" }}
        />
        <button
          style={{ backgroundColor: "transparent", border: "0" }}
          type="button"
          onClick={() => {
            setRestaurant("");
            setSelectedRestaurant(null);
          }}
        >
          X
        </button>
        {/* <button type="submit">Mangeaillons</button> */}
      </form>
      <ul>
        {filteredData.map((item: restaurantProps) => (
          <li
            key={item.id}
            onClick={() => handleSelectRestaurant(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleSelectRestaurant(item);
              }
            }}
          >
            {item.name} | Type de cuisine : {item.cuisine}
          </li>
        ))}
      </ul>

      {selectedRestaurant && (
        <div>
          <h2>Nous allons mangeailler à</h2>
          <p>{selectedRestaurant.name}</p>
          <p>{selectedRestaurant.cuisine}</p>
          <p>{selectedRestaurant.address}</p>
        </div>
      )}
    </>
  );
}

export default Searchbar;
