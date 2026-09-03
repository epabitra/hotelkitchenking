import { restaurant } from "../data/restaurant";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import BusinessHours from "../components/BusinessHours";
import LocationSection from "../components/LocationSection";
import Icon from "../components/Icon";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Contact() {
  usePageMeta(
    "Contact Us | Hotel Kitchen King",
    "Contact Hotel Kitchen King in Berhampur, Odisha. Call +91 99377 87999 or send us a message.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Call us, send a message, or visit us on Tatabenz to Kamapalli Road, Berhampur."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-6">
            <div className="rounded-2xl border border-green-600/10 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-600/10 text-green-700">
                  <Icon name="phone" className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-green-900">Call Us</h3>
              </div>
              <a
                href={restaurant.phoneHref}
                className="mt-3 block text-lg font-semibold text-green-800 hover:text-green-600"
              >
                {restaurant.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-green-600/10 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-600/10 text-green-700">
                  <Icon name="mapPin" className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-green-900">Address</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{restaurant.address.full}</p>
            </div>

            <BusinessHours />
          </div>

          <div className="rounded-2xl border border-green-600/10 bg-white p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-green-900">Send Us a Message</h3>
            <p className="mt-2 text-sm text-ink-soft">
              We&rsquo;ll get back to you as soon as we can.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
