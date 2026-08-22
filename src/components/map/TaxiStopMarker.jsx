function TaxiStopMarker({ type = "stop" }) {
  const isRank = type === "rank"

  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full
        bg-white
        shadow-md
        ring-1 ring-black/5
        transition-transform
        hover:scale-110
        ${
          isRank
            ? "h-10 w-10 text-base"
            : "h-8 w-8 text-sm"
        }
      `}
    >
      🚐
    </div>
  )
}

export default TaxiStopMarker