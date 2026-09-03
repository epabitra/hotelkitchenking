import type { DishIllustrationName } from "../components/DishIllustration";

// Illustrated, not photographed — these are generic representations of
// common vegetarian tiffin/meal items, shown until real food photography
// is available. Every dish still follows the no-onion, no-garlic practice
// used throughout the kitchen. Do not add prices or "bestseller" labels
// here — that data isn't confirmed.

export type MealTime = "Breakfast" | "Lunch & Dinner";

export type MenuHighlight = {
  name: string;
  description: string;
  meal: MealTime;
  illustration: DishIllustrationName;
};

export const menuHighlights: MenuHighlight[] = [
  {
    name: "Puri Idli",
    description: "Soft idlis served alongside puffed puris — a classic tiffin combination.",
    meal: "Breakfast",
    illustration: "puriIdli",
  },
  {
    name: "Puri Upma",
    description: "Semolina upma paired with puris, prepared fresh for breakfast.",
    meal: "Breakfast",
    illustration: "puriUpma",
  },
  {
    name: "Masala Dosa",
    description: "A crisp dosa served with chutney and sambar.",
    meal: "Breakfast",
    illustration: "dosa",
  },
  {
    name: "Veg Biryani",
    description: "Fragrant rice layered with vegetables and biryani spices.",
    meal: "Lunch & Dinner",
    illustration: "biryani",
  },
  {
    name: "Paneer Curry",
    description: "Paneer simmered in a home-style vegetarian gravy.",
    meal: "Lunch & Dinner",
    illustration: "paneerCurry",
  },
  {
    name: "Dal Tadka",
    description: "Yellow lentils, tempered and served hot — a mealtime staple.",
    meal: "Lunch & Dinner",
    illustration: "dal",
  },
];
