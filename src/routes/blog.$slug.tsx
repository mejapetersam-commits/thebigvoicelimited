import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { formatDate, getPost, readMinutes } from "@/lib/blog";
import { blogPostSchema, jsonLd, seo } from "@/lib/seo";
import { CONTACT } from "@/lib/services-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          ...seo({
            path: `/blog/${loaderData.slug}`,
            title: loaderData.title,
            description: loaderData.description,
          }),
          scripts: [jsonLd(blogPostSchema(loaderData))],
        }
      : {},
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-400 transition">
          <ArrowLeft className="size-4" /> All articles
        </Link>
        <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-4 text-sm text-neutral-500">
          {formatDate(post.date)} · {readMinutes(post)} min read
        </p>
        <p className="mt-8 text-xl text-neutral-200 leading-relaxed">{post.intro}</p>

        {post.blocks.map((b, i) => {
          if (b.type === "h2")
            return <h2 key={i} className="mt-12 text-2xl sm:text-3xl font-bold">{b.text}</h2>;
          if (b.type === "p")
            return <p key={i} className="mt-4 text-neutral-300 leading-relaxed text-lg">{b.text}</p>;
          const List = b.type === "ol" ? "ol" : "ul";
          return (
            <List key={i} className={`mt-4 space-y-3 text-neutral-300 text-lg ${b.type === "ol" ? "list-decimal pl-6" : ""}`}>
              {b.items.map((it) => (
                <li key={it} className={b.type === "ul" ? "flex gap-3" : ""}>
                  {b.type === "ul" && <span className="mt-3 size-1.5 rounded-full bg-amber-400 shrink-0" />}
                  <span>{it}</span>
                </li>
              ))}
            </List>
          );
        })}

        <div className="mt-16 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-7">
          <p className="text-sm text-amber-400 font-medium">{post.related.label}</p>
          <p className="mt-2 text-lg text-neutral-200">{post.related.text}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to={post.related.to} className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-5 py-2.5 text-sm font-medium hover:bg-amber-400 transition">
              Learn more <ArrowRight className="size-4" />
            </Link>
            <a href={CONTACT.phoneHref} className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition">
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
