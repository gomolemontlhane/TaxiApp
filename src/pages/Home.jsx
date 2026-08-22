import {
  LocateFixed,
  Menu,
  Navigation,
  Search,
  SlidersHorizontal,
} from "lucide-react"

import { taxiStops } from "../data/stops"

function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-neutral-100 text-neutral-950">

      {/* MAP */}
      <section className="absolute inset-0">

        {/* Temporary map background */}
        <div className="absolute inset-0 bg-[#e8e8e5]">

          {/* Decorative map grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(#ffffff 1px, transparent 1px),
                linear-gradient(90deg, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Decorative roads */}
          <div className="absolute left-[15%] top-0 h-full w-px rotate-[18deg] bg-white/90" />
          <div className="absolute left-[48%] top-0 h-full w-px -rotate-[12deg] bg-white/90" />
          <div className="absolute left-0 top-[35%] h-px w-full rotate-[8deg] bg-white/90" />
          <div className="absolute left-0 top-[65%] h-px w-full -rotate-[5deg] bg-white/90" />

        </div>

        {/* MAP LABEL */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
            Johannesburg
          </span>
        </div>

        {/* USER LOCATION */}
        <button
          className="absolute bottom-[32%] left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5"
          aria-label="Your location"
        >
          <span className="absolute h-4 w-4 animate-ping rounded-full bg-black/20" />

          <span className="relative h-3 w-3 rounded-full bg-neutral-950 ring-4 ring-white" />
        </button>

        {/* TAXI STOP MARKERS */}
        <button
          className="absolute left-[25%] top-[32%] flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-md ring-1 ring-black/5"
          aria-label="Taxi stop"
        >
          🚐
        </button>

        <button
          className="absolute right-[22%] top-[42%] flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-md ring-1 ring-black/5"
          aria-label="Taxi stop"
        >
          🚐
        </button>

        <button
          className="absolute left-[60%] top-[24%] flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-md ring-1 ring-black/5"
          aria-label="Taxi stop"
        >
          🚐
        </button>

      </section>

      {/* TOP NAVIGATION */}
      <header className="absolute inset-x-0 top-0 z-20 p-4 sm:p-6">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
              <Navigation size={16} strokeWidth={2.5} />
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

          <button className="group flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-4 text-left shadow-lg shadow-black/5 ring-1 ring-black/5 transition hover:shadow-xl">

            <Search
              size={19}
              className="shrink-0 text-neutral-400 transition group-hover:text-neutral-950"
            />

            <div className="flex-1">
              <p className="text-sm font-medium">
                Where are you going?
              </p>

              <p className="mt-0.5 text-xs text-neutral-400">
                Find the best taxi route
              </p>
            </div>

            <SlidersHorizontal
              size={17}
              className="text-neutral-400"
            />

          </button>

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
      <section className="absolute inset-x-0 bottom-0 z-30 rounded-t-[28px] bg-white px-5 pb-5 pt-3 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] sm:mx-auto sm:max-w-xl sm:rounded-[28px] sm:bottom-6 sm:px-6">

        {/* HANDLE */}
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-neutral-200" />

        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">

          <div>
            <p className="text-sm font-semibold">
              Nearby taxi stops
            </p>

            <p className="mt-1 text-xs text-neutral-400">
              Based on your location
            </p>
          </div>

          <button className="text-xs font-medium text-neutral-500 transition hover:text-neutral-950">
            View all
          </button>

        </div>

        {/* STOP */}
        <button className="flex w-full items-center gap-3 border-b border-neutral-100 py-3 text-left">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm">
            🚐
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">
              Bree Taxi Rank
            </p>

            <p className="mt-1 text-xs text-neutral-400">
              850 m · 4 min walk
            </p>
          </div>

          <span className="text-xs font-medium text-neutral-500">
            →
          </span>

        </button>

        {/* STOP */}
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

    <span className="text-xs font-medium text-neutral-500">
      →
    </span>
  </button>
))}
      </section>

    </main>
  )
}

export default Home