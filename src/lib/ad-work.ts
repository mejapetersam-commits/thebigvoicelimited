import samsungCover from "@/assets/ads/samsung-cover.jpg";
import britamCover from "@/assets/ads/britam-cover.png";

export type AdWorkItem = {
  type: "audio" | "video";
  brand: string;
  title: string;
  src: string;
  cover?: string;
};

export const adWork: AdWorkItem[] = [
  { type: "audio", brand: "Samsung", title: "Galaxy A37 & A57", src: "/ads/samsung.mp3", cover: samsungCover },
  { type: "audio", brand: "Britam", title: "Brand Spot", src: "/ads/britam.mp3", cover: britamCover },
  { type: "video", brand: "StarTimes", title: "TV Campaign", src: "/ads/startimes.mp4" },
  { type: "video", brand: "Maybets", title: "Promo Spot", src: "/ads/maybets.mp4" },
  { type: "video", brand: "Kibao", title: "Brand Ad", src: "/ads/kibao.mp4" },
  { type: "video", brand: "Mobimba", title: "Station Ident", src: "/ads/mobimba.mp4" },
];
