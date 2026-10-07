import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AudioLines,
  Check,
  Mic,
  PartyPopper,
  SlidersHorizontal,
  Speaker,
} from "lucide-react";
import eventImg from "@/assets/event.jpg";
import { CONTACT, quoteHref } from "@/lib/services-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/services/event-sound")({
  head: () => ({
    meta: [
      { title: "Event & Sound Experience — The Big Voice Ltd" },
      {
        name: "description",
        content:
          "Professional sound, production and event support built around your event. Weddings, corporate events, conferences and celebrations across Kenya.",
      },
      { property: "og:title", content: "Event & Sound Experience — The Big Voice Ltd" },
      {
        property: "og:description",
        content: "Sound, production, MC and hosting built around your event. Request a quote.",
      },
    ],
  }),
  component: EventSoundPage,
});

/* ---------- Content ---------- */

const capabilities = [
  { icon: Speaker, title: "Sound & PA", text: "Clear, reliable sound designed around your venue and audience." },
  { icon: SlidersHorizontal, title: "Event Production", text: "Technical production, coordination and equipment sourcing." },
  { icon: Mic, title: "Corporate MC", text: "Professional hosting, programme flow and audience engagement." },
  { icon: PartyPopper, title: "Event Hosting", text: "Energy, structure and personality for social and corporate events." },
  { icon: AudioLines, title: "Voiceovers & Event Promos", text: "Professional voice and promotional audio for your event." },
];

type Pkg = {
  id: string;
  tier: string;
  name: string;
  bestFor: string;
  guests?: string;
  inclusions: string[];
  cta: string;
  popular?: boolean;
  premium?: boolean;
};

const packages: Pkg[] = [
  {
    id: "starter",
    tier: "Starter",
    name: "Essential Sound",
    bestFor: "Best for smaller gatherings.",
    guests: "50–100 guests",
    inclusions: ["PA system", "Wireless microphones", "Sound technician", "Setup & soundcheck"],
    cta: "Get a Quote",
  },
  {
    id: "standard",
    tier: "Standard",
    name: "Complete Event Sound",
    bestFor: "For weddings, ruracio and medium-sized events.",
    guests: "100–200 guests",
    inclusions: ["Enhanced PA", "Multiple microphones", "Sound technician", "Music integration"],
    cta: "Get a Quote",
    popular: true,
  },
  {
    id: "premium",
    tier: "Premium",
    name: "Enhanced Event Production",
    bestFor: "For larger social and public events.",
    guests: "200–400 guests",
    inclusions: ["Professional PA", "Subwoofers", "Technical crew", "Production coordination"],
    cta: "Get a Quote",
  },
  {
    id: "corporate",
    tier: "Corporate",
    name: "Professional Corporate Production",
    bestFor: "For conferences, launches, panels and corporate functions.",
    inclusions: [
      "Professional audio",
      "Presentation & panel support",
      "Technical operator",
      "Corporate MC / moderation",
    ],
    cta: "Plan a Corporate Event",
    premium: true,
  },
];

const addOns = [
  "Lighting",
  "LED Screens",
  "Projectors",
  "DJ",
  "MC",
  "Livestreaming",
  "Photography",
  "Videography",
  "Additional Sound",
  "Technical Crew",
];

const steps = [
  { title: "Tell Us", text: "Share your event requirements." },
  { title: "We Design", text: "We determine the right solution." },
  { title: "We Coordinate", text: "Equipment, crew and logistics are handled." },
  { title: "You Experience", text: "You focus on your event. We handle the technical execution." },
];

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-6 py-3 font-medium hover:bg-amber-400 transition";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition";

/* ---------- Page ---------- */

function EventSoundPage() {
  const [selected, setSelected] = useState<Pkg | null>(null);

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={eventImg}
          alt="Live event sound setup"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
            Event &amp; Sound Experience
          </h1>
          <p className="mt-6 max-w-2xl text-xl sm:text-2xl text-amber-400 font-medium">
            Professional sound, production and event support built around your event.
          </p>
          <p className="mt-5 max-w-2xl text-lg text-neutral-300">
            From intimate gatherings to corporate events and larger celebrations, Big Voice brings together the sound, people and technical production required to deliver a seamless experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className={primaryBtn}>
              Plan Your Event <ArrowRight className="size-4" />
            </Link>
            <a href="#packages" className={ghostBtn}>
              Explore Packages
            </a>
          </div>
        </div>
      </section>

      {/* 2. What we do */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">What we do</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-500/40 sm:last:col-span-2 lg:last:col-span-1"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-neutral-950">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Packages */}
      <section id="packages" className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-bold">Choose Your Event Solution</h2>
          <p className="mt-4 text-lg text-neutral-300">Start with a package. Customize it around your event.</p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {packages.map((p, i) => (
              <article
                key={p.id}
                className={[
                  "relative flex flex-col rounded-2xl border p-7",
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3",
                  p.popular
                    ? "border-amber-500/60 bg-amber-500/[0.06]"
                    : p.premium
                      ? "border-amber-500/30 bg-gradient-to-br from-amber-500/[0.08] to-white/[0.02]"
                      : "border-white/10 bg-white/[0.03]",
                ].join(" ")}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-amber-500 text-neutral-950 px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                )}
                <p className="text-sm text-amber-400 font-medium">{p.tier}</p>
                <h3 className="mt-1 text-2xl font-semibold leading-snug">{p.name}</h3>
                <p className="mt-3 text-neutral-300">{p.bestFor}</p>
                {p.guests && <p className="mt-1 font-medium text-neutral-100">{p.guests}</p>}
                <p className="mt-5 text-sm text-neutral-400 leading-relaxed">{p.inclusions.join(" · ")}</p>
                <div className="mt-auto pt-7 flex flex-wrap items-center gap-3">
                  <a href={quoteHref(`Quote request: ${p.name} (${p.tier})`)} className={primaryBtn + " !px-5 !py-2.5 text-sm"}>
                    {p.cta}
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition px-2 py-2"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}

            {/* Custom */}
            <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:col-span-2 lg:col-span-3">
              <p className="text-sm text-amber-400 font-medium">Custom</p>
              <h3 className="mt-1 text-2xl font-semibold leading-snug">Built Around Your Event</h3>
              <p className="mt-3 text-neutral-300">
                We build the technical solution around your venue, audience, programme and production requirements.
              </p>
              <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium">
                {["Brief", "Design", "Coordinate", "Deliver"].map((s, i, arr) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="rounded-full border border-white/15 px-3 py-1">{s}</span>
                    {i < arr.length - 1 && <ArrowRight className="size-4 text-amber-400" />}
                  </li>
                ))}
              </ol>
              <div className="mt-auto pt-7">
                <a href={quoteHref("Custom event solution")} className={primaryBtn + " !px-5 !py-2.5 text-sm"}>
                  Build My Solution
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Add-ons */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Need More?</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {addOns.map((a) => (
              <li key={a} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-200">
                {a}
              </li>
            ))}
          </ul>
          <a href={quoteHref("Event add-ons enquiry")} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:gap-3 transition-all">
            Ask About Add-ons <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold">How it works</h2>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-0">
            <div className="hidden md:block absolute top-5 left-5 w-3/4 h-px bg-white/10" aria-hidden />
            {steps.map((s, i) => (
              <li key={s.title} className="relative md:pr-8">
                <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-amber-500/50 bg-neutral-950 text-sm font-semibold text-amber-400">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-28 border-t border-white/5 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">You Bring the Event. We Bring the Solution.</h2>
          <p className="mt-6 text-lg text-neutral-300">
            Tell us what you're planning and we'll help build the right sound and production solution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className={primaryBtn}>
              Plan My Event <ArrowRight className="size-4" />
            </Link>
            <a href={CONTACT.phoneHref} className={ghostBtn}>
              Talk to Big Voice
            </a>
          </div>
        </div>
      </section>

      {/* Package details */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="bg-neutral-950 text-neutral-100 border-white/10">
          {selected && (
            <>
              <DialogHeader>
                <p className="text-sm text-amber-400 font-medium">{selected.tier}</p>
                <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
                <DialogDescription className="text-neutral-300">
                  {selected.bestFor}
                  {selected.guests ? ` ${selected.guests}.` : ""}
                </DialogDescription>
              </DialogHeader>
              <ul className="space-y-3">
                {selected.inclusions.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="size-4 text-amber-400 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-neutral-400">
                Final equipment and crew are confirmed in your quote, based on your venue, programme and guest count.
              </p>
              <a href={quoteHref(`Quote request: ${selected.name} (${selected.tier})`)} className={primaryBtn}>
                {selected.cta}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
