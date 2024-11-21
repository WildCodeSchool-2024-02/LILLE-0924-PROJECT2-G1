import { useEffect, useState } from "react";
import CardRestaurants from "../components/card-restaurants/CardRestaurants";
import "../components/card-restaurants/CardRestaurants.css";
import type { restaurantProps } from "../types/RestaurantType";

function Home() {
  // usestate
  const [restaurantsList, setRestaurantsList] = useState<restaurantProps[]>([]);
  // fetch appel API
  useEffect(() => {
    fetch("http://localhost:3310/restaurants")
      .then((response) => response.json())
      .then((dataFromApi) => {
        return setRestaurantsList(dataFromApi.restaurants);
      });
  }, []);

  return (
    <>
      <CardRestaurants restaurantsList={restaurantsList} />
    </>
  );
}

export default Home;
