import { Mic, Speaker, Headphones } from "lucide-react";
import consoleImg from "@/assets/console.jpg";
import eventImg from "@/assets/event.jpg";
import podcastImg from "@/assets/podcast.jpg";

export type ServiceHref =
  | "/services/voice-audio"
  | "/services/event-sound"
  | "/services/podcast-production";

export type Service = {
  icon: typeof Mic;
  title: string;
  summary: string;
  image: string;
  items: string[];
  href?: ServiceHref;
};

export const services: Service[] = [
  {
    icon: Mic,
    title: "Voice & Audio Production",
    summary: "Voiceovers and audio that make your message land.",
    image: consoleImg,
    items: [
      "Advertising & commercials",
      "Corporate communication",
      "E-learning & training programs",
      "Documentaries & digital media",
    ],
    href: "/services/voice-audio",
  },
  {
    icon: Speaker,
    title: "Event & Sound Experience",
    summary: "Sound, production and hosting built around your event.",
    image: eventImg,
    items: [
      "Professional public address systems",
      "Corporate event audio solutions",
      "Conferences, panels & activations",
      "Full technical sound support",
    ],
    href: "/services/event-sound",
  },
  {
    icon: Headphones,
    title: "Podcast Production",
    summary: "Recording, editing and guidance from idea to episode.",
    image: podcastImg,
    items: [
      "Recording & production",
      "Editing & sound design",
      "Content structuring & guidance",
    ],
    href: "/services/podcast-production",
  },
];

export const CONTACT = {
  phone: "+254 717 003 755",
  phoneHref: "tel:+254717003755",
  email: "info@thebigvoicelimited.co.ke",
};
