import { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

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
        const marker = document.createElement("button")

        marker.className =
          "flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm shadow-md ring-1 ring-black/5 transition-transform hover:scale-110"

        marker.innerHTML = "🚐"

        marker.setAttribute("aria-label", stop.name)

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