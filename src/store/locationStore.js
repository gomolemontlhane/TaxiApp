import { create } from "zustand"

export const useLocationStore = create((set) => ({
  location: null,

  isLocating: false,

  locationError: null,

  setLocation: (location) =>
    set({
      location,
      locationError: null,
    }),

  setIsLocating: (isLocating) =>
    set({
      isLocating,
    }),

  setLocationError: (locationError) =>
    set({
      locationError,
    }),
}))