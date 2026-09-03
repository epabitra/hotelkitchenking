import { NavLink } from "react-router-dom";
import { restaurant } from "../data/restaurant";
import Icon from "./Icon";

type Action =
  | { kind: "link"; to: string; label: string; icon: "phone" | "directions" | "utensils" }
  | { kind: "external"; href: string; label: string; icon: "phone" | "directions" | "utensils" };

const actions: Action[] = [
  { kind: "external", href: restaurant.phoneHref, label: "Call", icon: "phone" },
  { kind: "external", href: restaurant.mapsDirectionsUrl, label: "Directions", icon: "directions" },
  { kind: "link", to: "/menu", label: "Menu", icon: "utensils" },
];

export default function MobileActionBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-green-900/10 bg-cream/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Quick actions"
    >
      {actions.map((action) =>
        action.kind === "link" ? (
          <NavLink
            key={action.label}
            to={action.to}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-semibold ${
                isActive ? "text-green-800" : "text-ink-soft"
              }`
            }
          >
            <Icon name={action.icon} className="size-5" />
            {action.label}
          </NavLink>
        ) : (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ink-soft"
          >
            <Icon name={action.icon} className="size-5" />
            {action.label}
          </a>
        ),
      )}
    </nav>
  );
}
