export function calculateDistance(
  latitude1,
  longitude1,
  latitude2,
  longitude2,
) {
  const earthRadius = 6371

  const latDifference = toRadians(
    latitude2 - latitude1,
  )

  const lngDifference = toRadians(
    longitude2 - longitude1,
  )

  const a =
    Math.sin(latDifference / 2) ** 2 +
    Math.cos(toRadians(latitude1)) *
      Math.cos(toRadians(latitude2)) *
      Math.sin(lngDifference / 2) ** 2

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a),
    )

  return earthRadius * c
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180
}

export function formatDistance(distanceKm) {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`
  }

  return `${distanceKm.toFixed(1)} km`
}

export function estimateWalkingTime(distanceKm) {
  const averageWalkingSpeed = 5

  const minutes =
    (distanceKm / averageWalkingSpeed) * 60

  return Math.max(1, Math.round(minutes))
}