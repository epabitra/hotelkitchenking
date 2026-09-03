import { restaurant } from "../data/restaurant";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Icon from "./Icon";

export default function LocationSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Hotel Kitchen King"
          description="Located on Tatabenz to Kamapalli Road, Berhampur, Odisha."
        />

        <div className="mt-12 grid gap-6 overflow-hidden rounded-3xl border border-green-600/10 bg-white shadow-sm lg:grid-cols-2">
          <div className="h-72 w-full lg:h-full">
            <iframe
              title="Hotel Kitchen King location map"
              src={restaurant.mapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 sm:p-10">
            <div className="flex items-start gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-600/10 text-green-700">
                <Icon name="mapPin" className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-green-900">Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{restaurant.address.full}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-600/10 text-green-700">
                <Icon name="phone" className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-green-900">Phone</h3>
                <a href={restaurant.phoneHref} className="mt-1 block text-sm font-medium text-ink-soft hover:text-green-700">
                  {restaurant.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={restaurant.mapsDirectionsUrl} external icon="directions">
                Get Directions
              </Button>
              <Button href={restaurant.phoneHref} variant="outline" icon="phone">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
