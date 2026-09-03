import heroStorefront from "../assets/images/hero/hero-storefront.jpg";
import radhaKrishnaWallArt from "../assets/images/ambience/radha-krishna-wall-art.jpeg";
import hanumanJagannathWallArt from "../assets/images/ambience/hanuman-jagannath-wall-art.jpeg";
import interiorCorridorFolkArt from "../assets/images/ambience/interior-corridor-folk-art.jpeg";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

const images = [
  { src: heroStorefront, alt: "Hotel Kitchen King storefront exterior", span: "row-span-2" },
  { src: radhaKrishnaWallArt, alt: "Radha Krishna wall art inside the dining hall", span: "" },
  { src: hanumanJagannathWallArt, alt: "Hanuman and Jagannath wall art in the dining area", span: "" },
  { src: interiorCorridorFolkArt, alt: "Interior corridor with Warli folk art wall panels", span: "col-span-2" },
];

export default function AmbienceSection() {
  return (
    <section className="bg-green-900 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Experience the Restaurant"
          title="A Space Built for Comfortable Dining"
          description="Take a look inside Hotel Kitchen King — from the storefront on Kamapalli Road to the dining hall within."
          light
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`h-full max-h-64 w-full rounded-2xl object-cover ${img.span}`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/gallery" variant="secondary" icon="arrowRight">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
