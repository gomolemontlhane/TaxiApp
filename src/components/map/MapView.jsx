import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
// import TaxiStopMarker from "./TaxiStopMarker"

import { taxiStops } from "../../data/stops"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

function Map() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,

      style: "mapbox://styles/mapbox/light-v11",

      center: [28.0473, -26.2041],

      zoom: 11.5,

      attributionControl: false,
    })

    map.current.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
      }),
      "bottom-right",
    )

    map.current.on("load", () => {
      taxiStops.forEach((stop) => {
const marker = document.createElement("div")

const markerRoot = document.createElement("div")

marker.appendChild(markerRoot)
        new mapboxgl.Marker({
          element: marker,
        })
          .setLngLat([
            stop.location.lng,
            stop.location.lat,
          ])
          .addTo(map.current)
      })
    })

    return () => {
      map.current?.remove()
      map.current = null
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="absolute inset-0"
    />
  )
}

export default Map