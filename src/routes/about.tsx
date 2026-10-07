import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      path: "/about",
      title: "About The Big Voice Ltd | Audio Production Company, Nairobi",
      description:
        "The Big Voice Ltd partners with brands, organisations and creators in Kenya to turn ideas into voice, sound and podcast audio that is heard, understood and remembered.",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              A voice for brands that refuse to be background noise.
            </h1>
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

      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">In a noisy world, most brands struggle with…</h2>
            <ul className="mt-8 space-y-4 text-neutral-300">
              {["Messages that are heard but not understood", "Events where sound fails the experience", "Content that lacks clarity, polish and engagement"].map((p) => (
                <li key={p} className="flex gap-3"><span className="mt-2 size-1.5 rounded-full bg-amber-400 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Three pillars that bridge message and impact.</h2>
            <ul className="mt-8 space-y-4 text-neutral-200">
              {["Voice & Audio Production", "Event Sound & Audience Experience", "Podcast & Spoken Content"].map((p) => (
                <li key={p} className="flex gap-3 items-start"><CheckCircle2 className="size-5 text-amber-400 mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:gap-3 transition-all">
              See our services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
