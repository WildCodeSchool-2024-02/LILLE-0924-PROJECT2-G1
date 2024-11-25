import type { Dispatch, SetStateAction } from "react";
import "./FilterButtons.css";

interface CuisineProps {
  selectedCuisine: string;
  setSelectedCuisine: Dispatch<SetStateAction<string>>;
}

function FilterButtons({ selectedCuisine, setSelectedCuisine }: CuisineProps) {
  return (
    <div className="filter-container">
      <label htmlFor="cuisine"> </label>
      <select
        id="character"
        name="character"
        value={selectedCuisine}
        onChange={(event) => setSelectedCuisine(event.target.value)}
        className="input"
      >
        <option value="">Catégories</option>
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
  );
}

export default FilterButtons;
