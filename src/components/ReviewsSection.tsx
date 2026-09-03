import { restaurant } from "../data/restaurant";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import Icon from "./Icon";

export default function ReviewsSection() {
  const { rating, reviewCount, profileUrl } = restaurant.google;
  const hasProfile = rating !== null && profileUrl !== null;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Guests Are Saying"
          description={
            hasProfile
              ? "Reviews from our Google Business Profile."
              : "Our Google reviews will appear here once our business profile is verified and linked."
          }
        />

        <div className="mt-12 rounded-3xl border border-green-600/10 bg-white p-8 text-center sm:p-12">
          {hasProfile ? (
            <div className="flex flex-col items-center gap-2">
              <span className="font-display text-4xl font-bold text-green-900">
                {rating?.toFixed(1)} / 5
              </span>
              <span className="text-sm text-ink-soft">{reviewCount}+ Reviews on Google</span>
            </div>
          ) : (
            <>
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-600">
                <Icon name="quote" className="size-7" />
              </span>
              <p className="mx-auto mt-5 max-w-md text-balance text-ink-soft">
                We haven&rsquo;t linked our verified Google reviews here yet. In the
                meantime, the best way to know us is to visit &mdash; or give us a
                call.
              </p>
            </>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {hasProfile && profileUrl && (
              <Button href={profileUrl} external icon="arrowRight">
                View Google Reviews
              </Button>
            )}
            <Button href={restaurant.mapsDirectionsUrl} external variant="outline" icon="directions">
              Get Directions
            </Button>
            <Button href={restaurant.phoneHref} variant="outline" icon="phone">
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
