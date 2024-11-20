import { useState } from "react";
import "./Button-category.css";

interface RestaurantProps {
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
  };
}

function CuisineFilterButtons({
  restaurantsList,
}: { restaurantsList: RestaurantProps[] }) {
  const [selectedCuisine, setSelectedCuisine] = useState("Toutes");

  const cuisines = [
    "Toutes",
    ...new Set(restaurantsList.map((restaurant) => restaurant.cuisine)),
  ];

  const filteredRestaurants =
    selectedCuisine === "Toutes"
      ? restaurantsList
      : restaurantsList.filter(
          (restaurant) => restaurant.cuisine === selectedCuisine,
        );

  const handleCuisineClick = (cuisine: string) => {
    setSelectedCuisine(cuisine);
  };

  return (
    <div>
      <div className="filter-container">
        <p>Filtrer par cuisine :</p>
        <div className="button-group">
          {cuisines.map((cuisine: string) => (
            <button
              key={cuisine}
              type="button"
              className={`category-button ${
                selectedCuisine === cuisine ? "active" : ""
              }`}
              onClick={() => handleCuisineClick(cuisine)}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CuisineFilterButtons;