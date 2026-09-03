// Hand-drawn, flat-style illustrations — not photographs. Used only as
// generic representations of common tiffin/meal items on the Menu page,
// never captioned as actual photos of Hotel Kitchen King's food.

export type DishIllustrationName =
  | "biryani"
  | "puriIdli"
  | "puriUpma"
  | "dosa"
  | "paneerCurry"
  | "dal";

const PLATE = (
  <>
    <circle cx="60" cy="60" r="52" fill="#FBF6EA" />
    <circle cx="60" cy="60" r="52" fill="none" stroke="#E7CD8A" strokeWidth="2.5" />
  </>
);

function Biryani() {
  return (
    <svg viewBox="0 0 120 120" className="size-full">
      {PLATE}
      <ellipse cx="60" cy="66" rx="34" ry="20" fill="#CBA24A" />
      <ellipse cx="60" cy="60" rx="34" ry="20" fill="#E7CD8A" />
      {[
        [40, 54], [48, 50], [56, 56], [64, 50], [72, 55], [78, 60],
        [44, 62], [52, 66], [60, 61], [68, 65], [75, 68], [50, 72], [66, 71],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="3.2" ry="1.6" fill="#B3872F" transform={`rotate(${(i * 37) % 180} ${x} ${y})`} />
      ))}
      <circle cx="46" cy="58" r="2.6" fill="#2F6B48" />
      <circle cx="70" cy="63" r="2.6" fill="#2F6B48" />
      <circle cx="58" cy="52" r="2.6" fill="#7A2331" />
      <path d="M62 47c3-3 7-3 9 0" stroke="#1F4D36" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PuriIdli() {
  return (
    <svg viewBox="0 0 120 120" className="size-full">
      {PLATE}
      <ellipse cx="42" cy="70" rx="17" ry="7" fill="#F3E9D4" stroke="#CBA24A" strokeWidth="1.5" />
      <ellipse cx="42" cy="62" rx="15" ry="6.5" fill="#FBF6EA" stroke="#CBA24A" strokeWidth="1.5" />
      <ellipse cx="42" cy="54" rx="13" ry="6" fill="#F3E9D4" stroke="#CBA24A" strokeWidth="1.5" />
      <circle cx="80" cy="52" r="13" fill="#CBA24A" stroke="#93701F" strokeWidth="1.5" />
      <circle cx="78" cy="72" r="13" fill="#E7CD8A" stroke="#93701F" strokeWidth="1.5" />
      <path d="M75 48c2-3 6-3 8 0M73 68c2-3 6-3 8 0" stroke="#5e4a1f" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
      <circle cx="42" cy="90" r="6" fill="#2F6B48" />
    </svg>
  );
}

function PuriUpma() {
  return (
    <svg viewBox="0 0 120 120" className="size-full">
      {PLATE}
      <ellipse cx="52" cy="66" rx="30" ry="18" fill="#E7CD8A" />
      <ellipse cx="52" cy="61" rx="30" ry="17" fill="#CBA24A" />
      {[
        [34, 56], [42, 52], [50, 58], [58, 53], [66, 58], [40, 66], [56, 66], [68, 64],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#93701F" />
      ))}
      {[[38, 50], [62, 49], [50, 68]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y}q3 -4 6 0`} stroke="#2F6B48" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      ))}
      <circle cx="88" cy="72" r="13" fill="#CBA24A" stroke="#93701F" strokeWidth="1.5" />
      <path d="M83 68c2-3 6-3 8 0" stroke="#5e4a1f" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function Dosa() {
  return (
    <svg viewBox="0 0 120 120" className="size-full">
      {PLATE}
      <path
        d="M28 58c0-14 14-24 30-24 20 0 34 12 34 26 0 10-8 16-18 16-4 0-6-2-6-6 0-10-8-16-18-16-8 0-14 5-16 12"
        fill="#E7CD8A"
        stroke="#93701F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="34" cy="82" r="9" fill="#F3E9D4" stroke="#CBA24A" strokeWidth="1.5" />
      <path d="M30 82c1-3 6-3 7 0" stroke="#2F6B48" strokeWidth="1.2" fill="none" />
      <circle cx="88" cy="84" r="10" fill="#B3872F" stroke="#7a5a1f" strokeWidth="1.5" />
      <circle cx="88" cy="84" r="4" fill="#7A2331" opacity="0.7" />
    </svg>
  );
}

function PaneerCurry() {
  return (
    <svg viewBox="0 0 120 120" className="size-full">
      {PLATE}
      <path d="M28 62a32 22 0 0 0 64 0Z" fill="#7A2331" />
      <path d="M28 60a32 20 0 0 0 64 0" fill="#93384a" />
      {[
        [46, 56, 0], [62, 52, 15], [54, 64, -10], [70, 60, 8], [38, 58, -6],
      ].map(([x, y, r], i) => (
        <rect key={i} x={x - 5} y={y - 5} width="10" height="10" rx="1.5" fill="#FBF6EA" stroke="#E7CD8A" strokeWidth="1" transform={`rotate(${r} ${x} ${y})`} />
      ))}
      <path d="M50 44c2-4 6-4 7 0M66 42c2-4 6-4 7 0" stroke="#2F6B48" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Dal() {
  return (
    <svg viewBox="0 0 120 120" className="size-full">
      {PLATE}
      <path d="M26 60a34 22 0 0 0 68 0Z" fill="#B3872F" />
      <path d="M26 58a34 20 0 0 0 68 0" fill="#E7CD8A" />
      <path d="M40 56c8-6 32-6 40 0" stroke="#93701F" strokeWidth="1.4" fill="none" opacity="0.6" />
      {[[44, 50], [60, 47], [74, 51]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.8" fill="#1F1A12" opacity="0.7" />
      ))}
      <path d="M52 44c2-4 6-4 7 0M66 44c2-4 6-4 7 0" stroke="#2F6B48" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const illustrations: Record<DishIllustrationName, () => React.ReactElement> = {
  biryani: Biryani,
  puriIdli: PuriIdli,
  puriUpma: PuriUpma,
  dosa: Dosa,
  paneerCurry: PaneerCurry,
  dal: Dal,
};

export default function DishIllustration({ name, className = "size-full" }: { name: DishIllustrationName; className?: string }) {
  const Illustration = illustrations[name];
  return (
    <div className={className}>
      <Illustration />
    </div>
  );
}
