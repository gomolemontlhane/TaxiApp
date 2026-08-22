export const taxiRoutes = [
  {
    id: "bree-rosebank",
    name: "Bree → Rosebank",
    origin: "bree-rank",
    destination: "rosebank-stop",
    stops: [
      "bree-rank",
      "park-station",
      "rosebank-stop",
    ],
    duration: 28,
    fare: 20,
  },

  {
    id: "bree-auckland-park",
    name: "Bree → Auckland Park",
    origin: "bree-rank",
    destination: "auckland-park",
    stops: [
      "bree-rank",
      "auckland-park",
    ],
    duration: 20,
    fare: 15,
  },

  {
    id: "auckland-rosebank",
    name: "Auckland Park → Rosebank",
    origin: "auckland-park",
    destination: "rosebank-stop",
    stops: [
      "auckland-park",
      "rosebank-stop",
    ],
    duration: 18,
    fare: 15,
  },

  {
    id: "noord-rosebank",
    name: "Noord → Rosebank",
    origin: "noord-rank",
    destination: "rosebank-stop",
    stops: [
      "noord-rank",
      "rosebank-stop",
    ],
    duration: 24,
    fare: 18,
  },

  {
    id: "randburg-rosebank",
    name: "Randburg → Rosebank",
    origin: "randburg-rank",
    destination: "rosebank-stop",
    stops: [
      "randburg-rank",
      "rosebank-stop",
    ],
    duration: 25,
    fare: 20,
  },

  {
    id: "sandton-rosebank",
    name: "Sandton → Rosebank",
    origin: "sandton-stop",
    destination: "rosebank-stop",
    stops: [
      "sandton-stop",
      "rosebank-stop",
    ],
    duration: 15,
    fare: 15,
  },
]