import { ArrowRight, Clock3, MapPin, Navigation } from "lucide-react"

import { useRouteStore } from "../../store/routeStore"

function RouteCard({ route, recommended = false }) {
  const setSelectedRoute = useRouteStore(
    (state) => state.setSelectedRoute,
  )

  function handleSelect() {
    setSelectedRoute(route)
  }

  return (
    <button
      onClick={handleSelect}
      className="group w-full text-left"
    >
      <div
        className={`
          rounded-2xl border p-4 transition
          ${
            recommended
              ? "border-neutral-950 bg-neutral-950 text-white"
              : "border-neutral-100 bg-white hover:border-neutral-300"
          }
        `}
      >

        {/* TOP ROW */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-2">

            <div
              className={`
                flex h-8 w-8 items-center justify-center rounded-full
                ${
                  recommended
                    ? "bg-white/10"
                    : "bg-neutral-100"
                }
              `}
            >
              <Navigation size={15} />
            </div>

            <div>
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  recommended
                    ? "text-white/50"
                    : "text-neutral-400"
                }`}
              >
                {recommended ? "Recommended" : "Alternative"}
              </p>

              <p className="mt-0.5 text-sm font-medium">
                {route.name}
              </p>
            </div>

          </div>

          <ArrowRight
            size={17}
            className={
              recommended
                ? "text-white/50"
                : "text-neutral-400"
            }
          />

        </div>

        {/* ROUTE INFO */}

        <div className="mt-5 flex items-center gap-5">

          <div className="flex items-center gap-1.5">
            <Clock3 size={14} />

            <span className="text-xs font-medium">
              {route.duration} min
            </span>
          </div>

          <div
            className={
              recommended
                ? "h-3 w-px bg-white/20"
                : "h-3 w-px bg-neutral-200"
            }
          />

          <span className="text-xs font-medium">
            R{route.fare}
          </span>

        </div>

        {/* JOURNEY */}

        <div
          className={`
            mt-4 border-t pt-4
            ${
              recommended
                ? "border-white/10"
                : "border-neutral-100"
            }
          `}
        >

          <div className="flex items-center gap-3">

            <div className="flex flex-col items-center">

              <MapPin
                size={14}
                className={
                  recommended
                    ? "text-white"
                    : "text-neutral-950"
                }
              />

              <div
                className={`
                  my-1 h-5 w-px border-l border-dashed
                  ${
                    recommended
                      ? "border-white/20"
                      : "border-neutral-300"
                  }
                `}
              />

              <Navigation size={14} />

            </div>

            <div className="text-xs">

              <p className="font-medium">
                {route.origin.replaceAll("-", " ")}
              </p>

              <p
                className={`my-1 ${
                  recommended
                    ? "text-white/40"
                    : "text-neutral-400"
                }`}
              >
                Taxi route
              </p>

              <p className="font-medium">
                {route.destination.replaceAll("-", " ")}
              </p>

            </div>

          </div>

        </div>

      </div>
    </button>
  )
}

export default RouteCard