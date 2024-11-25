import { useParams } from "react-router-dom";
import FavoriteArticle from "../favorite-article/FavoriteArticle";
import ButtonVisited from "../visitedButton/ButtonVisited";
import "./Article.css";
import { useEffect, useState } from "react";
import type { restaurantProps } from "../../types/RestaurantType";

function Article() {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<restaurantProps>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch(`http://localhost:3310/restaurant/${id}`)
      .then((response) => response.json())
      .then((restaurantFromApi) => {
        return setRestaurant(restaurantFromApi);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {restaurant && (
        <div className="all-content">
          <h1>{restaurant.name}</h1>
          <div className="container-image" key={`${restaurant.name}-container`}>
            <img
              className="img-left"
              src={restaurant.pictures.restaurant}
              alt=""
            />
            <img className="img-right" src={restaurant.pictures.dish} alt="" />
          </div>
          <div
            className="infoRestaurant"
            key={`${restaurant.name}-description`}
          >
            <p>{restaurant.description}</p>
          </div>
          <div className="allButtons" key={`${restaurant.name}-allButtons`}>
            <ButtonVisited />
            <div className="favorite">
              <FavoriteArticle />
            </div>

            <button type="button" className="reservation">
              Reservation
            </button>
          </div>
          <section className="reviews" key={"${restaurant.name}-reviews"}>
            <h1>Avis google</h1>
            {restaurant.reviews.map((review) => (
              <>
                <p key={review.reviewer}>
                  Écrit par : <strong>{review.reviewer} </strong>le{" "}
                  {review.date}
                </p>
                <p key={review.reviewer}>{review.comment}</p>
                <p key={review.reviewer}>
                  Je donne une note de : {review.rating}/5
                </p>
              </>
            ))}
          </section>
          <section className="googleMap" key={"${restaurant.name}-map"}>
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
