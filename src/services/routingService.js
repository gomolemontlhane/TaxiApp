import { taxiStops } from "../data/stops"
import { taxiRoutes } from "../data/routes"

export function findRoutesToDestination(destinationId) {
  return taxiRoutes.filter(
    (route) => route.destination === `${destinationId}-stop`,
  )
}

export function findStopById(stopId) {
  return taxiStops.find((stop) => stop.id === stopId)
}

export function findNearestStops() {
  return [...taxiStops]
    .sort((a, b) => a.walkingMinutes - b.walkingMinutes)
    .slice(0, 3)
}