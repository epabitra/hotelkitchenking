import { useMemo, useState } from "react";
import { galleryImages, type GalleryCategory } from "../data/gallery";
import PageHeader from "../components/PageHeader";
import GalleryGrid from "../components/GalleryGrid";
import { usePageMeta } from "../hooks/usePageMeta";

const categories: Array<GalleryCategory | "All"> = ["All", "Food", "Restaurant", "Ambience"];

export default function Gallery() {
  usePageMeta(
    "Gallery | Hotel Kitchen King",
    "Photos of Hotel Kitchen King — our storefront, dining hall, and food, in Berhampur, Odisha.",
  );

  const [filter, setFilter] = useState<GalleryCategory | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A Look Inside Hotel Kitchen King"
        description="Our storefront, dining space, and food — as they actually are."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  filter === category
                    ? "bg-green-600 text-cream"
                    : "bg-white text-ink-soft hover:bg-green-600/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <GalleryGrid images={filtered} />
        </div>
      </section>
    </>
  );
}
