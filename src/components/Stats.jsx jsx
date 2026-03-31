function Stats() {
  const items = [
    ["50K+", "Active Users"],
    ["200+", "Premium Tools"],
    ["4.9", "Rating"],
  ];

  return (
    <div className="stats-grad text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map(([n, l], i) => (
            <div
              key={l}
              className={`py-10 md:py-14 text-center ${i < 2 ? "border-b md:border-b-0 md:border-r border-white/25" : ""}`}
            >
              <div className="text-5xl md:text-6xl font-extrabold">{n}</div>
              <div className="text-sm md:text-base font-medium opacity-85 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;