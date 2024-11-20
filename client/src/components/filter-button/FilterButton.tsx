import { useEffect, useState } from "react";

function filterButton() {
  const [selectedCuisine, setSelectedCuisine] = useState("Toutes");

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  const filteredRestaurants =
    selectedCuisine === "Toutes"
      ? restaurantsList
      : restaurantsList.filter(
          (restaurant) => restaurant.cuisine === selectedCuisine,
        );

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="cuisine">Filtrer par cuisine : </label>
        <select
          id="cuisine"
          value={selectedCuisine}
          onChange={handleCuisineChange}
        >
          <option value="Toutes">Toutes</option>
          <option value="Française">Française</option>
          <option value="Japonaise">Japonaise</option>
          <option value="Italienne">Italienne</option>
          <option value="Mexicaine">Mexicaine</option>
          <option value="Café">Café</option>
          <option value="Méditerranéenne">Méditerranéenne</option>
          <option value="Bretonne">Bretonne</option>
          <option value="Végétarienne">Végétarienne</option>
          <option value="Indienne">Indienne</option>
          <option value="Américaine">Américaine</option>
          <option value="Végétalienne">Végétalien</option>
          <option value="Espagnole">Espagnole</option>
          <option value="Vietnamienne">Vietnamienne</option>
          <option value="Argentine">Argentine</option>
          <option value="Marocaine">Marocaine</option>
          <option value="Asiatique">Asiatique</option>
          <option value="Cuisine du Monde">Cuisine du Monde</option>
        </select>
      </div>
    </div>
  );
}

export default filterButton;
