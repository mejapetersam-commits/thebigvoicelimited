import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, AudioLines, Headphones, Mic } from "lucide-react";
import podcastImg from "@/assets/podcast.jpg";
import { CONTACT } from "@/lib/services-data";
import { jsonLd, seo, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/services/podcast-production")({
  head: () => ({
    ...seo({
      path: "/services/podcast-production",
      title: "Podcast Production in Nairobi | The Big Voice Ltd",
      description:
        "Podcast recording, editing, sound design and content guidance in Nairobi. From first idea to finished episode with The Big Voice Ltd.",
    }),
    scripts: [
      jsonLd(
        serviceSchema(
          "Podcast Production",
          "Podcast recording, editing, sound design and content structuring.",
          "/services/podcast-production",
        ),
      ),
    ],
  }),
  component: PodcastPage,
});

const offers = [
  { icon: Mic, title: "Recording & Production", text: "Professional recording and production for your show." },
  { icon: AudioLines, title: "Editing & Sound Design", text: "Clean edits and sound design that keep listeners with you." },
  { icon: Headphones, title: "Content Structuring & Guidance", text: "Help shaping your format, episodes and message." },
];

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition";

function PodcastPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src={podcastImg}
          alt="Podcast recording microphone and headphones"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
            Podcast Production in Nairobi
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-neutral-300">
            Recording, editing and guidance, from first idea to finished episode.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={CONTACT.phoneHref} className={primaryBtn}>
              Call {CONTACT.phone}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition">
              Contact us <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">What we do</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {offers.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{o.title}</h3>
                  <p className="mt-2 text-neutral-400">{o.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Have a podcast idea?</h2>
          <p className="mt-6 text-lg text-neutral-300">Tell us about your show and we'll help you shape it.</p>
          <a href={CONTACT.phoneHref} className={primaryBtn + " mt-10"}>
            Call {CONTACT.phone}
          </a>
        </div>
      </section>
    </>
  );
}
