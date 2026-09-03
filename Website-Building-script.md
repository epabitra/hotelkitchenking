# Hotel Kitchen King — Website Development Brief

Please develop a complete, professional, modern, production-quality website for **Hotel Kitchen King**, a pure vegetarian restaurant located at:

**Tatabenz to Kamapalli Road, Berhampur, Odisha, India**

**Contact Number:** +91 99377 87999

The restaurant's key differentiator is that it serves **pure vegetarian food and does not use onion or garlic throughout the year**.

The objective is to create a website that looks like the **official website of an established vegetarian restaurant**, builds customer trust, showcases the food beautifully, makes the restaurant's unique food philosophy immediately clear, and encourages customers to visit, call, get directions, or place an order where applicable.

---

# 1. Tech Stack

Use:

* React
* Modern JavaScript / TypeScript where appropriate
* CSS / Tailwind CSS or another suitable styling approach
* React Router for page navigation if multiple pages are implemented

### Backend

**Do NOT implement any backend at this stage.**

Use static/local data for:

* Menu
* Restaurant information
* Services
* Testimonials
* FAQs
* Gallery
* Contact information

However, structure the application so that a backend, CMS, online ordering system, reservation system, or API can be integrated easily in the future.

---

# 2. First Step — Carefully Inspect the Existing Project

Before writing the website UI, inspect the existing project structure and all available assets.

There is an **`images` folder** in the project containing photographs related to Hotel Kitchen King.

Do not blindly use the images based on their filenames.

### Carefully inspect every image and determine:

* What is shown in the image?
* Is it food?
* Is it the restaurant exterior?
* Is it the restaurant interior?
* Is it a dining area?
* Is it a dish?
* Is it a staff/customer image?
* Is it a promotional image?
* Is it a logo?
* Is it suitable for the hero section?
* Is it suitable for the menu?
* Is it suitable for the gallery?
* Is the image portrait or landscape?
* Is the image high enough quality?
* Does it require cropping?
* Does it require enhancement?

Do not place images randomly.

---

# 3. Image Organization

Move/organize the existing images into a proper React asset structure.

For example:

```text
src/
  assets/
    images/
      branding/
      hero/
      restaurant/
      food/
      menu/
      gallery/
      ambience/
      team/
      promotions/
      icons/
```

Rename images using meaningful filenames.

For example:

```text
IMG_001.jpg
```

should become something meaningful if the image clearly represents:

```text
restaurant-exterior.jpg
veg-thali.jpg
south-indian-meal.jpg
restaurant-interior.jpg
dining-area.jpg
```

Do not rename an image based on assumptions.

Only rename it according to what is actually visible.

---

# 4. AI Image Enhancement

The provided restaurant photographs may not all have professional quality.

Where appropriate, enhance the images using AI/image-processing capabilities.

The goal is to improve:

* Sharpness
* Resolution
* Lighting
* Exposure
* Contrast
* Noise
* Background cleanliness
* Overall presentation

For food photographs:

* Improve food clarity.
* Correct lighting.
* Make the food look natural and appetizing.
* Preserve the actual appearance of the dish.
* Do not artificially add ingredients that are not present.
* Do not change the dish into something different.

For restaurant photographs:

* Remove obvious distracting objects where appropriate.
* Improve lighting.
* Correct perspective where possible.
* Clean up visual distractions.
* Preserve the actual restaurant.

### Important

Do **not** generate fake restaurant facilities, fake food, fake staff, fake awards, fake customers, or fake infrastructure and present them as real photographs.

If additional images are needed, use properly licensed/royalty-free images and clearly treat them as supporting visual assets rather than actual photographs of Hotel Kitchen King.

---

# 5. Business Identity

The website must consistently represent the following business:

## Hotel Kitchen King

**Location:**
Tatabenz to Kamapalli Road, Berhampur, Odisha, India

**Phone:**
+91 99377 87999

### Core positioning

Hotel Kitchen King is a:

**Pure Vegetarian Restaurant**

with the distinctive food practice of:

**No Onion • No Garlic • Throughout the Year**

This should be one of the most prominent messages on the website.

Do not bury this information in the About page.

It should be visible on:

* Hero section
* About section
* Menu section
* Food philosophy section
* Footer or trust section

---

# 6. Important Content Accuracy Rules

Do not fabricate business information.

Only use the following as confirmed business facts unless additional information is provided:

* Hotel Kitchen King
* Tatabenz to Kamapalli Road, Berhampur
* Phone number: +91 99377 87999
* Pure vegetarian restaurant
* No onion
* No garlic
* This practice is followed throughout the year

For information that has not been provided, do not invent facts.

Examples of information that must NOT be fabricated:

* Year established
* Owner name
* Number of employees
* Number of seats
* Awards
* Certifications
* "Best restaurant in Berhampur"
* Exact menu prices
* Delivery availability
* Online ordering
* Parking availability
* AC facilities
* Catering
* Opening hours
* Food delivery partnerships
* Google rating
* Number of Google reviews

If such information is unavailable, either:

1. Do not display it, or
2. Create the section in a way that can easily receive the information later.

---

# 7. Restaurant Website Design Direction

Create a premium restaurant design that communicates:

* Purity
* Vegetarian food
* Traditional values
* Cleanliness
* Quality
* Hospitality
* Authentic taste
* Family-friendly dining
* Trust

The design should **not look like a generic food-delivery template**.

It should look like a real restaurant brand.

Use:

* Elegant typography
* High-quality food photography
* Large visual sections
* Refined spacing
* Premium cards
* Subtle animations
* Clean navigation
* Responsive layouts
* Strong call-to-action sections

---

# 8. Suggested Color Direction

Use a warm, premium vegetarian-restaurant visual language.

Possible palette:

* Deep green
* Warm cream
* Off-white
* Subtle gold
* Earthy tones

Do not overuse colors.

The final design should remain elegant and readable.

If the restaurant's existing logo/branding suggests different colors, **prioritize the existing branding instead**.

---

# 9. Website Sitemap

Build the website with the following pages where appropriate.

## Main Pages

### Home

### About Us

### Our Food Philosophy

### Menu

### Specialties

### Gallery

### Customer Reviews

### FAQs

### Contact Us

### Privacy Policy

### Terms & Conditions

If the available business information supports additional pages, add them appropriately.

---

# 10. Homepage

The homepage should be the strongest part of the website.

Suggested structure:

## Hero Section

Use the strongest available restaurant/food image.

Display:

**HOTEL KITCHEN KING**

### Suggested headline:

**Pure Vegetarian. No Onion. No Garlic. All Year Round.**

Supporting text:

**Experience delicious vegetarian food prepared with a distinctive commitment to food purity and traditional taste in Berhampur.**

Buttons:

**View Menu**

**Call Now**

**Get Directions**

Do not claim "traditional" or any other characteristic as a verified business fact unless supported by the client information; these can be treated as marketing copy.

---

# 11. Hero Trust Indicators

Immediately below or within the hero section, include visually strong trust indicators such as:

* Pure Vegetarian
* No Onion
* No Garlic
* Year-Round Commitment
* Freshly Prepared Food

Only use claims that are supported by the available business information.

For example:

```text
PURE VEG
NO ONION
NO GARLIC
ALL YEAR
```

This should become a distinctive visual identity of the website.

---

# 12. About Hotel Kitchen King

Create a professional About section.

Focus on:

* Vegetarian food
* No onion and garlic philosophy
* Customer experience
* Food quality
* Clean and welcoming environment
* Restaurant's identity

Do not invent a fictional history.

If the establishment history is not available, write concise brand-focused content instead.

---

# 13. "Our Food Philosophy" Section

This should be a major section.

Suggested concept:

## Food With a Difference

At Hotel Kitchen King, vegetarian dining comes with a distinctive commitment:

### No Onion

No onion is used in the food throughout the year.

### No Garlic

No garlic is used in the food throughout the year.

### Pure Vegetarian

The restaurant focuses on vegetarian food.

### Thoughtfully Prepared

Present the food philosophy professionally without making unsupported claims about ingredients, sourcing, nutrition, health benefits, religious practices, or certifications.

---

# 14. Menu Page

Create a complete, attractive menu interface.

Possible categories:

* South Indian
* North Indian
* Rice
* Biryani / Rice Specialties
* Tiffins
* Curries
* Paneer Dishes
* Meals / Thali
* Snacks
* Sweets
* Desserts
* Beverages

### Important

Only include categories and dishes that are actually confirmed from the client's information, uploaded material, menu, or research.

If the exact menu is unavailable:

Do NOT invent 50 dishes.

Instead create a clean menu structure that can easily be populated later.

Example:

```text
South Indian
[Menu items will be populated from the restaurant's official menu]

North Indian
[Menu items will be populated from the restaurant's official menu]
```

However, avoid visibly exposing development-style placeholders such as "coming soon" in the final production UI.

---

# 15. Food Cards

Where actual food photographs are available, create attractive food cards containing:

* Image
* Dish name
* Short description
* Price, only if verified
* Vegetarian indicator
* Optional "Popular" badge if verified

Do not invent prices.

Do not invent "bestseller" labels.

---

# 16. Signature / Specialties Section

If the provided information or images identify specific popular dishes, create a:

## Our Specialties

section.

Use the strongest food photographs.

Possible layout:

```text
Large Feature Dish
    ↓
Dish Name
Short Description
View Menu
```

Only call something a "signature dish" or "bestseller" if this is confirmed.

---

# 17. Gallery

Create a premium visual gallery.

Categories can include:

* Food
* Restaurant
* Dining
* Ambience
* Specialities
* Other

Use the actual client images first.

Implement:

* Responsive grid
* Lightbox
* Image zoom
* Smooth transitions
* Lazy loading

---

# 18. Restaurant Ambience

If suitable interior/exterior photographs exist, create an:

## Experience the Restaurant

section.

Show:

* Exterior
* Entrance
* Seating
* Dining environment
* Interior details

Do not invent facilities that are not visible or confirmed.

---

# 19. Customer Reviews

If Google Business Profile information is available in the future, integrate it here.

For now, do not fabricate customer reviews.

Create the section architecture so it can later display:

* Google rating
* Review count
* Customer reviews
* Review author
* Google logo
* View Google Reviews button
* Write a Review button

If no Google profile exists, hide the rating rather than creating fake numbers.

---

# 20. Google Business Profile

If research later identifies an official Google Business Profile:

Display:

### Google Rating

⭐ X.X / 5

### Reviews

X,XXX+ Reviews

Buttons:

**View Google Reviews**

**Write a Review**

**Get Directions**

Use the official Google links.

Do not use a rating from another similarly named restaurant.

---

# 21. Location Section

Create a strong location section containing:

* Hotel Kitchen King
* Tatabenz to Kamapalli Road
* Berhampur, Odisha
* Phone number
* Google Maps integration when the exact location is confirmed

Buttons:

**Get Directions**

**Call Now**

**WhatsApp**

Only add WhatsApp if the provided number is confirmed as WhatsApp-enabled.

---

# 22. Contact Section

Display:

### Hotel Kitchen King

**Address**

Tatabenz to Kamapalli Road, Berhampur, Odisha

**Phone**

+91 99377 87999

Include:

* Call button
* WhatsApp button if applicable
* Directions button
* Contact form UI

The contact form should be frontend-only for now.

---

# 23. Opening Hours

The client has indicated that the opening/closing time is similar to other hotels.

However, **do not assume or invent exact hours**.

Create the opening-hours component so the exact timing can easily be configured from static data later.

For example:

```js
businessHours = {
  monday: "...",
  tuesday: "...",
  ...
}
```

Do not publish an exact time unless it is verified.

---

# 24. FAQs

Create useful restaurant FAQs.

Examples:

### Is Hotel Kitchen King vegetarian?

Yes. The restaurant is positioned as a pure vegetarian restaurant.

### Does Hotel Kitchen King use onion?

No. Onion is not used throughout the year.

### Does Hotel Kitchen King use garlic?

No. Garlic is not used throughout the year.

### Where is Hotel Kitchen King located?

Tatabenz to Kamapalli Road, Berhampur, Odisha.

### How can I contact Hotel Kitchen King?

Call +91 99377 87999.

Other FAQs should only be included if supported by verified business information.

Do not invent answers about:

* Delivery
* Parking
* Reservations
* Catering
* Payment methods
* Seating capacity
* Opening hours

unless verified.

---

# 25. Call-to-Action Sections

Use strategically placed CTAs throughout the website.

Examples:

### Hungry for Pure Vegetarian Food?

**Explore Our Menu**

### Looking for a Vegetarian Dining Experience?

**Visit Hotel Kitchen King**

### Have Questions?

**Call Us**

---

# 26. Mobile Experience

The website must be excellent on mobile devices.

On mobile, provide convenient actions:

* Call
* WhatsApp
* Directions
* Menu

Consider a sticky mobile bottom action bar:

```text
[ Call ] [ WhatsApp ] [ Directions ] [ Menu ]
```

Only show WhatsApp if confirmed.

---

# 27. SEO

Implement SEO-friendly page structure.

Suggested homepage SEO:

### Title

**Hotel Kitchen King | Pure Vegetarian Restaurant in Berhampur**

### Meta Description

Create a concise description mentioning:

* Hotel Kitchen King
* Berhampur
* Pure vegetarian food
* No onion
* No garlic
* Location

Do not make unsupported "best" or "No. 1" claims.

---

# 28. Local SEO

Optimize for relevant searches such as:

* Hotel Kitchen King Berhampur
* Vegetarian restaurant Berhampur
* Pure veg restaurant Berhampur
* No onion no garlic restaurant Berhampur
* Veg restaurant near Kamapalli
* Vegetarian food Berhampur
* Pure vegetarian food Berhampur
* Restaurants near Tatabenz
* Veg food near Kamapalli Road

Do not keyword-stuff the website.

---

# 29. Structured Data

Where appropriate, implement Schema.org structured data for:

* Restaurant
* LocalBusiness
* PostalAddress
* Telephone
* OpeningHoursSpecification
* Menu
* GeoCoordinates, once verified
* SameAs, if official social profiles are available

Do not add fake ratings or review structured data.

---

# 30. Social Media

If official social profiles are provided or verified through research, add them to:

* Header
* Footer
* Contact page

Potential platforms:

* Instagram
* Facebook
* YouTube
* WhatsApp

Do not link to similarly named businesses.

---

# 31. Future Backend Architecture

Although there is no backend now, prepare the code so future functionality can be integrated.

Possible future APIs:

```text
GET /api/menu
GET /api/categories
GET /api/reviews
GET /api/gallery
GET /api/business
GET /api/offers
POST /api/contact
POST /api/reservation
POST /api/order
```

Do not implement these APIs now.

Use a clean separation between:

```text
UI Components
        ↓
Static Data Layer
        ↓
Future API Layer
```

---

# 32. Recommended React Architecture

Use a scalable structure such as:

```text
src/
├── assets/
│   ├── images/
│   │   ├── branding/
│   │   ├── hero/
│   │   ├── food/
│   │   ├── menu/
│   │   ├── restaurant/
│   │   ├── gallery/
│   │   └── promotions/
│   └── icons/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── FoodCard/
│   ├── MenuCard/
│   ├── CategoryCard/
│   ├── ReviewCard/
│   ├── Gallery/
│   ├── FAQ/
│   ├── Contact/
│   ├── Location/
│   ├── CTA/
│   └── Footer/
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Menu/
│   ├── Specialties/
│   ├── Gallery/
│   ├── Reviews/
│   ├── FAQ/
│   ├── Contact/
│   ├── PrivacyPolicy/
│   └── Terms/
│
├── data/
│   ├── restaurant.js
│   ├── menu.js
│   ├── services.js
│   ├── gallery.js
│   ├── reviews.js
│   └── faq.js
│
├── layouts/
├── routes/
├── hooks/
├── utils/
└── styles/
```

---

# 33. Component Reusability

Build reusable components rather than duplicating markup.

Examples:

```text
<FoodCard />
<MenuCategory />
<SectionHeading />
<ReviewCard />
<GalleryItem />
<FeatureCard />
<CTASection />
<FAQItem />
<ContactCard />
```

Keep content inside data files wherever possible.

---

# 34. Accessibility

Ensure:

* Proper semantic HTML
* Alt text for every meaningful image
* Keyboard navigation
* Accessible buttons
* Sufficient color contrast
* Proper heading hierarchy
* Form labels
* Focus states
* Mobile-friendly touch targets

---

# 35. Performance

Optimize for:

* Fast initial load
* Responsive images
* Lazy loading
* Code splitting
* Optimized assets
* Minimal unnecessary dependencies
* Proper image dimensions
* Web-friendly image formats where possible

Do not sacrifice image quality unnecessarily because food photography is an important part of the website.

---

# 36. Avoid Generic/AI-Looking Content

The final website must not feel AI-generated.

Avoid excessive generic phrases such as:

* "Where Taste Meets Tradition"
* "A Culinary Journey"
* "Unforgettable Experience"
* "Best Food in Town"

unless they genuinely fit the brand.

Use specific, meaningful content centered around the restaurant's actual differentiator:

**Pure vegetarian food without onion or garlic throughout the year.**

---

# 37. Do Not Create Fake Information

This is extremely important.

Never fabricate:

* Google reviews
* Google rating
* Customer names
* Awards
* Certifications
* Menu prices
* Restaurant history
* Years of experience
* Owner information
* Staff
* Food delivery partnerships
* Payment options
* Opening hours
* Seating capacity
* Facilities
* "Best restaurant" claims

If information is missing, design the component so the information can be added later.

---

# 38. Final Quality Requirements

Before considering the website complete, verify:

### Content

* [ ] Hotel name is correct everywhere.
* [ ] Phone number is correct everywhere.
* [ ] Address is correct.
* [ ] Pure vegetarian positioning is prominent.
* [ ] No onion claim is prominent.
* [ ] No garlic claim is prominent.
* [ ] No unsupported business claims exist.

### Images

* [ ] Every provided image has been inspected.
* [ ] Images are appropriately renamed.
* [ ] Images are organized.
* [ ] Images are used in suitable sections.
* [ ] Poor-quality images are enhanced where appropriate.
* [ ] No fake business imagery is presented as real.

### UI

* [ ] Desktop responsive.
* [ ] Tablet responsive.
* [ ] Mobile responsive.
* [ ] Navigation works.
* [ ] Buttons work.
* [ ] Contact actions work.
* [ ] Gallery works.
* [ ] Menu navigation works.
* [ ] FAQ accordion works.
* [ ] Animations are subtle and professional.

### SEO

* [ ] Page titles.
* [ ] Meta descriptions.
* [ ] Proper H1/H2/H3 hierarchy.
* [ ] Image alt text.
* [ ] Local SEO.
* [ ] Restaurant structured data where applicable.

### Code

* [ ] Reusable components.
* [ ] Clean architecture.
* [ ] No unnecessary duplication.
* [ ] Static data separated from UI.
* [ ] Easy future API integration.
* [ ] No backend implementation.

---

# Final Objective

The final result should feel like a **real, premium restaurant website for Hotel Kitchen King**, not a demonstration project.

The website should immediately communicate:

## HOTEL KITCHEN KING

### PURE VEGETARIAN FOOD

### NO ONION • NO GARLIC • THROUGHOUT THE YEAR

It should showcase the restaurant's actual photographs beautifully, provide a clear menu experience, establish trust, make the location and phone number easy to find, and give customers simple ways to **view the menu, call the restaurant, get directions, and visit the restaurant**.

Prioritize **authenticity, visual quality, content accuracy, excellent food photography, mobile usability, and maintainable React architecture**.
