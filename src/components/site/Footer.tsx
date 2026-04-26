import { InstagramIcon, FacebookIcon, YoutubeIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const Instagram = InstagramIcon;
const Facebook = FacebookIcon;
const Youtube = YoutubeIcon;
const Mail = MailIcon;
const Phone = PhoneIcon;
const MapPin = MapPinIcon;

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-luxe py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <span className="font-display text-4xl">
            LUXE<span className="text-blush">.</span>
          </span>
          <p className="mt-4 text-primary-foreground/70 font-light max-w-xs">
            Premium unisex fashion for those who dress with intent.
          </p>
          <div className="mt-8 space-y-3 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> hello@luxe.fashion</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> 24 Linking Road, Mumbai</p>
          </div>
          <div className="flex gap-3 mt-8">
            {[Instagram, Facebook, Youtube].map((Ic, i) => (
              <a key={i} href="#" aria-label="social" className="h-10 w-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-blush hover:text-primary hover:border-blush transition">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Shop</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><a href="#women" className="hover:text-primary-foreground">Women</a></li>
            <li><a href="#men" className="hover:text-primary-foreground">Men</a></li>
            <li><a href="#new" className="hover:text-primary-foreground">New Arrivals</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Sale</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-5">Help</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-primary-foreground">Shipping</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Returns</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Size Guide</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Track Order</a></li>
            <li><a href="#" className="hover:text-primary-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-5">Brand</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-primary-foreground">Our Story</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Sustainability</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Terms</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} LUXE Fashion. All rights reserved.</p>
          <p>Powered by <span className="text-primary-foreground">TechHim Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
