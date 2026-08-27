import { useState } from "react"
import { Search, X } from "lucide-react"

import { destinations } from "../../data/destinations"
import { useRouteStore } from "../../store/routeStore"
import { findRoutesToDestination } from "../../services/routingService"

function SearchBar() {
  const [query, setQuery] = useState("")

  const setDestination = useRouteStore(
    (state) => state.setDestination,
  )

  const setRoutes = useRouteStore(
    (state) => state.setRoutes,
  )

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.name
        .toLowerCase()
        .includes(query.toLowerCase()),
  )

  function handleSelect(destination) {
    const routes = findRoutesToDestination(destination.id)

    setDestination(destination)
    setRoutes(routes)

    setQuery(destination.name)
  }

  function clearSearch() {
    setQuery("")
  }

  return (
    <div className="relative">

      {/* SEARCH INPUT */}

      <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-lg shadow-black/5 ring-1 ring-black/5">

        <Search
          size={19}
          className="shrink-0 text-neutral-400"
        />

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Where are you going?"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />

        {query && (
          <button
            onClick={clearSearch}
            className="text-neutral-400 transition hover:text-neutral-900"
            aria-label="Clear search"
          >
            <X size={17} />
          </button>
        )}

      </div>

      {/* SEARCH RESULTS */}

      {query && filteredDestinations.length > 0 && (
        <div className="absolute inset-x-0 top-full mt-2 overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10 ring-1 ring-black/5">

          {filteredDestinations.map((destination) => (
            <button
              key={destination.id}
              onClick={() => handleSelect(destination)}
              className="flex w-full items-center gap-3 px-4 py-4 text-left transition hover:bg-neutral-50"
            >

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100">
                <Search size={15} />
              </div>

              <div>
                <p className="text-sm font-medium">
                  {destination.name}
                </p>

                <p className="mt-0.5 text-xs text-neutral-400">
                  {destination.subtitle}
                </p>
              </div>

            </button>
          ))}

        </div>
      )}

    </div>
  )
}

export default SearchBar