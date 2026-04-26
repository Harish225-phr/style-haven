import { motion } from "framer-motion";
import l1 from "@/assets/look-1.jpg";
import l2 from "@/assets/look-2.jpg";
import l3 from "@/assets/look-3.jpg";
import l4 from "@/assets/look-4.jpg";

export function Lookbook() {
  return (
    <section id="lookbook" className="py-20 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">
              — Lookbook
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">
              Worn in <span className="italic">the wild</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline link-luxe text-[12px] tracking-luxe uppercase">
            See All Stories
          </a>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-5 auto-rows-[180px] md:auto-rows-[260px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="col-span-7 row-span-2 img-zoom relative"
          >
            <img src={l1} alt="Monochrome look" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute bottom-5 left-5 text-primary-foreground font-display text-2xl">Look 01 — Noir</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-5 row-span-1 img-zoom relative"
          >
            <img src={l2} alt="Knit fabric detail" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-5 row-span-1 img-zoom relative"
          >
            <img src={l4} alt="Blush blazer" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 img-zoom relative"
          >
            <img src={l3} alt="Street style couple" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <span className="text-[10px] tracking-luxe uppercase opacity-80">Story 04</span>
              <p className="font-display text-2xl md:text-3xl mt-1">City in Cashmere</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
