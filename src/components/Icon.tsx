type IconName =
  | "leaf"
  | "ban"
  | "calendar"
  | "phone"
  | "mapPin"
  | "menu"
  | "close"
  | "chevronDown"
  | "directions"
  | "mail"
  | "clock"
  | "quote"
  | "utensils"
  | "sparkles"
  | "shield"
  | "arrowRight";

const paths: Record<IconName, React.ReactNode> = {
  leaf: (
    <path d="M5 21c9-1 14-6 15-15-9 1-14 6-15 15Zm0 0c1-4 3-7 6-9" />
  ),
  ban: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.5 5.5l13 13" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.8a12 12 0 0 0 5.7 5.7l1.8-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  directions: (
    <>
      <path d="M3 11l17-7-7 17-3-7-7-3Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5l8 6.5 8-6.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  quote: (
    <path d="M7 10c0-2.5 1.5-4.2 4-4.7L11.5 7c-1.3.4-2 1.2-2 2.5H11v5H6v-4.5Zm9 0c0-2.5 1.5-4.2 4-4.7L20.5 7c-1.3.4-2 1.2-2 2.5H20v5h-5v-4.5Z" />
  ),
  utensils: (
    <path d="M7 3v7a2 2 0 0 0 2 2v9M9 3v9M11 3v7a2 2 0 0 1-2 2M17 3c-1.7 0-3 2-3 5s1.3 5 3 5v9" />
  ),
  sparkles: (
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16Z" />
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({
  name,
  className = "size-5",
  strokeWidth = 1.7,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
