import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import FoodPhilosophySection from "../components/FoodPhilosophySection";
import AmbienceSection from "../components/AmbienceSection";
import ReviewsSection from "../components/ReviewsSection";
import LocationSection from "../components/LocationSection";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Hotel Kitchen King | Pure Vegetarian Restaurant in Berhampur",
    "Hotel Kitchen King is a pure vegetarian restaurant on Tatabenz to Kamapalli Road, Berhampur, Odisha — no onion, no garlic, all year round.",
  );

  return (
    <>
      <Hero />
      <AboutSummary />
      <FoodPhilosophySection />
      <AmbienceSection />
      <ReviewsSection />
      <CTASection
        title="Hungry for Pure Vegetarian Food?"
        description="Explore our tiffin and meal offerings, made without onion or garlic, all year round."
        primaryLabel="Explore Our Menu"
      />
      <LocationSection />
    </>
  );
}
