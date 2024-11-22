import "./CardRestaurants.css";
import type { restaurantProps } from "../../types/RestaurantType";
import FavoriteCard from "../favorite-card/FavoriteCard";

function CardRestaurants({
  restaurantsList,
}: {
  restaurantsList: restaurantProps[] | undefined;
}) {
  return (
    <div className="containerRestaurants">
      {restaurantsList?.map((element) => (
        <div key={element.id} className="restaurant-container">
          <img
            src={element.pictures.card}
            alt={element.name}
            className="imgRestaurant"
          />
          <h1>{element.name}</h1>
          <p> cuisine:{element.cuisine}</p>
          <FavoriteCard />
          <p>Note : {element.rating}/5</p>
        </div>
      ))}
    </div>
  );
}

export default CardRestaurants;
