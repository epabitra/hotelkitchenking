import heroStorefront from "../assets/images/hero/hero-storefront.jpg";
import { restaurant } from "../data/restaurant";
import Button from "./Button";
import TrustBadges from "./TrustBadges";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-900">
      <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 size-96 rounded-full bg-green-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="order-2 lg:order-1">
          <span className="inline-block rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Berhampur, Odisha
          </span>

          <h1 className="text-balance mt-5 font-display text-4xl font-bold leading-[1.1] text-cream sm:text-5xl lg:text-[3.25rem]">
            Hotel Kitchen King
          </h1>
          <p className="text-balance mt-3 font-display text-xl italic text-gold-300 sm:text-2xl">
            {restaurant.tagline}
          </p>
          <p className="text-balance mt-5 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
            {restaurant.supportingLine}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/menu" variant="secondary" icon="utensils">
              View Menu
            </Button>
            <Button href={restaurant.phoneHref} icon="phone" className="bg-cream text-green-900 hover:bg-cream/90">
              Call Now
            </Button>
            <Button
              href={restaurant.mapsDirectionsUrl}
              external
              variant="outlineOnDark"
              icon="directions"
            >
              Get Directions
            </Button>
          </div>

          <div className="mt-10 max-w-md">
            <TrustBadges variant="dark" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold-400/30" />
            <img
              src={heroStorefront}
              alt="Hotel Kitchen King storefront, a pure vegetarian restaurant in Berhampur"
              className="relative w-full rounded-3xl object-cover shadow-2xl shadow-black/40"
              width={1080}
              height={1440}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
