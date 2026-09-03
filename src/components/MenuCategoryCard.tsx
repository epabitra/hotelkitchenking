import type { MenuCategory } from "../data/menu";
import Icon from "./Icon";

export default function MenuCategoryCard({ category }: { category: MenuCategory }) {
  return (
    <div className="rounded-2xl border border-green-600/10 bg-white p-6 shadow-sm shadow-green-900/5 sm:p-7">
      <span className="flex size-12 items-center justify-center rounded-xl bg-green-600/10 text-green-700">
        <Icon name="utensils" className="size-6" />
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold text-green-900">{category.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{category.blurb}</p>

      {category.items.length > 0 ? (
        <ul className="mt-5 space-y-3 border-t border-green-600/10 pt-4">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-4 text-sm">
              <span className="font-medium text-green-900">
                {item.name}
                {item.popular && (
                  <span className="ml-2 rounded-full bg-gold-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold-600">
                    Popular
                  </span>
                )}
              </span>
              {item.price && <span className="whitespace-nowrap text-ink-soft">₹{item.price}</span>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 border-t border-green-600/10 pt-4 text-sm font-medium text-gold-600">
          Ask our staff for today&rsquo;s {category.name.toLowerCase()} selection.
        </p>
      )}
    </div>
  );
}
