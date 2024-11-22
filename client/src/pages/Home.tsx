import { useEffect, useState } from "react";
import CardRestaurants from "../components/cardRestaurants/CardRestaurants";
import "../components/cardRestaurants/CardRestaurants.css";
import FilterButtons from "../components/buttonCategory/FilterButtons";
import Searchbar from "../components/searchbar/SearchBar";
import type { restaurantProps } from "../types/RestaurantType";

function Home() {
  // usestate
  const [restaurantsList, setRestaurantsList] = useState<
    restaurantProps[] | undefined
  >();
  const [search, setSearch] = useState<string>("");
  const [restaurantsListFiltered, setRestaurantsListFiltered] = useState<
    restaurantProps[] | undefined
  >();
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");

  // fetch appel API
  useEffect(() => {
    fetch("http://localhost:3310/restaurants")
      .then((response) => response.json())
      .then((dataFromApi) => {
        return setRestaurantsList(dataFromApi.restaurants);
      });
  }, []);

  // tri de restaurantsList a stocker dans un autre state
  useEffect(() => {
    if (search) {
      return setRestaurantsListFiltered(
        restaurantsList?.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
    if (selectedCuisine) {
      return setRestaurantsListFiltered(
        restaurantsList?.filter(
          (restaurant: restaurantProps) =>
            restaurant.cuisine === selectedCuisine,
        ),
      );
    }
  }, [search, selectedCuisine, restaurantsList]);

  return (
    <>
      <Searchbar search={search} setSearch={setSearch} />
      <FilterButtons
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
      />
      <CardRestaurants
        restaurantsList={
          !!search || !!selectedCuisine
            ? restaurantsListFiltered
            : restaurantsList
        }
      />
    </>
  );
}

export default Home;
