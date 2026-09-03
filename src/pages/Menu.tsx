import { menuCategories } from "../data/menu";
import { menuHighlights, type MealTime } from "../data/menuHighlights";
import { restaurant } from "../data/restaurant";
import PageHeader from "../components/PageHeader";
import MenuCategoryCard from "../components/MenuCategoryCard";
import MenuHighlightCard from "../components/MenuHighlightCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Icon from "../components/Icon";
import { usePageMeta } from "../hooks/usePageMeta";

const mealTimes: MealTime[] = ["Breakfast", "Lunch & Dinner"];

export default function Menu() {
  usePageMeta(
    "Menu | Hotel Kitchen King",
    "Explore the tiffin and meals offered at Hotel Kitchen King, a pure vegetarian restaurant in Berhampur — no onion, no garlic.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="Pure Vegetarian, Every Time"
        description="Every dish on our menu is prepared without onion or garlic, throughout the year."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {menuCategories.map((category) => (
              <MenuCategoryCard key={category.slug} category={category} />
            ))}
          </div>

          {restaurant.cateringAvailable && (
            <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-gold-400/30 bg-gold-400/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-3 sm:items-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-gold-600">
                  <Icon name="sparkles" className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-green-900">
                    Catering Service Available
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    Planning an event? Call us to discuss pure vegetarian catering.
                  </p>
                </div>
              </div>
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-cream hover:bg-green-700"
              >
                <Icon name="phone" className="size-4" />
                {restaurant.phoneDisplay}
              </a>
            </div>
          )}

          <p className="mt-10 text-center text-sm text-ink-soft">
            Menu items and prices will be added here as our official menu is
            confirmed. For the full menu today, please call us or ask our
            staff when you visit.
          </p>
        </div>
      </section>

      <section className="bg-cream-dark/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Breakfast, Lunch & Dinner"
            title="A Few Favorites"
            description="Common vegetarian dishes across the day — shown here as illustrations while we photograph the real thing."
          />

          {mealTimes.map((meal) => (
            <div key={meal} className="mt-12 first:mt-12">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">{meal}</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {menuHighlights
                  .filter((item) => item.meal === meal)
                  .map((item) => (
                    <MenuHighlightCard key={item.name} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Prefer to See the Full Menu in Person?"
        description="Visit us on Tatabenz to Kamapalli Road, Berhampur, or call ahead."
        primaryLabel="Visit Us"
        primaryTo="/contact"
        primaryIcon="mapPin"
      />
    </>
  );
}
