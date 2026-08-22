import { MapPin, Navigation, Search } from "lucide-react";
import MapView from "../components/map/MapView";

function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-neutral-100">

{/* Map */}
<div className="absolute inset-0">
  <MapView />
</div>

      {/* Logo */}
      <div className="absolute left-4 top-4 z-20">
        <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
          <span className="text-lg font-semibold tracking-tight">
            RIDEWAY
          </span>
        </div>
      </div>


      {/* Search */}
      <div className="absolute left-4 right-4 top-20 z-20 mx-auto max-w-xl">
        <button className="flex w-full items-center gap-3 rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
          <Search className="h-5 w-5 text-neutral-500" />

          <span className="text-sm text-neutral-500">
            Where are you going?
          </span>
        </button>
      </div>


      {/* User location */}
      <button
        className="absolute bottom-28 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
        aria-label="My location"
      >
        <Navigation className="h-5 w-5 text-neutral-700" />
      </button>


      {/* Taxi stop markers */}
      <div className="absolute left-[30%] top-[40%] z-10">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
          <MapPin className="h-4 w-4 text-neutral-700" />
        </div>
      </div>

      <div className="absolute left-[65%] top-[30%] z-10">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
          <MapPin className="h-4 w-4 text-neutral-700" />
        </div>
      </div>


      {/* Nearby stops */}
      <section className="absolute bottom-16 left-0 right-0 z-20 rounded-t-3xl bg-white px-4 pb-5 pt-4 shadow-lg">

        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-neutral-200" />

        <div className="mb-4">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
            Nearby
          </p>

          <h2 className="text-lg font-semibold text-neutral-900">
            Taxi stops
          </h2>
        </div>


        {/* Stop */}
        <button className="flex w-full items-center gap-4 rounded-2xl py-3 text-left">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <MapPin className="h-5 w-5 text-neutral-700" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-neutral-900">
              Bree Taxi Rank
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              850 m · 4 min walk
            </p>
          </div>

          <span className="text-xs font-medium text-neutral-500">
            →
          </span>

        </button>


        {/* Stop */}
        <button className="flex w-full items-center gap-4 rounded-2xl py-3 text-left">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100">
            <MapPin className="h-5 w-5 text-neutral-700" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-neutral-900">
              Noord Taxi Rank
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              1.2 km · 6 min walk
            </p>
          </div>

          <span className="text-xs font-medium text-neutral-500">
            →
          </span>

        </button>

      </section>


      {/* Bottom navigation */}
      <nav className="absolute bottom-0 left-0 right-0 z-30 flex h-16 items-center justify-around border-t border-neutral-200 bg-white">

        <button className="flex flex-col items-center gap-1 text-neutral-900">
          <Navigation className="h-5 w-5" />
          <span className="text-[10px] font-medium">
            Home
          </span>
        </button>

        <button className="flex flex-col items-center gap-1 text-neutral-400">
          <Search className="h-5 w-5" />
          <span className="text-[10px] font-medium">
            Search
          </span>
        </button>

      </nav>

    </main>
  );
}

export default Home;