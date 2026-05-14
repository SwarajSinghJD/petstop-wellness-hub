import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, Stethoscope, PawPrint, ShieldCheck, Star, Sparkles, Phone, ArrowRight, Heart, BadgeCheck, Users, Clock } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import { SiteFooter } from "@/components/SiteNav";
import { listings } from "@/lib/petstop-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PetStop — Everything your pet deserves, in one place" },
      { name: "description", content: "Find verified vets, breeders, shelters, groomers and pet shops, and manage your pet's health — all in one warm place." },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: BadgeCheck, label: "500+ Verified Listings" },
  { icon: Users, label: "10,000+ Pet Parents" },
  { icon: Star, label: "4.9 Average Rating" },
  { icon: Phone, label: "Emergency Help 24/7" },
];

const steps = [
  { icon: Search, title: "Search", text: "Tell us your city and what your pet needs. Browse warm, considered options nearby." },
  { icon: ShieldCheck, title: "Verify", text: "Every listing is hand-checked. Look for the gold badge — it means we've done the homework." },
  { icon: Heart, title: "Connect", text: "Book a visit, message a breeder or save a shelter pet. Care that feels personal, every step." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-gradient opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border/60 text-xs tracking-wide uppercase text-muted-foreground">
              <Sparkles size={14} className="text-primary" /> AI-powered pet care, made human
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-foreground">
              Everything your pet<br />deserves, in one place.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              PetStop helps you find verified vets, breeders, shelters and groomers — and keeps your
              pet's health journal beautifully organized.
            </p>

            {/* Search bar */}
            <div className="mt-10 mx-auto max-w-2xl bg-card border border-border/60 rounded-3xl shadow-lift p-2 flex flex-col md:flex-row items-stretch gap-2">
              <div className="flex items-center gap-3 px-4 py-3 flex-1 rounded-2xl hover:bg-secondary/60 transition-colors">
                <MapPin size={18} className="text-primary shrink-0" />
                <input placeholder="City or neighborhood" className="bg-transparent outline-none flex-1 text-sm placeholder:text-muted-foreground" />
              </div>
              <div className="hidden md:block w-px bg-border my-2" />
              <div className="flex items-center gap-3 px-4 py-3 flex-1 rounded-2xl hover:bg-secondary/60 transition-colors">
                <Stethoscope size={18} className="text-primary shrink-0" />
                <select className="bg-transparent outline-none flex-1 text-sm text-muted-foreground">
                  <option>Any service</option>
                  <option>Vet</option><option>Breeder</option><option>Shelter</option>
                  <option>Groomer</option><option>Pet Shop</option>
                </select>
              </div>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <Search size={16} /> Search
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/listings" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                <Stethoscope size={16} /> Find a Vet
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-[1.5px] border-primary text-primary hover:bg-primary/10 transition-colors">
                <PawPrint size={16} /> Add Your Pet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 -mt-10 relative">
        <div className="rounded-3xl bg-card border border-border/60 shadow-soft px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-2xl bg-secondary text-primary">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-wider text-primary">How it works</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Care in three calm steps.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="rounded-3xl bg-card border border-border/60 shadow-soft p-8 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-mauve-gradient text-primary-foreground">
                  <Icon size={20} />
                </span>
                <span className="font-serif text-3xl text-muted-foreground/60">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured listings */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-primary">Featured nearby</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Loved by pet parents.</h2>
            </div>
            <Link to="/listings" className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
              See all listings <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 flex gap-6 overflow-x-auto pb-6 -mx-6 px-6 snap-x">
            {listings.slice(0, 6).map((l) => (
              <div key={l.id} className="min-w-[320px] max-w-[340px] snap-start">
                <ListingCard listing={l} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant teaser */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="relative overflow-hidden rounded-3xl bg-mauve-gradient text-primary-foreground p-10 md:p-16 shadow-lift">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/15 backdrop-blur text-xs tracking-wide uppercase">
              <Sparkles size={14} /> New · AI Pet Assistant
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight text-primary-foreground">
              Meet your pet's personal AI companion.
            </h2>
            <p className="mt-5 text-primary-foreground/85 text-lg leading-relaxed">
              Ask anything — symptoms at 2am, food brand comparisons, training tips. Trained on
              veterinary literature and gentle enough to talk to.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/assistant" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background text-foreground hover:bg-background/90 transition-colors">
                <Sparkles size={16} /> Try the Assistant
              </Link>
              <Link to="/emergency" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background/10 backdrop-blur border border-background/20 hover:bg-background/20 transition-colors">
                <Clock size={16} /> 24/7 Emergency
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
