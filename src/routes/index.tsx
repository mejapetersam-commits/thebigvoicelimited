import { createFileRoute } from "@tanstack/react-router";
import { Mic, Speaker, Headphones, Phone, Mail, Globe, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import consoleImg from "@/assets/console.jpg";
import eventImg from "@/assets/event.jpg";
import podcastImg from "@/assets/podcast.jpg";
import logo from "@/assets/logo.jpg";

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

const clients = ["LG", "Cellulant", "BLAZE", "Maybets", "StarTimes"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-gold/30">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="The Big Voice Ltd" className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40" />
            <span className="font-semibold tracking-wide text-sm sm:text-base">
              THE BIG VOICE <span className="text-gold">LTD</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-gold transition">About</a>
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#clients" className="hover:text-gold transition">Clients</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold text-white px-4 py-2 text-sm font-medium hover:bg-gold/90 transition">
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
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-6">Audio Production · Nairobi, Kenya</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
            Make your brand <span className="text-gold">heard</span>, understood and remembered.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The Big Voice Ltd is a communication-driven audio production company specialising in voice, sound and podcasts, turning ideas into clear, compelling, impactful audio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-gold text-white px-6 py-3 font-medium hover:bg-gold/90 transition">
              Explore our work <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 font-medium hover:bg-black/5 transition">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              A voice for brands that refuse to be background noise.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At The Big Voice Ltd, we partner with brands, organisations and creators to transform ideas into audio that performs. We blend creative storytelling, technical precision and audience insight so every message is heard, understood and remembered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/10 bg-card p-6 shadow-sm">
              <p className="text-gold text-sm font-medium tracking-wide">VISION</p>
              <p className="mt-3 text-foreground leading-relaxed">
                To become a leading voice in Africa's communication and audio production industry, setting the standard for how brands connect, engage and influence through sound.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-card p-6 shadow-sm">
              <p className="text-gold text-sm font-medium tracking-wide">MISSION</p>
              <p className="mt-3 text-foreground leading-relaxed">
                To elevate communication through powerful voice and sound, helping brands deliver messages that are clear, engaging and impactful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 border-t border-black/5 bg-gradient-to-b from-background to-blueish-muted/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">The problem we solve</p>
            <h3 className="text-3xl sm:text-4xl font-bold">In a noisy world, most brands struggle with…</h3>
            <ul className="mt-8 space-y-4 text-muted-foreground">
              {["Messages that are heard but not understood","Events where sound fails the experience","Content that lacks clarity, polish and engagement"].map(p => (
                <li key={p} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-gold shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Our solution</p>
            <h3 className="text-3xl sm:text-4xl font-bold">Three pillars that bridge message and impact.</h3>
            <ul className="mt-8 space-y-4 text-foreground">
              {["Voice & Audio Production","Event Sound & Audience Experience","Podcast & Spoken Content"].map(p => (
                <li key={p} className="flex gap-3 items-start"><CheckCircle2 className="size-5 text-gold mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">What we do</p>
              <h2 className="text-4xl sm:text-5xl font-bold">Our services</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Premium voice, sound and podcast production from concept to final mix.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(s => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="group rounded-2xl overflow-hidden border border-black/10 bg-card hover:border-gold/40 transition shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-xl font-semibold">{s.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {s.items.map(i => (
                        <li key={i} className="flex gap-2"><span className="text-gold">·</span>{i}</li>
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
      <section id="clients" className="py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Trusted by</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Brands we've given a voice</h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map(c => (
              <div key={c} className="rounded-xl border border-black/10 bg-card py-8 px-4 text-muted-foreground font-semibold tracking-wider shadow-sm">
                {c}
              </div>
            ))}
          </div>
          <blockquote className="mt-20 max-w-3xl mx-auto">
            <p className="text-2xl sm:text-3xl font-medium leading-snug">
              "We deliver <span className="text-gold">clarity, confidence and connection</span>, so your message creates real impact."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">— Our Promise</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-black/5 bg-gradient-to-b from-blueish-muted/40 to-background">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold max-w-3xl">Let's make your next message impossible to ignore.</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <a href="tel:+254717003755" className="flex items-center gap-4 rounded-2xl border border-black/10 bg-card p-5 hover:border-gold/40 transition shadow-sm">
              <Phone className="size-5 text-gold" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium">+254 717 003 755</p>
              </div>
            </a>
            <a href="mailto:thebigvoicelimited@gmail.com" className="flex items-center gap-4 rounded-2xl border border-black/10 bg-card p-5 hover:border-gold/40 transition shadow-sm">
              <Mail className="size-5 text-gold" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium break-all">thebigvoicelimited@gmail.com</p>
              </div>
            </a>
            <a href="https://www.thebigvoiceltd.com" className="flex items-center gap-4 rounded-2xl border border-black/10 bg-card p-5 hover:border-gold/40 transition shadow-sm">
              <Globe className="size-5 text-gold" />
              <div>
                <p className="text-xs text-muted-foreground">Website</p>
                <p className="font-medium">www.thebigvoiceltd.com</p>
              </div>
            </a>
            <a href="https://instagram.com/thebigvoiceltd" className="flex items-center gap-4 rounded-2xl border border-black/10 bg-card p-5 hover:border-gold/40 transition shadow-sm">
              <Instagram className="size-5 text-gold" />
              <div>
                <p className="text-xs text-muted-foreground">Social</p>
                <p className="font-medium">@thebigvoiceltd</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Big Voice Ltd. All rights reserved.</p>
          <p>Voice · Sound · Podcasts</p>
        </div>
      </footer>
    </div>
  );
}
