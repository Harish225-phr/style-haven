import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aanya Mehta",
    role: "Stylist · Mumbai",
    text: "The fabric drape is unreal. I've reordered three times — every piece feels considered, never trend-chasing.",
  },
  {
    name: "Rohan Kapoor",
    role: "Architect · Bengaluru",
    text: "Finally a brand where the menswear feels as elevated as the womenswear. The linen shirt is a daily staple.",
  },
  {
    name: "Sara Linde",
    role: "Editor · Copenhagen",
    text: "Minimalism done with warmth. LUXE has replaced half my wardrobe and I haven't looked back.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/40">
      <div className="container-luxe">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">— Loved by</span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            Words from <span className="italic">our clients</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 border border-border hover:border-primary transition-colors"
            >
              <div className="flex gap-0.5 text-foreground mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-xl md:text-2xl leading-snug">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground tracking-wide uppercase">
                  {r.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
