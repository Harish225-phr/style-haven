const items = [
  "New Arrivals",
  "Crafted in Italy",
  "Editorial Fits",
  "Worldwide Shipping",
  "Limited Drops",
  "Conscious Fabrics",
  "Hand Finished",
  "Free Returns",
];

export function MarqueeBand() {
  const loop = [...items, ...items, ...items];
  return (
    <section className="bg-background border-y border-border py-6 overflow-hidden select-none">
      <div className="marquee-3d items-center">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-3xl md:text-5xl italic tracking-tight">
              {t}
            </span>
            <span className="h-2 w-2 rounded-full bg-blush" />
          </span>
        ))}
      </div>
    </section>
  );
}
