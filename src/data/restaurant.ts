// Verified business facts only. Do not add unverified claims here —
// see Website-Building-script.md, section 6, for what may and may not be stated.

export const restaurant = {
  name: "Hotel Kitchen King",
  shortName: "Kitchen King",
  tagline: "Pure Vegetarian. No Onion. No Garlic. All Year Round.",
  supportingLine:
    "Vegetarian food prepared on Tatabenz to Kamapalli Road, Berhampur — with a distinctive, year-round commitment to no onion and no garlic.",

  phoneDisplay: "+91 99377 87999",
  phoneHref: "tel:+919937787999",

  address: {
    line1: "Tatabenz to Kamapalli Road",
    locality: "Berhampur",
    region: "Odisha",
    country: "India",
    full: "Tatabenz to Kamapalli Road, Berhampur, Odisha, India",
  },

  // Confirmed via on-site signage photographs, not fabricated.
  cateringAvailable: true,

  // Not verified — WhatsApp CTAs are hidden across the site until confirmed.
  whatsappEnabled: false,

  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Hotel Kitchen King, Tatabenz to Kamapalli Road, Berhampur, Odisha"),
  mapsEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Hotel Kitchen King, Tatabenz to Kamapalli Road, Berhampur, Odisha") +
    "&output=embed",

  // No verified Google Business Profile yet — kept null so the Reviews
  // section renders its "not yet available" state instead of a fake rating.
  google: {
    rating: null as number | null,
    reviewCount: null as number | null,
    profileUrl: null as string | null,
  },

  // No confirmed official social profiles yet.
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
  },
};

// Opening hours are not verified for any day. Keep every value null until
// the restaurant confirms exact timings — never guess at "similar to other
// hotels" language from the client brief.
export const businessHours: Record<
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
  string | null
> = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  saturday: null,
  sunday: null,
};

export const trustBadges = [
  { label: "Pure Veg", icon: "leaf" as const },
  { label: "No Onion", icon: "ban" as const },
  { label: "No Garlic", icon: "ban" as const },
  { label: "All Year", icon: "calendar" as const },
];
