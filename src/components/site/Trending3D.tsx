import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useTouchOrReducedMotion } from "@/hooks/use-touch-device";
import dress from "@/assets/p-dress.jpg";
import suit from "@/assets/p-suit.jpg";
import top from "@/assets/p-top.jpg";
import shirt from "@/assets/p-shirt.jpg";

const items = [
  { name: "Crepe Wrap Midi", price: 129, old: 159, img: dress, badge: "Bestseller", rating: 4.9, reviews: 218 },
  { name: "Wool Blazer Suit", price: 289, img: suit, badge: "Editor's Pick", rating: 4.8, reviews: 142 },
  { name: "Silk Button Top", price: 89, img: top, badge: "New In", rating: 5.0, reviews: 89 },
  { name: "Linen Resort Shirt", price: 79, img: shirt, badge: "Limited", rating: 4.9, reviews: 174 },
];

export function Trending3D() {
  const reduced = useTouchOrReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* huge background word */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-10 text-center font-display text-stroke text-foreground/10 leading-none select-none"
        style={{ fontSize: "clamp(120px, 22vw, 360px)" }}
      >
        TRENDING
      </div>

      <div className="container-luxe relative">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">
            — Hot Right Now
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            The <span className="italic">Most Loved</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-light">
            Pieces flying off the rack. Tap to add — hover for depth on desktop.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 md:perspective-1500">
          {items.map((p, i) => (
            <motion.article
              key={p.name}
              initial={
                reduced
                  ? { opacity: 0, y: 20 }
                  : { opacity: 0, y: 40, rotateX: -10 }
              }
              whileInView={
                reduced
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, y: 0, rotateX: 0 }
              }
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduced ? 0.5 : 0.8,
                delay: i * (reduced ? 0.05 : 0.1),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group tilt-card bg-background border border-border rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted tilt-card-inner">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] md:group-hover:scale-110"
                />
                <span className="absolute top-2.5 left-2.5 bg-primary text-primary-foreground text-[10px] tracking-luxe uppercase px-2 py-1 md:shimmer">
                  {p.badge}
                </span>
                <button
                  aria-label={`Add ${p.name} to wishlist`}
                  className="tap-target absolute top-2 right-2 h-10 w-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center active:scale-95 hover:bg-blush transition-all"
                >
                  <Heart className="h-4 w-4" />
                </button>

                {/* Shine sweep — desktop hover only */}
                <div className="hidden md:block pointer-events-none absolute -inset-y-10 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-1000" />

                {/* Add-to-bag: always visible on mobile, hover-reveal on desktop */}
                <div className="absolute inset-x-2 bottom-2 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                  <button
                    aria-label={`Add ${p.name} to bag`}
                    className="tap-target w-full bg-primary text-primary-foreground py-3 text-[11px] tracking-luxe uppercase flex items-center justify-center gap-2 active:bg-foreground/80 hover:bg-foreground/90"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Bag
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-5 tilt-card-inner">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base sm:text-lg leading-tight">
                    {p.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="font-medium text-sm sm:text-base">
                      ${p.price}
                    </span>
                    {p.old && (
                      <span className="block text-xs text-muted-foreground line-through">
                        ${p.old}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
                  <span className="font-medium text-foreground">{p.rating}</span>
                  <span>· {p.reviews} reviews</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
