import { businessHours, restaurant } from "../data/restaurant";
import Icon from "./Icon";

const dayLabels: Record<keyof typeof businessHours, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export default function BusinessHours() {
  const hasAnyHours = Object.values(businessHours).some((hours) => hours !== null);

  return (
    <div className="rounded-2xl border border-green-600/10 bg-white p-6 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-600/10 text-green-700">
          <Icon name="clock" className="size-5" />
        </span>
        <h3 className="font-display text-lg font-semibold text-green-900">Opening Hours</h3>
      </div>

      {hasAnyHours ? (
        <dl className="mt-5 space-y-2 text-sm">
          {(Object.keys(businessHours) as (keyof typeof businessHours)[]).map((day) => (
            <div key={day} className="flex justify-between border-b border-green-600/5 pb-2">
              <dt className="text-ink-soft">{dayLabels[day]}</dt>
              <dd className="font-medium text-green-900">{businessHours[day] ?? "Please call to confirm"}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          Exact opening hours are being confirmed. Please call us at{" "}
          <a href={restaurant.phoneHref} className="font-semibold text-green-700 hover:underline">
            {restaurant.phoneDisplay}
          </a>{" "}
          to check today&rsquo;s timing before you visit.
        </p>
      )}
    </div>
  );
}
