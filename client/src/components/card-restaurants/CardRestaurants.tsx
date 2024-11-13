import { useEffect, useState } from "react";
import "./CardRestaurants.css";

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
  picture: {
    card: string;
    restaurant: string;
    dish: string;
  };
}

function CardRestaurants() {
  const [restaurantsList, setRestaurantsList] = useState<restaurantProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/restaurants")
      .then((response) => response.json())
      .then((restaurantsListFromApi) => {
        return setRestaurantsList(restaurantsListFromApi.restaurants);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="containerRestaurants">
      {restaurantsList?.map((element) => (
        <div key={element.id} className=" restaurant restaurant-id">
          <img src="" alt={element.name} className="imgRestaurant" />
          <h1>{element.name}</h1>
          <p>Note : {element.rating}/5</p>
        </div>
      ))}
    </div>
  );
}

export default CardRestaurants;
