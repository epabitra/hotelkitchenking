import { trustBadges } from "../data/restaurant";
import Icon from "./Icon";

export default function TrustBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 ${
        isDark ? "" : ""
      }`}
    >
      {trustBadges.map((badge) => (
        <div
          key={badge.label}
          className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-5 text-center ${
            isDark
              ? "border-cream/15 bg-cream/5 text-cream"
              : "border-green-600/15 bg-white text-green-900"
          }`}
        >
          <span
            className={`flex size-10 items-center justify-center rounded-full ${
              isDark ? "bg-gold-400/20 text-gold-300" : "bg-gold-400/15 text-gold-600"
            }`}
          >
            <Icon name={badge.icon} className="size-5" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.15em] sm:text-sm">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
