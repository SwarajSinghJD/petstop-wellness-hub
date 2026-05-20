import { Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/SiteNav";
import { useDocTitle } from "@/lib/use-doc-title";

export default function AssistantPage() {
  useDocTitle("AI Assistant — PetStop");
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-wider text-primary">
          <Sparkles size={14} /> Coming soon
        </span>
        <h1 className="mt-6 font-serif text-5xl md:text-6xl">Your pet's AI companion is warming up.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          A gentle, knowledgeable assistant for every late-night question. Launching soon.
        </p>
      </section>
      <SiteFooter />
    </>
  );
}
