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
    <div className="container-restaurants">
      {restaurantsList?.map((element) => (
        <Link to={`/article/${element.id}`} key={`url-${element.name}`}>
          <div key={element.id} className="restaurant-card">
            <img
              src={element.pictures.card}
              alt={element.name}
              className="imgRestaurant"
            />
            <FavoriteCard />
            <h1>{element.name}</h1>
            <div className="cuisine-container">
              <p> Cuisine : {element.cuisine}</p>
              <br />
              <p>Note : {element.rating}/5</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardRestaurants;
