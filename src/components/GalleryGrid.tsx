import { useState } from "react";
import type { GalleryImage } from "../data/gallery";
import Icon from "./Icon";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-green-900/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-green-900/0 transition-colors group-hover:bg-green-900/10" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-green-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close preview"
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
          >
            <Icon name="close" className="size-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:left-6"
          >
            <Icon name="chevronDown" className="size-6 rotate-90" />
          </button>

          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 sm:right-6"
          >
            <Icon name="chevronDown" className="size-6 -rotate-90" />
          </button>
        </div>
      )}
    </>
  );
}
