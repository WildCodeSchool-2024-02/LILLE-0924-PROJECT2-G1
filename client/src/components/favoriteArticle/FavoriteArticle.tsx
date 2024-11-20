import { useState } from "react";
import "./FavoriteArticle.css";

function FavoriteArticle() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button type="button" onClick={toggleFavorite} className="favoriteArticle">
      {isFavorited ? "❤" : "♡"}
    </button>
  );
}

export default FavoriteArticle;
