import { Sparkles, Scissors, Tag, RotateCcw, Truck, ShieldCheck } from "lucide-react";

const items = [
  { icon: Scissors, title: "Premium Fabric", desc: "Sourced silk, crepe & organic cotton." },
  { icon: Sparkles, title: "Latest Designs", desc: "Drops every two weeks, never re-stocked." },
  { icon: Tag, title: "Honest Pricing", desc: "Atelier quality without the markup." },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day no-questions returns, free." },
  { icon: Truck, title: "Fast Delivery", desc: "Express worldwide shipping in 3 days." },
  { icon: ShieldCheck, title: "Trusted Brand", desc: "Loved by 80,000+ style enthusiasts." },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">
            — The LUXE Promise
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            Why Choose <span className="italic">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-background p-8 md:p-10 transition-all duration-500 hover:bg-beige"
            >
              <it.icon className="h-7 w-7 mb-6 transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
              <h3 className="font-display text-xl md:text-2xl">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 font-light">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
