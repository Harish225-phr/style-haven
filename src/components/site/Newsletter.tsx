import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="container-luxe max-w-3xl text-center">
        <span className="text-[11px] tracking-luxe uppercase text-foreground/70">— Stay in the loop</span>
        <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
          Get the latest <span className="italic">drops &amp; edits</span>
        </h2>
        <p className="text-foreground/70 mt-4 font-light">
          Join our list for early access, private sales and 10% off your first order.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex items-stretch border-b border-foreground max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-transparent py-4 px-1 text-base outline-none placeholder:text-foreground/50"
          />
          <button
            type="submit"
            className="px-2 py-4 hover:translate-x-1 transition-transform"
            aria-label="Subscribe"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
        <p className="text-[11px] tracking-wide text-foreground/50 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
