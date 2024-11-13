import "./Réservation.css"
function Réservation() {
  return (
    <>
      <h1>Formulaire de réservation</h1>

      <h2>Saisie des informations :</h2>
      <p>
        <strong>Nom complet :</strong>
        <input
          className="input"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Pierre Dupont"
        />
      </p>

      <p>
        <strong>Adresse e-mail :</strong>
        <input
          className="input"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="pierredupont@gmail.com"
        />
      </p>

      <p>
        <strong>Numéro de téléphone :</strong>
        <input
          className="input"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="0612345678"
        />
      </p>

      <h2>Détails de la réservation :</h2>

      <p>
        <strong>Date et heure : </strong>
        Le <input type="date" id="start" name="trip-start" />à{" "}
        <input
          type="time"
          id="appt"
          name="appt"
          min="12:00"
          max="23:00"
          required
        />
      </p>

      <p>
        <strong>Nombre de Personnes : </strong>
        <input
          type="number"
          id="tentacles"
          name="tentacles"
          min="1"
          max="100"
        />
      </p>

      <div className="button"> 
        <button type="button">Confirmer</button>
        <button type="button">Annuler</button>
      </div>
    </>
  );
}
export default Réservation;
