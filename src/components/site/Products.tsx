import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import dress from "@/assets/p-dress.jpg";
import suit from "@/assets/p-suit.jpg";
import top from "@/assets/p-top.jpg";
import ethnic from "@/assets/p-ethnic.jpg";
import tshirt from "@/assets/p-tshirt.jpg";
import shirt from "@/assets/p-shirt.jpg";
import jeans from "@/assets/p-jeans.jpg";
import casual from "@/assets/p-casual.jpg";

type P = {
  name: string;
  cat: "Women" | "Men";
  type: string;
  price: number;
  old?: number;
  img: string;
  tag?: string;
};

const products: P[] = [
  { name: "Crepe Wrap Midi Dress", cat: "Women", type: "Dresses", price: 129, old: 159, img: dress, tag: "New" },
  { name: "Tailored Wool Blazer Suit", cat: "Women", type: "Suits", price: 289, img: suit },
  { name: "Silk Button-Down Top", cat: "Women", type: "Tops", price: 89, img: top },
  { name: "Embroidered Anarkali", cat: "Women", type: "Ethnic", price: 219, old: 269, img: ethnic, tag: "-20%" },
  { name: "Essential Cotton Tee", cat: "Men", type: "T-Shirts", price: 39, img: tshirt },
  { name: "Linen Resort Shirt", cat: "Men", type: "Shirts", price: 79, img: shirt, tag: "New" },
  { name: "Slim-Fit Indigo Denim", cat: "Men", type: "Jeans", price: 119, img: jeans },
  { name: "Oversized Hoodie Set", cat: "Men", type: "Casual", price: 149, old: 179, img: casual },
];

const filters = ["All", "Women", "Men", "Dresses", "Suits", "Tops", "Ethnic", "T-Shirts", "Shirts", "Jeans", "Casual"];

export function Products() {
  const [active, setActive] = useState("All");

  const list = products.filter(
    (p) => active === "All" || p.cat === active || p.type === active,
  );

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/40">
      <div className="container-luxe">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">
            — Featured Pieces
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            Shop the <span className="italic">Season</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-light">
            Hand-picked silhouettes designed to layer, last and define your
            personal aesthetic.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 text-[11px] tracking-luxe uppercase border transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div id="men" className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className="group"
            >
              <div className="relative img-zoom aspect-[4/5] bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] tracking-luxe uppercase px-2.5 py-1">
                    {p.tag}
                  </span>
                )}
                <button
                  aria-label="Wishlist"
                  className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center hover:bg-blush hover:text-primary transition-all"
                >
                  <Heart className="h-4 w-4" />
                </button>

                {/* Hover actions */}
                <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="flex-1 bg-primary text-primary-foreground py-3 text-[11px] tracking-luxe uppercase flex items-center justify-center gap-2 hover:bg-foreground/90">
                    <ShoppingBag className="h-3.5 w-3.5" /> Add
                  </button>
                  <button
                    aria-label="Quick view"
                    className="h-auto px-4 bg-background text-foreground hover:bg-blush flex items-center justify-center"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">
                    {p.cat} · {p.type}
                  </span>
                  <h3 className="font-display text-lg mt-1 leading-tight">
                    {p.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-medium">${p.price}</span>
                  {p.old && (
                    <span className="block text-xs text-muted-foreground line-through">
                      ${p.old}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div id="new" className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-primary px-10 py-4 text-[12px] tracking-luxe uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            View Full Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
