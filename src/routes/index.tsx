import { createFileRoute } from "@tanstack/react-router";
import { Announcement } from "@/components/site/Announcement";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { Products } from "@/components/site/Products";
import { Featured } from "@/components/site/Featured";
import { WhyUs } from "@/components/site/WhyUs";
import { Lookbook } from "@/components/site/Lookbook";
import { Offers } from "@/components/site/Offers";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUXE — Premium Unisex Fashion | Men & Women Clothing" },
      {
        name: "description",
        content:
          "LUXE is a premium unisex fashion brand. Discover trendy, comfortable and high-quality clothing for men and women — dresses, suits, shirts, denim and more.",
      },
      { property: "og:title", content: "LUXE — Style That Defines You" },
      {
        property: "og:description",
        content: "Premium unisex fashion crafted for the modern man and woman.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Announcement />
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Featured />
      <WhyUs />
      <Lookbook />
      <Offers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
