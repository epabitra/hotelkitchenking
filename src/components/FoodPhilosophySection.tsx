import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

const pillars = [
  {
    icon: "ban" as const,
    title: "No Onion",
    description: "No onion is used in our food, throughout the year — not just during festivals or fasting periods.",
  },
  {
    icon: "ban" as const,
    title: "No Garlic",
    description: "No garlic is used in our food, throughout the year, so every dish stays true to this practice.",
  },
  {
    icon: "leaf" as const,
    title: "Pure Vegetarian",
    description: "Hotel Kitchen King is a pure vegetarian kitchen, focused entirely on vegetarian food.",
  },
  {
    icon: "sparkles" as const,
    title: "Thoughtfully Prepared",
    description: "Every dish is prepared with care, in a clean kitchen, for guests who value consistency.",
  },
];

export default function FoodPhilosophySection() {
  return (
    <section className="bg-cream-dark/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Food With a Difference"
          title="Our Food Philosophy"
          description="At Hotel Kitchen King, vegetarian dining comes with a distinctive, year-round commitment."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
