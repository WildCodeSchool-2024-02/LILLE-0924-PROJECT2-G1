import "./CardRestaurant.css";
// Tableau de restaurants
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
  {
    id: 5,
    name: "Café Délice",
    address: "5 Place Rihour, 59000 Lille, France",
    cuisine: "Café",
    price_range: "$",
    rating: 4.2,
    description:
      "Café pittoresque avec une belle terrasse, parfait pour un café matinal ou une pause gourmande en plein centre de Lille.",
    hours: {
      monday: "07:00-20:00",
      tuesday: "07:00-20:00",
      wednesday: "07:00-20:00",
      thursday: "07:00-20:00",
      friday: "07:00-20:00",
      saturday: "08:00-20:00",
      sunday: "08:00-18:00",
    },
    location: {
      latitude: 50.6366,
      longitude: 3.0637,
    },
  },
  {
    id: 6,
    name: "Bistro Provençal",
    address: "25 Rue de la Barre, 59000 Lille, France",
    cuisine: "Méditerranéenne",
    price_range: "$$$",
    rating: 4.6,
    description:
      "Cuisine provençale aux saveurs méditerranéennes, idéale pour un dîner raffiné dans un cadre élégant.",
    hours: {
      monday: "12:00-14:30, 19:00-22:30",
      tuesday: "12:00-14:30, 19:00-22:30",
      wednesday: "12:00-14:30, 19:00-22:30",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "12:00-15:00, 19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.636,
      longitude: 3.0649,
    },
  },
  {
    id: 7,
    name: "La Crêpe Gourmande",
    address: "28 Rue de Gand, 59800 Lille, France",
    cuisine: "Bretonne",
    price_range: "$",
    rating: 4.1,
    description:
      "Petit restaurant convivial offrant des crêpes bretonnes et galettes avec des ingrédients frais.",
    hours: {
      monday: "10:00-22:00",
      tuesday: "10:00-22:00",
      wednesday: "10:00-22:00",
      thursday: "10:00-22:00",
      friday: "10:00-23:00",
      saturday: "10:00-23:00",
      sunday: "10:00-21:00",
    },
    location: {
      latitude: 50.6412,
      longitude: 3.0654,
    },
  },
  {
    id: 8,
    name: "The Green Bowl",
    address: "18 Rue Nationale, 59000 Lille, France",
    cuisine: "Végétarienne",
    price_range: "$$",
    rating: 4.4,
    description:
      "Un restaurant végétarien tendance qui propose des plats sains et colorés dans une ambiance moderne.",
    hours: {
      monday: "11:00-21:00",
      tuesday: "11:00-21:00",
      wednesday: "11:00-21:00",
      thursday: "11:00-21:00",
      friday: "11:00-21:00",
      saturday: "12:00-21:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6343,
      longitude: 3.0576,
    },
  },
  {
    id: 9,
    name: "Spice of India",
    address: "55 Rue du Molinel, 59800 Lille, France",
    cuisine: "Indienne",
    price_range: "$$",
    rating: 4.0,
    description:
      "Restaurant indien chaleureux proposant des plats épicés et traditionnels dans une ambiance colorée.",
    hours: {
      monday: "12:00-15:00, 18:00-22:30",
      tuesday: "12:00-15:00, 18:00-22:30",
      wednesday: "12:00-15:00, 18:00-22:30",
      thursday: "12:00-15:00, 18:00-22:30",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "12:00-15:00, 18:00-22:00",
    },
    location: {
      latitude: 50.6309,
      longitude: 3.0661,
    },
  },
  {
    id: 10,
    name: "BBQ Grill House",
    address: "75 Rue Léon Gambetta, 59000 Lille, France",
    cuisine: "Américaine",
    price_range: "$$$",
    rating: 3.9,
    description:
      "Restaurant de barbecue américain avec des viandes grillées, des burgers et des ribs dans une ambiance conviviale.",
    hours: {
      monday: "11:30-14:30, 18:30-22:30",
      tuesday: "11:30-14:30, 18:30-22:30",
      wednesday: "11:30-14:30, 18:30-22:30",
      thursday: "11:30-14:30, 18:30-22:30",
      friday: "11:30-14:30, 18:30-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6258,
      longitude: 3.0652,
    },
  },
  {
    id: 11,
    name: "La Bistronomie",
    address: "22 Rue du Plat, 59000 Lille, France",
    cuisine: "Française",
    price_range: "$$$",
    rating: 4.5,
    description:
      "Restaurant convivial servant des plats français revisités avec une touche moderne.",
    hours: {
      monday: "12:00-15:00, 18:30-22:00",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "18:30-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6366,
      longitude: 3.0631,
    },
  },
  {
    id: 12,
    name: "L'Italien Gourmand",
    address: "10 Rue Esquermoise, 59800 Lille, France",
    cuisine: "Italienne",
    price_range: "$$",
    rating: 4.3,
    description:
      "Une authentique trattoria italienne offrant des pizzas au feu de bois et des pâtes fraîches.",
    hours: {
      monday: "12:00-14:30, 18:00-22:00",
      tuesday: "12:00-14:30, 18:00-22:00",
      wednesday: "12:00-14:30, 18:00-22:00",
      thursday: "12:00-14:30, 18:00-22:30",
      friday: "12:00-14:30, 18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "12:00-15:00",
    },
    location: {
      latitude: 50.637,
      longitude: 3.0614,
    },
  },
  {
    id: 13,
    name: "Sushido",
    address: "8 Rue Nationale, 59800 Lille, France",
    cuisine: "Japonaise",
    price_range: "$$$",
    rating: 4.6,
    description:
      "Restaurant japonais moderne avec un bar à sushis et des spécialités de poissons frais.",
    hours: {
      monday: "12:00-15:00, 18:00-22:30",
      tuesday: "12:00-15:00, 18:00-22:30",
      wednesday: "12:00-15:00, 18:00-22:30",
      thursday: "12:00-15:00, 18:00-22:30",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6333,
      longitude: 3.059,
    },
  },
  {
    id: 14,
    name: "Le Vegan Gourmet",
    address: "30 Rue de Paris, 59800 Lille, France",
    cuisine: "Végétalien",
    price_range: "$$",
    rating: 4.7,
    description:
      "Restaurant végétalien créatif offrant des plats sains et gourmands, faits à partir de produits locaux.",
    hours: {
      monday: "12:00-14:30, 18:00-22:00",
      tuesday: "12:00-14:30, 18:00-22:00",
      wednesday: "12:00-14:30, 18:00-22:00",
      thursday: "12:00-14:30, 18:00-22:00",
      friday: "12:00-14:30, 18:00-22:30",
      saturday: "12:00-15:00, 18:00-22:30",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6342,
      longitude: 3.0605,
    },
  },
  {
    id: 15,
    name: "Tapas y Vino",
    address: "12 Rue de la Monnaie, 59800 Lille, France",
    cuisine: "Espagnole",
    price_range: "$$",
    rating: 4.4,
    description:
      "Un petit coin d'Espagne à Lille, offrant des tapas, des charcuteries et une large sélection de vins.",
    hours: {
      monday: "Closed",
      tuesday: "18:00-22:30",
      wednesday: "18:00-22:30",
      thursday: "18:00-22:30",
      friday: "18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "12:00-15:00, 18:00-22:00",
    },
    location: {
      latitude: 50.6378,
      longitude: 3.0619,
    },
  },
  {
    id: 16,
    name: "Le Petit Bouchon",
    address: "14 Rue du Sec Arembault, 59800 Lille, France",
    cuisine: "Française",
    price_range: "$$",
    rating: 4.5,
    description:
      "Cuisine française traditionnelle dans une ambiance conviviale et chaleureuse.",
    hours: {
      monday: "12:00-14:30, 19:00-22:00",
      tuesday: "12:00-14:30, 19:00-22:00",
      wednesday: "12:00-14:30, 19:00-22:00",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "12:00-15:00, 19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6346,
      longitude: 3.0649,
    },
  },
  {
    id: 17,
    name: "Bambou Vert",
    address: "10 Rue Saint-André, 59800 Lille, France",
    cuisine: "Vietnamienne",
    price_range: "$$",
    rating: 4.6,
    description:
      "Spécialités vietnamiennes fraîches et savoureuses, avec des options végétariennes.",
    hours: {
      monday: "Closed",
      tuesday: "11:30-15:00, 18:00-22:00",
      wednesday: "11:30-15:00, 18:00-22:00",
      thursday: "11:30-15:00, 18:00-22:30",
      friday: "11:30-15:00, 18:00-23:00",
      saturday: "11:30-15:00, 18:00-23:00",
      sunday: "12:00-15:00",
    },
    location: {
      latitude: 50.6382,
      longitude: 3.0603,
    },
  },
  {
    id: 18,
    name: "La Pampa",
    address: "22 Rue de Béthune, 59800 Lille, France",
    cuisine: "Argentine",
    price_range: "$$$",
    rating: 4.3,
    description:
      "Un steakhouse argentin avec des viandes de qualité, servies avec des accompagnements typiques.",
    hours: {
      monday: "12:00-14:30, 19:00-22:00",
      tuesday: "12:00-14:30, 19:00-22:00",
      wednesday: "12:00-14:30, 19:00-22:00",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "12:00-15:00, 19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6341,
      longitude: 3.0667,
    },
  },
  {
    id: 19,
    name: "Chez Sushi",
    address: "9 Rue Masséna, 59800 Lille, France",
    cuisine: "Japonaise",
    price_range: "$$",
    rating: 4.2,
    description:
      "Restaurant japonais offrant une variété de sushis, makis et spécialités de la mer.",
    hours: {
      monday: "12:00-15:00, 18:30-22:00",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6323,
      longitude: 3.0654,
    },
  },
  {
    id: 20,
    name: "El Mexicano",
    address: "18 Rue Royale, 59800 Lille, France",
    cuisine: "Mexicaine",
    price_range: "$$",
    rating: 4.4,
    description:
      "Ambiance festive avec des spécialités mexicaines authentiques comme les tacos et les enchiladas.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-15:00, 18:00-22:00",
      wednesday: "12:00-15:00, 18:00-22:00",
      thursday: "12:00-15:00, 18:00-22:30",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6387,
      longitude: 3.0625,
    },
  },
  {
    id: 21,
    name: "La Table Méditerranéenne",
    address: "6 Rue de Pas, 59800 Lille, France",
    cuisine: "Méditerranéenne",
    price_range: "$$$",
    rating: 4.8,
    description:
      "Plats méditerranéens frais avec des ingrédients locaux et une ambiance chaleureuse.",
    hours: {
      monday: "12:00-14:30, 19:00-22:00",
      tuesday: "12:00-14:30, 19:00-22:00",
      wednesday: "12:00-14:30, 19:00-22:00",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6375,
      longitude: 3.064,
    },
  },
  {
    id: 22,
    name: "Tandoori Palace",
    address: "25 Rue des Postes, 59000 Lille, France",
    cuisine: "Indienne",
    price_range: "$$",
    rating: 4.3,
    description:
      "Cuisine indienne avec des plats épicés et authentiques, servis dans un décor élégant.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-14:30, 18:30-22:00",
      wednesday: "12:00-14:30, 18:30-22:00",
      thursday: "12:00-14:30, 18:30-22:00",
      friday: "12:00-14:30, 18:30-22:30",
      saturday: "18:30-22:30",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6261,
      longitude: 3.0608,
    },
  },
  {
    id: 23,
    name: "Le Gourmet Thaï",
    address: "17 Rue Nicolas Leblanc, 59800 Lille, France",
    cuisine: "Thaïlandaise",
    price_range: "$$",
    rating: 4.5,
    description:
      "Cuisine thaïlandaise raffinée avec des plats traditionnels et des saveurs authentiques.",
    hours: {
      monday: "12:00-15:00, 18:30-22:00",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "18:30-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6338,
      longitude: 3.0682,
    },
  },
  {
    id: 24,
    name: "La Petite Crêperie",
    address: "28 Rue de la Barre, 59800 Lille, France",
    cuisine: "Bretonne",
    price_range: "$",
    rating: 4.4,
    description:
      "Crêpes et galettes bretonnes, préparées à la commande dans une ambiance décontractée.",
    hours: {
      monday: "12:00-15:00",
      tuesday: "12:00-15:00, 18:00-21:30",
      wednesday: "12:00-15:00, 18:00-21:30",
      thursday: "12:00-15:00, 18:00-21:30",
      friday: "12:00-15:00, 18:00-22:00",
      saturday: "12:00-15:00, 18:00-22:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6367,
      longitude: 3.0574,
    },
  },
  {
    id: 25,
    name: "Oasis Libanaise",
    address: "35 Rue du Molinel, 59800 Lille, France",
    cuisine: "Libanaise",
    price_range: "$$",
    rating: 4.7,
    description:
      "Spécialités libanaises servies dans un décor chaleureux avec une ambiance orientale.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-14:30, 18:00-22:00",
      wednesday: "12:00-14:30, 18:00-22:00",
      thursday: "12:00-14:30, 18:00-22:30",
      friday: "12:00-14:30, 18:00-22:30",
      saturday: "12:00-15:00, 18:00-22:30",
      sunday: "12:00-15:00",
    },
    location: {
      latitude: 50.6335,
      longitude: 3.0724,
    },
  },
  {
    id: 26,
    name: "Bistro de la Place",
    address: "5 Place Rihour, 59800 Lille, France",
    cuisine: "Bistro Français",
    price_range: "$$",
    rating: 4.2,
    description:
      "Un bistro traditionnel français avec des plats de saison et un service chaleureux.",
    hours: {
      monday: "12:00-15:00, 18:30-22:00",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6342,
      longitude: 3.0651,
    },
  },
  {
    id: 27,
    name: "Casa Bella",
    address: "12 Rue Esquermoise, 59800 Lille, France",
    cuisine: "Italienne",
    price_range: "$$",
    rating: 4.7,
    description:
      "Authentique cuisine italienne avec une ambiance chaleureuse et des pâtes maison.",
    hours: {
      monday: "12:00-15:00, 18:30-22:00",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6364,
      longitude: 3.0615,
    },
  },
  {
    id: 28,
    name: "Le Marrakech",
    address: "20 Rue Gambetta, 59000 Lille, France",
    cuisine: "Marocaine",
    price_range: "$$",
    rating: 4.4,
    description:
      "Cuisine marocaine authentique avec des tajines et couscous dans un cadre dépaysant.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-15:00, 18:30-22:00",
      wednesday: "12:00-15:00, 18:30-22:00",
      thursday: "12:00-15:00, 18:30-22:30",
      friday: "12:00-15:00, 18:30-23:00",
      saturday: "12:00-15:00, 18:30-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6298,
      longitude: 3.0573,
    },
  },
  {
    id: 29,
    name: "Chez Pierrot",
    address: "8 Rue Léon Trulin, 59000 Lille, France",
    cuisine: "Française",
    price_range: "$$",
    rating: 4.0,
    description:
      "Petit restaurant convivial proposant des plats français classiques avec une touche moderne.",
    hours: {
      monday: "Closed",
      tuesday: "12:00-14:30, 19:00-22:00",
      wednesday: "12:00-14:30, 19:00-22:00",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6347,
      longitude: 3.0662,
    },
  },
  {
    id: 30,
    name: "Taverne Flamande",
    address: "15 Rue des Fossés, 59800 Lille, France",
    cuisine: "Cuisine Flamande",
    price_range: "$$",
    rating: 4.3,
    description:
      "Plats flamands traditionnels avec des bières artisanales dans un décor rustique.",
    hours: {
      monday: "12:00-15:00, 18:00-22:00",
      tuesday: "12:00-15:00, 18:00-22:00",
      wednesday: "12:00-15:00, 18:00-22:00",
      thursday: "12:00-15:00, 18:00-22:30",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.638,
      longitude: 3.0581,
    },
  },
  {
    id: 31,
    name: "L'Épicerie Gourmande",
    address: "3 Rue Basse, 59800 Lille, France",
    cuisine: "Française, Fusion",
    price_range: "$$$",
    rating: 4.6,
    description:
      "Restaurant haut de gamme avec des plats fusion inspirés de la cuisine française et des saveurs du monde.",
    hours: {
      monday: "12:00-14:30, 19:00-22:00",
      tuesday: "12:00-14:30, 19:00-22:00",
      wednesday: "12:00-14:30, 19:00-22:00",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-23:00",
      saturday: "19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.637,
      longitude: 3.0587,
    },
  },
  {
    id: 32,
    name: "El Cantina",
    address: "10 Rue du Molinel, 59800 Lille, France",
    cuisine: "Tex-Mex",
    price_range: "$",
    rating: 4.1,
    description:
      "Cuisine Tex-Mex avec des tacos, burritos et margaritas dans une ambiance festive.",
    hours: {
      monday: "12:00-15:00, 18:00-22:00",
      tuesday: "12:00-15:00, 18:00-22:00",
      wednesday: "12:00-15:00, 18:00-22:00",
      thursday: "12:00-15:00, 18:00-22:30",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6322,
      longitude: 3.0712,
    },
  },
  {
    id: 33,
    name: "Noodles & Co",
    address: "7 Rue de Paris, 59800 Lille, France",
    cuisine: "Asiatique",
    price_range: "$$",
    rating: 4.3,
    description:
      "Resto moderne proposant une variété de plats de nouilles asiatiques et des soupes réconfortantes.",
    hours: {
      monday: "12:00-15:00, 18:00-22:00",
      tuesday: "12:00-15:00, 18:00-22:00",
      wednesday: "12:00-15:00, 18:00-22:00",
      thursday: "12:00-15:00, 18:00-22:30",
      friday: "12:00-15:00, 18:00-23:00",
      saturday: "12:00-15:00, 18:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.634,
      longitude: 3.0689,
    },
  },
  {
    id: 34,
    name: "Le Chariot du Monde",
    address: "11 Rue Nationale, 59800 Lille, France",
    cuisine: "Cuisine du Monde",
    price_range: "$$$",
    rating: 4.5,
    description:
      "Restaurant gastronomique proposant des plats inspirés de différentes cultures du monde.",
    hours: {
      monday: "12:00-15:00, 19:00-22:00",
      tuesday: "12:00-15:00, 19:00-22:00",
      wednesday: "12:00-15:00, 19:00-22:00",
      thursday: "12:00-15:00, 19:00-22:30",
      friday: "12:00-15:00, 19:00-23:00",
      saturday: "19:00-23:00",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6362,
      longitude: 3.0625,
    },
  },
  {
    id: 35,
    name: "Veggie Delight",
    address: "25 Rue de l'Hôpital Militaire, 59800 Lille, France",
    cuisine: "Végétarienne",
    price_range: "$$",
    rating: 4.6,
    description:
      "Cuisine végétarienne créative avec des options vegan dans un cadre moderne et épuré.",
    hours: {
      monday: "12:00-14:30, 19:00-22:00",
      tuesday: "12:00-14:30, 19:00-22:00",
      wednesday: "12:00-14:30, 19:00-22:00",
      thursday: "12:00-14:30, 19:00-22:30",
      friday: "12:00-14:30, 19:00-22:30",
      saturday: "19:00-22:30",
      sunday: "Closed",
    },
    location: {
      latitude: 50.6336,
      longitude: 3.0654,
    },
  },
];

// Fonction qui créé les peites cartes de restaurants visiblent sur la page d'acceuil
function CardRestaurant() {
  return (
    <div className="containerRestaurants">
      {restaurantList.map((element) => (
        <div key={element.id} className=" restaurant restaurant-id">
          <img
            src="https://picsum.photos/seed/food/400/300"
            alt={element.name}
            className="imgRestaurant"
          />
          <h1>{element.name}</h1>
          <p>Note : {element.rating}/5</p>
        </div>
      ))}
    </div>
  );
}

// fetch("https://www.wildcodeschool.com/")
//   .then((response) => response.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

export default CardRestaurant;