function Reservation() {
  return (
    <>
      <h1>Formulaire de réservation</h1>

      <h2>Saisie des informations</h2>
      <p>
        <strong>Nom complet :</strong>
        <input
          className="input input-name"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherche"
        />
      </p>

      <p>
        <strong>Adresse e-mail :</strong>
        <input
          className="input input-mail"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherche"
        />
      </p>

      <p>
        <strong>Numéro de téléphone :</strong>
        <input
          className="input input-tel"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherche"
        />
      </p>

      <h2>Détails de la réservation</h2>

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
      <div>
        <button type="button">Confirmer</button>
        <button type="button">Annuler</button>
      </div>
    </>
  );
}
export default Reservation;
