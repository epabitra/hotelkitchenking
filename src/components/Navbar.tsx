import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { restaurant } from "../data/restaurant";
import Icon from "./Icon";
import Button from "./Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/food-philosophy", label: "Food Philosophy" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-green-900/10 bg-cream/95 backdrop-blur"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-full bg-green-600 font-display text-lg font-bold text-cream">
            KK
          </span>
          <span className="leading-tight">
            <span className="block whitespace-nowrap font-display text-lg font-semibold text-green-900">
              Hotel Kitchen King
            </span>
            <span className="hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-600 xl:block">
              Pure Veg &middot; No Onion &middot; No Garlic
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium transition-colors xl:px-3.5 ${
                  isActive
                    ? "bg-green-600/10 text-green-800"
                    : "text-ink-soft hover:bg-green-600/10 hover:text-green-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={restaurant.phoneHref} icon="phone" className="!py-2.5">
            Call Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-green-800 hover:bg-green-600/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="size-6" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-green-900/10 bg-cream px-5 pb-5 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-green-600/10 text-green-800"
                      : "text-ink-soft hover:bg-green-600/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Button href={restaurant.phoneHref} icon="phone" className="mt-4 w-full">
            Call Now
          </Button>
        </nav>
      )}
    </header>
  );
}
