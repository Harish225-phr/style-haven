import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTouchOrReducedMotion } from "@/hooks/use-touch-device";
import s1 from "@/assets/slide-1.jpg";
import s2 from "@/assets/slide-2.jpg";
import s3 from "@/assets/slide-3.jpg";

const slides = [
  {
    img: s1,
    eyebrow: "Spring · Summer 2025",
    title: ["Style That", "Defines You."],
    sub: "Premium silhouettes crafted in flowing silk & crepe — for the modern woman.",
    cta: "Shop Women",
    href: "#women",
    accent: "from-amber-900/55",
  },
  {
    img: s2,
    eyebrow: "The Tailored Edit",
    title: ["Sharp. Refined.", "Effortless."],
    sub: "Italian wool suiting and elevated essentials engineered for the modern man.",
    cta: "Shop Men",
    href: "#men",
    accent: "from-black/65",
  },
  {
    img: s3,
    eyebrow: "His & Hers Capsule",
    title: ["Designed", "to be Worn."],
    sub: "Couple-coordinated cashmere — soft neutrals, golden hour, every day.",
    cta: "Shop The Capsule",
    href: "#products",
    accent: "from-stone-800/55",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const reduced = useTouchOrReducedMotion();
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % total), 6500);
    return () => clearInterval(id);
  }, [total, paused]);

  const go = (dir: number) => setI((v) => (v + dir + total) % total);

  // Swipe handlers for touch
  const onTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
    // Resume autoplay shortly after interaction
    setTimeout(() => setPaused(false), 4000);
  };

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-beige md:perspective-1500"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      <div className="relative h-[80vh] min-h-[520px] max-h-[920px] md:h-[92vh] md:min-h-[640px] w-full">
        {/* Slides */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            {slides.map(
              (s, idx) =>
                idx === i && (
                  <motion.div
                    key={idx}
                    initial={
                      reduced
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 1.08, rotateY: 8 }
                    }
                    animate={
                      reduced
                        ? { opacity: 1 }
                        : { opacity: 1, scale: 1, rotateY: 0 }
                    }
                    exit={
                      reduced
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 1.04, rotateY: -6 }
                    }
                    transition={{
                      duration: reduced ? 0.6 : 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 md:preserve-3d"
                    aria-hidden={idx !== i}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${total}`}
                  >
                    <img
                      src={s.img}
                      alt={s.title.join(" ")}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${s.accent} via-black/15 to-transparent`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* Floating decorative glass orb */}
        <div className="absolute top-24 right-10 hidden lg:block float-y">
          <div className="glass rounded-full h-40 w-40 flex flex-col items-center justify-center text-primary-foreground">
            <span className="text-[10px] tracking-luxe uppercase opacity-80">Drop</span>
            <span className="font-display text-4xl">02</span>
            <span className="text-[10px] tracking-luxe uppercase opacity-80">Live Now</span>
          </div>
        </div>

        <div className="absolute top-1/2 right-24 hidden lg:flex spin-slow">
          <svg viewBox="0 0 200 200" className="h-32 w-32 text-primary-foreground/70">
            <defs>
              <path id="circ" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
            </defs>
            <text fontSize="13" letterSpacing="6" fill="currentColor" fontFamily="Poppins">
              <textPath href="#circ">
                LUXE · STYLE · 2025 · LUXE · STYLE · 2025 · LUXE ·
              </textPath>
            </text>
          </svg>
        </div>

        {/* Content */}
        <div className="container-luxe relative z-10 flex h-full flex-col justify-end pb-20 md:justify-center md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-primary-foreground"
            >
              <span className="inline-block text-[11px] tracking-luxe uppercase mb-6 border border-primary-foreground/40 px-3 py-1.5 backdrop-blur-sm">
                {slides[i].eyebrow}
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-medium">
                {slides[i].title[0]}
                <br />
                <span className="italic font-light">{slides[i].title[1]}</span>
              </h1>
              <p className="mt-6 max-w-md text-base md:text-lg text-primary-foreground/85 font-light">
                {slides[i].sub}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={slides[i].href}
                  className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-[12px] tracking-luxe uppercase font-medium hover:bg-blush hover:text-primary transition-all duration-500"
                >
                  {slides[i].cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#lookbook"
                  className="group inline-flex items-center gap-3 border border-primary-foreground/60 text-primary-foreground px-8 py-4 text-[12px] tracking-luxe uppercase font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-500"
                >
                  Watch Lookbook
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 flex items-center gap-3 text-primary-foreground">
          <button
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="h-11 w-11 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary flex items-center justify-center transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next slide"
            className="h-11 w-11 rounded-full border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary flex items-center justify-center transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="ml-4 flex items-center gap-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === i}
                className="group h-11 flex items-center justify-center px-1"
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ${
                    idx === i
                      ? "w-10 bg-primary-foreground"
                      : "w-5 bg-primary-foreground/40 group-hover:bg-primary-foreground/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20 hidden md:flex flex-col items-end text-primary-foreground/85 text-[11px] tracking-luxe uppercase">
          <span className="font-display text-3xl text-primary-foreground">
            0{i + 1}
            <span className="text-primary-foreground/50"> / 0{total}</span>
          </span>
          <span className="h-px w-16 bg-primary-foreground/40 my-2" />
          <span>Editorial</span>
        </div>
      </div>
    </section>
  );
}
