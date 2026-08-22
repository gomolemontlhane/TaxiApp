import { create } from "zustand"

export const useRouteStore = create((set) => ({
  destination: null,

  routes: [],

  isSearching: false,

  setDestination: (destination) =>
    set({
      destination,
    }),

  setRoutes: (routes) =>
    set({
      routes,
    }),

  setIsSearching: (isSearching) =>
    set({
      isSearching,
    }),

  clearRoutes: () =>
    set({
      destination: null,
      routes: [],
    }),
}))