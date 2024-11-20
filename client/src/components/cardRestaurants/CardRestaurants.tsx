import "./CardRestaurants.css";
import FavoriteCard from "../favoriteCard/FavoriteCard";

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
function CardRestaurants({
  restaurantsList,
}: { restaurantsList: restaurantProps[] }) {
  return (
    <div className="container-restaurants">
      {restaurantsList?.map((element) => (
        <div key={element.id} className=" restaurant restaurant-id">
          <p className="favorite-card">
            <FavoriteCard />
          </p>
          <img
            src={element.pictures.card}
            alt={element.name}
            className="img-restaurant"
          />
          <h1>{element.name}</h1>
          <p> cuisine:{element.cuisine}</p>
          <p>Note : {element.rating}/5</p>
        </div>
      ))}
    </div>
  );
}

export default CardRestaurants;
