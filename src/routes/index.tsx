import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.jpg";
import lgLogo from "@/assets/clients/lg.webp";
import cellulantLogo from "@/assets/clients/cellulant.webp";
import blazeLogo from "@/assets/clients/blaze.png";
import maybetsLogo from "@/assets/clients/maybets.jpg";
import startimesLogo from "@/assets/clients/startimes.png";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  component: Index,
});

const clients = [
  { name: "LG", logo: lgLogo },
  { name: "Cellulant", logo: cellulantLogo },
  { name: "BLAZE", logo: blazeLogo },
  { name: "Maybets", logo: maybetsLogo },
  { name: "StarTimes", logo: startimesLogo },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Studio microphone with audio waveform"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-6">Audio Production · Nairobi, Kenya</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
            Make your brand <span className="text-amber-400">heard</span>, understood and remembered.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            The Big Voice Ltd is a communication-driven audio production company specialising in voice, sound and podcasts, turning ideas into clear, compelling, impactful audio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition">
              Explore our services <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold">What we do</h2>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:gap-3 transition-all">
              All services <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              const inner = (
                <>
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-neutral-400">{s.summary}</p>
                </>
              );
              const cls = "block rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-amber-500/40";
              return s.href ? (
                <Link key={s.title} to={s.href} className={cls}>{inner}</Link>
              ) : (
                <div key={s.title} className={cls}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Brands we've given a voice</h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((c) => (
              <div key={c.name} className="rounded-xl border border-white/10 bg-white py-6 px-4 flex items-center justify-center h-28">
                <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-14 max-w-full object-contain" />
              </div>
            ))}
          </div>
          <blockquote className="mt-20 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-medium leading-snug">
              "We deliver <span className="text-amber-400">clarity, confidence and connection</span>, so your message creates real impact."
            </p>
            <footer className="mt-4 text-sm text-neutral-400">— Our Promise</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold">Let's make your next message impossible to ignore.</h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition">
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
