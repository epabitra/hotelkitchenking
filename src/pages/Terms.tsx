import PageHeader from "../components/PageHeader";
import { restaurant } from "../data/restaurant";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Terms() {
  usePageMeta("Terms & Conditions | Hotel Kitchen King");

  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-sm leading-relaxed text-ink-soft sm:px-8 sm:text-base">
          <p>
            These Terms & Conditions govern your use of this website,
            operated on behalf of {restaurant.name}, {restaurant.address.full}.
            By using this website, you agree to these terms.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Website Information</h2>
            <p className="mt-3">
              Information on this website — including menu categories,
              descriptions, and images — is provided for general reference.
              Menu items, prices, and offerings at the restaurant may vary
              from what is described here; please confirm details directly
              with our staff or by phone.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">No Online Ordering or Reservations</h2>
            <p className="mt-3">
              This website does not currently process orders, payments, or
              table reservations. The contact form and phone number are
              provided for enquiries only.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Intellectual Property</h2>
            <p className="mt-3">
              Photographs, branding, and content on this website belong to{" "}
              {restaurant.name} unless otherwise noted, and may not be
              reused without permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Limitation of Liability</h2>
            <p className="mt-3">
              While we aim to keep information on this website accurate, we
              do not guarantee that all content is free of errors or fully
              up to date at all times.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Contact</h2>
            <p className="mt-3">
              For questions about these terms, please call{" "}
              <a href={restaurant.phoneHref} className="font-semibold text-green-700 hover:underline">
                {restaurant.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
