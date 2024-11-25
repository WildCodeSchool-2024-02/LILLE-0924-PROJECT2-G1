import "./Reservation.css";

type Props = {
  onClickCancel: () => void;
  onClickValidate: () => void;
};

function Reservation({ onClickCancel, onClickValidate }: Props) {
  return (
    <div className="reservation-form">
      <h1>Formulaire de réservation</h1>
      <p>
        <strong>Nom complet :</strong>
        <input
          className="input input-name"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Antoine Fouvert"
          required
        />
      </p>

      <p>
        <strong>Adresse e-mail :</strong>
        <input
          className="input input-mail"
          type="email"
          name="searchBar"
          id="searchBar"
          placeholder="AntoineFouvert@toto.gmail.com"
        />
      </p>

      <p>
        <strong>Numéro de téléphone :</strong>
        <input
          className="input input-tel"
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="123456789"
          required
        />
      </p>

      <h2>Détails de la réservation</h2>

      <p>
        <strong>Date et heure : </strong>
        Le <input type="date" id="start" name="trip-start" required /> à{" "}
        <span>
          <input
            type="time"
            id="appt"
            name="appt"
            min="12:00"
            max="23:00"
            required
          />
        </span>
      </p>

      <p>
        <strong>Nombre de Personnes : </strong>
        <input
          type="number"
          id="tentacles"
          name="tentacles"
          min="1"
          max="12"
          required
        />
      </p>
      <div>
        <button type="button" onClick={onClickCancel}>
          Confirmer
        </button>
        <button type="button" onClick={onClickValidate}>
          Annuler
        </button>
      </div>
    </div>
  );
}
export default Reservation;
