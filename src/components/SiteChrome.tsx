import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

const linkBase = "text-sm text-neutral-300 hover:text-amber-400 transition";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="The Big Voice Ltd"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-amber-500/40"
          />
          <span className="font-semibold tracking-wide text-sm sm:text-base">
            THE BIG VOICE <span className="text-amber-400">LTD</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              className={linkBase}
              activeProps={{ className: "text-amber-400" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-4 py-2 text-sm font-medium hover:bg-amber-400 transition"
        >
          Start a project <ArrowRight className="size-4" />
        </Link>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-neutral-200"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.exact }}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-neutral-200 border-b border-white/5"
                activeProps={{ className: "text-amber-400" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 text-neutral-950 px-4 py-3 text-sm font-medium"
            >
              Start a project <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const col = "text-sm text-neutral-400 hover:text-amber-400 transition";
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold tracking-wide text-neutral-100">
            THE BIG VOICE <span className="text-amber-400">LTD</span>
          </p>
          <p className="mt-3 text-neutral-400">Voice, sound and podcast production. Nairobi, Kenya.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-neutral-200 font-medium mb-1">Services</p>
          <Link to="/services/voice-audio" className={col}>Voice & Audio Production</Link>
          <Link to="/services/event-sound" className={col}>Event & Sound Experience</Link>
          <Link to="/services/podcast-production" className={col}>Podcast Production</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-neutral-200 font-medium mb-1">Company</p>
          <Link to="/" className={col}>Home</Link>
          <Link to="/about" className={col}>About</Link>
          <Link to="/contact" className={col}>Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-neutral-200 font-medium mb-1">Contact</p>
          <a href="tel:+254717003755" className={col}>+254 717 003 755</a>
          <a href="mailto:thebigvoicelimited@gmail.com" className={col + " break-all"}>thebigvoicelimited@gmail.com</a>
          <a href="https://instagram.com/thebigvoiceltd" className={col}>@thebigvoiceltd</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/5 text-xs text-neutral-500">
        © {new Date().getFullYear()} The Big Voice Ltd. All rights reserved.
      </div>
    </footer>
  );
}
