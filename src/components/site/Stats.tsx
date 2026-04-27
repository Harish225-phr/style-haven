import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 80, suffix: "K+", label: "Happy Customers" },
  { value: 250, suffix: "+", label: "Premium Designs" },
  { value: 32, suffix: "", label: "Countries Shipped" },
  { value: 4.9, suffix: "/5", label: "Average Rating" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const display = value % 1 === 0 ? Math.round(n).toString() : n.toFixed(1);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-foreground text-background py-20 md:py-28 relative overflow-hidden">
      {/* subtle moving accents */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush/20 blur-3xl float-y-slow" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-beige/20 blur-3xl float-y" />

      <div className="container-luxe relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-5xl md:text-7xl leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[11px] tracking-luxe uppercase text-background/70">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
