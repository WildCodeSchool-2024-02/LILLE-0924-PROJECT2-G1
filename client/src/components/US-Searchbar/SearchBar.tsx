import { useState } from "react";

interface restaurantProps {
  id: number;
  name: string;
  address: string;
  cuisine: string;
  price_range: string;
  rating: number;
  description: string;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday?: string | undefined;
    sunday?: string | undefined;
  };
  location?:
    | {
        latitude?: number;
        longitude?: number;
      }
    | undefined;
}

const restaurantList = [
  {
    id: 1,
    name: "La Table de Lille",
    address: "14 Rue de Béthune, 59000 Lille, France",
    cuisine: "Française",
    price_range: "$$$",
    rating: 4.5,
    description:
      "Restaurant raffiné offrant une cuisine française authentique avec des ingrédients de saison.",
    hours: {
      monday: "12:00-14:30, 19:00-23:00",
      tuesday: "12:00-14:30, 19:00-23:00",
      wednesday: "12:00-14:30, 19:00-23:00",
      thursday: "12:00-14:30, 19:00-23:00",
      friday: "12:00-14:30, 19:00-23:30",
      saturday: "12:00-15:00, 19:00-23:30",
      sunday: "Closed",
    },
    location: { latitude: 50.6293, longitude: 3.0573 },
  },
  {
    id: 2,
    name: "Il Forno Italiano",
    address: "32 Rue Masséna, 59800 Lille, France",
    cuisine: "Italienne",
    price_range: "$$",
    rating: 4.2,
    description:
      "Restaurant familial servant des pizzas cuites au four à bois et des plats italiens traditionnels.",
    hours: {
      monday: "12:00-15:00, 18:30-22:30",
      tuesday: "12:00-15:00, 18:30-22:30",
      wednesday: "12:00-15:00, 18:30-22:30",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: { latitude: 50.6321, longitude: 3.0597 },
  },
  {
    id: 3,
    name: "Sushi Zen",
    address: "8 Rue Nationale, 59000 Lille, France",
    cuisine: "Japonaise",
    price_range: "$$$",
    rating: 4.7,
    description:
      "Spécialisé dans les sushis et les sashimis de haute qualité avec des produits frais.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-14:30, 19:00-22:30",
      wednesday: "12:00-14:30, 19:00-22:30",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "12:00-15:00, 19:00-23:00",
      sunday: "12:00-15:00",
    },
    location: { latitude: 50.634, longitude: 3.06 },
  },
  {
    id: 4,
    name: "Le Bistro des Amis",
    address: "21 Place Rihour, 59800 Lille, France",
    cuisine: "Bistrot",
    price_range: "$$",
    rating: 4.3,
    description:
      "Ambiance conviviale et cuisine de bistrot traditionnelle, parfaite pour un déjeuner décontracté.",
    hours: {
      monday: "11:30-14:30, 18:30-22:00",
      tuesday: "11:30-14:30, 18:30-22:00",
      wednesday: "11:30-14:30, 18:30-22:00",
      thursday: "11:30-14:30, 18:30-22:00",
      friday: "11:30-14:30, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: { latitude: 50.6355, longitude: 3.0632 },
  },
  {
    id: 5,
    name: "Le Jardin Vert",
    address: "12 Avenue du Peuple Belge, 59000 Lille, France",
    cuisine: "Végétarienne",
    price_range: "$",
    rating: 4.0,
    description:
      "Plats végétariens créatifs et colorés inspirés des cuisines du monde.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-15:00, 18:00-21:30",
      wednesday: "12:00-15:00, 18:00-21:30",
      thursday: "12:00-15:00, 18:00-21:30",
      friday: "12:00-15:00, 18:00-22:00",
      saturday: "12:00-15:00, 18:00-22:00",
      sunday: "12:00-15:00",
    },
    location: { latitude: 50.6372, longitude: 3.0621 },
  },
  {
    id: 6,
    name: "Tandoori Palace",
    address: "18 Rue du Molinel, 59000 Lille, France",
    cuisine: "Indienne",
    price_range: "$$",
    rating: 4.4,
    description:
      "Authentiques plats indiens avec une variété d'options végétariennes.",
    hours: {
      monday: "12:00-15:00, 19:00-22:30",
      tuesday: "12:00-15:00, 19:00-22:30",
      wednesday: "12:00-15:00, 19:00-22:30",
      thursday: "12:00-15:00, 19:00-22:30",
      friday: "12:00-15:00, 19:00-23:00",
      saturday: "12:00-15:00, 19:00-23:00",
      sunday: "12:00-15:00, 19:00-22:00",
    },
    location: { latitude: 50.6309, longitude: 3.0674 },
  },

  {
    id: 7,
    name: "Le Gourmet Mexicain",
    address: "25 Rue de la Monnaie, 59000 Lille, France",
    cuisine: "Mexicaine",
    price_range: "$$",
    rating: 4.1,
    description: "Tacos, burritos et autres plats mexicains savoureux.",
    hours: {
      monday: "12:00-15:00, 18:30-22:00",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:00",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: { latitude: 50.6365, longitude: 3.0608 },
  },
  {
    id: 8,
    name: "Café du Nord",
    address: "10 Place de la Gare, 59000 Lille, France",
    cuisine: "Française",
    price_range: "$",
    rating: 4.0,
    description:
      "Café-restaurant proposant des classiques français et une ambiance chaleureuse.",
    hours: {
      monday: "07:00-23:00",
      tuesday: "07:00-23:00",
      wednesday: "07:00-23:00",
      thursday: "07:00-23:00",
      friday: "07:00-00:00",
      saturday: "08:00-00:00",
      sunday: "08:00-22:00",
    },
    location: { latitude: 50.6362, longitude: 3.0665 },
  },

  {
    id: 10,
    name: "L'Orient Express",
    address: "120 Boulevard de la Liberté, 59000 Lille, France",
    cuisine: "Moyen-Orient",
    price_range: "$$",
    rating: 4.6,
    description:
      "Cuisine moyen-orientale avec des plats traditionnels comme les mezzés et les grillades.",
    hours: {
      monday: "12:00-14:30, 19:00-22:30",
      tuesday: "12:00-14:30, 19:00-22:30",
      wednesday: "12:00-14:30, 19:00-22:30",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:",
    },
  },
  {
    id: 11,
    name: "Café du Nord",
    address: "10 Place de la Gare, 59000 Lille, France",
    cuisine: "Française",
    price_range: "$",
    rating: 4.0,
    description:
      "Café-restaurant proposant des classiques français et une ambiance chaleureuse.",
    hours: {
      monday: "07:00-23:00",
      tuesday: "07:00-23:00",
      wednesday: "07:00-23:00",
      thursday: "07:00-23:00",
      friday: "07:00-00:00",
      saturday: "08:00-00:00",
      sunday: "08:00-22:00",
    },
    location: { latitude: 50.6362, longitude: 3.0665 },
  },
  {
    id: 12,
    name: "Le Petit Thaï",
    address: "15 Rue Esquermoise, 59000 Lille, France",
    cuisine: "Thaïlandaise",
    price_range: "$$",
    rating: 4.5,
    description: "Délices thaïlandais épicés et saveurs exotiques.",
    hours: {
      monday: "12:00-14:30, 19:00-22:30",
      tuesday: "12:00-14:30, 19:00-22:30",
      wednesday: "12:00-14:30, 19:00-22:30",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "12:00-15:00, 19:00-23:00",
      sunday: "Closed",
    },
    location: { latitude: 50.638, longitude: 3.0617 },
  },
  {
    id: 13,
    name: "Burger Royal",
    address: "20 Boulevard Carnot, 59800 Lille, France",
    cuisine: "Américaine",
    price_range: "$",
    rating: 4.2,
    description: "Burgers gourmands faits maison avec des ingrédients locaux.",
    hours: {
      monday: "12:00-15:00, 18:00-22:00",
      tuesday: "12:00-15:00, 18:00-22:00",
      wednesday: "12:00-15:00, 18:00-22:00",
      thursday: "12:00-15:00, 18:00-22:00",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "12:00-23:00",
      sunday: "12:00-20:00",
    },
    location: { latitude: 50.6368, longitude: 3.0633 },
  },
];

function Searchbar() {
  const [restaurant, setRestaurant] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<restaurantProps | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurant(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedRestaurant) {
      alert(selectedRestaurant.name);
    } else {
      alert("Aucun restaurant sélectionné");
    }
  };

  const handleSelectRestaurant = (restaurant: restaurantProps) => {
    if (!selectedRestaurant) {
      setSelectedRestaurant(restaurant);
      setRestaurant(restaurant.name);
    }
  };

  const filteredData = restaurantList.filter(
    (item) =>
      item.name.toLowerCase().includes(restaurant.toLowerCase()) ||
      item.cuisine.toLowerCase().includes(restaurant.toLowerCase()),
  );

  return (
    <>
      <form className="searchbar" onSubmit={handleSubmit}>
        <label htmlFor="character">Où Manger ?</label>
        <input
          id="character"
          name="character"
          type="text"
          value={restaurant}
          onChange={handleChange}
          placeholder="Nom du restaurant ou type de cuisine"
          style={{ width: "80%", textAlign: "center" }}
        />
        <button
          style={{ backgroundColor: "transparent", border: "0" }}
          type="button"
          onClick={() => {
            setRestaurant("");
            setSelectedRestaurant(null);
          }}
        >
          X
        </button>
        {/* <button type="submit">Mangeaillons</button> */}
      </form>
      <ul>
        {filteredData.map((item: restaurantProps) => (
          <li
            key={item.id}
            onClick={() => handleSelectRestaurant(item)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleSelectRestaurant(item);
              }
            }}
          >
            {item.name} | Type de cuisine : {item.cuisine}
          </li>
        ))}
      </ul>

      {selectedRestaurant && (
        <div>
          <h2>Nous allons mangeailler à</h2>
          <p>{selectedRestaurant.name}</p>
          <p>{selectedRestaurant.cuisine}</p>
          <p>{selectedRestaurant.address}</p>
        </div>
      )}
    </>
  );
}

export default Searchbar;
