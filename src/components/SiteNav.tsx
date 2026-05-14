import { Link } from "@tanstack/react-router";
import { PawPrint, Heart, Search, Sparkles, AlertCircle, Home } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/listings", label: "Find Services", icon: Search },
  { to: "/dashboard", label: "My Pet", icon: Heart },
  { to: "/assistant", label: "AI Assistant", icon: Sparkles },
  { to: "/emergency", label: "Emergency", icon: AlertCircle },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid place-items-center h-10 w-10 rounded-2xl bg-mauve-gradient text-primary-foreground shadow-soft">
            <PawPrint size={20} />
          </span>
          <span className="font-serif text-2xl tracking-tight text-foreground">PetStop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
              activeProps={{ className: "px-4 py-2 rounded-full text-sm bg-primary text-primary-foreground" }}
              activeOptions={{ exact: to === "/" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          to="/dashboard"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm hover:opacity-90 transition-opacity"
        >
          <PawPrint size={16} /> Add Your Pet
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-2xl bg-mauve-gradient text-primary-foreground">
              <PawPrint size={20} />
            </span>
            <span className="font-serif text-2xl">PetStop</span>
          </div>
          <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
            A warm, AI-powered home for everything your pet needs — verified vets, breeders,
            shelters, groomers and a personal health journal.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/listings">Listings</Link></li>
            <li><Link to="/dashboard">My Pet</Link></li>
            <li><Link to="/emergency">Emergency</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@petstop.care</li>
            <li>Instagram · TikTok · X</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
        Made with love for pet parents everywhere.
      </div>
    </footer>
  );
}
