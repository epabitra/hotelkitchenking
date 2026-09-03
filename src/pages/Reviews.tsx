import PageHeader from "../components/PageHeader";
import ReviewsSection from "../components/ReviewsSection";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Reviews() {
  usePageMeta(
    "Customer Reviews | Hotel Kitchen King",
    "Customer reviews for Hotel Kitchen King, a pure vegetarian restaurant in Berhampur, Odisha.",
  );

  return (
    <>
      <PageHeader
        eyebrow="Customer Reviews"
        title="What Guests Are Saying"
        description="Genuine feedback from our guests — shown here once our Google Business Profile is verified and linked."
      />
      <ReviewsSection />
    </>
  );
}
