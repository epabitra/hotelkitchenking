import { Link } from "react-router-dom";
import { restaurant } from "../data/restaurant";
import Icon from "./Icon";

const explore = [
  { to: "/about", label: "About Us" },
  { to: "/food-philosophy", label: "Our Food Philosophy" },
  { to: "/menu", label: "Menu" },
  { to: "/specialties", label: "Specialties" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Customer Reviews" },
];

const support = [
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-green-900 text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-full bg-gold-400 font-display text-lg font-bold text-green-900">
                KK
              </span>
              <span className="font-display text-lg font-semibold text-cream">
                Hotel Kitchen King
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Pure vegetarian food, prepared with no onion and no garlic —
              throughout the year.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {support.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" className="mt-0.5 size-4 shrink-0 text-gold-300" />
                <span>{restaurant.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="phone" className="size-4 shrink-0 text-gold-300" />
                <a href={restaurant.phoneHref} className="transition-colors hover:text-cream">
                  {restaurant.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Hotel Kitchen King. All rights reserved.</p>
          <p>Pure Vegetarian &middot; No Onion &middot; No Garlic &middot; All Year Round</p>
        </div>
      </div>
    </footer>
  );
}
