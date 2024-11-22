import { useEffect, useState } from "react";
import CardRestaurants from "../cardRestaurants/CardRestaurants";
import Searchbar from "../searchbar/SearchBar";
import { restaurantProps } from "../../types/RestaurantType";

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
        })
      );
    }
  }, [search, restaurantsList]);
  return (
    <>
      <Searchbar search={search} setSearch={setSearch} />
      {/* la meme chose ici avec le filter */}
      <CardRestaurants
        restaurantsList={search ? restaurantsBySearch ?? [] : restaurantsList}
      />
    </>
  );
}
export default RestaurantsList;
