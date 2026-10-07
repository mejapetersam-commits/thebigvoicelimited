import { createFileRoute } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { adWork } from "@/lib/ad-work";

export const Route = createFileRoute("/services/voice-audio")({
  head: () => ({
    meta: [
      { title: "Voice & Audio Production — The Big Voice Ltd" },
      { name: "description", content: "Selected voice and audio advertising work produced by The Big Voice Ltd — Samsung, Britam, StarTimes, Maybets, Kibao and Mobimba." },
      { property: "og:title", content: "Voice & Audio Production — The Big Voice Ltd" },
      { property: "og:description", content: "Listen to selected ads, station idents and brand spots we've voiced and produced." },
    ],
  }),
  component: VoiceAudioPage,
});

function VoiceAudioPage() {
  return (
    <>
      <section className="pt-32 pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
              <Mic className="size-5" />
            </span>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-400">Voice & Audio Production</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-4xl">
            Adverts we've <span className="text-amber-400">voiced</span> and produced.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            A selection of campaigns, station idents and brand spots, from corporate communications to high-energy commercials.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adWork.map(ad => (
              <article key={ad.brand + ad.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-amber-500/40 transition">
                {ad.type === "video" ? (
                  <video
                    src={ad.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full aspect-video object-cover bg-black"
                  />
                ) : (
                  <div className="relative aspect-video bg-black">
                    <img src={ad.cover} alt={`${ad.brand} ${ad.title}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <audio src={ad.src} controls preload="metadata" className="w-full" />
                    </div>
                  </div>
                )}
                <div className="p-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-400">{ad.brand}</p>
                    <h3 className="mt-1 font-semibold">{ad.title}</h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 border border-white/10 rounded-full px-2 py-1">
                    {ad.type === "video" ? "Video" : "Audio"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
