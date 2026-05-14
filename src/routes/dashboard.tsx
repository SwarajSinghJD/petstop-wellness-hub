import { createFileRoute } from "@tanstack/react-router";
import { Syringe, Stethoscope, Scale, Pill, Bell, Plus, Sparkles, ClipboardList, Edit3, CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "My Pet — PetStop" },
      { name: "description", content: "Your pet's beautifully organized health journal." },
    ],
  }),
  component: DashboardPage,
});

const overview = [
  { icon: Syringe, label: "Next Vaccination", value: "Mar 14", tone: "warning" as const },
  { icon: Stethoscope, label: "Last Vet Visit", value: "Jan 22", tone: "ok" as const },
  { icon: Scale, label: "Current Weight", value: "12.4 kg", tone: "ok" as const },
  { icon: Pill, label: "Active Medications", value: "2", tone: "warning" as const },
];

const reminders = [
  { title: "Rabies Vaccine Due", date: "Mar 14, 2026", overdue: false },
  { title: "Heartworm Pill", date: "Today", overdue: false },
  { title: "Annual Dental Checkup", date: "Feb 28, 2026 (Overdue)", overdue: true },
  { title: "Grooming — Marigold Studio", date: "Mar 02, 2026", overdue: false },
];

const records = [
  { date: "Jan 22, 2026", type: "Vet Visit", notes: "Routine checkup, all clear." },
  { date: "Dec 04, 2025", type: "Vaccination", notes: "DHPP booster administered." },
  { date: "Nov 18, 2025", type: "Medication", notes: "Started joint supplement." },
  { date: "Oct 02, 2025", type: "Grooming", notes: "Full coat trim and bath." },
];

const actions = [
  { icon: Bell, label: "Add Reminder" },
  { icon: ClipboardList, label: "Log Vet Visit" },
  { icon: Scale, label: "Update Weight" },
  { icon: Sparkles, label: "Ask AI Assistant" },
];

function DashboardPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-12 pb-20">
        {/* Greeting + pet card */}
        <p className="text-sm uppercase tracking-wider text-primary">Welcome back</p>
        <h1 className="mt-2 font-serif text-5xl md:text-6xl">Hello, Amelia.</h1>

        <div className="mt-10 rounded-3xl bg-card border border-border shadow-soft p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="h-32 w-32 md:h-36 md:w-36 rounded-full bg-pet-1 shadow-lift shrink-0 grid place-items-center font-serif text-5xl text-foreground/70">
            B
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-4xl">Biscuit</h2>
            <p className="mt-1 text-muted-foreground">Golden Retriever · Sweet, sleepy, slightly dramatic.</p>
            <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                { k: "Breed", v: "Golden Retriever" },
                { k: "Age", v: "3 yrs" },
                { k: "Weight", v: "12.4 kg" },
                { k: "Microchipped", v: "Yes" },
              ].map((c) => (
                <span key={c.k} className="px-3 py-1.5 rounded-full bg-secondary text-xs">
                  <span className="text-muted-foreground">{c.k} · </span>
                  <span className="font-medium text-foreground">{c.v}</span>
                </span>
              ))}
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-[1.5px] border-primary text-primary text-sm hover:bg-primary/10 transition-colors">
            <Edit3 size={14} /> Edit Profile
          </button>
        </div>

        {/* Health overview */}
        <h3 className="font-serif text-2xl mt-16 mb-6">Health overview</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {overview.map(({ icon: Icon, label, value, tone }) => (
            <div key={label} className="rounded-3xl bg-card border border-border/60 shadow-soft p-6 hover:shadow-lift transition-all duration-300">
              <span
                className={`grid place-items-center h-11 w-11 rounded-2xl ${
                  tone === "warning" ? "bg-warning/20 text-warning" : "bg-success/20 text-success"
                }`}
                style={{
                  backgroundColor: tone === "warning" ? "oklch(0.80 0.13 75 / 0.18)" : "oklch(0.70 0.10 150 / 0.18)",
                  color: tone === "warning" ? "oklch(0.45 0.13 65)" : "oklch(0.40 0.10 150)",
                }}
              >
                <Icon size={18} />
              </span>
              <div className="mt-5 font-serif text-3xl">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>

        {/* Two columns: reminders + records */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl">Upcoming reminders</h3>
              <button className="text-sm text-primary hover:opacity-80 inline-flex items-center gap-1">
                <Plus size={14} /> New
              </button>
            </div>
            <div className="space-y-3">
              {reminders.map((r) => (
                <div
                  key={r.title}
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-colors ${
                    r.overdue
                      ? "bg-destructive/5 border-destructive/20"
                      : "bg-card border-border/60 hover:border-border"
                  }`}
                >
                  <span className={`grid place-items-center h-10 w-10 rounded-2xl ${r.overdue ? "bg-destructive/15 text-destructive" : "bg-secondary text-primary"}`}>
                    {r.overdue ? <AlertTriangle size={18} /> : <Bell size={18} />}
                  </span>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{r.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.date}</div>
                  </div>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background text-xs hover:opacity-90 transition-opacity">
                    <CheckCircle2 size={14} /> Done
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl">Pet records</h3>
              <button className="text-sm text-primary hover:opacity-80">View all</button>
            </div>
            <div className="rounded-3xl bg-card border border-border/60 shadow-soft overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-muted-foreground">
                  <tr>
                    <th className="text-left font-medium px-5 py-3">Date</th>
                    <th className="text-left font-medium px-5 py-3">Type</th>
                    <th className="text-left font-medium px-5 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r) => (
                    <tr key={r.date} className="border-t border-border/60">
                      <td className="px-5 py-4 whitespace-nowrap text-muted-foreground">{r.date}</td>
                      <td className="px-5 py-4 font-medium">{r.type}</td>
                      <td className="px-5 py-4 text-muted-foreground">{r.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <h3 className="font-serif text-2xl mt-16 mb-6">Quick actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map(({ icon: Icon, label }) => (
            <button key={label} className="group rounded-3xl bg-card border border-border/60 shadow-soft p-6 text-left hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-mauve-gradient text-primary-foreground">
                <Icon size={20} />
              </span>
              <div className="mt-5 font-serif text-xl">{label}</div>
              <div className="text-xs text-muted-foreground mt-1">Tap to begin →</div>
            </button>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
