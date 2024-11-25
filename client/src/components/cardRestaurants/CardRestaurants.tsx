import "./CardRestaurants.css";
import type { restaurantProps } from "../../types/RestaurantType";
import FavoriteCard from "../favoriteCard/FavoriteCard";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".restaurant-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = "true";
        }
      });
    },
    { threshold: 0.1 } // Active l'animation lorsque 10 % de l'élément est visible
  );

  cards.forEach((card) => observer.observe(card));
});


function CardRestaurants({
  restaurantsList,
}: {
  restaurantsList: restaurantProps[] | undefined;
}) {
  return (
    <div className="container-restaurants">
      {restaurantsList?.map((element) => (
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
      ))}
    </div>
  );
}

export default CardRestaurants;
