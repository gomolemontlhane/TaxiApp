export const taxiStops = [
  {
    id: "bree-rank",
    name: "Bree Taxi Rank",
    type: "rank",
    location: {
      lat: -26.2041,
      lng: 28.0473,
    },
    walkingMinutes: 4,
    distance: "850 m",
    routes: ["bree-rosebank", "bree-auckland-park"],
  },

  {
    id: "park-station",
    name: "Park Station Taxi Stop",
    type: "stop",
    location: {
      lat: -26.1955,
      lng: 28.0392,
    },
    walkingMinutes: 6,
    distance: "1.2 km",
    routes: ["park-rosebank", "park-sandton"],
  },

  {
    id: "noord-rank",
    name: "Noord Taxi Rank",
    type: "rank",
    location: {
      lat: -26.1906,
      lng: 28.0348,
    },
    walkingMinutes: 7,
    distance: "1.5 km",
    routes: ["noord-randburg", "noord-rosebank"],
  },

  {
    id: "auckland-park",
    name: "Auckland Park Taxi Stop",
    type: "stop",
    location: {
      lat: -26.1833,
      lng: 27.9975,
    },
    walkingMinutes: 5,
    distance: "900 m",
    routes: ["auckland-rosebank", "auckland-bree"],
  },

  {
    id: "rosebank-stop",
    name: "Rosebank Taxi Stop",
    type: "stop",
    location: {
      lat: -26.1467,
      lng: 28.0364,
    },
    walkingMinutes: 3,
    distance: "500 m",
    routes: ["rosebank-sandton", "rosebank-bree"],
  },

  {
    id: "randburg-rank",
    name: "Randburg Taxi Rank",
    type: "rank",
    location: {
      lat: -26.0936,
      lng: 27.994,
    },
    walkingMinutes: 5,
    distance: "750 m",
    routes: ["randburg-rosebank", "randburg-sandton"],
  },

  {
    id: "sandton-stop",
    name: "Sandton Taxi Stop",
    type: "stop",
    location: {
      lat: -26.1076,
      lng: 28.0567,
    },
    walkingMinutes: 4,
    distance: "600 m",
    routes: ["sandton-rosebank", "sandton-randburg"],
  },
]