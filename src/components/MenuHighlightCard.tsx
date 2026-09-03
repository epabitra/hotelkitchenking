import type { MenuHighlight } from "../data/menuHighlights";
import DishIllustration from "./DishIllustration";

export default function MenuHighlightCard({ item }: { item: MenuHighlight }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-green-600/10 bg-white shadow-sm shadow-green-900/5">
      <div className="flex justify-center bg-cream-dark/50 p-6">
        <div className="size-24">
          <DishIllustration name={item.illustration} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-green-900">{item.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
      </div>
    </div>
  );
}
