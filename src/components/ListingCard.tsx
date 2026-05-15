import { Heart, MapPin, Star, BadgeCheck } from "lucide-react";
import type { Listing } from "@/lib/petstop-data";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group rounded-3xl bg-card border border-border/60 border-l-[3px] border-l-transparent shadow-soft hover:shadow-lift hover:-translate-y-[3px] hover:border-l-primary premium-ease overflow-hidden flex flex-col">
      <div className={`relative h-48 ${listing.gradient}`}>
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/85 backdrop-blur text-xs font-medium text-foreground">
          {listing.type}
        </span>
        {listing.verified && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium shadow-soft" style={{ background: "#C9A96E", color: "#2C2218" }}>
            <BadgeCheck size={14} /> Verified
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl leading-tight">{listing.name}</h3>
          <div className="flex items-center gap-1 text-sm shrink-0 mt-1">
            <Star size={14} className="fill-gold text-gold" />
            <span className="font-medium">{listing.rating}</span>
            <span className="text-muted-foreground">({listing.reviews})</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin size={14} /> {listing.neighborhood}, {listing.city}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{listing.description}</p>
        <div className="flex items-center gap-2 pt-3">
          <button className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm premium-ease hover:opacity-[0.88]">
            View Details
          </button>
          <button
            aria-label="Save"
            className="grid place-items-center h-10 w-10 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-primary premium-ease"
          >
            <Heart size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
