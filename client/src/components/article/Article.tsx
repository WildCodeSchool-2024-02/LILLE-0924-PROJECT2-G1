import ButtonVisited from "../buttonVisited/ButtonVisited";
import FavoriteArticle from "../favoriteArticle/FavoriteArticle";
import "./Article.css";
import { useState } from "react";
import { useEffect } from "react";

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

function Article() {
  const [restaurantsList, setRestaurantsList] = useState<restaurantProps[]>([]);
  useEffect(() => {
    fetch("http://localhost:3310/restaurants")
      .then((response) => response.json())
      .then((restaurantsListFromApi) => {
        return setRestaurantsList(restaurantsListFromApi.restaurants);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {restaurantsList?.map((restaurant) => (
        <>
          <div className="container-image" key={"${restaurant.name}-container"}>
            <img
              className="image-restaurant"
              src={restaurant.pictures.restaurant}
              alt=""
            />
            <img className="img-dish" src={restaurant.pictures.dish} alt="" />
          </div>
          <div
            className="info-restaurant"
            key={"${restaurant.name}-description"}
          >
            <p>{restaurant.description}</p>
          </div>
          <div className="all-buttons" key={"${restaurant.name}-allButtons"}>
            <ButtonVisited />
            <FavoriteArticle />
            <button type="button">réservation</button>
          </div>
          <section className="reviews" key={"${restaurant.name}-reviews"}>
            <h1>Avis google</h1>
            <div className="rewiewNameDate">
              <p>
                Écrit par : <strong>{restaurant.reviews.reviewer}</strong>
              </p>
              <p>Le {restaurant.reviews.date}</p>
            </div>
            <p>{restaurant.reviews.comment}</p>
            <p>{restaurant.reviews.rating}/5</p>
            <div className="rewiew-name-date">
              <p>
                Écrit par : <strong>{restaurant.reviews.reviewer}</strong>
              </p>
              <p>Le {restaurant.reviews.date}</p>
            </div>
            <p>{restaurant.reviews.comment}</p>
            <p>{restaurant.reviews.rating}/5</p>
          </section>
          <section className="google-map" key={"${restaurant.name}-map"}>
            <h1>Google map</h1>
            <img
              src="https://img.freepik.com/vecteurs-libre/application-localisation-suivi-coronavirus-concept_23-2148659370.jpg?ga=GA1.1.1387876668.1730892268&semt=ais_hybrid"
              alt="googlemap"
            />
          </section>
        </>
      ))}
    </>
  );
}
export default Article;
