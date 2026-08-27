import { ArrowRight, LocateFixed } from "lucide-react"

import { taxiStops } from "../../data/stops"

function NearbyStops() {
  return (
    <section className="absolute inset-x-0 bottom-0 z-30 rounded-t-[28px] bg-white px-5 pb-5 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sm:bottom-6 sm:left-1/2 sm:right-auto sm:w-full sm:max-w-xl sm:-translate-x-1/2 sm:rounded-[28px] sm:px-6">

      {/* MOBILE HANDLE */}

      <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-neutral-200 sm:hidden" />

      {/* HEADER */}

      <div className="mb-4 flex items-center justify-between">

        <div>

          <div className="flex items-center gap-2">
            <LocateFixed size={14} />

            <p className="text-sm font-semibold">
              Nearby taxi stops
            </p>
          </div>

          <p className="mt-1 text-xs text-neutral-400">
            Based on your location
          </p>

        </div>

        <button
          className="text-xs font-medium text-neutral-500 transition hover:text-neutral-950"
        >
          View all
        </button>

      </div>

      {/* STOPS */}

      <div>

        {taxiStops.slice(0, 2).map((stop) => (
          <button
            key={stop.id}
            className="flex w-full items-center gap-3 border-b border-neutral-100 py-3 text-left last:border-0"
          >

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm">
              🚐
            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-sm font-medium">
                {stop.name}
              </p>

              <p className="mt-1 text-xs text-neutral-400">
                {stop.distance} · {stop.walkingMinutes} min walk
              </p>

            </div>

            <ArrowRight
              size={15}
              className="text-neutral-400"
            />

          </button>
        ))}

      </div>

    </section>
  )
}

export default NearbyStops