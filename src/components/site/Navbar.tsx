import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

const links = [
  { label: "Women", href: "#women" },
  { label: "Men", href: "#men" },
  { label: "New", href: "#new" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-16 md:h-20">
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="md:hidden p-2 -ml-2"
        >
          <Menu className="h-5 w-5" />
        </button>

        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-luxe uppercase font-medium">
          {links.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="link-luxe">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="font-display text-2xl md:text-3xl tracking-tight font-semibold"
          aria-label="LUXE home"
        >
          LUXE<span className="text-blush">.</span>
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-luxe uppercase font-medium mr-4">
            {links.slice(3).map((l) => (
              <a key={l.href} href={l.href} className="link-luxe">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="p-2.5 hover:bg-secondary rounded-full transition"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Account"
            className="p-2.5 hover:bg-secondary rounded-full transition hidden sm:inline-flex"
          >
            <User className="h-[18px] w-[18px]" />
          </button>
          <button
            aria-label="Wishlist"
            className="p-2.5 hover:bg-secondary rounded-full transition relative"
          >
            <Heart className="h-[18px] w-[18px]" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-blush text-[10px] font-medium flex items-center justify-center">
              2
            </span>
          </button>
          <button
            aria-label="Cart"
            className="p-2.5 hover:bg-secondary rounded-full transition relative"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-full bg-background border-b border-border animate-fade-in">
          <div className="container-luxe py-6 flex items-center gap-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              autoFocus
              placeholder="Search for dresses, shirts, denim…"
              className="flex-1 bg-transparent text-lg outline-none font-display italic placeholder:text-muted-foreground"
            />
            <button onClick={() => setSearchOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background animate-fade-in md:hidden">
          <div className="container-luxe flex items-center justify-between h-16">
            <span className="font-display text-2xl font-semibold">
              LUXE<span className="text-blush">.</span>
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-luxe flex flex-col gap-6 mt-8 font-display text-4xl">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border pb-4"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
