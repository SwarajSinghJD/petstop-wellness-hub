import { useMemo, useState } from "react";
import { Search, MapPin, SlidersHorizontal, PawPrint } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import { SiteFooter } from "@/components/SiteNav";
import { listings, filterTypes, type ListingType } from "@/lib/petstop-data";
import { useDocTitle } from "@/lib/use-doc-title";

const pillFilters = ["All", "Verified Only", "Top Rated", "Open Now", "Emergency Available"] as const;
type Pill = (typeof pillFilters)[number];

export default function ListingsPage() {
  useDocTitle(
    "Find Trusted Pet Services Near You — PetStop",
    "Browse verified vets, breeders, shelters, groomers and pet shops in your city.",
  );

  const [pill, setPill] = useState<Pill>("All");
  const [types, setTypes] = useState<Set<ListingType>>(new Set());
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [emergencyOnly, setEmergencyOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [city, setCity] = useState("");

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (pill === "Verified Only" && !l.verified) return false;
      if (pill === "Top Rated" && l.rating < 4.8) return false;
      if (pill === "Open Now" && !l.openNow) return false;
      if (pill === "Emergency Available" && !l.emergency) return false;
      if (types.size > 0 && !types.has(l.type)) return false;
      if (verifiedOnly && !l.verified) return false;
      if (emergencyOnly && !l.emergency) return false;
      if (l.rating < minRating) return false;
      if (city && !l.city.toLowerCase().includes(city.toLowerCase()) && !l.neighborhood.toLowerCase().includes(city.toLowerCase())) return false;
      return true;
    });
  }, [pill, types, verifiedOnly, emergencyOnly, minRating, city]);

  const toggleType = (t: ListingType) => {
    setTypes((prev) => {
      const n = new Set(prev);
      n.has(t) ? n.delete(t) : n.add(t);
      return n;
    });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-warm-gradient">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-primary">Listings</p>
            <h1 className="mt-3 font-serif text-5xl md:text-6xl leading-tight">Find trusted pet services near you.</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Hand-verified vets, breeders, shelters, groomers and pet shops — all in one warm place.
            </p>
          </div>

          <div className="mt-10 max-w-3xl bg-card border border-border/60 rounded-3xl shadow-lift p-2 flex flex-col md:flex-row items-stretch gap-2">
            <div className="flex items-center gap-3 px-4 py-3 flex-1 rounded-2xl">
              <MapPin size={18} className="text-primary" />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City or neighborhood"
                className="bg-transparent outline-none flex-1 text-sm placeholder:text-muted-foreground"
              />
            </div>
            <div className="hidden md:block w-px bg-border my-2" />
            <div className="flex items-center gap-3 px-4 py-3 flex-1 rounded-2xl">
              <SlidersHorizontal size={18} className="text-primary" />
              <select
                onChange={(e) => {
                  const v = e.target.value as ListingType | "any";
                  setTypes(v === "any" ? new Set() : new Set([v]));
                }}
                className="bg-transparent outline-none flex-1 text-sm text-muted-foreground"
              >
                <option value="any">Any service</option>
                {filterTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground premium-ease hover:opacity-[0.88]">
              <Search size={16} /> Search
            </button>
          </div>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {pillFilters.map((p) => (
              <button
                key={p}
                onClick={() => setPill(p)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  pill === p
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-[280px_1fr] gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block space-y-8 sticky top-28 self-start">
          <div>
            <h3 className="font-serif text-xl mb-4">Service Type</h3>
            <div className="space-y-3">
              {filterTypes.map((t) => (
                <label key={t} className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={types.has(t)}
                    onChange={() => toggleType(t)}
                    className="h-4 w-4 rounded accent-[oklch(0.55_0.10_25)]"
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">Minimum Rating</h3>
            <div className="flex gap-2">
              {[0, 4, 4.5, 4.8].map((r) => (
                <button
                  key={r}
                  onClick={() => setMinRating(r)}
                  className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                    minRating === r ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {r === 0 ? "Any" : `${r}+`}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <ToggleRow label="Verified Only" value={verifiedOnly} onChange={setVerifiedOnly} />
            <ToggleRow label="Emergency Available" value={emergencyOnly} onChange={setEmergencyOnly} />
          </div>
          <div>
            <h3 className="font-serif text-xl mb-4">City</h3>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Brooklyn"
              className="w-full px-4 py-2.5 rounded-full bg-card border border-border text-sm outline-none focus:border-primary transition-colors"
            />
          </div>
        </aside>

        {/* Grid */}
        <div>
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} listings</p>
          {filtered.length === 0 ? (
            <div className="rounded-3xl bg-card border border-border/60 p-16 text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-warm-gradient grid place-items-center text-primary">
                <PawPrint size={36} />
              </div>
              <h3 className="mt-6 font-serif text-3xl">No listings found here yet</h3>
              <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                But we're growing every day. Try widening your filters or check back soon.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function ToggleRow({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-sm text-foreground">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative h-6 w-11 rounded-full transition-colors ${value ? "bg-primary" : "bg-border"}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
      </button>
    </label>
  );
}
