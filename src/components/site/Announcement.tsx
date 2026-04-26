export function Announcement() {
  const items = [
    "Free Shipping on orders over $99",
    "Flat 20% Off on First Order — code LUXE20",
    "New Arrivals — Spring Edit",
    "Easy 30-Day Returns",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden text-[11px] tracking-luxe uppercase">
      <div className="marquee">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t}
            <span className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
