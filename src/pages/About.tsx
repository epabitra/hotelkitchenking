import diningRoomWide from "../assets/images/ambience/dining-room-wide.jpeg";
import warliFolkArtWall from "../assets/images/ambience/warli-folk-art-wall.jpeg";
import heroStorefront from "../assets/images/hero/hero-storefront.jpg";
import PageHeader from "../components/PageHeader";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

const values = [
  {
    icon: "leaf" as const,
    title: "Vegetarian Food",
    description: "Our kitchen is entirely vegetarian — that focus shapes everything we cook.",
  },
  {
    icon: "ban" as const,
    title: "No Onion, No Garlic",
    description: "A distinctive practice followed consistently, throughout the year, in every dish.",
  },
  {
    icon: "shield" as const,
    title: "Clean & Welcoming",
    description: "A dining space kept clean and comfortable for families and regular guests.",
  },
  {
    icon: "sparkles" as const,
    title: "Food Quality",
    description: "Dishes prepared with attention, aiming for consistent taste, visit after visit.",
  },
];

export default function About() {
  usePageMeta(
    "About Us | Hotel Kitchen King",
    "Learn about Hotel Kitchen King, a pure vegetarian restaurant in Berhampur known for its no onion, no garlic kitchen practice.",
  );

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Hotel Kitchen King"
        description="A pure vegetarian restaurant on Tatabenz to Kamapalli Road, Berhampur — built around one consistent idea."
        image={heroStorefront}
        imageAlt="Hotel Kitchen King storefront entrance in Berhampur"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <img
            src={diningRoomWide}
            alt="Dining hall at Hotel Kitchen King"
            className="w-full rounded-3xl object-cover shadow-md shadow-green-900/10"
          />
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Who We Are
            </span>
            <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-green-900 sm:text-4xl">
              Vegetarian Food, Prepared With a Clear Practice
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Hotel Kitchen King is a pure vegetarian restaurant serving
              Berhampur from Tatabenz to Kamapalli Road. We don&rsquo;t
              describe ourselves through invented history or unverifiable
              claims — instead, our identity comes from what we actually do
              in the kitchen every day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              That means no onion and no garlic in our food, throughout the
              year, served in a clean and welcoming space designed for
              comfortable dining. Catering service is also available &mdash;
              call us to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-dark/60 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Values Behind Our Kitchen"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <img
            src={warliFolkArtWall}
            alt="Traditional folk art on the dining hall wall at Hotel Kitchen King"
            className="mx-auto w-full max-w-2xl rounded-3xl object-cover shadow-md shadow-green-900/10"
          />
        </div>
      </section>

      <CTASection
        title="Have Questions About Our Kitchen Practice?"
        description="Read more about what makes our food different, or give us a call."
        primaryLabel="Our Food Philosophy"
        primaryTo="/food-philosophy"
        primaryIcon="leaf"
      />
    </>
  );
}
