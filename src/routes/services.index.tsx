import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      path: "/services",
      title: "Audio, Event Sound & Podcast Services in Nairobi | The Big Voice Ltd",
      description:
        "Voice over and audio production, event sound and MC services, and podcast production from The Big Voice Ltd in Nairobi, Kenya.",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl font-bold">Our services</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Premium voice, sound and podcast production from concept to final mix.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            const body = (
              <>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2"><span className="text-amber-400">·</span>{i}</li>
                    ))}
                  </ul>
                  {s.href && (
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-400 group-hover:gap-3 transition-all">
                      {s.href === "/services/voice-audio" ? "View our work" : "Explore"} <ArrowRight className="size-4" />
                    </p>
                  )}
                </div>
              </>
            );
            const cls = "group block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-amber-500/40 transition";
            return s.href ? (
              <Link key={s.title} to={s.href} className={cls}>{body}</Link>
            ) : (
              <article key={s.title} className={cls}>{body}</article>
            );
          })}
        </div>
      </section>
    </>
  );
}
