export function Offers() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container-luxe grid md:grid-cols-3 gap-10 md:gap-6 items-center">
        <div className="text-center md:text-left">
          <span className="text-[11px] tracking-luxe uppercase opacity-70">Welcome Offer</span>
          <h3 className="font-display text-3xl md:text-4xl mt-2">
            Flat <span className="italic text-blush">20% Off</span>
            <br />on your first order
          </h3>
        </div>
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-[11px] tracking-luxe uppercase opacity-70">Use code</span>
            <code className="font-display text-3xl border border-primary-foreground/40 px-8 py-3 tracking-[0.3em]">
              LUXE20
            </code>
            <span className="text-xs opacity-60">Free shipping over $99</span>
          </div>
        </div>
        <div className="text-center md:text-right">
          <a
            href="#products"
            className="inline-block bg-primary-foreground text-primary px-10 py-4 text-[12px] tracking-luxe uppercase hover:bg-blush transition"
          >
            Claim Now
          </a>
        </div>
      </div>
    </section>
  );
}
