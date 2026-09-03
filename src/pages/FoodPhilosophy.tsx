import vegRiceMeal from "../assets/images/food/veg-rice-meal.jpeg";
import PageHeader from "../components/PageHeader";
import FeatureCard from "../components/FeatureCard";
import TrustBadges from "../components/TrustBadges";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

const pillars = [
  {
    icon: "ban" as const,
    title: "No Onion",
    description:
      "Onion is left out of our food entirely — not reduced, not occasional. It simply isn't part of how we cook, all year round.",
  },
  {
    icon: "ban" as const,
    title: "No Garlic",
    description:
      "The same discipline applies to garlic. Every dish across our kitchen follows this practice consistently.",
  },
  {
    icon: "leaf" as const,
    title: "Pure Vegetarian",
    description:
      "Hotel Kitchen King is a pure vegetarian kitchen. Vegetarian food is not a section of our menu — it is the whole menu.",
  },
  {
    icon: "sparkles" as const,
    title: "Thoughtfully Prepared",
    description:
      "We aim for food that tastes complete on its own merits, prepared with care and attention in a clean kitchen.",
  },
];

export default function FoodPhilosophy() {
  usePageMeta(
    "Our Food Philosophy | Hotel Kitchen King",
    "No onion, no garlic, throughout the year — the food philosophy behind Hotel Kitchen King, a pure vegetarian restaurant in Berhampur.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Food With a Difference"
        title="Our Food Philosophy"
        description="At Hotel Kitchen King, vegetarian dining comes with a distinctive, year-round commitment."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <FeatureCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/60 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <img
            src={vegRiceMeal}
            alt="Vegetarian rice meal served at Hotel Kitchen King, prepared without onion or garlic"
            className="w-full rounded-3xl object-cover shadow-md shadow-green-900/10"
          />
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              What This Means for You
            </span>
            <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-green-900 sm:text-4xl">
              Every Plate Follows the Same Practice
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              This isn&rsquo;t a seasonal choice or a special-order request
              — it is how our kitchen runs, every day of the year. Guests
              who avoid onion and garlic for personal, dietary, or religious
              reasons can order anything on our menu with that same
              consistency in mind.
            </p>
            <div className="mt-8 max-w-sm">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Taste the Difference for Yourself"
        description="Visit Hotel Kitchen King in Berhampur, or call ahead to plan your visit."
      />
    </>
  );
}
