import { restaurant } from "../data/restaurant";
import Button from "./Button";

type ButtonIcon = Parameters<typeof Button>[0] extends { icon?: infer I } ? I : never;

export default function CTASection({
  title,
  description,
  primaryLabel = "View Menu",
  primaryTo = "/menu",
  primaryIcon = "utensils",
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  primaryIcon?: ButtonIcon;
}) {
  return (
    <section className="bg-green-700">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
        <h2 className="text-balance text-3xl font-semibold text-cream sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-balance max-w-xl text-cream/75">{description}</p>
        )}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button to={primaryTo} variant="secondary" icon={primaryIcon}>
            {primaryLabel}
          </Button>
          <Button href={restaurant.phoneHref} variant="outlineOnDark" icon="phone">
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
