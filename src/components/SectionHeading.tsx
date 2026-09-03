type Align = "left" | "center";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold-300" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance mt-3 text-3xl font-semibold sm:text-4xl ${
          light ? "text-cream" : "text-green-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-balance mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/80" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
