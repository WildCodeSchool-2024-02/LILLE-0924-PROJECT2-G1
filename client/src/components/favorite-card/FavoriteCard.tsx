import { useState } from "react";
import "./FavoriteCard.css";

function FavoriteCard() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <button type="button" onClick={toggleFavorite} className="favorite-card">
      {isFavorited ? "❤" : "♡"}
    </button>
  );
}

export default FavoriteCard;
