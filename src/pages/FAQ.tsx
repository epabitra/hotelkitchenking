import PageHeader from "../components/PageHeader";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function FAQ() {
  usePageMeta(
    "FAQs | Hotel Kitchen King",
    "Frequently asked questions about Hotel Kitchen King, a pure vegetarian, no onion, no garlic restaurant in Berhampur.",
  );

  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Answers to the questions guests ask us most."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <FAQAccordion />
        </div>
      </section>

      <CTASection
        title="Still Have a Question?"
        description="Call us directly and we'll be happy to help."
        primaryLabel="View Menu"
      />
    </>
  );
}
