import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Globe, Instagram } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      path: "/contact",
      title: "Contact The Big Voice Ltd | Call 0717 003 755, Nairobi",
      description:
        "Call 0717 003 755 or email The Big Voice Ltd in Nairobi for voice over, event sound and podcast production quotes.",
    }),
  component: ContactPage,
});

const cardClass = "flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-amber-500/40 transition";

function ContactPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl">Let's make your next message impossible to ignore.</h1>
        <p className="mt-4 text-neutral-400">Based in Nairobi, Kenya.</p>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <a href="tel:+254717003755" className={cardClass}>
            <Phone className="size-5 text-amber-400" />
            <div>
              <p className="text-xs text-neutral-400">Phone</p>
              <p className="font-medium">+254 717 003 755</p>
            </div>
          </a>
          <a href="mailto:thebigvoicelimited@gmail.com" className={cardClass}>
            <Mail className="size-5 text-amber-400" />
            <div>
              <p className="text-xs text-neutral-400">Email</p>
              <p className="font-medium break-all">thebigvoicelimited@gmail.com</p>
            </div>
          </a>
          <a href="https://thebigvoicelimited.co.ke" className={cardClass}>
            <Globe className="size-5 text-amber-400" />
            <div>
              <p className="text-xs text-neutral-400">Website</p>
              <p className="font-medium">thebigvoicelimited.co.ke</p>
            </div>
          </a>
          <a href="https://instagram.com/thebigvoiceltd" className={cardClass}>
            <Instagram className="size-5 text-amber-400" />
            <div>
              <p className="text-xs text-neutral-400">Social</p>
              <p className="font-medium">@thebigvoiceltd</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
