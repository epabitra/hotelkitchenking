import heroStorefront from "../assets/images/hero/hero-storefront.jpg";

import vegRiceMeal from "../assets/images/food/veg-rice-meal.jpeg";

import diningNookSuryaArt from "../assets/images/ambience/dining-nook-surya-art.jpeg";
import diningTableRadhaKrishnaArt from "../assets/images/ambience/dining-table-radha-krishna-art.jpeg";
import radhaKrishnaWallArt from "../assets/images/ambience/radha-krishna-wall-art.jpeg";
import hanumanJagannathWallArt from "../assets/images/ambience/hanuman-jagannath-wall-art.jpeg";
import diningAreaSuryaArt from "../assets/images/ambience/dining-area-surya-art.jpeg";
import interiorCorridor from "../assets/images/ambience/interior-corridor.jpeg";
import interiorCorridorFolkArt from "../assets/images/ambience/interior-corridor-folk-art.jpeg";
import diningRoomWide from "../assets/images/ambience/dining-room-wide.jpeg";
import warliFolkArtWall from "../assets/images/ambience/warli-folk-art-wall.jpeg";
import suryaArtTapNook from "../assets/images/ambience/surya-art-tap-nook.jpeg";
import diningTablesOverhead from "../assets/images/ambience/dining-tables-overhead.jpeg";

export type GalleryCategory = "Food" | "Restaurant" | "Ambience";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryImages: GalleryImage[] = [
  { src: heroStorefront, alt: "Hotel Kitchen King storefront and entrance, pure veg", category: "Restaurant" },

  { src: vegRiceMeal, alt: "Vegetarian rice meal with curry and accompaniments", category: "Food" },

  { src: diningRoomWide, alt: "Dining hall with traditional folk art wall panels", category: "Ambience" },
  { src: diningNookSuryaArt, alt: "Dining table beneath a Surya deity wall art panel", category: "Ambience" },
  { src: diningTableRadhaKrishnaArt, alt: "Dining table below a Radha Krishna wall art panel", category: "Ambience" },
  { src: radhaKrishnaWallArt, alt: "Radha Krishna wall art with decorative greenery border", category: "Ambience" },
  { src: hanumanJagannathWallArt, alt: "Hanuman and Jagannath wall art in the dining area", category: "Ambience" },
  { src: diningAreaSuryaArt, alt: "Dining area with Surya deity wall art and washbasin nook", category: "Ambience" },
  { src: suryaArtTapNook, alt: "Surya deity wall art above a washbasin nook", category: "Ambience" },
  { src: interiorCorridor, alt: "Interior corridor with potted plants leading to the dining hall", category: "Ambience" },
  { src: interiorCorridorFolkArt, alt: "Interior corridor with Warli folk art wall panels", category: "Ambience" },
  { src: warliFolkArtWall, alt: "Warli folk art wall panel in the dining hall", category: "Ambience" },
  { src: diningTablesOverhead, alt: "Dining tables set for guests", category: "Ambience" },
];
