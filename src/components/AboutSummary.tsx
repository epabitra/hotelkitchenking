import diningRoomWide from "../assets/images/ambience/dining-room-wide.jpeg";
import diningNookSuryaArt from "../assets/images/ambience/dining-nook-surya-art.jpeg";
import Button from "./Button";
import Icon from "./Icon";

const points = [
  "Pure vegetarian food, cooked without onion or garlic",
  "A clean, welcoming dining space in Berhampur",
  "A kitchen practice followed consistently, all year round",
];

export default function AboutSummary() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <img
            src={diningRoomWide}
            alt="Dining hall at Hotel Kitchen King with traditional folk art wall panels"
            className="col-span-2 h-56 w-full rounded-2xl object-cover shadow-md shadow-green-900/10 sm:h-72"
          />
          <img
            src={diningNookSuryaArt}
            alt="A dining table at Hotel Kitchen King"
            className="col-span-2 h-40 w-full rounded-2xl object-cover shadow-md shadow-green-900/10 sm:h-48"
          />
        </div>

        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            About Us
          </span>
          <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-green-900 sm:text-4xl">
            A Pure Vegetarian Kitchen in Berhampur
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Hotel Kitchen King is a pure vegetarian restaurant on Tatabenz to
            Kamapalli Road, Berhampur. What sets our kitchen apart is a
            simple, consistent practice: no onion and no garlic, in any
            dish, throughout the year.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            The result is food that stays true to that discipline every
            single day, served in a clean and welcoming dining space
            designed for families and regulars alike.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm font-medium text-green-900">
                <Icon name="leaf" className="mt-0.5 size-4 shrink-0 text-gold-600" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/about" icon="arrowRight">
              Read Our Story
            </Button>
            <Button to="/food-philosophy" variant="outline">
              Our Food Philosophy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
