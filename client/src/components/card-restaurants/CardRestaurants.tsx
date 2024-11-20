import "./CardRestaurants.css";
import FavoriteCard from "../favorite-card/FavoriteCard";
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
    <div className="containerRestaurants">
      {restaurantsList?.map((element) => (
        <div key={element.id} className=" restaurant restaurant-id">
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
