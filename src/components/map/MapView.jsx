import { taxiStops } from "../../data/stops"

function Map() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#e8e8e5]">

      {/* MAP GRID */}
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

      {/* ROADS */}
      <div className="absolute left-[15%] top-0 h-full w-px rotate-[18deg] bg-white" />

      <div className="absolute left-[48%] top-0 h-full w-px -rotate-[12deg] bg-white" />

      <div className="absolute left-0 top-[35%] h-px w-full rotate-[8deg] bg-white" />

      <div className="absolute left-0 top-[65%] h-px w-full -rotate-[5deg] bg-white" />

      {/* TAXI STOPS */}
      {taxiStops.map((stop, index) => (
        <button
          key={stop.id}
          className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm shadow-md ring-1 ring-black/5 transition hover:scale-110"
          style={{
            left: `${20 + (index * 13) % 65}%`,
            top: `${22 + (index * 17) % 55}%`,
          }}
          aria-label={stop.name}
        >
          🚐
        </button>
      ))}

      {/* MAP LABEL */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral-400">
          Johannesburg
        </span>
      </div>

    </div>
  )
}

export default Map