import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import consoleImg from "@/assets/console.jpg";
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={consoleImg}
          alt="Audio mixing console in a recording studio"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
            Voice &amp; Audio Production
          </h1>
          <p className="mt-6 max-w-2xl text-xl sm:text-2xl text-amber-400 font-medium">
            Adverts we've voiced and produced.
          </p>
          <p className="mt-5 max-w-2xl text-lg text-neutral-300">
            A selection of campaigns, station idents and brand spots, from corporate communications to high-energy commercials. Based in Nairobi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition">
              Listen to Our Work <ArrowDown className="size-4" />
            </a>
            <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition">
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 border-t border-white/5 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected work</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
