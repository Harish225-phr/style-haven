import { motion } from "framer-motion";
import feat from "@/assets/feat-1.jpg";

export function Featured() {
  return (
    <section className="bg-beige overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center px-6 md:px-16 py-20 md:py-32"
        >
          <div className="max-w-md">
            <span className="text-[11px] tracking-luxe uppercase text-foreground/70">
              — Featured Edit
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mt-4 leading-[0.95]">
              The Atelier
              <br />
              <span className="italic font-light">Collection</span>
            </h2>
            <p className="mt-6 text-foreground/80 font-light leading-relaxed">
              Sculpted in Italian crepe and finished by hand. A capsule of
              twelve essentials made to outlive the trend cycle.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-primary text-primary-foreground px-8 py-4 text-[12px] tracking-luxe uppercase hover:bg-foreground/90 transition"
              >
                Shop the Edit
              </a>
              <a href="#" className="link-luxe self-center text-[12px] tracking-luxe uppercase">
                Watch Film
              </a>
            </div>
          </div>
        </motion.div>

        <div className="relative img-zoom min-h-[420px] md:min-h-full">
          <img
            src={feat}
            alt="Featured atelier collection"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
