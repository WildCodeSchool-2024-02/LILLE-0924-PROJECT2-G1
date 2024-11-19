import { useEffect, useState } from "react";
import "./Searchbar.css";

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
  location?: {
    latitude?: number;
    longitude?: number;
  };
  pictures: {
    card: string;
    restaurant: string;
    dish: string;
  };
  reviews: {
    reviewer: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

function Searchbar() {
  const [restaurant, setRestaurant] = useState("");
  const [restaurantList, setRestaurantsList] = useState<restaurantProps[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<restaurantProps | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/restaurants")
      .then((response) => response.json())
      .then((data) => {
        setRestaurantsList(data.restaurants);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
    setSelectedRestaurant(restaurant);
    setRestaurant(restaurant.name);
  };

  const filteredData = restaurantList.filter(
    (item: restaurantProps) =>
      item.name.toLowerCase().includes(restaurant.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(restaurant.toLowerCase()),
  );

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          id="character"
          name="character"
          type="text"
          value={restaurant}
          onChange={handleChange}
          placeholder="Nom du restaurant ou type de cuisine"
          className="input"
        />
        <button
          className="buttonrefresh"
          type="button"
          onClick={() => {
            setRestaurant("");
            setSelectedRestaurant(null);
          }}
        >
          ❌
        </button>
      </form>
      {restaurantList.length > 0 && restaurant && filteredData.length > 0 && (
        <ul className="liste">
          {filteredData.map((item: restaurantProps) => (
            <li
              key={item.id}
              onClick={() => handleSelectRestaurant(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelectRestaurant(item);
                }
              }}
              className="elementdeliste"
            >
              {item.name} | Type de cuisine : {item.cuisine}
            </li>
          ))}
        </ul>
      )}

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
