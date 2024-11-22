import "./CardRestaurants.css";
import { Link } from "react-router-dom";
import type { restaurantProps } from "../../types/RestaurantType";
import FavoriteCard from "../favoriteCard/FavoriteCard";

function CardRestaurants({
  restaurantsList,
}: {
  restaurantsList: restaurantProps[] | undefined;
}) {
  return (
    <div className="containerRestaurants">
      {restaurantsList?.map((element) => (
        <Link key={element.name} to={`/article/${element.id}`}>
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
        </Link>
      ))}
    </div>
  );
}

export default CardRestaurants;
