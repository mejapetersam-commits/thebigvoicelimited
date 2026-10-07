import { createFileRoute } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { adWork } from "@/lib/ad-work";
import { seo, jsonLd, serviceSchema } from "@/lib/seo";
import { CONTACT } from "@/lib/services-data";

export const Route = createFileRoute("/services/voice-audio")({
  head: () => ({
    ...seo({
      path: "/services/voice-audio",
      title: "Voice Over & Audio Production in Nairobi | The Big Voice Ltd",
      description:
        "Voice over and audio production in Nairobi for adverts, corporate communication, e-learning and documentaries. Listen to work for Samsung, Britam, StarTimes and more.",
    }),
    scripts: [
      jsonLd(
        serviceSchema(
          "Voice & Audio Production",
          "Voice over and audio production for advertising, corporate communication, e-learning and documentaries.",
          "/services/voice-audio",
        ),
      ),
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

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Voice over and audio production in Nairobi</h2>
          <p className="mt-5 text-neutral-300 leading-relaxed">
            The Big Voice Ltd produces voiceovers and audio for brands, organisations and creators across Kenya. We handle the voice, the recording and the final mix, so your message sounds clear and professional.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-neutral-200">
            {["Advertising & commercials", "Corporate communication", "E-learning & training programs", "Documentaries & digital media"].map((i) => (
              <li key={i} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-amber-400 shrink-0" />{i}</li>
            ))}
          </ul>
          <a href={CONTACT.phoneHref} className="mt-8 inline-flex items-center rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition">
            Call {CONTACT.phone}
          </a>
        </div>
      </section>
    </>
  );
}
