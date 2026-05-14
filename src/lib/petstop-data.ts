export type ListingType = "Vet" | "Breeder" | "Shelter" | "Groomer" | "Pet Shop" | "NGO";

export interface Listing {
  id: string;
  name: string;
  type: ListingType;
  city: string;
  neighborhood: string;
  rating: number;
  reviews: number;
  verified: boolean;
  emergency?: boolean;
  openNow?: boolean;
  description: string;
  gradient: string; // tailwind utility
}

export const listings: Listing[] = [
  { id: "1", name: "Willow Lane Veterinary", type: "Vet", city: "Brooklyn", neighborhood: "Park Slope", rating: 4.9, reviews: 412, verified: true, emergency: true, openNow: true, description: "Compassionate full-service care from a board-certified team.", gradient: "bg-pet-1" },
  { id: "2", name: "Marigold Grooming Studio", type: "Groomer", city: "Brooklyn", neighborhood: "Williamsburg", rating: 4.8, reviews: 287, verified: true, openNow: true, description: "Quiet, low-stress grooming with organic, pet-safe products.", gradient: "bg-pet-2" },
  { id: "3", name: "Hearthstone Golden Retrievers", type: "Breeder", city: "Hudson Valley", neighborhood: "Rhinebeck", rating: 5.0, reviews: 96, verified: true, description: "Family-raised goldens, fully health-tested across four generations.", gradient: "bg-pet-3" },
  { id: "4", name: "Second Chance Shelter", type: "Shelter", city: "Queens", neighborhood: "Astoria", rating: 4.7, reviews: 1340, verified: true, emergency: true, description: "No-kill shelter rehoming over 1,200 pets a year.", gradient: "bg-pet-4" },
  { id: "5", name: "The Cozy Paw Boutique", type: "Pet Shop", city: "Manhattan", neighborhood: "West Village", rating: 4.8, reviews: 521, verified: true, openNow: true, description: "Curated food, toys and bedding from independent makers.", gradient: "bg-pet-5" },
  { id: "6", name: "Riverbank Animal Rescue", type: "NGO", city: "Jersey City", neighborhood: "Downtown", rating: 4.9, reviews: 203, verified: true, description: "Volunteer-run rescue focused on senior dogs and cats.", gradient: "bg-pet-6" },
  { id: "7", name: "Northside Emergency Vet", type: "Vet", city: "Brooklyn", neighborhood: "Greenpoint", rating: 4.6, reviews: 612, verified: true, emergency: true, openNow: true, description: "24/7 emergency and critical care, every night of the year.", gradient: "bg-pet-3" },
  { id: "8", name: "Lavender Cat Cottage", type: "Breeder", city: "Long Island", neighborhood: "Huntington", rating: 4.9, reviews: 74, verified: true, description: "Ragdoll and Maine Coon kittens raised in a quiet home.", gradient: "bg-pet-2" },
  { id: "9", name: "Tail Wag Pet Market", type: "Pet Shop", city: "Brooklyn", neighborhood: "Cobble Hill", rating: 4.7, reviews: 198, verified: false, openNow: true, description: "Neighborhood pet market with daily fresh-made meals.", gradient: "bg-pet-1" },
];

export const filterTypes: ListingType[] = ["Vet", "Breeder", "Shelter", "Groomer", "Pet Shop", "NGO"];
