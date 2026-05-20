import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { PawPrint, Heart, Search, Sparkles, AlertCircle, Home } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/listings", label: "Find Services", icon: Search, end: false },
  { to: "/dashboard", label: "My Pet", icon: Heart, end: false },
  { to: "/assistant", label: "AI Assistant", icon: Sparkles, end: false },
  { to: "/emergency", label: "Emergency", icon: AlertCircle, end: false },
] as const;

export function SiteNav() {
  // Transparent at top, parchment-blur once scrolled past 20px.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolledStyle = scrolled
    ? {
        background: "#F5F0E8CC",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #E2D5C320",
        boxShadow: "0 1px 20px rgba(44,34,24,0.06)",
      }
    : {
        background: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "1px solid transparent",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      };

  return (
    <header
      className="sticky top-0 z-40"
      style={{ ...scrolledStyle, transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 premium-ease">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-mauve-gradient text-primary-foreground shadow-soft">
            <PawPrint size={20} />
          </span>
          <span className="font-serif text-2xl tracking-tight text-foreground">PetStop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `text-sm premium-ease border-b pb-1 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/dashboard"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm premium-ease hover:opacity-[0.88]"
        >
          <PawPrint size={16} /> Add Your Pet
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60" style={{ background: "#2C2218", color: "#F5F0E8" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-mauve-gradient text-primary-foreground">
              <PawPrint size={20} />
            </span>
            <span className="font-serif text-2xl" style={{ color: "#F5F0E8" }}>PetStop</span>
          </div>
          <p className="mt-4 max-w-md leading-relaxed" style={{ color: "#F5F0E8AA" }}>
            A warm, AI-powered home for everything your pet needs — verified vets, breeders,
            shelters, groomers and a personal health journal.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4" style={{ color: "#C9A96E" }}>Explore</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#F5F0E8AA" }}>
            <li><Link to="/listings">Listings</Link></li>
            <li><Link to="/dashboard">My Pet</Link></li>
            <li><Link to="/emergency">Emergency</Link></li>
            <li><Link to="/">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4" style={{ color: "#C9A96E" }}>Connect</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#F5F0E8AA" }}>
            <li>hello@petstop.care</li>
            <li>Instagram · TikTok · X</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6 text-center text-sm" style={{ borderColor: "#F5F0E822", color: "#F5F0E899" }}>
        Made with love for pet parents everywhere.
      </div>
    </footer>
  );
}
