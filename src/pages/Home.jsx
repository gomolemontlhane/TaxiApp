import {
  LocateFixed,
  Menu,
  Navigation,
} from "lucide-react"

import Map from "../components/map/MapView"
import SearchBar from "../components/search/SearchBar"
import RouteResults from "../components/routes/RouteResults"
import NearbyStops from "../components/stops/NearbyStops"

import { useRouteStore } from "../store/routeStore"

function Home() {
  const destination = useRouteStore(
    (state) => state.destination,
  )

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-neutral-100 text-neutral-950">

      {/* MAP */}

      <Map />

      {/* TOP NAVIGATION */}

      <header className="absolute inset-x-0 top-0 z-20 p-4 sm:p-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
              <Navigation
                size={16}
                strokeWidth={2.5}
              />
            </div>

            <span className="text-sm font-semibold tracking-tight">
              RIDEWAY
            </span>

          </div>

          {/* MENU */}

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur-md transition hover:bg-white"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>

        </div>
      </header>

      {/* SEARCH */}

      <div className="absolute inset-x-0 top-20 z-20 px-4 sm:top-24 sm:px-6">
        <div className="mx-auto max-w-xl">
          <SearchBar />
        </div>
      </div>

      {/* MAP CONTROLS */}

      <div className="absolute bottom-[28%] right-4 z-20 flex flex-col gap-2 sm:bottom-32 sm:right-6">

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 transition hover:scale-105"
          aria-label="Locate me"
        >
          <LocateFixed size={18} />
        </button>

      </div>

      {/* BOTTOM SHEET */}

      {destination ? (
        <RouteResults />
      ) : (
        <NearbyStops />
      )}

    </main>
  )
}

export default Home