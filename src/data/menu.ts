// Menu categories confirmed from on-site signage ("Tiffin and Meals Ready",
// "Meals" cart signage, catering board). Dish-level data is intentionally
// left empty — do not invent items or prices. Populate `items` per category
// once the official menu is available; the UI is built to accept it directly.

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  popular?: boolean;
};

export type MenuCategory = {
  slug: string;
  name: string;
  blurb: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "tiffin",
    name: "Tiffin",
    blurb: "Freshly prepared tiffin, made pure vegetarian with no onion or garlic.",
    items: [],
  },
  {
    slug: "meals",
    name: "Meals / Thali",
    blurb: "Wholesome vegetarian meals served the traditional way.",
    items: [],
  },
];
