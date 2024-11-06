const restaurantList = [
  {
    id: 1,
    name: "La Table de Lille",
    address: "14 Rue de Béthune, 59000 Lille, France",
    cuisine: "Française",
    price_range: "$$$",
    rating: 4.5,
    description:
      "Restaurant raffiné offrant une cuisine française authentique avec des ingrédients de saison, situé au cœur de Lille.",
    hours: {
      monday: "12:00-14:30, 19:00-23:00",
      tuesday: "12:00-14:30, 19:00-23:00",
      wednesday: "12:00-14:30, 19:00-23:00",
      thursday: "12:00-14:30, 19:00-23:00",
      friday: "12:00-14:30, 19:00-23:30",
      saturday: "12:00-15:00, 19:00-23:30",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6293,
      longitude: 3.0573,
    },
  },
  {
    id: 2,
    name: "Sushi Zen Lille",
    address: "30 Rue de Paris, 59000 Lille, France",
    cuisine: "Japonaise",
    price_range: "$$",
    rating: 4.3,
    description:
      "Restaurant japonais authentique proposant des sushis et sashimis frais, dans une ambiance zen et chaleureuse.",
    hours: {
      monday: "11:30-15:00, 18:00-22:30",
      tuesday: "11:30-15:00, 18:00-22:30",
      wednesday: "11:30-15:00, 18:00-22:30",
      thursday: "11:30-15:00, 18:00-22:30",
      friday: "11:30-15:00, 18:00-23:00",
      saturday: "11:30-15:00, 18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6324,
      longitude: 3.0618,
    },
  },
  {
    id: 3,
    name: "Trattoria Bella Napoli",
    address: "15 Rue de la Monnaie, 59800 Lille, France",
    cuisine: "Italienne",
    price_range: "$$",
    rating: 4.0,
    description:
      "Trattoria italienne décontractée servant des pizzas au feu de bois et des pâtes fraîches dans une ambiance conviviale.",
    hours: {
      monday: "12:00-15:00, 19:00-23:00",
      tuesday: "12:00-15:00, 19:00-23:00",
      wednesday: "12:00-15:00, 19:00-23:00",
      thursday: "12:00-15:00, 19:00-23:00",
      friday: "12:00-15:00, 19:00-23:30",
      saturday: "12:00-15:00, 19:00-23:30",
      sunday: "12:00-15:00, 19:00-22:00",
    },
    location: {
      latitude: 50.638,
      longitude: 3.0623,
    },
  },
  {
    id: 4,
    name: "El Tacos Loco",
    address: "35 Rue des Postes, 59000 Lille, France",
    cuisine: "Mexicaine",
    price_range: "$",
    rating: 3.8,
    description:
      "Ambiance festive et colorée pour déguster des tacos, burritos et autres spécialités mexicaines à prix abordable.",
    hours: {
      monday: "11:00-23:00",
      tuesday: "11:00-23:00",
      wednesday: "11:00-23:00",
      thursday: "11:00-23:00",
      friday: "11:00-00:00",
      saturday: "11:00-00:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6231,
      longitude: 3.0485,
    },
  },
];
// Fonction qui créé les peites cartes de restaurants visiblent sur la page d'acceuil

function CardRestaurant() {
  return restaurantList.map((element) => (
    <div key={element.id} className="restaurant-id">
      <img src="http://loremflickr.com/640/480/food" alt={element.name} />
      <h1>{element.name}</h1>
      <p>Note : {element.rating}/5</p>
    </div>
  ));
}

export default CardRestaurant;
