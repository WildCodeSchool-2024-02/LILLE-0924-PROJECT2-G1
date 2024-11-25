import { useParams } from "react-router-dom";
import FavoriteArticle from "../favorite-article/FavoriteArticle";
import ButtonVisited from "../visitedButton/ButtonVisited";
import "./Article.css";
import "../reservation/Reservation.css";
import { useEffect, useState } from "react";
import type { restaurantProps } from "../../types/RestaurantType";
import Reservation from "../reservation/Reservation";

function Article() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<restaurantProps>();
  const [isActive, setIsActive] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch(`http://localhost:3310/restaurant/${id}`)
      .then((response) => response.json())
      .then((restaurantFromApi) => {
        return setRestaurant(restaurantFromApi);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleClickPopupFormCancel() {
    setIsActive(!isActive);
  }
  function handleClickPopupFormValidate() {
    setIsActive(!isActive);
  }

  return (
    <div>
      {restaurant && (
        <div className="all-content">
          <h1>{restaurant.name}</h1>

          <div
           className="container-image"
            key={`${restaurant.name}-description`}
          >
            <p>{restaurant.description}</p>
          </div>
          <div className="container-image" key={`container-${restaurant.name}`}>
            <img
            className="img-right" 
              src={restaurant.pictures.restaurant}
              alt=""
            />
            <img className="img-right" src={restaurant.pictures.dish} alt="" />
          </div>
          <div className="all-buttons" key={`${restaurant.name}-allButtons`}>
            <ButtonVisited />
            <div className="favorite">
              <FavoriteArticle />
            </div>
          <div className={isActive ? "popup-form active" : "popup-form"}>
            <Reservation
              onClickCancel={handleClickPopupFormCancel}
              onClickValidate={handleClickPopupFormValidate}
            />
          </div>
          <section className="restaurant-history">
            <h3>{restaurant.history.title}</h3>
            <h4>{restaurant.history.details}</h4>
            <p>{restaurant.history.highlights}</p>
          </section>
          <section className="reviews" key={`${restaurant.name}-reviews`}>
            <h1>Avis google</h1>
            {restaurant.reviews.map((review) => (
              <>
                <p key={`${review.reviewer}-${restaurant.id}`}>
                  Écrit par : <strong>{review.reviewer} </strong>le
                  {review.date}
                </p>
                <p key={`${review.date}-${restaurant.id}`}>{review.comment}</p>
                <p key={`${review.rating}-${restaurant.id}`}>
                  Je donne une note de : {review.rating}/5
                </p>
              </>
            ))}
          </section>
          <section className="google-map" key={`${restaurant.name}-map`}>
            <h1>Google map</h1>
            <img
              src="https://img.freepik.com/vecteurs-libre/application-localisation-suivi-coronavirus-concept_23-2148659370.jpg?ga=GA1.1.1387876668.1730892268&semt=ais_hybrid"
              alt="googlemap"
            />
          </section>
        </div>
      )}
    </div>
  );
}
export default Article;
