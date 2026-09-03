import Button from "../components/Button";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page Not Found | Hotel Kitchen King");

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="font-display text-6xl font-bold text-green-900">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-green-900">Page Not Found</h1>
      <p className="mt-3 max-w-sm text-ink-soft">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back on track.
      </p>
      <Button to="/" className="mt-6" icon="arrowRight">
        Back to Home
      </Button>
    </section>
  );
}
