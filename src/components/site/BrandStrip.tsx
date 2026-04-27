const brands = [
  "VOGUE",
  "ELLE",
  "GQ",
  "HARPER'S BAZAAR",
  "L'OFFICIEL",
  "COSMOPOLITAN",
  "FORBES",
  "GRAZIA",
];

export function BrandStrip() {
  const loop = [...brands, ...brands, ...brands];
  return (
    <section className="bg-background border-y border-border py-7 overflow-hidden">
      <div className="container-luxe text-center mb-4">
        <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">
          — As featured in
        </span>
      </div>
      <div className="marquee-3d items-center">
        {loop.map((b, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl tracking-[0.18em] text-foreground/55 hover:text-foreground transition-colors"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
