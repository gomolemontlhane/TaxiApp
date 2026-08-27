import { ArrowLeft, SlidersHorizontal } from "lucide-react"

import { useRouteStore } from "../../store/routeStore"
import RouteCard from "./RouteCard"

function RouteResults() {
  const destination = useRouteStore(
    (state) => state.destination,
  )

  const routes = useRouteStore(
    (state) => state.routes,
  )

  const clearRoutes = useRouteStore(
    (state) => state.clearRoutes,
  )

  if (!destination) {
    return null
  }

  return (
    <section className="absolute inset-x-0 bottom-0 z-30 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">

      <div className="max-h-[70dvh] overflow-y-auto rounded-t-[28px] bg-white px-5 pb-6 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] sm:max-h-[80dvh] sm:rounded-[28px] sm:px-6">

        {/* HANDLE */}

        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-neutral-200 sm:hidden" />

        {/* HEADER */}

        <div className="flex items-center gap-3">

          <button
            onClick={clearRoutes}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 transition hover:bg-neutral-200"
            aria-label="Back"
          >
            <ArrowLeft size={17} />
          </button>

          <div className="min-w-0 flex-1">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Routes to
            </p>

            <h2 className="truncate text-lg font-semibold tracking-tight">
              {destination.name}
            </h2>

          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100"
            aria-label="Route filters"
          >
            <SlidersHorizontal size={16} />
          </button>

        </div>

        {/* ROUTES */}

        <div className="mt-5 space-y-3">

          {routes.length > 0 ? (
            routes.map((route, index) => (
              <RouteCard
                key={route.id}
                route={route}
                recommended={index === 0}
              />
            ))
          ) : (
            <div className="rounded-2xl bg-neutral-50 p-6 text-center">

              <p className="text-sm font-medium">
                No taxi routes found
              </p>

              <p className="mt-1 text-xs text-neutral-400">
                Try another destination.
              </p>

            </div>
          )}

        </div>

      </div>

    </section>
  )
}

export default RouteResults