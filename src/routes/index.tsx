import { createFileRoute } from "@tanstack/react-router";
import { Mic, Speaker, Headphones, Phone, Mail, Globe, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import consoleImg from "@/assets/console.jpg";
import eventImg from "@/assets/event.jpg";
import podcastImg from "@/assets/podcast.jpg";
import logo from "@/assets/logo.jpg";
import lgLogo from "@/assets/clients/lg.webp";
import cellulantLogo from "@/assets/clients/cellulant.webp";
import blazeLogo from "@/assets/clients/blaze.png";
import maybetsLogo from "@/assets/clients/maybets.jpg";
import startimesLogo from "@/assets/clients/startimes.png";
import samsungCover from "@/assets/ads/samsung-cover.jpg";
import britamCover from "@/assets/ads/britam-cover.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Mic,
    title: "Voice & Audio Production",
    image: consoleImg,
    items: [
      "Advertising & commercials",
      "Corporate communication",
      "E-learning & training programs",
      "Documentaries & digital media",
    ],
  },
  {
    icon: Speaker,
    title: "Event Sound & Experience",
    image: eventImg,
    items: [
      "Professional public address systems",
      "Corporate event audio solutions",
      "Conferences, panels & activations",
      "Full technical sound support",
    ],
  },
  {
    icon: Headphones,
    title: "Podcast Production",
    image: podcastImg,
    items: [
      "Recording & production",
      "Editing & sound design",
      "Content structuring & guidance",
    ],
  },
];

const clients = [
  { name: "LG", logo: lgLogo },
  { name: "Cellulant", logo: cellulantLogo },
  { name: "BLAZE", logo: blazeLogo },
  { name: "Maybets", logo: maybetsLogo },
  { name: "StarTimes", logo: startimesLogo },
];

const adWork = [
  { type: "audio", brand: "Samsung", title: "Galaxy A37 & A57", src: "/ads/samsung.mp3", cover: samsungCover },
  { type: "audio", brand: "Britam", title: "Brand Spot", src: "/ads/britam.mp3", cover: britamCover },
  { type: "video", brand: "StarTimes", title: "TV Campaign", src: "/ads/startimes.mp4" },
  { type: "video", brand: "Maybets", title: "Promo Spot", src: "/ads/maybets.mp4" },
  { type: "video", brand: "Kibao", title: "Brand Ad", src: "/ads/kibao.mp4" },
  { type: "video", brand: "Mobimba", title: "Station Ident", src: "/ads/mobimba.mp4" },
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-500/30">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="The Big Voice Ltd" className="h-9 w-9 rounded-full object-cover ring-1 ring-amber-500/40" />
            <span className="font-semibold tracking-wide text-sm sm:text-base">
              THE BIG VOICE <span className="text-amber-400">LTD</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#services" className="hover:text-amber-400 transition">Services</a>
            <a href="#work" className="hover:text-amber-400 transition">Work</a>
            <a href="#clients" className="hover:text-amber-400 transition">Clients</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-amber-400 transition">
            Start a project <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
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
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition">
              Explore our work <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              A voice for brands that refuse to be background noise.
            </h2>
            <p className="mt-6 text-neutral-300 leading-relaxed">
              At The Big Voice Ltd, we partner with brands, organisations and creators to transform ideas into audio that performs. We blend creative storytelling, technical precision and audience insight so every message is heard, understood and remembered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-amber-400 text-sm font-medium tracking-wide">VISION</p>
              <p className="mt-3 text-neutral-200 leading-relaxed">
                To become a leading voice in Africa's communication and audio production industry, setting the standard for how brands connect, engage and influence through sound.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-amber-400 text-sm font-medium tracking-wide">MISSION</p>
              <p className="mt-3 text-neutral-200 leading-relaxed">
                To elevate communication through powerful voice and sound, helping brands deliver messages that are clear, engaging and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">The problem we solve</p>
            <h3 className="text-3xl sm:text-4xl font-bold">In a noisy world, most brands struggle with…</h3>
            <ul className="mt-8 space-y-4 text-neutral-300">
              {["Messages that are heard but not understood","Events where sound fails the experience","Content that lacks clarity, polish and engagement"].map(p => (
                <li key={p} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-amber-400 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">Our solution</p>
            <h3 className="text-3xl sm:text-4xl font-bold">Three pillars that bridge message and impact.</h3>
            <ul className="mt-8 space-y-4 text-neutral-200">
              {["Voice & Audio Production","Event Sound & Audience Experience","Podcast & Spoken Content"].map(p => (
                <li key={p} className="flex gap-3 items-start"><CheckCircle2 className="size-5 text-amber-400 mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">What we do</p>
              <h2 className="text-4xl sm:text-5xl font-bold">Our services</h2>
            </div>
            <p className="text-neutral-400 max-w-md">Premium voice, sound and podcast production from concept to final mix.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-amber-500/40 transition">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                      {s.items.map(i => (
                        <li key={i} className="flex gap-2"><span className="text-amber-400">·</span>{i}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      {/* Featured Work / Ads */}
      <section id="work" className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">Selected work</p>
              <h2 className="text-4xl sm:text-5xl font-bold">Adverts we've voiced & produced</h2>
            </div>
            <p className="text-neutral-400 max-w-md">A taste of the campaigns, station idents and brand spots we've helped bring to life.</p>
          </div>
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
                    <img src={ad.cover} alt={`${ad.brand} ${ad.title}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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

      {/* Clients */}
      <section id="clients" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">Trusted by</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Brands we've given a voice</h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map(c => (
              <div key={c.name} className="rounded-xl border border-white/10 bg-white py-6 px-4 flex items-center justify-center h-28">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-14 max-w-full object-contain"
                />
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

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl">Let's make your next message impossible to ignore.</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <a href="tel:+254717003755" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-500/40 transition">
              <Phone className="size-5 text-amber-400" />
              <div>
                <p className="text-xs text-neutral-400">Phone</p>
                <p className="font-medium">+254 717 003 755</p>
              </div>
            </a>
            <a href="mailto:thebigvoicelimited@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-500/40 transition">
              <Mail className="size-5 text-amber-400" />
              <div>
                <p className="text-xs text-neutral-400">Email</p>
                <p className="font-medium break-all">thebigvoicelimited@gmail.com</p>
              </div>
            </a>
            <a href="https://www.thebigvoiceltd.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-500/40 transition">
              <Globe className="size-5 text-amber-400" />
              <div>
                <p className="text-xs text-neutral-400">Website</p>
                <p className="font-medium">www.thebigvoiceltd.com</p>
              </div>
            </a>
            <a href="https://instagram.com/thebigvoiceltd" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-500/40 transition">
              <Instagram className="size-5 text-amber-400" />
              <div>
                <p className="text-xs text-neutral-400">Social</p>
                <p className="font-medium">@thebigvoiceltd</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} The Big Voice Ltd. All rights reserved.</p>
          <p>Voice · Sound · Podcasts</p>
        </div>
      </footer>
    </div>
  );
}
