export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-green-900">
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div
        className={`relative mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20 ${
          image ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : ""
        }`}
      >
        <div>
          <span className="inline-block rounded-full bg-gold-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </span>
          <h1 className="text-balance mt-4 font-display text-4xl font-bold text-cream sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-balance mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>

        {image && (
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="w-full rounded-3xl object-cover shadow-2xl shadow-black/40"
          />
        )}
      </div>
    </section>
  );
}
