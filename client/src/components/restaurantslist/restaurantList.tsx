import { useEffect, useState } from "react";
import CardRestaurants from "../cardRestaurants/CardRestaurants";
import Searchbar from "../searchBar/SearchBar";

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
function RestaurantsList() {
  const [restaurantsList, setRestaurantsList] = useState<restaurantProps[]>([]);
  const [restaurantsBySearch, setrestaurantsBySearch] =
    useState<restaurantProps[]>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3310/restaurants")
      .then((response) => response.json())
      .then((restaurantsListFromApi) => {
        return setRestaurantsList(restaurantsListFromApi.restaurants);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (search) {
      setrestaurantsBySearch(
        restaurantsList.filter((restaurant) => {
          return (
            restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
          );
        }),
      );
    }
  }, [search, restaurantsList]);
  return (
    <>
      <Searchbar search={search} setSearch={setSearch} />
      {/* la meme chose ici avec le filter */}
      <CardRestaurants
        restaurantsList={search ? (restaurantsBySearch ?? []) : restaurantsList}
      />
    </>
  );
}
export default RestaurantsList;
