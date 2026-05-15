import { createFileRoute } from "@tanstack/react-router";
import { Phone, AlertCircle } from "lucide-react";
import { SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/emergency")({
  head: () => ({ meta: [{ title: "Emergency — PetStop" }] }),
  component: () => (
    <>
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-xs uppercase tracking-wider text-destructive">
          <AlertCircle size={14} /> 24/7 Help
        </span>
        <h1 className="mt-6 font-serif text-5xl md:text-6xl">We're here, even at 2am.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Connect with a verified emergency vet near you in under a minute.
        </p>
        <a href="tel:+18005550199" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground premium-ease hover:opacity-[0.88]">
          <Phone size={16} /> Call Emergency Line
        </a>
      </section>
      <SiteFooter />
    </>
  ),
});
