import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-beige">
      <div className="relative h-[88vh] min-h-[600px] max-h-[900px] w-full">
        <img
          src={hero}
          alt="Editorial fashion campaign — man and woman in premium tailored looks"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="container-luxe relative z-10 flex h-full flex-col justify-end pb-16 md:justify-center md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-primary-foreground"
          >
            <span className="inline-block text-[11px] tracking-luxe uppercase mb-6 border border-primary-foreground/40 px-3 py-1.5">
              Spring · Summer Collection 2025
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-medium">
              Style That
              <br />
              <span className="italic font-light">Defines You.</span>
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-primary-foreground/80 font-light">
              Trendy. Comfortable. Premium quality fashion crafted for the
              modern man and woman.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-[12px] tracking-luxe uppercase font-medium hover:bg-blush hover:text-primary transition-all duration-500"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#women"
                className="group inline-flex items-center gap-3 border border-primary-foreground/60 text-primary-foreground px-8 py-4 text-[12px] tracking-luxe uppercase font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-500"
              >
                Explore Collection
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom info bar */}
        <div className="absolute bottom-6 right-6 hidden lg:flex flex-col items-end gap-1 text-primary-foreground/80 text-[11px] tracking-luxe uppercase">
          <span>Look 01 / 24</span>
          <span className="h-px w-12 bg-primary-foreground/50" />
          <span>Editorial</span>
        </div>
      </div>
    </section>
  );
}
