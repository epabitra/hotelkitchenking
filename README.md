# Hotel Kitchen King — Website

A React + TypeScript website for Hotel Kitchen King, a pure vegetarian
restaurant on Tatabenz to Kamapalli Road, Berhampur, Odisha — known for
serving food without onion or garlic, throughout the year.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router

No backend yet — all content (menu, gallery, FAQs, business details) lives
in `src/data/` as static/local data, structured so it can be swapped for
real API calls later without touching the UI components.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Project structure

```text
src/
  assets/images/   organized, renamed photographs (hero, restaurant, food, ambience)
  components/      reusable UI building blocks
  pages/           one file per route
  data/            static content: restaurant facts, menu, gallery, FAQs
  layouts/         page shell (navbar, footer, mobile action bar)
  hooks/           usePageMeta for per-page <title> / meta description
```

## Content accuracy

Only verified business facts are used across the site (name, address,
phone, pure-vegetarian / no-onion / no-garlic positioning, and catering
availability — all confirmed from on-site signage photographs). Anything
unverified (exact opening hours, menu prices, Google rating, social
profiles) is deliberately left out or built as an empty-but-ready state
rather than invented. See `Website-Building-script.md` for the full brief
this was built against.
