import vegRiceMeal from "../assets/images/food/veg-rice-meal.jpeg";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Specialties() {
  usePageMeta(
    "Specialties | Hotel Kitchen King",
    "A look at the vegetarian food served at Hotel Kitchen King, prepared without onion or garlic.",
  );

  return (
    <>
      <PageHeader
        eyebrow="From Our Kitchen"
        title="Our Specialties"
        description="A glimpse of the vegetarian food we serve, prepared without onion or garlic."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="overflow-hidden rounded-3xl border border-green-600/10 bg-white shadow-sm shadow-green-900/5 lg:grid lg:grid-cols-2">
            <img
              src={vegRiceMeal}
              alt="Vegetarian rice meal with curry and accompaniments at Hotel Kitchen King"
              className="h-72 w-full object-cover lg:h-full"
            />
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="inline-block w-fit rounded-full bg-green-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                Meals / Thali
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-green-900 sm:text-3xl">
                Vegetarian Rice Meal
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                A wholesome vegetarian meal, prepared without onion or
                garlic, as with everything else in our kitchen.
              </p>
              <div className="mt-6">
                <Button to="/menu" icon="utensils">
                  View Menu
                </Button>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm text-ink-soft">
            We&rsquo;ll feature more of our specialties here as we confirm
            details with the kitchen. The best way to explore what we serve
            today is to visit us or give us a call.
          </p>
        </div>
      </section>

      <CTASection
        title="Come Taste It Yourself"
        description="Visit Hotel Kitchen King in Berhampur for the full experience."
        primaryLabel="Visit Us"
        primaryTo="/contact"
        primaryIcon="mapPin"
      />
    </>
  );
}
