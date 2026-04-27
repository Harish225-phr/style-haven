import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import i1 from "@/assets/insta-1.jpg";
import i2 from "@/assets/insta-2.jpg";
import i3 from "@/assets/insta-3.jpg";
import i4 from "@/assets/insta-4.jpg";
import i5 from "@/assets/insta-5.jpg";
import i6 from "@/assets/insta-6.jpg";

const posts = [
  { img: i1, likes: "12.4k", tilt: "rotate-[-3deg]" },
  { img: i2, likes: "8.9k", tilt: "rotate-[2deg]" },
  { img: i3, likes: "15.2k", tilt: "rotate-[-1deg]" },
  { img: i4, likes: "22.1k", tilt: "rotate-[3deg]" },
  { img: i5, likes: "9.7k", tilt: "rotate-[-2deg]" },
  { img: i6, likes: "6.3k", tilt: "rotate-[1deg]" },
];

export function Instagram3D() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container-luxe">
        <div className="text-center mb-14">
          <span className="text-[11px] tracking-luxe uppercase text-muted-foreground">
            — On Instagram
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-3">
            <span className="italic">@luxe</span>.fashion
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto font-light">
            Tag us with #WearLuxe to be featured on our feed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 perspective-1500">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative aspect-square overflow-hidden bg-muted tilt-card ${p.tilt} hover:rotate-0`}
            >
              <img
                src={p.img}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/55 transition-all duration-500 flex flex-col items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100">
                <Instagram className="h-7 w-7 mb-2" strokeWidth={1.25} />
                <span className="text-[11px] tracking-luxe uppercase">♥ {p.likes}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-primary px-10 py-4 text-[12px] tracking-luxe uppercase font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            <Instagram className="h-4 w-4" /> Follow @luxe.fashion
          </a>
        </div>
      </div>
    </section>
  );
}
