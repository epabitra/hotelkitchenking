import Icon from "./Icon";

type IconName = Parameters<typeof Icon>[0]["name"];

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-green-600/10 bg-white p-6 shadow-sm shadow-green-900/5 transition-shadow hover:shadow-md">
      <span className="flex size-12 items-center justify-center rounded-xl bg-green-600/10 text-green-700">
        <Icon name={icon} className="size-6" />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-green-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}
