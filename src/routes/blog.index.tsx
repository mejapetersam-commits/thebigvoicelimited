import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatDate, posts, readMinutes } from "@/lib/blog";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seo({
      path: "/blog",
      title: "Blog | Event Sound, Voice Over & Podcast Tips | The Big Voice Ltd",
      description:
        "Practical guides on event sound, voice over and podcast production in Kenya, from The Big Voice Ltd in Nairobi.",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl sm:text-6xl font-bold">Blog</h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Practical guides on event sound, voice over and podcast production.
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-amber-500/40"
            >
              <p className="text-sm text-neutral-500">
                {formatDate(p.date)} · {readMinutes(p)} min read
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug">{p.title}</h2>
              <p className="mt-3 text-neutral-400">{p.description}</p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-400 group-hover:gap-3 transition-all">
                Read article <ArrowRight className="size-4" />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
