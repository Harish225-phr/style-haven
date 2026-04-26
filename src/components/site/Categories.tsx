import { motion } from "framer-motion";
import women from "@/assets/cat-women.jpg";
import men from "@/assets/cat-men.jpg";
import nw from "@/assets/cat-new.jpg";
import trend from "@/assets/cat-trend.jpg";

const cats = [
  { title: "Women", subtitle: "Soft silhouettes", img: women, href: "#women", span: "md:row-span-2" },
  { title: "Men", subtitle: "Crafted essentials", img: men, href: "#men", span: "" },
  { title: "New Arrivals", subtitle: "Just landed", img: nw, href: "#new", span: "" },
  { title: "Trending", subtitle: "Most loved", img: trend, href: "#trend", span: "md:col-span-2" },
];

export function Categories() {
  return (
    <section id="women" className="py-20 md:py-32 bg-background">
      <div className="container-luxe">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">
              — The Edit
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-3">
              Shop by <span className="italic">Collection</span>
            </h2>
          </div>
          <a href="#products" className="hidden md:inline-flex link-luxe text-[12px] tracking-luxe uppercase">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-5 md:auto-rows-[320px]">
          {cats.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative img-zoom bg-muted ${c.span} ${
                i === 0 ? "md:row-span-2 h-[460px] md:h-auto" : "h-[320px] md:h-auto"
              }`}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 group-hover:from-black/70 transition-all duration-500" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-primary-foreground">
                <span className="text-[10px] tracking-luxe uppercase opacity-80">
                  {c.subtitle}
                </span>
                <h3 className="font-display text-3xl md:text-4xl mt-1 flex items-center gap-3">
                  {c.title}
                  <span className="inline-block h-px w-0 group-hover:w-12 bg-primary-foreground transition-all duration-500" />
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
