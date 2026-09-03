import PageHeader from "../components/PageHeader";
import { restaurant } from "../data/restaurant";
import { usePageMeta } from "../hooks/usePageMeta";

export default function PrivacyPolicy() {
  usePageMeta("Privacy Policy | Hotel Kitchen King");

  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-sm leading-relaxed text-ink-soft sm:px-8 sm:text-base">
          <p>
            This Privacy Policy explains how {restaurant.name} ("we", "us",
            "our") handles information collected through this website. This
            website currently runs without a backend server, so information
            you submit is not stored on our servers unless a future update
            to this policy states otherwise.
          </p>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Information You Provide</h2>
            <p className="mt-3">
              If you use the contact form on this website, we collect the
              name, phone number, and message you choose to enter. This
              information is used only to respond to your enquiry and is
              not sold or shared with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Cookies & Analytics</h2>
            <p className="mt-3">
              This website does not currently use tracking cookies or
              third-party analytics. If that changes in the future, this
              policy will be updated to reflect it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Third-Party Services</h2>
            <p className="mt-3">
              Pages on this website may embed a Google Maps view to help you
              find our location. Google's own privacy policy applies to
              that embedded content.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Contacting Us</h2>
            <p className="mt-3">
              For any questions about this Privacy Policy, please call us at{" "}
              <a href={restaurant.phoneHref} className="font-semibold text-green-700 hover:underline">
                {restaurant.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-green-900">Changes to This Policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy as this website and our
              services evolve. Please check this page periodically for
              changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
