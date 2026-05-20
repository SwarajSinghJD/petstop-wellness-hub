import { Routes, Route, Link } from "react-router-dom";
import { SiteNav } from "@/components/SiteNav";
import HomePage from "@/routes/index";
import ListingsPage from "@/routes/listings";
import DashboardPage from "@/routes/dashboard";
import AssistantPage from "@/routes/assistant";
import EmergencyPage from "@/routes/emergency";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
